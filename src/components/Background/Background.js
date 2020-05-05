import React from 'react';
import Pagination from '../Pagination/Pagination';
import './Background.scss';
import backgroundResearchLandingBG from '../../assets/images/background-research-header-bg.png';
import bgApproach1 from '../../assets/images/bg-approach-1.png';
import takeawayCLO from '../../assets/images/takeaways-clo.png';
import takeawayPublisher from '../../assets/images/takeaways-publisher.png';
import stakeholderMap from '../../assets/images/stakeholder-map.png';

class Background extends React.Component {
  render() {

    const pageDescription = "While our team had some cursory knowledge of the fintech industry, we recognized the fact that to be able to come up with an innovative idea, we need to have a more comprehensive idea of the Card Linked Offer space.";
    const approach = "We recognized the fact that to be able to come up with an innovative idea, we need to have a more comprehensive idea of the Card Linked Offer space. Our team approached this with a divide and conquer strategy with each person taking on a different topic.  Some of the topics we covered in background research were-";
    const topics = [
      {
        name: "What are card-linked offers",
        desc: "What exactly is a card-linked offer and why is it such an important problem space?"
      },
      {
        name: "Mediums for CLO’s",
        desc: "How do consumers get access to and experience card linke offers. There are two main categories: bank CLO’s and publisher apps."
      },
      {
        name: "Stakeholder Diagram",
        desc: "Our problem space is incredibly context, so for our own sake and yours we boiled it down to the most important stakeholders and the value exchanges."
      }
    ];
    const cloPoints = ["Card-linked offers (CLO’s) are a form of deal that is attached to one’s card.  This deal is received automatically with the use of that card, usually in the form of cash back.", "Card-linked offers are the second most popular advertising channel after social media marketing.", "According to a survey by Cardlinx, card-linked offers in mobile wallets is the most promising technology for online-to-offline commerce.", "Restaurants, department stores and clothing/apparel are the merchant types who use card-linked offers the most.", "62.5% of merchant respondents in the survey by Cardlinx reported $1B - $10B retail sales tied to CLOs."];
    const mediumData = {
      bank: {
        sectionHeader: true,
        title: "Bank Card-linked Offers",
        takeaways: ["Bank offers must be activated before they can be applied to the user’s purchase", "Banks offer limited deals, with an expiration date of about 2 weeks from activation.", "The customer saved money in the form of cash back which averages around 5% of the total purchase.", "There are B2B(business-to-business) publishers like Cardlytics, which partner with banking institutions to help a middle man between banks and merchants."],
        image: takeawayCLO,
        altText: "research"
      },
      publishers: {
        sectionHeader: false,
        title: "Publisher  apps",
        takeaways: ["Publisher apps are mobile apps that offer cashback deals for credit and/or debit cards. Some popular publisher apps are Dosh, Ibotta, Rakuten and Pei.", "Average cash back offered on Dosh is 2-3%. Some merchants put a cap on how much cumulative cashback a customer can get.", "Some publisher apps like Pei apply CLOs automatically on purchases. It also detects local offers using GPS.", "Publisher apps either have direct connections to merchants or access them through partnerships with rewards programs like Internation Hotels Group or Rewards Network."],
        image: takeawayPublisher,
        altText:  "research"
      }
    };
    const stakeholderDesc = "Based on our background research, we created our first iteration of the stakeholder diagram during the kickoff meeting with our clients-";

    //Function to generate key takeaways block
    const generateMediumBlock = (obj, alignText="left", bg="none") => {
      return (
        <div className={bg==="none"?"takeaways-block":"takeaways-block set-white-bg"}>
          {obj.sectionHeader && 
           <div className="takeaways-header">Mediums for CLOs</div>
          }
          
          {alignText==="left"?
            <div className="takeaways-content">
              <div className="takeaways-text">
                <div className="takeaways-title">{obj.title}</div>
                <ul className="takeaways-list">
                {obj.takeaways.map((takeaway, index) => {
                  return (
                    <li key={obj.title + "-takeaway-" + index}>{takeaway}</li>
                  )
                })}
                </ul>
              </div>
              <div className="takeaways-image">
                <img src={obj.image} alt={obj.altText} />
              </div>
            </div>
            :
            <div className="takeaways-content">
              <div className="takeaways-image">
                <img src={obj.image} alt={obj.altText} />
              </div>
              <div className="takeaways-text">
                <div className="takeaways-title">{obj.title}</div>
                <ul className="takeaways-list">
                {obj.takeaways.map((takeaway, index) => {
                  return (
                    <li key={obj.title + "-takeaway-" + index}>{takeaway}</li>
                  )
                })}
                </ul>
              </div>
            </div>
          }
        </div>
      );
    }

    return (
      <div className="background-research">
        <div className="landing-title">
          <img src={backgroundResearchLandingBG} className="landing-background" alt="team discussion about background research" />
          <div className="page-name">Background Research</div>
          <div className="page-desc">{pageDescription}</div>
        </div>

        <div className="approach">
          <div className="approach-title">Our approach</div>
          <div className="approach-content">{approach}</div>
          <div className="topics">
            <div className="topics-list">
              {topics.map((topic, index) => {
                return (
                  <div key={"BGtopic" + index} className="topic">
                    <div className="topic-number">{index + 1}.</div>
                    <div className="topic-title">{topic.name}</div>
                    <div className="topic-desc">{topic.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <img src={bgApproach1} alt="merchant interview" />

          <div className="clo-points-block">
            <div className="clo-points-title">What are Card Linked Offers?</div>
            <ul className="clo-points-list">
            {cloPoints.map((point, index) => {
              return (
                <li key={"clo-points-" + index}>{point}</li>
              )
            })}
            </ul>
          </div>
        </div>

        {generateMediumBlock(mediumData.bank, "left", "white")}

        {generateMediumBlock(mediumData.publishers, "right", "white")}

        <div className="stakeholder">
          <div className="stakeholder-title">Stakeholder Diagram</div>
          <div className="stakeholder-text">{stakeholderDesc}</div>
          <img src={stakeholderMap} alt="stakeholder map" />
        </div>

        <Pagination previous="Home page" previousUrl="/" next="Merchant Research" nextUrl="/merchants"  />
      </div>
    );
  }
}

export default Background;
