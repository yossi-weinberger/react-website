import Navbar from "../components/navbar/navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>about Page</h1>
      <p>This is the about page.</p>
      <div
        style={{ backgroundColor: "blue", width: "500px", height: "600px" }}
      ></div>
    </div>
  );
};

export default About;
