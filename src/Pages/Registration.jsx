import { useState } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = import.meta.env.VITE_REACT_BASE_URL;

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ventureFirmName: "",
    website: "",
    officialEmail: "",
    password: "",
  });

  const navigate=useNavigate(); 
  const { firstName, lastName, ventureFirmName, website, officialEmail, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API request here to handle registration
      const response = await fetch(baseUrl+"auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          ventureFirmName,
          website,
          officialEmail,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Registration successful, you can handle the response here
       navigate("/home")
      } else {
        alert("email is already used")
        // console.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Last Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ventureFirmName" className="block text-gray-700 text-sm font-bold mb-2">
              Venture Firm Name
            </label>
            <input
              type="text"
              id="ventureFirmName"
              name="ventureFirmName"
              value={ventureFirmName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Venture Firm Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 text-sm font-bold mb-2">
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={website}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Website URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="officialEmail" className="block text-gray-700 text-sm font-bold mb-2">
              Official Email
            </label>
            <input
              type="email"
              id="officialEmail"
              name="officialEmail"
              value={officialEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Official Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2 w-full font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
