const Display = ({ person, data, setData }) => {
  const ubdeatStatcs = () => {
    const currentStutacs = data.find(
      (element) => element.ticketId == person.ticketId
    );

    if (currentStutacs.status == "Pending") {
      currentStutacs.status = "Submitted";
    } else if (currentStutacs.status == "Submitted") {
      currentStutacs.status = "Reviewed";
    }
    const filterData = data.filter((elem) => elem.ticketId !== person.ticketId);

    setData([currentStutacs, ...filterData]);
  };

  return (
    <div
      onClick={() => ubdeatStatcs()}
      className="bg-gray-200 rounded-xl shadow-md p-4 flex flex-col h-[200px] w-full cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          className="h-[70px] w-[70px] rounded-full object-cover"
          src={person.userImg}
          alt={person.requestedBy}
        />
        <p className="text-lg font-semibold">{person.requestedBy}</p>
      </div>

      <div className="flex justify-between items-center mb-3">
        <p className="font-bold text-xl">{person.subject}</p>
        <div className="flex gap-2">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-lg shadow 
            ${
              person.priority == "High"
                ? "bg-rose-100 text-red-500"
                : person.priority == "Medium"
                ? "bg-purple-50 text-yellow-500"
                : "bg-pink-100 text-pink-500"
            }`}
          >
            {person.priority}
          </span>
          <span
            className={`text-sm font-medium px-3 py-1 rounded-lg shadow
            ${
              person.status == "Submitted"
                ? "bg-green-50 text-green-600"
                : person.status == "Pending"
                ? "bg-red-100 text-red-600"
                : " bg-[#eeeefc] text-purple-500"
            }
            `}
          >
            {person.status}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm overflow-hidden">
        {person.description}
      </p>
    </div>
  );
};

export default Display;
