import React from "react";

import New from "./New";
import Featured from "./Featured";

function ListItem({ filterHandler, job, index, key  }) {
  return (

      
        <li
          id="list-item"
          className={`bg-white px-[1.5rem] py-[2rem] mb-[2.5rem] rounded-xl relative border-l-8  ${
            job.featured ? " border-ddcyan" : "border-transparent"
          }`}
          key={job.id}
        >
          <div className="desktop:flex desktop:justify-between desktop:items-center">
            <div className="flex">
              <img
                src={job.logo}
                className="w-[48px] h-[48px] absolute desktop:static desktop:w-[88px] desktop:h-[88px] desktop:mr-[1.5rem] desktop:inline-block top-[-24px]"
              />

              <div className="mb-[1rem]">
                <div className="flex gap-[2rem] mb-[0.5rem]">
                  <span className="text-ddcyan text-[0.8125rem] desktop:text-[1.125rem]">
                    {job.company}
                  </span>
                  <div className="flex gap-[0.5rem]">
                    {job.new === true && <New />}
                    {job.featured === true && <Featured />}
                  </div>
                </div>

                <div>
                  <h2 className="hover:text-ddcyan cursor-pointer text-[0.9375rem] font-bold leading-[24px] desktop:text-[1.375rem] desktop:mb-[.4rem]">
                    {job.position}
                  </h2>
                </div>

                <div className="flex gap-[0.5rem] text-dgcyan font-reg text-[1rem] desktop:text-[1.375rem] tracking-[0.14px] desktop:gap-[.75rem]">
                  {job.postedAt}
                  <span> | </span>
                  {job.contract}
                  <span> | </span>
                  {job.location}
                </div>
              </div>
            </div>

            <hr className="mb-[1rem] desktop:hidden" />

            {/* //categories */}
            <div className="flex gap-[1rem] flex-wrap">
              {job.languages.map((language) => (
                <span
                  onClick={() => filterHandler(language)}
                  id="category"
                  className="hover:text-white hover:bg-ddcyan bg-lgcyan-bg px-[0.5rem] py-[5px] flex items-center justify-center rounded text-ddcyan cursor-pointer"
                  key={language}
                >
                  {language}
                </span>
              ))}
              {job.tools.map((tool) => (
                <span
                  onClick={() => filterHandler(tool)}
                  id="category"
                  className="hover:text-white hover:bg-ddcyan bg-lgcyan-bg px-[0.5rem] py-[5px] flex items-center justify-center rounded text-ddcyan cursor-pointer"
                  key={tool}
                >
                  {tool}
                </span>
              ))}
              <span
                onClick={() => filterHandler(job.role)}
                id="category"
                className=" hover:text-white hover:bg-ddcyan bg-lgcyan-bg px-[0.5rem] py-[5px] flex items-center justify-center rounded text-ddcyan cursor-pointer"
                key={job.role}
              >
                {job.role}
              </span>
              <span
                onClick={() => filterHandler(job.level)}
                id="category"
                className=" hover:text-white hover:bg-ddcyan bg-lgcyan-bg px-[0.5rem] py-[5px] flex items-center justify-center rounded text-ddcyan cursor-pointer"
                key={job.level}
              >
                {job.level}
              </span>
            </div>
          </div>
        </li>
    
   
  );
}

export default ListItem;
