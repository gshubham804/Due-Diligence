import {
  FaUser,
  FaChartLine,
  FaMoneyBill,
  FaFlag,
  FaUsers,
  FaFileAlt,
  FaBullseye,
  FaHandshake,
  FaClipboardList,
  FaExclamationTriangle,
  FaCheckCircle,
  FaFile,
  FaIndustry,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
const StartupDetails = () => {
  const startupData = {
    name: "Acme Tech",
    date: "September 22, 2023",
    founders: ["John Doe", "Jane Smith"],
    location: "San Francisco, USA",
    industry: "Technology",
    fundingStage: "Seed",
    investmentAmount: "$2M",
    reportDate: "September 20, 2023",
    description:
      "Acme Tech is a technology startup focused on developing innovative solutions for businesses. Our product, AcmeX, is a cutting-edge software platform that streamlines workflow processes and enhances productivity.",
    marketTrends:
      "The technology industry is experiencing rapid growth, with an increasing demand for software solutions that improve efficiency and reduce costs.",
    marketSize: "$100 Billion",
    founderExperience: [
      "John Doe: 10+ years in software development",
      "Jane Smith: 8+ years in product management",
    ],
    teamMembers: [
      { name: "Alice Johnson", role: "CTO" },
      { name: "David Brown", role: "COO" },
      { name: "Ella Wilson", role: "Head of Marketing" },
    ],
    productDescription:
      "AcmeX is a cloud-based platform that offers a wide range of features, including task automation, data analytics, and customizable workflows. It caters to businesses of all sizes and industries, providing a scalable and user-friendly solution.",
    financials: {
      revenue: "$500K",
      expenses: "$300K",
      profitMargin: "40%",
      fundingHistory: [{ round: "Seed Round", amount: "$2M" }],
    },
    marketEntryStrategy: {
      geographicExpansionPlan:
        "We plan to expand our presence in India and Southeast Asia by establishing local offices and forming strategic partnerships with regional businesses.",
      localPartnerships:
        "We are in talks with several local tech companies to explore potential collaborations in the target regions.",
    },
    competitors: ["Competitor A", "Competitor B", "Competitor C"],
    differentiation:
      "Our product's unique selling points include a user-friendly interface, advanced automation capabilities, and robust customer support.",
    regulatoryCompliance: {
      localRegulations:
        "We have conducted a comprehensive review of local regulations and are fully compliant with all relevant laws.",
      intellectualProperty:
        "We have secured patents for our key technologies and continuously monitor for IP protection.",
    },
    customerAcquisition: {
      customerBase:
        "Our target customer base includes businesses in various sectors, such as finance, healthcare, and e-commerce, in India and Southeast Asia.",
      growthStrategies:
        "Our growth strategies include digital marketing campaigns, referral programs, and providing free trials to attract and retain customers.",
    },
    risks: ["Market competition", "Regulatory changes", "Technical challenges"],
    dueDiligenceScore: "90",
    investmentRecommendation:
      "It is recommended to proceed with the investment due to the startup's strong team, innovative product, and solid financials.",
    appendices: ["Financial statements", "Market research data"],
    contactInformation: {
      contact: "John Doe",
      website: "www.acmetech.com",
      email: "contact@acmetech.com",
      phone: "+1 (123) 456-7890",
    },
  };

  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg shadow-lg p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{startupData.name}</h1>
        <p className="text-sm text-gray-600">Date: {startupData.date}</p>
      </div>

      {/* Executive Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Executive Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaUser className="mr-2 text-primary" />
            Founders: {startupData.founders.join(', ')}
          </div>
          <div className="flex items-center">
            <FaFlag className="mr-2 text-primary" />
            Location: {startupData.location}
          </div>
        </div>
        {/* Include other Executive Summary information here */}
      </section>

      {/* Market Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Market Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaChartLine className="mr-2 text-primary" />
            Market Trends: {startupData.marketTrends}
          </div>
          <div className="flex items-center">
            <FaMoneyBill className="mr-2 text-primary" />
            Market Size: {startupData.marketSize}
          </div>
        </div>
        {/* Include other Market Analysis information here */}
      </section>

      {/* Team Assessment */}
      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Team Assessment</h2>
  <div className="flex items-center">
      <FaUsers className="mr-2 text-primary text-2xl" />
        <p className="text-lg font-semibold">Founders:</p>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
    <div className="flex items-center">
      <div className="ml-2">
        <ul className="list-disc ml-6">
          {startupData.founders.map((founder, index) => (
            <li key={index} className="mb-1">
              {founder}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex items-center">
      <FaChartLine className="mr-2 text-primary text-2xl" />
      <div className="ml-2">
        <p className="text-lg font-semibold">Experience:</p>
        <ul className="list-disc ml-6">
          {startupData.founderExperience.map((experience, index) => (
            <li key={index} className="mb-1">
              {experience}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  <div className="flex items-center text-gray-700 mt-4">
    <FaUser className="mr-2 text-primary text-2xl" />
    <p className="text-lg font-semibold">Team:</p>
    <p className="ml-2">{startupData.teamInfo}</p>
  </div>
  {/* Include other Team Assessment information here */}
</section>


      {/* Product/Service Assessment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Product/Service Assessment</h2>
        <div className="flex items-center text-gray-700">
          <FaFileAlt className="mr-2 text-primary" />
          Product/Service: {startupData.productDescription}
        </div>
        {/* Include other Product/Service Assessment information here */}
      </section>

      {/* Financial Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Financial Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaMoneyBill className="mr-2 text-primary" />
            Revenue: {startupData.financials.revenue}
          </div>
          <div className="flex items-center">
            <FaMoneyBill className="mr-2 text-primary" />
            Expenses: {startupData.financials.expenses}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaChartLine className="mr-2 text-primary" />
            Profit Margin: {startupData.financials.profitMargin}
          </div>
          <div className="flex items-center">
            <FaMoneyBill className="mr-2 text-primary" />
            Funding History: {startupData.financials.fundingHistory.map((item) => `${item.round} (${item.amount})`).join(', ')}
          </div>
        </div>
      </section>

      {/* Market Entry Strategy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Market Entry Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaBullseye className="mr-2 text-primary" />
            Geographic Expansion Plan: {startupData.marketEntryStrategy.geographicExpansionPlan}
          </div>
          <div className="flex items-center">
            <FaHandshake className="mr-2 text-primary" />
            Local Partnerships: {startupData.marketEntryStrategy.localPartnerships}
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Competitive Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaClipboardList className="mr-2 text-primary" />
            Key Competitors: {startupData.competitors.join(', ')}
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 text-primary" />
            Differentiation: {startupData.differentiation}
          </div>
        </div>
      </section>

      {/* Regulatory and Compliance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Regulatory and Compliance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaFlag className="mr-2 text-primary" />
            Local Regulations: {startupData.regulatoryCompliance.localRegulations}
          </div>
          <div className="flex items-center">
            <FaFile className="mr-2 text-primary" />
            Intellectual Property: {startupData.regulatoryCompliance.intellectualProperty}
          </div>
        </div>
      </section>

      {/* Customer Acquisition and Growth Strategy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Acquisition and Growth Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaUsers size={24} className="mr-2 text-primary" />
            Customer Base: {startupData.customerAcquisition.customerBase}
          </div>
          <div className="flex items-center">
            <FaChartLine size={24} className="mr-2 text-primary" />
            Growth Strategies: {startupData.customerAcquisition.growthStrategies}
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Risk Assessment</h2>
        <ul className="list-none list-inside text-gray-700">
          {startupData.risks.map((risk, index) => (
            <li className="flex mb-2" key={index}>
              <FaExclamationTriangle className="mr-2 text-red-500" />
              {risk}
            </li>
          ))}
        </ul>
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaChartLine className="mr-2 text-primary" />
            Due Diligence Score: {startupData.dueDiligenceScore}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 text-green-500" />
            Investment Recommendation: {startupData.investmentRecommendation}
          </div>
        </div>
      </section>

      {/* Appendices */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Appendices</h2>
        <ul className="list-none list-inside text-gray-700">
          {startupData.appendices.map((appendix, index) => (
            <li className="flex items-center mb-2" key={index}>
              <FaFile className="mr-2 text-primary" />
              {appendix}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaUser className="mr-2 text-primary" />
            Contact: {startupData.contactInformation.contact}
          </div>
          <div className="flex items-center">
            <FaGlobe className="mr-2 text-primary" />
            Website: {startupData.contactInformation.website}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-primary" />
            Email: {startupData.contactInformation.email}
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2 text-primary" />
            Phone: {startupData.contactInformation.phone}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupDetails;

