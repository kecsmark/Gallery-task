import "./gallery.css";
import data from "../data.json";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";
import Popup from "./Popup";
import Button from "react-bootstrap/Button";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function Gallery() {
  const [imgTitle, setImgTitle] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [pictureData, setPictureData] = useState("");
  const [slicenumber1, setSlicenumber1] = useState(10);
  const [slicenumber2, setSlicenumber2] = useState(0);
  const [show, setShow] = useState(false);
  const [cardData, setCardData] = useState();

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
        {data.slice(slicenumber2, slicenumber1).map((imgs, index) => {
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
        })}
        <Popup
          show={show}
          setShow={setShow}
          picture={pictureData}
          cardData={cardData}
          imgTitle={imgTitle}
        />
      </div>
      <div>
        <Button
          style={{
            marginBottom: "2%",
            marginTop: "3%",
            textAlign: "center",
          }}
          onClick={() => {
            setSlicenumber2(0);
            setSlicenumber1(10);
          }}
          variant="light"
        >
          {" "}
          <BsArrowLeft /> Previous page
        </Button>
        <Button
          style={{
            marginBottom: "2%",
            marginTop: "3%",
            textAlign: "center",
          }}
          onClick={() => {
            setSlicenumber2(10);
            setSlicenumber1(20);
          }}
          variant="light"
        >
          Next page <BsArrowRight />
        </Button>
      </div>
    </Fade>
  );
}
