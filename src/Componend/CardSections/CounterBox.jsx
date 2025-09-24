import React from "react";

const CounterBox = ({data}) => {

  const pandingdata = data.filter(myData => myData.status == "Pending")
  const reviewData = data.filter(review => review.status == "Reviewed")
  const submitted = data.filter(pandin => pandin.status == "Submitted");

  return (
    <div className="max-w-[1350px] mx-auto mt-10 flex  gap-5 px-3">
      <div className="h-[100px] md:h-[250px] bg-red-600 w-full rounded-md shadow-lg flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-[19px] font-medium md:text-4xl md:font-bold">
            Pending
          </h1>
          <p className=" text-[17px] font-medium md:text-2xl ">{pandingdata.length}</p>
        </div>
      </div>
      <div className="h-[100px] md:h-[250px]  bg-green-600 w-full rounded-md shadow-lg flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-[19px] font-medium md:text-4xl md:font-bold ">
            Submitted
          </h1>
          <p className="text-[17px] font-medium md:text-2xl">{submitted.length} </p>
        </div>
      </div>
      <div className="h-[100px] md:h-[250px]   bg-purple-600 w-full rounded-md shadow-lg flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-[19px] font-medium md:text-4xl md:font-bold">
            Reviewed
          </h1>
          <p className="text-[17px] font-medium md:text-2xl">{reviewData.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterBox;
