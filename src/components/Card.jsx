import Container from "../styles/CardStyled.jsx";
import Header from "../styles/CardStyled.jsx";


function Card() {
  return (
    <Container>
      <Header>
        <div>
          <img
            style={{ width: "20rem", borderRadius: "32px 32px 0 0" }}
            src="src\assets\ansible.png"
            alt="Ansible image"
          />
        </div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "10rem",
            height: "2rem",
            margin: "0",
            marginTop: "-2rem",
            border: "1px solid white",
            backgroundColor: "gray",
            color: "white",
          }}
        >
          About Ansible
        </p>
      </Header>
      <p
        style={{
          width: "17rem",
          marginLeft: "2rem",
          marginBottom: "6rem",
          fontSize: "1rem",
          color: "white",
        }}
      >
        Ansible® is an open source, command-line IT automation software
        application written in Python. It can configure systems, deploy
        software, and orchestrate advanced workflows to  {" "}
        <span style={{ opacity: "0.5" }}>
        support application
        deployment,
        </span>{" "}
        <span style={{ opacity: "0.3" }}>system updates, and more. Ansib...</span>
      </p>
      <button
        style={{
          width: "40%",
          height: "15%",
          marginLeft: "10rem",
          marginTop: "-2rem",
          marginBottom: "1.5rem",
          border: "0 solid white",
          borderRadius: "20px",
          fontWeight: "bold",
          color: "#DB4B5B",
        }}
      >
        See more
      </button>
    </Container>
  );
}

export default Card;
