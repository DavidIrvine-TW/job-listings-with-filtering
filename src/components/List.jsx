import ListItem from "./ListItem";
import { useState } from "react";
import FilterDisplay from "./FilterDisplay";
import jobs from "../../public/assets/jobs.json";

function List() {
  const [filtered, setFiltered] = useState([]);
  
  const filterHandler = (content) => {
    if (!filtered.includes(content)) {
      setFiltered((prevFiltered) => [...prevFiltered, content]);
    }
  };
  const removeItemHandler = (removeContent) => {
    const updatedFiltered = filtered.filter((item) => item !== removeContent);
    setFiltered(updatedFiltered);
  };
  const clearAllHandler = () => {
    setFiltered([]);
  };

  return (
    <ul id="list-container" className="mt-[3.5rem] relative">
      {/* //filter list display */}
      <FilterDisplay
        filtered={filtered}
        removeItemHandler={removeItemHandler}
        clearAllHandler={clearAllHandler}
        filterHandler={filterHandler}
      />

      {filtered.length === 0
        ? jobs.map((job, index) => (
            <ListItem
              job={job}
              key={job.id}
              index={index}
              filterHandler={filterHandler}
            />
          ))
        : jobs
            .filter((job) => {
              const categories = [
                ...job.languages,
                ...job.tools,
                job.role,
                job.level,
              ];
              return categories.some((category) => filtered.includes(category));
            })
            .map((job) => (
              <ListItem job={job} key={job.id} filterHandler={filterHandler} />
            ))}
    </ul>
  );
}

export default List;
