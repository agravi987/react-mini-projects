import React, { useContext, useState } from "react";
import StudentContext from "../context/StudentContext";

const RegisterStudent = () => {
  const { setStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    rollNumber: "",
    department: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    setStudent(formData);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
        Student Registration
      </h2>
      <div className="space-y-4">
        {["name", "age", "rollNumber", "department", "email"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "age" ? "number" : "text"}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500"
          />
        ))}
        <button
          onClick={handleRegister}
          className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterStudent;
