import InputBox from "@/components/ui/InputBox";
import type { Question } from "@/types/types";

const INPUT_CLASSES =
  "w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent";
const TEXTAREA_CLASSES = `${INPUT_CLASSES} resize-none text-black`;

const QuestionInput = ({
  question,
  answer,
  onChange,
}: {
  question: Question;
  answer: string | number | undefined;
  onChange: (value: string | number) => void;
}) => {
  const commonProps = {
    value: answer || "",
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => onChange(e.target.value),
  };

  if (question.type === "text") {
    return (
      <InputBox
        type="text"
        description="پاسخ خود را وارد کنید"
        {...commonProps}
      />
    );
  }

  if (question.type === "number") {
    return (
      <InputBox type="number" description="عدد وارد کنید" {...commonProps} />
    );
  }

  if (question.type === "textarea") {
    return (
      <textarea
        {...commonProps}
        placeholder="پاسخ خود را بنویسید"
        rows={4}
        className={TEXTAREA_CLASSES}
      />
    );
  }

  if (question.type === "select") {
    return (
      <select {...commonProps} className={INPUT_CLASSES}>
        <option value="">گزینه‌ای انتخاب کنید</option>
        {question.options && question.options.length > 0 ? (
          question.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))
        ) : (
          <option disabled>هیچ گزینه‌ای موجود نیست</option>
        )}
      </select>
    );
  }

  if (question.type === "radio") {
    return (
      <div className="space-y-3">
        {question.options && question.options.length > 0 ? (
          question.options.map((opt) => (
            <label key={opt} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={`question-${question.id}`}
                value={opt}
                checked={answer === opt}
                onChange={(e) => onChange(e.target.value)}
                className="w-4 h-4 text-indigo-600 cursor-pointer"
              />
              <span className="ml-3 text-gray-700">{opt}</span>
            </label>
          ))
        ) : (
          <p className="text-red-500">هیچ گزینه‌ای برای radio موجود نیست</p>
        )}
      </div>
    );
  }

  return <p className="text-red-500">نوع سوال نامعتبر: {question.type}</p>;
};

export default QuestionInput;
