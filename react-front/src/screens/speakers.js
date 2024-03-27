// import React from "react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import ProductGrid from "../components/productsGrid/productsGrid";
// import { speakersList } from "../data/speakersLinks";

import { getAllSpeakers } from "../utils/apiCalls";
import { useLoadingContext } from "../contexts/loadingContext";

// const Speakers = () => {
//   return (
//     <div>
//       <Navbar />
//       <h1>speakers</h1>
//       <p>This is the Contact page.</p>
//       <ProductGrid products={speakersList} />
//     </div>
//   );
// };

const Speakers = () => {
  // State to store the speakers data
  const [speakers, setSpeakers] = useState([]);

  // Context to manage loading state
  const { setLoading } = useLoadingContext();

  /**
   * Fetch all speakers from the API and set the state when complete
   */
  useEffect(() => {
    const getSpeakers = async () => {
      try {
        setLoading(true);
        const data = await getAllSpeakers();
        setSpeakers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getSpeakers();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>speakers</h1>
      <p>This is the Contact page.</p>
      <ProductGrid products={speakers} />
    </div>
  );
};

export default Speakers;
