import { Suspense } from "react";
import SurveyPageContent from "./_components/SurveyPageContent";

export default function SurveyPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen p-4">
          در حال بارگذاری...
        </div>
      }
    >
      <SurveyPageContent />
    </Suspense>
  );
}
