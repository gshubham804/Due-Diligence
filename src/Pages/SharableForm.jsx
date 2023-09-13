import  { useState } from 'react';

const CombinedForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    qualification: '',
  });
  const [teamMembers, setTeamMembers] = useState([
    {
      name: '',
      designation: '',
      linkedin: '',
      github: '',
      twitter: '',
    },
  ]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (step === 1) {
      const updatedTeamMembers = [...teamMembers];
      updatedTeamMembers[index][name] = value;
      setTeamMembers(updatedTeamMembers);
    } else if (step === 2) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { name: '', designation: '', linkedin: '', github: '', twitter: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 8) {
      nextStep();
    } else {
      // You can access both formData and teamMembers here and perform any desired action, such as submitting the data to an API.
      console.log('Form Data:', formData);
      console.log('Team Members:', teamMembers);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-medium mb-4">Team Members</h2>
              {teamMembers.map((teamMember, index) => (
                <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-medium mb-2">Team Member {index + 1}</h2>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={teamMember.name}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Designation:</label>
                    <input
                      type="text"
                      name="designation"
                      value={teamMember.designation}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">LinkedIn:</label>
                    <input
                      type="text"
                      name="linkedin"
                      value={teamMember.linkedin}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">GitHub:</label>
                    <input
                      type="text"
                      name="github"
                      value={teamMember.github}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Twitter:</label>
                    <input
                      type="text"
                      name="twitter"
                      value={teamMember.twitter}
                      onChange={(e) => handleChange(e, index)}
                      className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addTeamMember}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Add Team Member
              </button>
            </div>
          )}

          {step === 2 && 
            <div>
              <div className="mb-2">
                <label className="block text-base mb-2 font-medium">Problem Statement:</label>
                <textarea
                rows={5}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-2 border rounded focus:outline-none  focus:border-gray-500"
                />
              </div>
              </div>
          }
          {step==3 && 
           <div className="mb-2">
           <label className="block text-base mb-2 font-medium">Solution:</label>
           <textarea
           rows={5}
             type="text"
             name="address"
             value={formData.address}
             onChange={(e) => handleChange(e)}
             className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
           />
         </div> }
         {step==4 && 
              <div>
                <label className="block text-base mb-2 font-medium">
                    Which product/service are you building?
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                />
            </div>
          }

{step==5 && 
              <div>
                <label className="block text-base mb-2 font-medium">Select market Startegy</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                />
            </div>
          }


{step==6 && 
              <div>
                <label className="block text-base mb-2 font-medium">Enlist your competitors</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                />
            </div>
          }

{step==7 && 
              <div>
                <label className="block text-base mb-2 font-medium">Is your company registered?</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                />
            </div>
          }

{step==8 && 
              <div>
                <label className="block text-base mb-2 font-medium">If yes, please share registration no.</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleChange(e)}
                  className="w-full p-2 border rounded focus:outline-none  focus:border-blue-300"
                />
            </div>
          }

          <div className="mt-6 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 text-gray-600 rounded hover:bg-gray-200 focus:outline-none"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              {step ==8  ? 'Submit' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CombinedForm;
