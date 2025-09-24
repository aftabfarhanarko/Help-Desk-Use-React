const CounterButton = ({togle,setTogle}) => {
  return (
    <div className=" max-w-[1340px] mx-auto mt-15 flex justify-end gap-2">
      <div className=" bg-purple-100 rounded-lg text-md font-medium">
        <button
          onClick={() => setTogle("All")}
          className={`rounded-l-lg togle-btn ${
            togle === "All" && "bg-purple-500 !text-white"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setTogle("Pending")}
          className={`togle-btn ${
            togle === "Pending" && "bg-purple-500 !text-white"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setTogle("Submitted")}
          className={`togle-btn ${
            togle === "Submitted" && "bg-purple-500 !text-white"
          }`}
        >
          Submitted
        </button>
        <button
          onClick={() => setTogle("Reviewed")}
          className={`rounded-r-lg togle-btn ${
            togle === "Reviewed" && "bg-purple-500 !text-white"
          }`}
        >
          Reviewed
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
