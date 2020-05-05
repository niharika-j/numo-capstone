import React from 'react';
import './Prototypes.scss';
import Pagination from '../Pagination/Pagination';
import prototypeLandingBG from '../../assets/images/prototypes-landing-bg.png';
import ideatingBG from '../../assets/images/ideating-bg.png';
import conceptualPrototypeImg from '../../assets/images/conceptual-prototype-img.png';
import storyboardsImg from '../../assets/images/storyboards.png';
import consumerSpeedDatingBG from '../../assets/images/consumer-speed-dating-bg.png';
import speedDatingImg from '../../assets/images/speed-dating.png';
import storyboards2Img from '../../assets/images/storyboards-2.png';
import speedDating2Img from '../../assets/images/speed-dating-2.png';
import validateAssumptionsBG from '../../assets/images/validate-assumptions-bg.png';
import storyboards3Img from '../../assets/images/storyboards-3.png';
import speedDating3Img from '../../assets/images/speed-dating-3.png';
import prototypesBG from '../../assets/images/prototypes-bg.png';
import refinedPrototype1 from '../../assets/images/refined-prototype-1.png';
import refinedPrototype2 from '../../assets/images/refined-prototype-2.png';
import restaurantConsumer1 from '../../assets/images/restaurant-consumer-1.png';
import restaurantConsumer2 from '../../assets/images/restaurant-consumer-2.png';
import restaurantConsumer3 from '../../assets/images/restaurant-consumer-3.png';
import restaurantMerchant1 from '../../assets/images/restaurant-merchant-1.png';
import restaurantMerchant2 from '../../assets/images/restaurant-merchant-2.png';
import investmentConsumer1 from '../../assets/images/investment-consumer-1.png';
import investmentConsumer2 from '../../assets/images/investment-consumer-2.png';
import investmentConsumer3 from '../../assets/images/investment-consumer-3.png';
import investmentMerchant1 from '../../assets/images/investment-merchant-1.png';
import investmentMerchant2 from '../../assets/images/investment-merchant-2.png';
import restaurantMobileConsumer from '../../assets/images/restaurant-consumer-mobile.png';
import investmentMobileConsumer from '../../assets/images/investment-consumer-mobile.png';

