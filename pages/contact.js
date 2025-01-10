import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: "#000", color: "#00FFFF", padding: "40px" }}>
        <h1>Contact Us</h1>
        <p>Email: contact@pan-evangelism.org</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Faith Lane, Unity City</p>
      </main>
      <Footer />
    </div>
  );
}
