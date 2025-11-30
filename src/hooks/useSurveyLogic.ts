import { useState, useCallback } from "react";
import type { Answers, FormattedAnswer, Question } from "@/types/types";
import { supabase } from "@/services/supabaseClient";

interface UseSurveyLogicProps {
  questions: Question[];
  name: string;
}

export const useSurveyLogic = ({ questions, name }: UseSurveyLogicProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [answers, setAnswers] = useState<Answers>({});

  // Handler: تغییر پاسخ
  const handleAnswerChange = useCallback(
    (value: string | number, questionIndex: number) => {
      setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
      setError("");
    },
    []
  );

  //  Handler: بعدی
  const handleNext = useCallback(() => {
    const currentAnswer = answers[currentQuestion];
    if (currentAnswer === undefined || currentAnswer === "") {
      setError("لطفاً به این سوال پاسخ دهید");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setError("");
    }
  }, [currentQuestion, answers, questions.length]);

  // Handler: قبلی
  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setError("");
    }
  }, [currentQuestion]);

  // Handler: submit
  const handleSubmit = useCallback(async () => {
    // Validate all answers
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === undefined || answers[i] === "") {
        setCurrentQuestion(i);
        setError("همه سوالات باید پاسخ داده شوند");
        return false; // برای چک موفقیت
      }
    }

    setLoading(true);
    setError("");

    try {
      const formattedAnswers: FormattedAnswer[] = questions.map((q, idx) => ({
        question: q.question,
        answer: answers[idx] as string | number,
      }));

      const payload = {
        name,
        answers: formattedAnswers,
        submitted_at: new Date().toISOString(),
      };

      console.log("Payload برای insert:", payload);

      const { error: insertError } = await supabase
        .from("questionnaire_responses")
        .insert([payload])
        .select();

      if (insertError) {
        console.error("خطای Supabase insert:", insertError);
        throw new Error(insertError.message);
      }

      console.log("پاسخ‌ها ارسال شد");
      return true; // موفقیت
    } catch (err: unknown) {
      let errorMsg = "خطای ناشناخته";
      if (err instanceof Error) {
        errorMsg = err.message;
      }
      setError(`خطا در ارسال پاسخ‌ها: ${errorMsg}`);
      console.error("جزئیات خطا:", err);
      return false;
    } finally {
      setLoading(false);
    }
  }, [questions, answers, name]);

  // Getter: progress
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Getter: current answer
  const currentAnswer = answers[currentQuestion];

  return {
    currentQuestion,
    loading,
    error,
    answers,
    progress,
    currentAnswer,
    handleAnswerChange,
    handleNext,
    handlePrevious,
    handleSubmit,
  };
};
