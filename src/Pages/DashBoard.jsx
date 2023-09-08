import { Link } from "react-router-dom";

const DashBoard = () => {
  const dataSet = [
    {
      "Startup": "Company1",
      "score": "80"
    },
    {
      "Startup": "Company2",
      "score": "85"
    },
    {
      "Startup": "Company3",
      "score": "90"
    },
    {
      "Startup": "Company4",
      "score": "95"
    },
    {
      "Startup": "Company5",
      "score": "70"
    },
  ];

  return (
    <div className="min-h-[80vh]">
      <main className="container mx-auto px-4 py-8">
        <ul className="list-decimal pl-6">
          {dataSet.map((item, index) => (
            <li key={index} className="mb-8 flex space-x-8 items-center">
              <p>{index+1}.</p>
              <Link to="/startupdetails" className="text-xl font-semibold text-indigo-600 hover:underline">
                {item?.Startup}
              </Link>
              <p className="text-gray-600">
                Score: {item?.score}%
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default DashBoard;
