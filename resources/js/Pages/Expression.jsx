import { Link, Head } from '@inertiajs/react';
import { Link as ScrollLink } from 'react-scroll';
import '../../css/app.css';
import Footer from './Footer';
import HeaderPage from './HeaderPage';
import SectionArticleList from './SectionArticleList';

export default function Welcome({ auth, articles }) {

    return (
        <>
            <Head title="Agorà Initiative" />
                <HeaderPage 
                    title="Expression" 
                    description="We believe in the immense potential of the web and social media to connect the world. However, we are also acutely aware of the dangers posed by the unconscious or malicious use of these tools. We protect users identifying and countering disinformation, misinformation, and hate speech by launching counteractive campaigns that provide positive messages. We also aim to expose the true forces behind these manipulative campaigns to ensure that the digital space remains a place of integrity and informed decision-making."
                />
            <div style={{ padding: "100px 200px" }} className="text-black">
                <main >


                <p>
                In today’s interconnected world, the power of information has never been more potent nor its misuse more dangerous. The rise of digital media platforms has transformed the way we communicate, learn, and interact, offering unprecedented access to information. However, this same accessibility has also paved the way for disinformation, hate speech, and deep societal polarization to spread at alarming rates. The dangers posed by these distortions are not just virtual; they have tangible effects on public health, democracy, and social cohesion.    
                </p>
                
                <p>Disinformation and hate speech fuel mistrust in societal institutions and scientific consensus, undermining democracy and public safety. They warp individual perceptions of reality, leading to confusion and fear. Polarization, intensified by echo chambers on social media platforms, further entrenches divisions, making constructive dialogue nearly impossible. This division is not accidental but often a product of deliberate campaigns designed to manipulate public opinion for political gain or financial profit.
                </p>

                <p>The urgency to combat these destructive forces is not merely about correcting falsehoods but about preserving the fabric of society itself. To address this, our organization has taken a proactive stance through a comprehensive strategy aimed at dismantling the mechanisms of misinformation and promoting a culture of truth and respect online.</p>

                <h2 style={{fontSize:"22px", marginTop:"25px"}}>Our Strategic Approach</h2>
                <br />
                <strong>Proactive Monitoring</strong> Utilizing sophisticated social listening tools, we analyze millions of posts across various platforms to detect emerging trends of disinformation and hate speech. Then through the use of advanced analytics, we delve deep into data to understand patterns and identify the sources of misleading campaigns. This rigorous analysis helps us map out the networks that propagate harmful content. 
                <br />
                <strong>Counter-Narratives and exposing the source of maliciouse campaign</strong> 
                We respond rapidly before these messages gain traction counters misinformation with launching viral and factual information campaing builded with indipendent fact-checking entities. As a major part of our strategy about people who exhibit confirmation bias we expose also the sources and motives behind the organized disinformation and hate speech campaign. When people discover the sources and intentions behind the information they’ve been exposed to, it can often lead to a feeling that they do not have full control over their own opinions. This realization can be unsettling as it challenges the autonomy they presume to have over their thoughts and beliefs.
                <br />
                <strong>Ongoing Vigilance</strong>The digital landscape is ever-evolving, and so are the tactics used by those spreading disinformation. Continuous monitoring and adaptive strategies are essential to stay ahead of new threats.

                <h2 style={{fontSize:"22px", marginTop:"25px"}}>The Road Ahead</h2>
                As we advance in our mission, the challenges we face are significant but not insurmountable. With each step forward, we are making strides toward a more informed and less divided society. Join us as we continue to fight for a future where truth prevails, and digital spaces foster understanding rather than discord.

                Our commitment to combating disinformation and hate speech is unwavering. Together, with the support of the community and continuous innovation in our approaches, we can ensure that the digital world remains a force for good.
                </main>
                <div style={{marginTop:"50px"}}>
                    <SectionArticleList articles={articles} />
                </div>
            </div>
            
            <div style={{marginTop:"150px"}}>
                <Footer />
            </div>
        </>
    );
}