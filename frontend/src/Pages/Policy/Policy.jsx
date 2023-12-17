import React, { useState } from 'react';
import hero from '../../Components/Assets/Media/Policy/Cover.png';
import "./Policy.css";
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import '../../Components/Assets/css/global.css';

// Import your Policy.json data
import policyData from '../../Components/Assets/Data/Policy.json';

const Policy = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(policyData.policies.returnAndRefund);

    // Function to handle the click on policy items
    const handlePolicyClick = (policyKey) => {
        const selectedPolicyData = policyData.policies[policyKey];
        setSelectedPolicy(selectedPolicyData);
    };

    return (
        <div>
<NavBar />
       
        <div className='policy-page'>
            {/* <NavBar /> */}
            <div className='hero-frame'>
                <img className='hero-image-child' alt="" src={hero} />
                <div className='hero-content'>
                    <h1 className='h1'>WARRANTY POLICY</h1>
                </div>
            </div>
            <div className='main-content gap-lg'>
                <div className='policies gap-xs'>
                    {/* Map through policies to generate clickable links */}
                    {Object.keys(policyData.policies).map((policyKey, index) => (
                        <div
                            key={policyKey}
                            className={`policy body-bld ${policyKey}`}
                            onClick={() => handlePolicyClick(policyKey)}
                        >
                            {`${policyData.policies[policyKey].title}`}
                        </div>
                    ))}
                </div>

                <div className='right-content'>
                    <div className={`h2 ${selectedPolicy.title}`}>
                        {selectedPolicy.title}
                    </div>
                    <ol>
                        {/* Map through selected policy details to display */}
                        {Object.keys(selectedPolicy.details).map((detailKey, index) => (
                            <li key={detailKey} className={`body-bld ${detailKey}`}>
                                {`${detailKey}`}
                                <p className='body'>{selectedPolicy.details[detailKey]}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Policy;
