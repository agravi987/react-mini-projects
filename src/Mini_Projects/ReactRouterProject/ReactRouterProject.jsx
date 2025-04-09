import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import GitHubProfile from "./Components/Github/GithubProfile";
import Github from "./Components/Github/Github";

//  Either make Router like this
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// or

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      <Route path="github/:username" element={<GitHubProfile />} />
    </Route>
  )
);

const ReactRouterProject = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default ReactRouterProject;
