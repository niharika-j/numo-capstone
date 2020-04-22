import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Pagination from '../Pagination/Pagination';
import './Background.scss';
import backgroundResearchLandingBG from '../../assets/images/background-research-header-bg.png';
import bgApproach1 from '../../assets/images/bg-approach-1.png';
import keyTakeaways from '../../assets/images/key-takeaways.png';
import stakeholderMap from '../../assets/images/stakeholder-map.png';

class Background extends React.Component {
  render() {

    const approach = "While our team had some cursory knowledge of the fintech industry, we recognized the fact that to be able to come up with an innovative idea, we need to have a more comprehensive idea of the fintech industry, especially of topics pertaining to CLOs. The team approached this with a divide and conquer strategy. We first listed down all the topics for Secondary Research. Next, we divided them amongst us and decided to research our topics individually. Each person would share their findings with the rest of the team. Some of the topics we covered in background research were-";
    const topics = ["Demographics of people using debit vs. credit cards", "Existing metrics for CLOs", "Competitive analysis for CLOs", "Publisher apps"];
    const takeawayData = {
      clo: {
        sectionHeader: true,
        title: "Card-linked Offers",
        takeaways: ["Card-linked offers are the second most popular advertising channel after social media marketing.", "According to a survey by Cardlinx, card-linked offers in mobile wallets is the most promising technology for online-to-offline commerce.", "Restaurants, department stores and clothing/apparel are the merchant types who use card-linked offers the most.", "62.5% of merchant respondents in the survey by Cardlinx reported $1B - $10B retail sales tied to CLOs."],
        image: keyTakeaways,
        altText:  "research"
      },
      publishers: {
        sectionHeader: false,
        title: "Publishers",
        takeaways: ["Publisher apps are mobile apps that offer cashback deals for credit and/or debit cards. Some popular publisher apps are Dosh, Ibotta, Rakuten and Pei.", "Average cash back offered on Dosh is 2-3%. Some merchants put a cap on how much cumulative cashback a customer can get.", "Some publisher apps like Pei apply CLOs automatically on purchases. It also detects local offers using GPS.", "There are B2B(business-to-business) publishers like Cardlytics, which partner with banking institutions to help them run their rewards programs."],
        image: keyTakeaways,
        altText:  "research"
      }
    };
    const stakeholderDesc = "Based on our background research, we created our first iteration of the stakeholder diagram during the kickoff meeting with our clients-";

    //Function to generate key takeaways block
    const generateTakeawayBlock = (obj, alignText="left", bg="none") => {
      return (
        <div className={bg==="none"?"takeaways-block":"takeaways-block set-white-bg"}>
          {obj.sectionHeader && 
           <div className="takeaways-header">Key Takeaways</div>
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
          <img src={backgroundResearchLandingBG} className="landing-background" alt="merchant interview" />
          <div className="page-name">Background Research</div>
        </div>

        <div className="approach">
          <div className="approach-title">Our approach</div>
          <div className="approach-content">{approach}</div>
          <div className="topics">
            <div className="topics-list">
              {topics.map((topic, index) => {
                return (
                  <div key={"topic" + index} className="topic">
                    <div className="topic-number">{index + 1}.</div>
                    <div>{topic}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <Carousel showStatus={false} showThumbs={false}>
                <div>
                    <img src={bgApproach1} alt="merchant interview" />
                </div>
                <div>
                    <img src={backgroundResearchLandingBG} alt="merchant interview" />
                </div>
            </Carousel>
        </div>

        {generateTakeawayBlock(takeawayData.clo)}

        {generateTakeawayBlock(takeawayData.publishers, "right", "white")}

        <div className="stakeholder">
          <div className="stakeholder-title">Stakeholder Diagram</div>
          <div className="stakeholder-text">{stakeholderDesc}</div>
          <img src={stakeholderMap} alt="stakeholder map" />
        </div>

        <Pagination next="Merchant Research" nextUrl="/merchants"  />
      </div>
    );
  }
}

export default Background;