class Prototypes extends React.Component {
  render() {
    const  pageDescription =  "After so much research it was time to start putting all insights to work and creating prototypes.  We had come up with several insights revolving around both consumer and merchant outlooks and behavior that could direct our reframing of the problem and lead us to a high level solution involving card linked offers.";
    const approach = "To better understand our users we carried out an intensive set of research that involved guerilla semi-structured interviews, booth interviews using TAP (Think Aloud Protocol), surveys, and interviews.";
    const methods = [
      {
        name: "Ideating",
        desc: "Using Crazy 8s to rapidly generate ideas"
      },
      {
        name: "Validate needs with storyboards - Merchants",
        desc: "Creating storyboards, speed-dating and iterating"
      },
      {
        name: "Concept prototypes",
        desc: "Narrowing down to 2 ideas"
      }
    ];
    const imageBlurbData = {
      ideating: {
        title: "Ideating",
        description: "",
        image: ideatingBG,
        altText: "Ideas on whiteboard"
      },
      speedDating: {
        title: "Consumer Speed Dating and Iteration",
        description: "",
        image: consumerSpeedDatingBG,
        altText: "speed dating session"
      },
      validateAssumptions: {
        title: "Validate assumptions through storyboards- Merchants",
        description: "",
        image: validateAssumptionsBG,
        altText: "storyboards"
      },
      prototypes: {
        title: "Prototypes",
        description: "",
        image: prototypesBG,
        altText: "prototypes"
      }
    };
    const infoBlockData = {
      conceptualPrototype: {
        title: "Conceptual Prototypes",
        desc: "We created a matrix where we broke down user and consumer needs/wants (what) as well as mediums for delivering these (how).  We came up with two merchant and two consumer ideas from these and we created low/mid fidelity wireframes for these.  However, when we presented these to our numo contacts we received the feedback that we were still stuck in the basic idea of cashback and advertising instead of trying to go beyond.  We decided more ideating was needed.",
        image: conceptualPrototypeImg,
        altText: "prototypes"
      },
      storyboards: {
        title: "Crazy 8's and Storyboards",
        desc: "We started off our ideating with a session of crazy 8’s (where each person quickly sketches out eight new ideas).  We then voted on these as a group and chose a few consumer and a few merchant ideas.  For each of these ideas we created one risky and one safe storyboard.  We made sure each storyboard had a “how might we statement”- meant to validate a consumer need.  Our next step was to actually test these storyboards.",
        image: storyboardsImg,
        altText: "storyboards"
      },
      speedDating: {
        title: "Consumer Speed Dating",
        desc: "For testing, we reached out to previous interviewees as well as new participants we reached through social media.  We set up each story board with several questions designed to better understand the interviewees feelings and experiences, which we asked during the interview.  From our speed dating session we found the most popular ideas centered around personalized cashback offers and a budgeting and saving app.  Again we still felt we hadn’t fully realized the potential of card linked offers so we decided to iterate once more.",
        image: speedDatingImg,
        altText: "speed dating"
      },
      storyboards2: {
        title: "More Consumer Storyboards and Prototyping",
        desc: "Individually, we tasked ourselves with coming up with new higher level ideas and reconvened to discuss them.  As a group we came up with very many ideas, which we voted on to narrow it down to five.  From these ideas we again created storyboards with “how might we” statements to validate user needs.  We also created simple low fidelity prototypes to go with our storyboards.  The purpose of these was to see if interviewees changed their mind, or had a better understanding if they saw an actual prototype.",
        image: storyboards2Img,
        altText: "storyboards iteration 2"
      },
      speedDating2: {
        title: "More Consumer Speed Dating",
        desc: "Again we needed to confirm consumer needs and feelings so we recruited interviewees- mainly from social media.  We showed all our participants the storyboards first, and then the prototypes in the second half. Overall, users liked the idea of the restaurant tracking idea, especially those who liked to try out new restaurants and support local businesses. The idea that got the most negative feedback was a debit-card linked profile idea. Most users thought it felt too intrusive, and felt skeptical about sharing too much information.",
        image: speedDating2Img,
        altText: "speed dating with second iteration of prototypes"
      },
      storyboards3: {
        title: "Storyboards",
        desc: "We also developed several merchant storyboards for the ideas generated from our crazy 8’s as well as our later idea generation session. These were all set up in the same way as the consumer storyboards witht the “how might we” statement and needs to be tested.",
        image: storyboards3Img,
        altText: "storyboards"
      },
      speedDating3: {
        title: "Speed Dating",
        desc: "When we tested the merchant storyboards, we tested on a variety of new merchants. We found that merchants were most interested in the idea of some form of raffle (or rewarding shopping) and using their PoS to promote their business.",
        image: speedDating3Img,
        altText: "speed dating"
      }
    };
    const prototypeInsights = ["Merchants need a way to calculate value of marketing using CLOs. They do not trust the existing reports by rewards programs and believe that they take credit of their returning customers.", "POS systems can potentially help merchants gain trust in rewards programs.", "Local merchants are struggling to compete with online retail giants like Amazon."];
    const prototypeInsights2 = ["Merchants need a way to calculate value of marketing using CLOs. They do not trust the existing reports by rewards programs and believe that they take credit of their returning customers.", "POS systems can potentially help merchants gain trust in rewards programs.", "Local merchants are struggling to compete with online retail giants like Amazon."];
    const refiningDesc = "After the consumer speed dating session our next step was to narrow down our ideas so that we weren’t spread too thin going forward. Based on consumer feedback, we chose the “restaurant passport” idea because of the unanimous positive feedback. This idea was centered around the idea of users getting deals at restaurants they had not yet been too. Additionally, after receiving positive feedback from the faculty and client, we decided to pursue the investment idea. In this idea users can invest their money in local businesses.";
    const fleshingPrototypeDesc = "Our next step was to develop the prototypes we made for the consumer storyboards and work on the merchant side and consider the merchant needs we found.  We created these screens in high fidelity.";


    //Function to generate image blurb for Prototyping and Our Team sections
    const generateImageBlurb = (obj) => {
      return (
        <div className="image-blurb">
          <img src={obj.image} className="image-blurb-bg" alt={obj.altText} />
          <div className="image-blurb-title">{obj.title}</div>
          <div className="image-blurb-desc">{obj.description}</div>
        </div>
      )
    };

    //Function to generate info blocks
    const generateInfoBlock = (obj, alignText="left", bg="none") => {
      return (
        <div className={bg==="none"?"info-block":"info-block set-white-bg"}>
          
          {(alignText==="left" || window.screen.width<=420)?
            <div className="info-content">
              <div className="info-text">
                <div className="info-title">{obj.title}</div>
                <div className="info-desc">{obj.desc}</div>
              </div>
              <div className="info-image">
                <img src={obj.image} alt={obj.altText} />
              </div>
            </div>
            :
            <div className="info-content">
              <div className="info-image">
                <img src={obj.image} alt={obj.altText} />
              </div>
              <div className="info-text">
                <div className="info-title">{obj.title}</div>
                <div className="info-desc">{obj.desc}</div>
              </div>
            </div>
          }
        </div>
      );
    }

    return (
      <div className="prototypes-page">

        <div className="landing-title">
          <img src={prototypeLandingBG} className="landing-background" alt="prototypes" />
          <div className="page-name">Move from Research to Prototype</div>
          <div className="page-desc">{pageDescription}</div>
        </div>

        <div className="approach">
          <div className="approach-title">Our approach</div>
          <div className="approach-content">{approach}</div>
          <div className="methods">
            <div className="methods-list">
              {methods.map((method, index) => {
                return (
                  <div key={"method" + index} className="method">
                    <div className="method-number">{index + 1}.</div>
                    <div className="method-title">{method.name}</div>
                    <div className="method-desc">{method.desc}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {generateImageBlurb(imageBlurbData.ideating)}
        {generateInfoBlock(infoBlockData.conceptualPrototype)}
        {generateInfoBlock(infoBlockData.storyboards, "right", "white")}

        {generateImageBlurb(imageBlurbData.speedDating)}
        {generateInfoBlock(infoBlockData.speedDating)}
        {generateInfoBlock(infoBlockData.storyboards2, "right", "white")}
        {generateInfoBlock(infoBlockData.speedDating2)}

        <div className="prototypes-insights-block">
          <div className="prototypes-insights-title">Insights</div>
          <div className="prototypes-insights">
            <div className="prototypes-insights-list">
              {prototypeInsights.map((prototypeInsight, index) => {
                return (
                  <div key={"prototypes-insight" + index} className="prototypes-insight">
                    <div className="prototypes-insight-number">{index + 1}.</div>
                    <div className="prototypes-insight-desc">{prototypeInsight}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {generateImageBlurb(imageBlurbData.validateAssumptions)}
        {generateInfoBlock(infoBlockData.storyboards3)}
        {generateInfoBlock(infoBlockData.speedDating3, "right", "white")}

        <div className="prototypes-insights-block">
          <div className="prototypes-insights-title">Insights</div>
          <div className="prototypes-insights">
            <div className="prototypes-insights-list">
              {prototypeInsights2.map((prototypeInsight, index) => {
                return (
                  <div key={"prototypes-insight" + index} className="prototypes-insight">
                    <div className="prototypes-insight-number">{index + 1}.</div>
                    <div className="prototypes-insight-desc">{prototypeInsight}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {generateImageBlurb(imageBlurbData.prototypes)}

        <div className="refining-block">
          <div className="refining-title">Narrowing Down and Refining Ideas</div>
          <div className="refining-desc">{refiningDesc}</div>
          <div className="refining-images">
            <div className="refining-image2-container"><img src={refinedPrototype1} alt="refined prototypes" /></div>
            <div className="refining-image2-container"><img src={refinedPrototype2} alt="refined prototypes" /></div>
          </div>
        </div>

        <div className="refining-block set-white-bg">
          <div className="refining-title">Fleshing out the Prototypes</div>
          <div className="refining-desc">{fleshingPrototypeDesc}</div>
          <div className="refining-header">Restaurant Idea: Consumer</div>
          <div className="refining-images">
            { (window.screen.width <= 420) ? 
              <div className="refining-image3-block">
                <div className="refining-image3-container"><img src={restaurantMobileConsumer} alt="refined restaurant prototypes" /></div>
              </div>
            :
              <div className="refining-image3-block">
                <div className="refining-image3-container"><img src={restaurantConsumer1} alt="refined restaurant prototypes" /></div>
                <div className="refining-image3-container"><img src={restaurantConsumer2} alt="refined restaurant prototypes" /></div>
                <div className="refining-image3-container"><img src={restaurantConsumer3} alt="refined restaurant prototypes" /></div>
              </div>
            }
          </div>
          <div className="refining-header">Restaurant Idea: Merchant</div>
          <div className="refining-images">
            <div className="refining-image2-container"><img src={restaurantMerchant1} alt="refined restaurant prototypes" /></div>
            <div className="refining-image2-container"><img src={restaurantMerchant2} alt="refined restaurant prototypes" /></div>
          </div>
          <div className="refining-header">Investment Idea: Consumer</div>
          <div className="refining-images">
            { (window.screen.width <= 420) ? 
              <div className="refining-image3-block">
                <div className="refining-image3-container"><img src={investmentMobileConsumer} alt="refined investment prototypes" /></div>
              </div>
              :
              <div className="refining-image3-block">
                <div className="refining-image3-container"><img src={investmentConsumer1} alt="refined investment prototypes" /></div>
                <div className="refining-image3-container"><img src={investmentConsumer2} alt="refined investment prototypes" /></div>
                <div className="refining-image3-container"><img src={investmentConsumer3} alt="refined investment prototypes" /></div>
              </div>
            }
          </div>
          <div className="refining-header">Investment Idea: Merchant</div>
          <div className="refining-images">
            <div className="refining-image2-container"><img src={investmentMerchant1} alt="refined investment prototypes" /></div>
            <div className="refining-image2-container"><img src={investmentMerchant2} alt="refined investment prototypes" /></div>
          </div>
        </div>

        <div className="refining-block">
          <div className="refining-title">Next Steps</div>
          <div className="refining-desc">With these prototypes, we wrapped up spring semester. Our next steps are to-
            <ul>
              <li>Continue to test and validate existing prototypes</li>
              <li>Determine one direction and iterate on prototype</li>
              <li>Create roadmap for strategy and future milestones</li>
            </ul> 
          </div>
        </div>

        <Pagination previous="Consumer Research" previousUrl="/consumers" next="About Us" nextUrl="/team"  />

      </div>
    );
  }
}

export default Prototypes;
