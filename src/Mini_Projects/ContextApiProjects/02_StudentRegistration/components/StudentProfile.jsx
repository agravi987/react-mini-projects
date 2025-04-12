import React, { useContext } from "react";
import StudentContext from "../context/StudentContext";

const StudentProfile = () => {
  const { student } = useContext(StudentContext);

  if (!student)
    return (
      <div className="text-center mt-10 text-xl text-red-500">
        No student registered yet.
      </div>
    );

  return (
    <div className="max-w-xl mx-auto bg-purple-100 p-6 mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-purple-800 mb-4">
        Student Profile
      </h2>
      <ul className="space-y-2">
        {Object.entries(student).map(([key, value]) => (
          <li key={key} className="text-lg text-purple-900">
            <span className="font-semibold capitalize">{key}:</span> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentProfile;
