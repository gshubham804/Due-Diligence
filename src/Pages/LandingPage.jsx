import {IoMdAnalytics} from "react-icons/io";
import {BsDatabaseFillUp} from "react-icons/bs";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white py-16 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Revolutionize Your Investment Strategy</h1>
          <p className="text-xl mb-8">Unlock the Power of AI-Powered Due Diligence</p>
          <a
            href="https://forms.gle/fP7gcntWpk7njE5JA"
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 ease-in-out"
          >
         Please fill the form to join our waiting list
          </a>
        </div>
      </header>

      {/* Section 1: Problem Statement */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">The Challenge in Venture Capital</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div className="p-8 bg-white rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Manual Due Diligence</h3>
              <p className="text-gray-700">
                Traditional methods consume 4-6 weeks, leading to financial losses and missed opportunities.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="p-8 bg-white rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Biases Loom Large</h3>
              <p className="text-gray-700">
                Decisions influenced by gender, location, founder background, and industry.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="p-8 bg-white rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Data Gap</h3>
              <p className="text-gray-700">
                Lack of data-driven decisions hampers investment success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Game-Changing Solution */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Introducing the Future of Venture Capital</h2>
          <p className="text-xl mb-8">
            AI-Powered VC Due Diligence Tool
          </p>
          <a
            href="https://forms.gle/fP7gcntWpk7njE5JA"
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 ease-in-out"
          >
            Please fill the form to join our waiting list
          </a>
        </div>
      </section>

      {/* Section 3: The Power of Data-Driven Decisions */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Data-Driven Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Data Visualization */}
            <div className="p-8 bg-white rounded-lg shadow-xl">
              <div className="rounded-full bg-blue-700 h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
             <IoMdAnalytics/>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Visualized Data Analytics</h3>
              <p className="text-gray-700">
                Make informed investment decisions without biases. Our tool analyzes, synthesizes, and visualizes data to provide scores for each segment in the Due Diligence report.
              </p>
            </div>

            {/* Real-time Data Integration */}
            <div className="p-8 bg-white rounded-lg shadow-xl">
              <div className="rounded-full bg-blue-700 h-16 w-16 flex items-center justify-center text-white text-2xl mb-4">
               <BsDatabaseFillUp/>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Real-time Data Integration</h3>
              <p className="text-gray-700">
                Our cutting-edge ML algorithm sources data from government records, public sources, and social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Join the Revolution */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Your Path to Investment Success Begins Here</h2>
          <a
            href="https://forms.gle/fP7gcntWpk7njE5JA"
            className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 ease-in-out"
          >
            Unlock Your Free Trial Now
          </a>
        </div>
      </section>

      {/* Section 6: Stay Informed */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Stay In the Know</h2>
          <p className="text-xl text-gray-700 mb-8">Subscribe to our newsletter for the latest insights, industry trends, and updates on venture capital.</p>
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 ease-in-out"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* Section 7: Contact Us */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <p className="text-xl text-gray-700 mb-8">Got questions or need assistance? Contact our team anytime.</p>
          <a
            href="https://www.luster.network/contactus"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 ease-in-out"
          >
            Contact Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
