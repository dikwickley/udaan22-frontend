import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import convertjson from  "../data/jsonconvert.json";
const Trending = () => {
  return (
    <div>
      <span className="pageTitle">Top Events</span>
      <div className="trending">
        {convertjson &&
          convertjson.map((c) => (
            <SingleContent
              data={c}
              key={c.id}
              id={c.id}
              poster={c.eventImg}
              title={c.eventName || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.type}
              vote_average={c.vote_average}
            />
          ))}
           
      </div>
    </div>
  );
};

export default Trending;
