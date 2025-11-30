"use client";

import { Button } from "@/components/ui/button";
import InputBox from "@/components/ui/InputBox";
import { useState } from "react";

const QuestionnaireApp: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError("لطفاً نام و نام خانوادگی را وارد کنید");
      return;
    }
    setError("");
    const name = `${firstName.trim()} ${lastName.trim()}`;
    // لینک با search params
    window.location.href = `/survey?name=${encodeURIComponent(name)}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-2 text-4xl font-bold text-gray-800">خوش آمدید</h1>
          <p className="mb-8 text-gray-600">
            با به اشتراک گذاشتن نظر خود به ما در بهبود جامعه و مشاغل کمک کنید
          </p>
          <p className="mb-4 text-gray-800">لطفاً مشخصات خود را وارد کنید</p>
          {error && (
            <div className="p-3 mb-4 text-red-600 rounded-lg bg-red-50">
              {error}
            </div>
          )}
          <div className="flex justify-between gap-4 mb-6 max-sm:flex-col">
            <InputBox
              description="لطفاً نام خود را وارد کنید"
              title="نام"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputBox
              description="لطفاً نام خانوادگی خود را وارد کنید"
              title="نام خانوادگی"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full py-3 font-semibold text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            ادامه به سوالات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireApp;
