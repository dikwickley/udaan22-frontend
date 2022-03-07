import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";
import convertjson from  "../data/group.json";
import '../container.css'


const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  // new
  const [ filteredstate, setFiltredstate ] = useState(false);
  const [filterParams, setFilterParams] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  // new
  const [ filterData, setFilterData ] = useState([]);
  useEffect(() => {
    console.log("fetch called...")
    window.scroll(0, 0);
  },[]);
  console.log(convertjson)



  return (
    <div>
      <div className="pageTitle">
          <span style={{color:"#8B0000"}} >GROUP </span>
          <span style={{color:"rgb(63, 48, 113)"}} > EVENTS</span>
      </div>

     
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
        // newly below 4 lines
        content={convertjson}
        setFiltredstate={setFiltredstate}
        setFiltredData={setFilterData}
        filterData = {filterData}
      />
      <div className="Container">
        {convertjson && !filteredstate &&
          convertjson.map((c) => {
         
            return <SingleContent
                data={c}
                key={c.id}
                id={c.id}
                poster={`./images/${c.department}/${c.eventName}.jpg`}
                title={c.eventName || c.name}
                date={c.first_air_date || c.release_date}
                media_type={c.type}
                department={c.department}
                vote_average={c.vote_average}
            />
        })}
        {filteredstate &&
          filterData.map((c) => (
            <SingleContent
                  data={c}
                  key={c.id}
                  id={c.id}
                  poster={`./images/${c.department}/${c.eventName}.jpg`}
                  title={c.eventName || c.name}
                  date={c.first_air_date || c.release_date}
                  media_type={c.type}
                  department={c.department}
                  vote_average={c.vote_average}
            />
          ))}
        {filteredstate && filterData.length==0 && (<div>No events</div>)}
      </div>
    </div>
  );
};

export default Movies;
