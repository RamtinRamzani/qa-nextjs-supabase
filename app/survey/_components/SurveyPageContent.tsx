"use client";
import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import NavigationButtons from "@/components/ui/NavigationButtons";
import ProgressBar from "@/components/ui/ProgressBar";
import { useQuestions } from "@/hooks/useQuestion";
import { useSurveyLogic } from "@/hooks/useSurveyLogic"; // import جدید
import type { Stage } from "@/types/types";
import { CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import QuestionInput from "./QuestionInput";

// Main Component
const SurveyPageContent = () => {
  const searchParams = useSearchParams();
  const nameFromUrl = searchParams.get("name") || "";
  const [stage, setStage] = useState<Stage>("questions"); // فقط stage باقی موند

  const {
    questions: questionsList,
    loading: questionsLoading,
    error: fetchError,
  } = useQuestions();

  const {
    currentQuestion,
    loading: submitLoading,
    error: formError,
    // answers,
    progress,
    currentAnswer,
    handleAnswerChange,
    handleNext,
    handlePrevious,
    handleSubmit,
  } = useSurveyLogic({ questions: questionsList, name: nameFromUrl });

  useEffect(() => {
    if (!nameFromUrl) {
      window.location.href = "/";
    }
  }, [nameFromUrl]);

  if (questionsLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-lg text-gray-600">در حال بارگذاری سوالات...</div>
      </div>
    );
  }

  if (fetchError || questionsList.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-lg text-gray-600">
          {fetchError || "هیچ سوالی موجود نیست."}
        </div>
      </div>
    );
  }

  const question = questionsList[currentQuestion];
  console.log("سوال فعلی (index", currentQuestion, "):", question);

  // Handler برای submit – از hook
  const onSubmit = async () => {
    const success = await handleSubmit();
    if (success) {
      setStage("success");
    }
  };

  if (stage === "success") {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <div className="p-8 text-center bg-white rounded-lg shadow-lg">
            <CheckCircle2 size={64} className="mx-auto mb-4 text-green-600" />
            <h1 className="mb-2 text-3xl font-bold text-gray-800">ممنون!</h1>
            <p className="mb-4 text-gray-600">
              ممنون {nameFromUrl}، که پرسشنامه را تکمیل کردید.
            </p>
            <p className="mb-8 text-gray-600">
              پاسخ‌های شما ثبت شد و به بهبود جامعه و مشاغل کمک می‌کند.
            </p>
            <Button
              onClick={() => {
                window.location.href = "/";
              }}
              className="px-6 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              پاسخ جدید
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <ProgressBar
            current={currentQuestion}
            total={questionsList.length}
            progress={progress}
          />
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            {question.question || "سوال لود نشد"}
          </h2>
          <div className="mb-6">
            <QuestionInput
              question={question}
              answer={currentAnswer}
              onChange={(value) => handleAnswerChange(value, currentQuestion)} // پاس index
            />
          </div>
          {formError && <ErrorMessage message={formError} />}
          <NavigationButtons
            currentQuestion={currentQuestion}
            questionsLength={questionsList.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={onSubmit}
            loading={submitLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default SurveyPageContent;
