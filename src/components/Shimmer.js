const Shimmer = () => { 
    return (
      <div className="restaurant-list" data-testid="shimmer flex flex-wrap">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card w-[200px] p-2 m-2 shadow-lg bg-pink-50 "></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;