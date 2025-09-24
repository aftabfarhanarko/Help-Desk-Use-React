const CounterButton = ({ togle, setTogle }) => {
  const btn = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <div className=" max-w-[1340px] mx-auto mt-15  px-7 md:flex justify-end gap-2">
      <div className=" bg-purple-100 rounded-lg text-md font-medium">
        {btn.map((btns, ind) => {
          return (
            <button
              key={ind}
              onClick={() => setTogle(btns)}
              className={` ${ind == 0 && "rounded-l-lg"} ${
                ind == 3 && "rounded-r-lg"
              } togle-btn ${togle === btns && "bg-purple-500 !text-white"}`}
            >
              {btns}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CounterButton;
