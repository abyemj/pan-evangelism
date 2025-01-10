import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main
        style={{
          backgroundImage: "url('/backgroundb.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#00FFFF",
          minHeight: "100vh",
          padding: "20px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Welcome to Pen-Evangelism
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            fontSize: "1rem",
            padding: "0 10px",
          }}
        >
          Bringing the good news to every corner of the world.
        </p>
        <button
          style={{
            backgroundColor: "#00FFFF",
            color: "#000",
            border: "none",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Learn More
        </button>
      </main>
      <Footer />
    </div>
  );
}
