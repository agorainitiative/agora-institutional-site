import React, { useState } from 'react';

function CrowdfundingCampaign({ campaignName, goalAmount }) {
    // const [totalDonations, setTotalDonations] = useState(0);

    const handleDonate = (amount) => {
        setTotalDonations(prevTotal => prevTotal + amount);
    };
    const totalDonations = 500;
    const totalAmount = 1000;
    //const progressPercentage = (totalDonations / goalAmount) * 100;
    const progressPercentage = (totalDonations / totalAmount) * 100;
    return (
        <div style={{width: "800px", height: "500px", border: "1px solid black", borderRadius: " 15px"}}>
            <h1>Nome campagna</h1>
            
            <div style={{
                width: `${progressPercentage}%`,
                backgroundColor: progressPercentage >= 100 ? '#4caf50' : '#2196f3',
                height: '5px',
                borderRadius: '5px'
            }} />
            
            <p>{totalDonations}€ raccolti</p>
        </div>
    );
}

export default CrowdfundingCampaign;