import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import { Popup } from "../components/popup/popup";

const Generators = () => {
  const [isPopupOpen, setPopup] = useState(false);
  return (
    <div>
      <Navbar />
      {isPopupOpen && <Popup setPopup={setPopup} />}
      <button onClick={() => setPopup(true)}>openPopup</button>
      <h1>Contact</h1>
      <p>This is the Contact page.</p>
      <div
        style={{ backgroundColor: "Green", width: "500px", height: "600px" }}
      ></div>
    </div>
  );
};

export default Generators;
