import axios from "axios";
import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import convertjson from "../Trending/data/jsonconvert.json";
const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=2202298c737609e42a973f3742724ff2&page=${page}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
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
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
