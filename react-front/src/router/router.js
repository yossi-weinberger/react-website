import { BrowserRouter, Route, Routes } from "react-router-dom";
import { links } from "../data/links";
import { nanoid } from "nanoid";

/**
 * WebRouter component
 *
 * This component uses the BrowserRouter and Routes components from the react-router-dom library
 * to define the different routes for the application. The links variable is an array of objects
 * that contains information about the different routes, including the URL path and the component
 * to render for each route. The nanoid function is used to generate a unique key for each Route
 * component to ensure that they are all rendered correctly.
 */
function WebRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {links.map((link) => (
          <Route
            key={nanoid()} // unique key for each route
            path={link.href} // URL path for the route
            element={link.element} // component to render for the route
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default WebRouter;
