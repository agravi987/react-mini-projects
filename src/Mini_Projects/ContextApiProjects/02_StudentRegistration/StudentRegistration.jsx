import React from "react";
import { StudentProvider } from "./context/StudentContext";
import RegisterStudent from "./components/RegisterStudent";
import StudentProfile from "./components/StudentProfile";

const StudentRegistration = () => {
  return (
    <StudentProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-200 to-purple-300 p-6 flex flex-col items-center">
        <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl w-full mb-6 text-center">
          <h1 className="text-2xl font-bold text-purple-700 mb-2">
            Project 2 - Learning Context API
          </h1>
          <p className="text-gray-700">
            This project demonstrates how to build a student registration form
            and manage state using the Context API in React.js.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl w-full mb-6">
          <RegisterStudent />
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl w-full">
          <StudentProfile />
        </div>
      </div>
    </StudentProvider>
  );
};

export default StudentRegistration;
