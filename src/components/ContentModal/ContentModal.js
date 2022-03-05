import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import "./ContentModal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#0D0D0D",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({ children, media_type, id, data }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
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
        <div className="event">
          <div className="event-img">
            <img
              src={data.eventImg}
              style={{width:"300px",height:"200px"}}
            />
          </div>
          <div className="event-description">
            <ul class="list-group bg-dark-c scrollar ">
              <li class="list-group-item  bg-dark-c text-white m-1">Event : {data.eventName}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">Description : {data.description}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">Tagline : {data.tagline}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">No. of Rounds: {data.noOfRounds}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">Type: {data.type}</li>

              <li class="list-group-item  bg-dark-c text-white m-1">No. of Participants : {data.noOfParticipants}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">Round 1 : {data.rd1}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">Round 2 : {data.rd2}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">Round 3: {data.rd3}</li>
              <li class="list-group-item  bg-dark-c text-white m-1">Rate: {data.rate} Rupees</li>
            </ul>
          </div>
          
        </div>
        {/* <div class="modal-content">
          <div class="modal-img">
            <img
              src={data.eventImg}
              style={{ maxHeight: "60%", maxWidth: "60%" }}
            />
          </div>
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
            <li>co1: {data.co1}</li>
            <li>co2: {data.co2}</li>
          </ul> 
        </div> */}
      </Modal>
    </>
  );
}
