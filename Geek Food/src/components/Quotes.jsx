function Quotes({ quotes, author }) {
    return (
      <div className="p-12">
        <div className=" border-solid border-2 text-[#000] p-8 rounded-lg shadow-xl">
          <p className="text-3xl font-bold text-center">{quotes}</p>
          <p className="text-center pt-4 pb-10">{author}</p>
        </div>
      </div>
    );
  }
  
  export default Quotes;