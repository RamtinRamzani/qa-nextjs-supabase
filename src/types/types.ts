type Stage = "name" | "questions" | "success";
type QuestionType = "text" | "number" | "textarea" | "select" | "radio";

interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[];
}

interface FormattedAnswer {
  question: string;
  answer: string | number;
}

interface SubmitPayload {
  name: string;
  answers: FormattedAnswer[];
  submittedAt: string;
}

interface Answers {
  [key: number]: string | number;
}

type InputBoxProps = {
  userId?: string;
  title?: string;
  className?: string;
  description: string;
  type: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};

interface SupabaseQuestion {
  id: number;
  question: string;
  type: string;
  options?: string; // JSON string in DB
  created_at: string;
}

export type {
  Stage,
  QuestionType,
  Question,
  FormattedAnswer,
  SubmitPayload,
  Answers,
  InputBoxProps,
  SupabaseQuestion,
};
