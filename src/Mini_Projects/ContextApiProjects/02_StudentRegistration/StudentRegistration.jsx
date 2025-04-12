import React from "react";
import { StudentProvider } from "./context/StudentContext";
import RegisterStudent from "./components/RegisterStudent";
import StudentProfile from "./components/StudentProfile";

const StudentRegistration = () => {
  return (
    <StudentProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-200 to-purple-300 p-4">
        <RegisterStudent />
        <StudentProfile />
      </div>
    </StudentProvider>
  );
};

export default StudentRegistration;
