import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import "./ContentModal.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "../Carousel/Carousel";
import jsonconvert from "../data/jsonconvert.json";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({ children, media_type, id, data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=2202298c737609e42a973f3742724ff2&language=en-US`
    );
    // fetch(jsonconvert).then(Response=>Response.json()).then((data)=>{
    //   setContent(data);
    // })
    setContent(data);
    console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=2202298c737609e42a973f3742724ff2&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className="modal-content">
          <ul>
            
            <li>eventName: {data.eventName}</li>
            <li>description: {data.description}</li>
            <li>tagline: {data.tagline}</li>
            <li>noOfRounds: {data.noOfRounds}</li>
            <li>noOfParticipants: {data.noOfParticipants}</li>
            <li>type: {data.type}</li>
            <li>r1: {data.r1}</li>
            <li>r2: {data.r2}</li>
            <li>r3: {data.r3}</li>
            <li>rate: {data.rate}</li>
            <li>eventImg: <img src={data.eventImg} /></li>
            <li>co1: {data.co1}</li>
            <li>co2: {data.co2}</li>
          </ul>
        </div>
      </Modal>
    </>
  );
}
