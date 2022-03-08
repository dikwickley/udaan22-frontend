import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  content,
  setFiltredstate,
  setFiltredData,
  filterData,
}) => {
  const handleAdd = (genre) => {
    console.log(genre);
    setSelectedGenres(() => {
      return [...selectedGenres, genre];
    });
    setGenres(genres.filter((g) => g.id !== genre.id));
    setFiltredstate(true);
    var filtereddata = filterData;
    content.map((c) => {
      let dep = c.department.split("-");
      dep.forEach((element) => {
        if (element === genre.name && !filterData.includes(c))
          filtereddata.push(c);
      });
    });
    filtereddata.sort();
    setFiltredData(filtereddata);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    // this is added new
    setFiltredstate(true);
    const filtereddata = filterData.filter((c) => {
      let dep = c.department.split("-");
      let flag = false;
      console.log("newitem");
      dep.forEach((item) => {
        if (item === genre.name) {
        } else if (selectedGenres.find((g) => g.name === item) !== undefined) {
          console.log(item);
          flag = true;
        }
      });
      return flag;
    });
    filtereddata.sort();
    setFiltredData(filtereddata);
    if (selectedGenres.length === 1) {
      setFiltredstate(false);
      setFiltredData([]);
    }
  };

  const fetchGenres = async () => {
    setGenres([
      {
        id: 2,
        name: "non tech",
        title: "Non Tech",
      },
      {
        id: 3,
        name: "computer IT",
        title: "CS/IT",
      },

      {
        id: 5,
        name: "Mech Production",
        title: "Mech & Prod",
      },
      {
        id: 7,
        name: "cultural",
        title: "Cultural",
      },

      {
        id: 8,
        name: "civil",
        title: "Civil",
      },
      {
        id: 9,
        name: "EL EC",
        title: "EL & EC",
      },
      {
        id: 10,
        name: "electrical",
        title: "Electrical",
      },
    ]);
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  return (

    <center>


    <div
      style={{
        padding: "6px 0",
        color: "black",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >

      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 4, width: "100px" }}
          label={genre.title}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 4, width: "100px" }}
          label={genre.title}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div></center>
  );
};

export default Genres;
