import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BgChanger from "./Mini_Projects/BgChanger/BgChanger";
import PasswordGen from "./Mini_Projects/PasswordGenerator/PasswordGen";
import CurrencyConvertor from "./Mini_Projects/CurrencyConvertor/CurrencyConvertor";
import MiniContext from "./Mini_Projects/ContextApiProjects/01_miniContext/MiniContext";
import StudentRegistration from "./Mini_Projects/ContextApiProjects/02_StudentRegistration/StudentRegistration";
import ThemeSwitcher from "./Mini_Projects/ContextApiProjects/03_themeSwitcher/ThemeSwitcher";
import TodoApp from "./Mini_Projects/TodoApp/TodoApp";
import ProjectCard from "./ProjectCard";

// Image imports
import bgChangerImg from "./images/bg-changer.png";
import passwordGenImg from "./images/password-gen.png";
import currencyConvertorImg from "./images/currency-convertor.png";
import miniContextImg from "./images/mini-context.png";
import studentRegistrationImg from "./images/student-registration.png";
import themeSwitcherImg from "./images/theme-switcher.png";
import todoAppImg from "./images/todo-app.png";

function App() {
  const projects = [
    {
      title: "Background Changer",
      description:
        "Dynamically change the background color with a single click.",
      link: "/bg-changer",
      image: bgChangerImg,
      accent: "from-purple-500 to-indigo-600",
    },
    {
      title: "Password Generator",
      description:
        "Generate secure, random passwords with customizable options.",
      link: "/password-generator",
      image: passwordGenImg,
      accent: "from-amber-500 to-orange-600",
    },
    {
      title: "Currency Converter",
      description: "Convert between currencies using real-time exchange rates.",
      link: "/currency-convertor",
      image: currencyConvertorImg,
      accent: "from-emerald-500 to-teal-600",
    },
    {
      title: "Context API Demo",
      description: "Demonstrates state management using React's Context API.",
      link: "/mini-context",
      image: miniContextImg,
      accent: "from-blue-500 to-cyan-600",
    },
    {
      title: "Student Registration",
      description:
        "Complete system to register and manage student information.",
      link: "/student-registration",
      image: studentRegistrationImg,
      accent: "from-rose-500 to-pink-600",
    },
    {
      title: "Theme Switcher",
      description: "Toggle between light and dark themes using Context API.",
      link: "/theme-switcher",
      image: themeSwitcherImg,
      accent: "from-violet-500 to-fuchsia-600",
    },
    {
      title: "Todo Application",
      description:
        "Full-featured task management application with CRUD operations.",
      link: "/todo-app",
      image: todoAppImg,
      accent: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-amber-100 to-pink-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

        <div className="container mx-auto px-4 py-12">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-7xl mx-auto">
                  {/* Header Section */}
                  <header className="text-center mb-16">
                    <div className="inline-block px-6 py-2 mb-4 bg-white rounded-full shadow-sm">
                      <span className="text-sm font-medium text-gray-600">
                        React Projects Collection
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Mini Projects Showcase
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      A collection of interactive React applications
                      demonstrating various concepts and features.
                    </p>
                  </header>

                  {/* Projects Grid */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6 flex items-center">
                      <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                      Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {projects.map((proj, index) => (
                        <ProjectCard key={index} {...proj} />
                      ))}
                    </div>
                  </div>

                  {/* Footer Note */}
                  <div className="text-center mt-16 pt-8 border-t border-gray-200">
                    <p className="text-gray-500">
                      Created by{" "}
                      <span className="font-medium text-gray-700">
                        Ravi Agrahari
                      </span>{" "}
                      while learning React from Chai aur Code
                    </p>
                  </div>
                </div>
              }
            />
            <Route path="/bg-changer" element={<BgChanger />} />
            <Route path="/password-generator" element={<PasswordGen />} />
            <Route path="/currency-convertor" element={<CurrencyConvertor />} />
            <Route path="/mini-context" element={<MiniContext />} />
            <Route
              path="/student-registration"
              element={<StudentRegistration />}
            />
            <Route path="/theme-switcher" element={<ThemeSwitcher />} />
            <Route path="/todo-app" element={<TodoApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
