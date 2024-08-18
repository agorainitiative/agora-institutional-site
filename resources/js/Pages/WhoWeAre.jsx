import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Navbar from './NavBar';

export default function WhoWeAre() {
    const [selectedId, setSelectedId] = useState('');

    const handleButtonClick = (id) => {
        setSelectedId(id);
    };

    const contentMap = {
        who_we_are: 'At Agorà Initiative, our mission is to foster a safe, positive, and democratic online environment that champions peace and justice in society. We believe in the power of the digital space to bring people together, and we are committed to ensuring that this space remains open, trustworthy, and respectful. We focus on creating an online environment where facts, meaningful dialogue, and well-being prevail over misinformation, hate speech, and harmful behaviors. Our work is guided by a preventative approach, utilizing data analytics, communication campaigns, and development programs aimed at protecting vulnerable communities from organized disinformation and online abuse. Our activities are centered around three key areas: Expression, where we defend the potential of the web and social media to connect people by protecting users from organized disinformation and hate speech campaigns; Online Well-Being, where we advocate for a healthier online experience by addressing the negative impacts of social media on mental health; and Equity, where we empower vulnerable communities through educational initiatives, informative programs, and development projects to enhance their social resilience. At Agorà Initiative, we are dedicated to building a digital world where everyone can thrive, free from the threats of misinformation and online harm. Join us in our mission to create a safer, more equitable, and more informed online community.',
        indipendece: 'At Agorà Initiative, we uphold stringent safeguards to preserve our independence and impartiality. Our governance structure includes a diverse board and transparent fundraising practices, ensuring that we remain free from undue influence. Our conflict of interests policy and operational guidelines further support our commitment to neutrality. We enforce restrictions on accepting gifts and other advantages that could compromise our integrity, and we do not allow political affiliations or activities that could influence our work. Our team is meticulously selected for their dedication to these values, ensuring that every piece of content we produce is unbiased and fact-based. We invite our audience to critically evaluate both our individual publications and our overall work.  We remain vigilant against potential conflicts of interest or biases from the experts or organizations we reference. Our staff is advised against making political statements under the auspices of Agorà Initiative and is instructed not to accept any gifts or favors that could affect their professional judgment. By adhering to these principles, Agorà Initiative strives to foster a well-informed public discourse, crucial for a healthy democratic process.',
        funding: 'Agorà Initiative is a non-profit organization dedicated to promoting informed public discourse. We are supported by generous contributions from individuals, charitable trusts, and various funding entities. Detailed information about our sources of funding is transparently provided on our website.Operating Expenses.Our operational costs primarily involve staff salaries and maintaining our office space in London. This strategic location enables us to efficiently collaborate with central government bodies and major media outlets, minimizing the need for extensive travel. We incur standard organizational overheads including computer equipment, internet services, and accounting expenses. We express our profound gratitude to everyone who contributes financially, making our initiatives possible.NeutralityAgorà Initiative adheres to strict guidelines to ensure our neutrality. These protocols are developed with insights from our advisory board and inspired by standards set by organizations like Amnesty International and the BBC. Our framework includes a bipartisan board, stringent fundraising practices, a conflict of interest policy, and limits on staff political activities. We also implement thorough feedback mechanisms, operational guidelines, and external audits. A key aspect of our approach is the meticulous selection of staff who are committed to upholding these standards.We encourage our audience to evaluate the credibility of our work independently. Our fact-checks and comprehensive reports are available for review, with links to all sources provided for verification purposes.Support from IndividualsWe deeply appreciate the financial support from our readers, who contribute significantly to Agorà Initiative every month. Your donations are crucial in enabling us to expand our fact-checking activities and continue our mission.Funders.Our heartfelt thanks go out to all our funders. Contributions exceeding £5,000 are transparently listed on our website, specifying the amounts donated and their intended uses.Please rest assured that our funders have no influence over our editorial content or decision-making processes. Your ongoing support ensures that we can maintain our commitment to providing accurate and unbiased information, essential for a healthy democratic society.',
        our_team: 'This is the content for Our team.'
    };

    return (
        <>
            <Head title="Agorà Initiative" />
            <Navbar />
            <div style={{ padding: "0 200px" }} className="text-black">
                <main className="flex">
                    <section style={{ width: '60%', paddingRight: '100px' }}>
                        <p>{contentMap[selectedId]}</p>
                    </section>
                    <section style={{ width: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor:"red" }}>
                        <ul>
                            <li style={{ paddingTop: "20px" }}>
                                <button 
                                    onClick={() => handleButtonClick('who_we_are')}
                                    style={{ fontWeight: selectedId === 'who_we_are' ? 'bold' : 'normal' }}
                                >
                                    Who we are
                                </button>
                            </li>
                            <li style={{ paddingTop: "20px" }}>
                                <button 
                                    onClick={() => handleButtonClick('indipendece')}
                                    style={{ fontWeight: selectedId === 'indipendece' ? 'bold' : 'normal' }}
                                >
                                    Indipendece
                                </button>
                            </li>
                            <li style={{ paddingTop: "20px" }}>
                                <button 
                                    onClick={() => handleButtonClick('funding')}
                                    style={{ fontWeight: selectedId === 'funding' ? 'bold' : 'normal' }}
                                >
                                    Funding
                                </button>
                            </li>
                            <li style={{ paddingTop: "20px" }}>
                                <button 
                                    onClick={() => handleButtonClick('our_team')}
                                    style={{ fontWeight: selectedId === 'our_team' ? 'bold' : 'normal' }}
                                >
                                    Our team
                                </button>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </>
    );
}