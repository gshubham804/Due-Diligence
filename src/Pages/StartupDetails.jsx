import React from "react";

const StartupDetails = () => {
  const startupData = {
    name: "CompanyX",
    score: "85",
    fundingAmount: "$10M",
    isFunded: true,
    establishmentYear: "2010",
    parentCompany: "Parent Corp",
    location: "New York, USA",
    headOffice: "San Francisco, USA",
    teamInfo: "A team of passionate professionals",
    boardOfMembers: ["John Doe", "Jane Smith", "Alice Johnson"],
    fundingRounds: 3,
    marketSize: "Large",
    competitors: ["Competitor A", "Competitor B", "Competitor C"],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-semibold text-primary-600 mb-4">{startupData.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold">Score</p>
            <p className="text-3xl font-semibold">{startupData.score}</p>
          </div>
          <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold">Funding Amount</p>
            <p className="text-3xl font-semibold">{startupData.fundingAmount}</p>
          </div>
          <div className="bg-blue-100 text-blue-600 rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold">Funded</p>
            <p className={`text-3xl font-semibold ${startupData.isFunded ? 'text-green-600' : 'text-red-600'}`}>{startupData.isFunded ? "Yes" : "No"}</p>
          </div>
          <div className="bg-blue-100 text-blue-600 rounded-lg p-4">
            <p className="text-lg font-semibold">Year of Establishment</p>
            <p className="text-3xl font-semibold">{startupData.establishmentYear}</p>
          </div>
        </div>
        <div>
          <div className="bg-green-100 text-green-600 rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold">Parent Company</p>
            <p className="text-3xl font-semibold">{startupData.parentCompany}</p>
          </div>
          <div className="bg-green-100 text-green-600 rounded-lg p-4 mb-4">
            <p className="text-lg font-semibold">Location</p>
            <p className="text-3xl font-semibold">{startupData.location}</p>
          </div>
          <div className="bg-green-100 text-green-600 rounded-lg p-4">
            <p className="text-lg font-semibold">Head Office</p>
            <p className="text-3xl font-semibold">{startupData.headOffice}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
  <div className="bg-blue-100 text-blue-600 rounded-lg p-4">
    <p className="text-xl font-semibold">Team Information</p>
    <p className="text-lg text-gray-700 mt-2">{startupData.teamInfo}</p>
  </div>
</div>

<div className="mt-6">
  <div className="bg-green-100 text-green-600 rounded-lg p-4">
    <p className="text-xl font-semibold">Board of Members</p>
    <ul className="list-disc pl-6 text-lg mt-2">
      {startupData.boardOfMembers.map((member, index) => (
        <li key={index}>{member}</li>
      ))}
    </ul>
  </div>
</div>

<div className="mt-6">
  <div className="bg-blue-100 text-blue-600 rounded-lg p-4">
    <p className="text-xl font-semibold">Funding Rounds</p>
    <p className="text-3xl font-semibold text-primary-600 mt-2">
      {startupData.fundingRounds}
    </p>
  </div>
</div>

<div className="mt-6">
  <div className="bg-green-100 text-green-600 rounded-lg p-4">
    <p className="text-xl font-semibold">Market Size</p>
    <p className="text-3xl font-semibold text-primary-600 mt-2">
      {startupData.marketSize}
    </p>
  </div>
</div>

<div className="mt-6">
  <div className="bg-blue-100 text-blue-600 rounded-lg p-4">
    <p className="text-xl font-semibold">Competitors</p>
    <ul className="list-disc pl-6 text-lg mt-2">
      {startupData.competitors.map((competitor, index) => (
        <li key={index}>{competitor}</li>
      ))}
    </ul>
  </div>
</div>

    </div>
  );
};

export default StartupDetails;
