import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, content, setFiltredstate,setFiltredData, filterData}) => {
  const handleAdd = (genre) => {
    console.log(genre)
    setSelectedGenres(()=>{return [...selectedGenres, genre]});
    setGenres(genres.filter((g) => g.id !== genre.id));
    setFiltredstate(true);
    var filtereddata = filterData;
    content.map((c) => {
      let dep=c.department.split('-');
      dep.forEach(element => {
        if(element===genre.name && !filterData.includes(c))filtereddata.push(c);
      })
      })
    setFiltredData(filtereddata);
  };

  const handleRemove = (genre) => {
      setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
      setGenres([...genres, genre]);    
    // this is added new
      setFiltredstate(true);
      setFiltredData(filterData.filter((c) => { 
        let dep=c.department.split('-');
        let flag=false;
        console.log("newitem")
        dep.forEach(item=>{
          if(item===genre.name){

          }
          else if(selectedGenres.find(g=>g.name === item)!==undefined){
            console.log(item);
            flag=true;
          }
        })
        return flag;
      })
      );
      if(selectedGenres.length === 1){
        setFiltredstate(false);
        setFiltredData([]);
      }
  };

  const fetchGenres = async () => {
    setGenres([{
      id : 2,
      name : "Non tech"
    },{
      id : 3,
      name : "Computer"
    },{
      id : 4,
      name : "It"
    },{
      id : 5,
      name : "Mech"
    },{
      id : 7,
      name : "Cultural"
    },{
      id : 6,
      name : "Production"
    },{
      id : 8,
      name : "Civil"
    },{
      id : 9,
      name : "EL"
    },{
      id : 10,
      name : "EC"
    },
  
  
  ]);
  };
  useEffect(() => {
    fetchGenres();
  },[]);

  return (
    <div style={{ padding: "6px 0",color:"black" }}>
      Filter By : 
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
