const Loading = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-100"></div>
      <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce delay-200"></div>
    </div>
  );
};

export default Loading;
