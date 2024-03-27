import { HeroSection } from "../components/hero-section/hero-section.js";
import Navbar from "../components/navbar/navbar.js";
import { ButtonBaseDemo } from "../components/mui-button/mui_button.js";
import { Form } from "../components/form/form.js";




export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ButtonBaseDemo />
      <Form />
    </div>
  );
}
