import data from "../data.json";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
export default function Highlight() {
  return (
    <Fade delay={500}>
      <h3
        style={{
          marginTop: "5%",
          textAlign: "center",
          color: "black",
          fontFamily: "Lucida Console Courier New monospace",
          fontSize: "32px",
        }}
      >
        Highlighted images
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.slice(0, 4).map((imgs, index) => {
          return imgs.highlighted ? (
            <Card
              style={{
                width: "22rem",
                marginBottom: "20%",
                marginTop: "5%",
                height: "22rem",
              }}
            >
              <Card.Img
                style={{
                  margin: "auto",
                  height: "150%",
                }}
                variant="top"
                src={imgs.image}
              />
            </Card>
          ) : (
            ""
          );
        })}
      </div>
    </Fade>
  );
}
