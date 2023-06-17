import React from "react";
import remove from "../../public/assets/icon-remove.svg";

function FilterDisplay({ filtered, removeItemHandler, clearAllHandler }) {
  return (
    <li
      id="list-item"
      className={`fade-in ${
        filtered.length > 0 ? "" : "hidden"
      } relative bg-white px-[3rem] py-[1.25rem] rounded-xl bottom-[75px]`}
    >
      <div className="flex justify-between gap-[0.5rem] items-center">
        <div className="gap-[1rem] flex flex-wrap">
          {/* filtered list display */}

          {filtered.map((item, index) => {
            return (
              <div className="flex rounded overflow-hidden fade-in" key={index}>
                <span
                  id="category"
                  className="h-[32px] bg-lgcyan-bg px-[0.5rem] py-[5px] flex items-center justify-center text-ddcyan cursor-pointer"
                >
                  {item}
                </span>
                <span
                  key={item}
                  onClick={() => removeItemHandler(item)}
                  className="bg-ddcyan hover:bg-vdcyan  w-[32px] h-[32px] flex items-center justify-center cursor-pointer"
                >
                  <img
                    className="w-[13px] h-[13px]"
                    src={remove}
                    alt="remove icon"
                  />
                </span>
              </div>
            );
          })}
        </div>

        <div>
          <span
            onClick={clearAllHandler}
            className="text-ddcyan hover:underline  cursor-pointer text-[1rem]"
          >
            Clear
          </span>
        </div>
      </div>

      {/* //listings */}
    </li>
  );
}

export default FilterDisplay;
