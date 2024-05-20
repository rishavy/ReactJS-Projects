const Loader = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-2 justify-center" aria-label="Loading">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#DC2626]">
          If it takes some time, please refresh the page or try something else.
        </h1>
      </div>
    </div>
  );
};

export default Loader;
