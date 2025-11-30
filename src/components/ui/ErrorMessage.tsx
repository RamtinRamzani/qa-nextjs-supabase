import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex items-center gap-2 p-3 mb-6 text-sm text-red-600 rounded-lg bg-red-50">
    <AlertCircle size={18} />
    {message}
  </div>
);

export default ErrorMessage;
