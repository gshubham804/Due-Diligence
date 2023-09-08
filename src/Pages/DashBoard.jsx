import { Link } from "react-router-dom";

const DashBoard = () => {
  const dataSet = [
    { Startup: "Company1", score: "80" },
    { Startup: "Company2", score: "85" },
    { Startup: "Company3", score: "90" },
    { Startup: "Company4", score: "95" },
    { Startup: "Company5", score: "70" },
  ];

  return (
    <div className="min-h-[80vh] bg-gray-100 py-8">
      <div className="container mx-auto">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dataSet.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <Link
                to="/startupdetails"
                className="block p-6 text-xl font-semibold text-indigo-600 hover:underline"
              >
                {item.Startup}
              </Link>
              <p className="p-4 text-gray-600 px-6">
                Score: {item.score}%
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
