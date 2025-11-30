import type { InputBoxProps } from "@/types/types";

const InputBox = ({
  userId,
  title,
  className,
  description,
  type,
  value,
  onChange,
  onKeyPress,
}: InputBoxProps) => {
  return (
    <div className={`${className}`}>
      <label
        htmlFor={userId}
        className="block mb-6 text-2xl font-bold text-gray-700"
      >
        {title}
      </label>
      <input
        id={userId}
        type={type}
        placeholder={description}
        value={value}
        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default InputBox;
