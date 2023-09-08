import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

          {/* Sharable Form Card */}
          <Link to="/sharableform">
            <div className="bg-white rounded-lg shadow-md overflow-hidden 
            flex flex-col justify-between w-full lg:w-[25rem]">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Sharable Form</h2>
                <p className="text-gray-600">
                  Enter the data of a startup in the form.
                </p>
              </div>
              <div className="bg-indigo-600 px-6 py-3">
                <Link
                  to="/sharableform"
                  className="text-white font-semibold hover:text-indigo-200"
                >
                  Show More
                </Link>
              </div>
            </div>
          </Link>

          {/* OR Divider */}
          <div className="text-center text-gray-700 font-semibold text-2xl my-4 lg:my-0">
            OR
          </div>

          {/* Upload Excel Sheet Card */}
          <Link to="/uploadexcelsheet">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex 
            flex-col justify-between w-full lg:w-[25rem]">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Upload Startup data</h2>
                <p className="text-gray-600">
                  Directly upload an Excel sheet.
                </p>
              </div>
              <div className="bg-indigo-600 px-6 py-3">
                <Link
                  to="/uploadexcelsheet"
                  className="text-white font-semibold hover:text-indigo-200"
                >
                  Show More
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
