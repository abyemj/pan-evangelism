import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: "#000", color: "#00FFFF", padding: "40px" }}>
        <h1>About Pen-Evangelism</h1>
        <p>
          Pen-Evangelism is a global initiative committed to spreading the message of hope and love to
          communities worldwide.
        </p>
        <p>Our mission is to inspire, uplift, and bring people closer together through faith.</p>
      </main>
      <Footer />
    </div>
  );
}
