import React from "react";
import { missionData } from "../Utils/data";

const Mission = () => {
  return (
    <section className="w-full h-auto bg-white mt-24 px-4 py-8">
      <div className="w-full flex flex-wrap justify-center gap-6">
        {missionData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center w-full sm:w-[250px] md:w-[280px] lg:w-[300px] p-4 gap-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-md shadow"
            />
            <h3 className="text-sm text-green-800 font-semibold text-center">
              {item.title}
            </h3>
            <p className="text-xs text-center text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
