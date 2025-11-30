import type { Question } from "@/types/types";

export const questions: Question[] = [
  {
    id: 1,
    question: "What is your current job title or role?",
    type: "text",
  },
  {
    id: 2,
    question: "How many years of experience do you have in your field?",
    type: "number",
  },
  {
    id: 3,
    question: "What sector or industry do you work in?",
    type: "select",
    options: [
      "Technology",
      "Healthcare",
      "Education",
      "Finance",
      "Retail",
      "Manufacturing",
      "Other",
    ],
  },
  {
    id: 4,
    question: "What skills do you think are most important for your job?",
    type: "textarea",
  },
  {
    id: 5,
    question: "What challenges do you face in your current role?",
    type: "textarea",
  },
  {
    id: 6,
    question: "What training or development would benefit you most?",
    type: "textarea",
  },
  {
    id: 7,
    question: "How satisfied are you with your current position?",
    type: "radio",
    options: [
      "Very Dissatisfied",
      "Dissatisfied",
      "Neutral",
      "Satisfied",
      "Very Satisfied",
    ],
  },
  {
    id: 8,
    question:
      "Do you feel there are growth opportunities in your organization?",
    type: "radio",
    options: ["Yes", "No", "Somewhat"],
  },
  {
    id: 9,
    question: "What would improve your work environment the most?",
    type: "textarea",
  },
  {
    id: 10,
    question: "Rate the work-life balance in your current job",
    type: "radio",
    options: ["Poor", "Fair", "Good", "Very Good", "Excellent"],
  },
  {
    id: 11,
    question: "What is your education level?",
    type: "select",
    options: [
      "High School",
      "Bachelor's Degree",
      "Master's Degree",
      "PhD",
      "Technical Certification",
      "Other",
    ],
  },
  {
    id: 12,
    question: "How do you see your career evolving in the next 5 years?",
    type: "textarea",
  },
  {
    id: 13,
    question: "What emerging skills or technologies interest you?",
    type: "textarea",
  },
  {
    id: 14,
    question: "How important is remote work flexibility to you?",
    type: "radio",
    options: [
      "Not Important",
      "Somewhat Important",
      "Important",
      "Very Important",
    ],
  },
  {
    id: 15,
    question: "What advice would you give to someone entering your field?",
    type: "textarea",
  },
];
