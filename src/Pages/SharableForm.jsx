import  { useState } from 'react';
import {FaLink} from 'react-icons/fa';

function ProfessionalForm() {
    const [formData, setFormData] = useState({
        linkedin: '',
        github: '',
        twitter: '',
        designation: '',
        marketSize: '',
        traction: '',
        ask: '',
        isRegistered: '',
        useOfFunds: '',
        competitiveLandscape: '',
        businessModel: '',
        goToMarketStrategy: '',
        targetAudience: '',
        solution: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log(formData);
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
            <div className='flex items-center justify-between '>
            <h1 className="text-2xl font-semibold mb-4">Share this form with startup</h1>
<FaLink className='text-blue-500 -mt-2 cursor-pointer'/>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                    <label htmlFor="foundersname" className="block text-gray-700 font-medium"> 
                    Founder's Name
                        </label>
                    <input
                        type="text"
                        id="foundersname"
                        name="foundersname"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="linkedin" className="block text-gray-700 font-medium">LinkedIn URL</label>
                    <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="github" className="block text-gray-700 font-medium">GitHub URL</label>
                    <input
                        type="text"
                        id="github"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="twitter" className="block text-gray-700 font-medium">Twitter</label>
                    <input
                        type="text"
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="designation" className="block text-gray-700 font-medium">Designation</label>
                    <input
                        type="text"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="marketSize" className="block text-gray-700 font-medium">Market Size</label>
                    <input
                        type="text"
                        id="marketSize"
                        name="marketSize"
                        value={formData.marketSize}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="traction" className="block text-gray-700 font-medium">Traction</label>
                    <input
                        type="text"
                        id="traction"
                        name="traction"
                        value={formData.traction}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ask" className="block text-gray-700 font-medium">Ask</label>
                    <input
                        type="text"
                        id="ask"
                        name="ask"
                        value={formData.ask}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Is the Company Registered?</label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="radio"
                            id="registered-yes"
                            name="isRegistered"
                            value="yes"
                            checked={formData.isRegistered === 'yes'}
                            onChange={handleChange}
                        />
                        <label htmlFor="registered-yes">Yes</label>
                        <input
                            type="radio"
                            id="registered-no"
                            name="isRegistered"
                            value="no"
                            checked={formData.isRegistered === 'no'}
                            onChange={handleChange}
                        />
                        <label htmlFor="registered-no">No</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="useOfFunds" className="block text-gray-700 font-medium">
                      Use of Funds</label>
                    <textarea
                        id="useOfFunds"
                        name="useOfFunds"
                        value={formData.useOfFunds}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="competitiveLandscape" className="block text-gray-700 font-medium">Competitive Landscape</label>
                    <textarea
                        id="competitiveLandscape"
                        name="competitiveLandscape"
                        value={formData.competitiveLandscape}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="businessModel" className="block text-gray-700 font-medium">Business Model</label>
                    <textarea
                        id="businessModel"
                        name="businessModel"
                        value={formData.businessModel}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="goToMarketStrategy" className="block text-gray-700 font-medium">
                      Go-to Market Strategy</label>
                    <textarea
                        id="goToMarketStrategy"
                        name="goToMarketStrategy"
                        value={formData.goToMarketStrategy}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="targetAudience" className="block text-gray-700 font-medium">Target Audience</label>
                    <textarea
                        id="targetAudience"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="solution" className="block text-gray-700 font-medium">
                      Solution</label>
                    <textarea
                        id="solution"
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="product" className="block text-gray-700 font-medium">
                      Product</label>
                    <textarea
                        id="product"
                        name="product"
                        value={formData.solution}
                        onChange={handleChange}
                        rows="3"
                        className="mt-1 p-2 w-full border rounded-md"
                    ></textarea>
                </div>
                
            </form>
        </div>
    );
}

export default ProfessionalForm;
