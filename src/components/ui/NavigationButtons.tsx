import { Button } from "./button";

const NavigationButtons = ({
  currentQuestion,
  questionsLength,
  onPrevious,
  onNext,
  onSubmit,
  loading,
}: {
  currentQuestion: number;
  questionsLength: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  loading: boolean;
}) => (
  <div className="flex gap-4">
    <Button
      onClick={onPrevious}
      disabled={currentQuestion === 0}
      className="flex-1 px-4 py-3 font-semibold text-gray-300 transition border border-gray-300 rounded-lg hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed textbla"
    >
      قبلی
    </Button>
    {currentQuestion < questionsLength - 1 ? (
      <Button
        onClick={onNext}
        className="flex-1 px-4 py-3 font-semibold text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
      >
        بعدی
      </Button>
    ) : (
      <Button
        onClick={onSubmit}
        disabled={loading}
        className="flex-1 px-4 py-3 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "در حال ارسال..." : "ارسال"}
      </Button>
    )}
  </div>
);

export default NavigationButtons;
