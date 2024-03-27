import { HeroSection } from "../components/hero-section/hero-section.js";
import Navbar from "../components/navbar/navbar.js";
import { ButtonBaseDemo } from "../components/mui-button/mui_button.js";
import { Form } from "../components/form/form.js";
import { RegForm } from "../components/mui_form/mui_form.js";
import { SimpleBottomNavigation } from "../components/bottom-nav/bottom_nav.js";
import { CustomImageList } from "../components/CustomImageList/CustomImageList.js";
import AddProductForm from "../components/addProduct/addProduct.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ButtonBaseDemo />
      <Form />
      <RegForm />
      {/* <CustomImageList />
      <SimpleBottomNavigation /> */}
    </div>
  );
}
