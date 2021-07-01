import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";
import Popup from "./Popup";
import { selectFavourites } from "../store/favSlice";
import { useSelector } from "react-redux";

export default function Favorites() {
  const [imgTitle, setImgTitle] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [pictureData, setPictureData] = useState("");
  const [show, setShow] = useState(false);
  const [cardData, setCardData] = useState();

  const favourites = useSelector(selectFavourites);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <Fade>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          // alignItems: 'center',
          flexWrap: "wrap",
        }}
      >
        {favourites.length !== 0
          ? favourites.map((imgs, index) => {
              return (
                <Card
                  onClick={(e) => {
                    setPictureData(imgs.image);
                    handleShow();
                    setCardData(imgs);
                  }}
                  id={index}
                  onMouseOver={(e) => {
                    setImgTitle(imgs.title);
                    setHidden("visible");
                    console.log(imgTitle);
                  }}
                  onMouseOut={() => setHidden("hidden")}
                  style={{
                    width: "18rem",
                    marginTop: "20px",
                    minWidth: 300,
                    marginBottom: "20px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={imgs.image}
                    style={{
                      margin: "auto",
                      height: "70%",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{imgs.title} </Card.Title>
                    Clicked:{imgs.clicked}
                  </Card.Body>
                  <Card.ImgOverlay>
                    <Card.Text
                      style={{
                        visibility: `${hidden}`,
                        color: "white",
                      }}
                    >
                      {imgs.title === imgTitle ? imgs.description : ""}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              );
            })
          : " "}
        <Popup
          show={show}
          setShow={setShow}
          picture={pictureData}
          cardData={cardData}
          imgTitle={imgTitle}
        />
      </div>
    </Fade>
  );
}
