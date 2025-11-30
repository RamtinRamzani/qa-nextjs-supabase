// File: src/hooks/UseQuestion.tsx (or app/hooks/UseQuestion.tsx depending on your structure)
import { useEffect, useState } from "react";
import { supabase } from "@/services/supabaseClient";
import type { Question, SupabaseQuestion } from "@/types/types";

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("شروع لود سوالات از Supabase...");
        const { data: tasks, error: fetchError } = await supabase
          .from("questions")
          .select("*")
          .order("id", { ascending: true });

        console.log("پاسخ Supabase:", tasks);

        if (fetchError) {
          const msg = `خطا در بارگذاری سوالات: ${fetchError.message}`;
          console.error(msg);
          setError(msg);
          setLoading(false);
          return;
        }

        if (!tasks || tasks.length === 0) {
          const msg = "هیچ سوالی در دیتابیس موجود نیست.";
          console.warn(msg);
          setError(msg);
          setLoading(false);
          return;
        }

        // Parse options safely
        const formatted: Question[] = tasks.map((t: SupabaseQuestion) => {
          let opts: string[] | undefined;
          if (t.options && typeof t.options === "string" && t.options.trim()) {
            try {
              opts = JSON.parse(t.options);
              if (
                !Array.isArray(opts) ||
                !opts.every((item: unknown) => typeof item === "string")
              ) {
                console.warn(
                  `options نامعتبر برای سوال ${t.id} – نادیده گرفته شد`
                );
                opts = undefined;
              } else {
                console.log(`options برای سوال ${t.id} پارس شد:`, opts);
              }
            } catch (parseErr) {
              console.error(
                `خطا در parse options برای سوال ${t.id}:`,
                parseErr,
                "– مقدار خام:",
                t.options
              );
              opts = undefined;
            }
          } else if (t.options !== null && t.options !== undefined) {
            console.warn(
              `options نامناسب برای سوال ${t.id}:`,
              t.options,
              "– نادیده گرفته شد"
            );
          }

          const questionText = t.question?.trim() || "";
          if (!questionText) {
            console.error(
              `سوال خالی برای id ${t.id} – مقدار خام: "${t.question}"`
            );
          }

          return {
            id: t.id,
            question: questionText || `سوال ${t.id} (متن موجود نیست)`,
            type: t.type as Question["type"], // Adjust to QuestionType if imported
            options: opts,
          };
        });

        console.log("سوالات فرمت‌شده:", formatted);
        setQuestions(formatted);
      } catch (err) {
        const msg = "خطای غیرمنتظره در لود سوالات.";
        console.error("خطای کلی در fetch:", err);
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { questions, loading, error };
};
