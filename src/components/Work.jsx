import React from "react";

const Work = () => {
  return (
    <div name="Skills" className="w-full h-screen bg-[#d3ece2]">

      {/* header container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col my-[20px] ">
        <p className="font-Kaushanscript text-[#7b857f]">{"<h1>"}</p>
        <p className="text-[#358f60] italic font-bold md:text-6xl text-4xl">
          My Work
        </p>
        <p className="font-Kaushanscript text-[#7b857f]">{"<h1/>"}</p>
      </div>

      {/* professional work */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 sm:justify-items-center text-center">
        <div>
          gigup
        </div>
        <div>
          fingy
        </div>
        <div>
          KYKS
        </div>
        <div>
          Stela
        </div>
        <div>
          Sncia
        </div>
        <div>
          Euclid
        </div>
      </div>

      <div>Personal Projects</div>

      {/* personal work */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 sm:justify-items-center text-center">
      <div>
          Scratch
        </div>
        <div>
          PickUp
        </div>
        <div>
          ToDo
        </div>
      </div>

    </div>
  );
};

export default Work;
