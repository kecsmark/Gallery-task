import Modal from "react-bootstrap/Modal";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addFavourite,selectFavourites,deleteFavourite} from "../store/favSlice";

export default function Popup(props) {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);

  const handleClick = () => {
    dispatch(addFavourite(props.cardData));
  };

  const handleDeleteClick = () => {
    dispatch(deleteFavourite(props.imgTitle));
  };

  const handleClose = () => props.setShow(false);

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <button
          onClick={() => {
            if (favourites.includes(props.cardData)) {
              handleDeleteClick();
            } else {
              handleClick();
            }
          }}
          style={{
            border: "none",
            backgroundColor: "white",
            textDecoration: "none",
          }}
        >
          {favourites.includes(props.cardData) ? <BsHeartFill /> : <BsHeart />}
        </button>
      </Modal.Header>
      <Modal.Body closeButton>
        <img
          src={props.picture}
          alt=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "auto",
          }}
        />
      </Modal.Body>
    </Modal>
  );
}
