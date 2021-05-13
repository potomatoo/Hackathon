import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Card from "../common/Card";
import CardDetail from "../common/CardDetail";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "transparent",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

export default function TransitionsModal({ isLoading, dog }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            height: "100px",
          }}
        ></div>
      ) : (
        <div onClick={handleOpen}>
          <Card />
        </div>
      )}

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
        <Fade in={open}>
          <div className={classes.paper}>
            <CardDetail
              distance={Math.random().toFixed(2)}
              age={`${dog.age}살`}
              weight={dog.weight + "kg"}
              gender={dog.sex === "M" ? "수컷" : "암컷"}
              period={`${dog.intake_days}일 째`}
              feature={dog.special_mark}
              shelter={dog.care_name}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
