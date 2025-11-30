const ProgressBar = ({
  current,
  total,
  progress,
}: {
  current: number;
  total: number;
  progress: number;
}) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium text-gray-600">
        سوال {current + 1} از {total}
      </span>
      <span className="text-sm font-medium text-indigo-600">
        {Math.round(progress)}%
      </span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full">
      <div
        className="h-2 transition-all duration-300 bg-indigo-600 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;
