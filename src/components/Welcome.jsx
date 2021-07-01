import { Fade } from "react-awesome-reveal";
export default function Welcome() {
  return (
    <Fade left>
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554147090-e1221a04a025?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80)",
          width: "100%",
          height: "550px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          margin: "0 auto",
          padding: "110px",
        }}
      >
        <Fade delay={500}>
          <h1
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "Lucida Console Courier New monospace",
              fontSize: "60px",
            }}
          >
            Welcome to my Gallery page!
          </h1>
          <h3
            style={{
              textAlign: "center",
              color: "black",
              fontFamily: "Lucida Console Courier New monospace",
              fontSize: "32px",
            }}
          >
            Have a nice day, I hope you will see something good!
          </h3>
        </Fade>
      </div>
    </Fade>
  );
}
