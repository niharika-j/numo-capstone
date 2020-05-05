import React from 'react';
import Pagination from '../Pagination/Pagination';
import './Merchants.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import merchantLandingBG from '../../assets/images/merchant-title-bg.png';
import semiStructuredInterviewBG from '../../assets/images/semi-structured-interviews-bg.png';
import semiStructuredInterviewMobileBG from '../../assets/images/talk-to-consumers-mobile-bg.png';
import merchant1 from '../../assets/images/merchant1.png';
import merchant2 from '../../assets/images/merchant2.png';
import merchant3 from '../../assets/images/merchant3.png';
import merchant4 from '../../assets/images/merchant4.png';
import merchant5 from '../../assets/images/merchant5.png';
import merchant6 from '../../assets/images/merchant6.png';
import semiStructuredMerchantInterview from '../../assets/images/semi-structured-merchant-interview.png';
import merchantInterpretationSession from '../../assets/images/merchant-interpretation-session.png';
import merchantPersona1 from '../../assets/images/merchant-persona-1.jpg';
import merchantPersona2 from '../../assets/images/merchant-persona-2.jpg';

class Merchants extends React.Component {
  render() {
    const pageDescription = "After establishing knowledge of the world of card linked offers, our next step was to go out and talk to our stakeholders about these card linked offers to better understand the public knowledge and feelings surrounding them.";
    const approach = "We used a variety of methods to learn more about one of our primary stakeholders: the merchant.  We also chose to focus on smaller merchants as they are underrepresented in the CLO space, and stand to gain the most from optimized CLO programs.  The methodologies we used to gain a deeper understanding of merchants are listed in order:";
    const semiStructuredDesc = "To quickly learn about the role that CLOs play in businesses, we performed Guerilla Research with merchants. We contacted most of these merchants by cold calling them which could be very challenging at times.  In these semi structure interviews some of the questions we asked them about involved:";
    const semiQuestions = ["Their experience with marketing of any form", "Their awareness of CLO’s", "Their use of PoS systems", "Their current struggles"];
    const methods = [
      {
        name: "Semi-structured Interviews",
        desc: "Interviews that have scripted questions but allow for flexibility and for the interviewer to delve deeper into certain aspects of the interviewees response."
      },
      {
        name: "Super-Merchant Interview",
        desc: "An interpretation session is a means to organize and synthesize the information from interviews in order to find high level insights."
      },
      {
        name: "Interpretation Session",
        desc: "A semi-structured interview conducted with a super merchant-  a merchant very experienced in marketing."
      },
      {
        name: "Persona",
        desc: "Personas are archetypes of the people we interview and serve to remind us of the real needs of our real users."
      }
    ];
    const imageBlurbData = {
      "semiStructuredInterviews": {
        title: "Semi-structured Interviews",
        description: "",
        image: semiStructuredInterviewBG,
        altText: "Conducting semi-structured interview with merchant",
        mobileImg: semiStructuredInterviewMobileBG
      },
      "merchantInterpretation": {
        title: "Interpretation Session",
        description: "The notes and audio recordings taken during guerilla research and semi-structured interviews were used by the team to create interpretation notes for each interview. We used these interpretation notes to create an affinity diagram and synthesize our findings.",
        image: merchantInterpretationSession,
        altText: "Conducting interpretation session for merchant research"
      }
    };
    // const interviewQuotes = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"];
    const  superMerchantDesc = "To understand how merchants who are very active in marketing themselves feel about CLOs, we conducted a semi-structure interview with a ‘super merchant’. We defined ‘super merchant as a merchant who was very proactive and knowledgable in the field of marketing.  Some key takeaways from this interview were-";
    const superMerchantTakeaways = ["Merchants want more control over where their business is advertised.", "Business owners who are very involved in marketing may want ways to develop value metrics for CLOs that are unique to their business.", "Symbiotic partnerships with other local businesses targeting similar customer segments is another preferred way for marketing."];
    const merchantInsights = ["Merchants need a way to calculate value of marketing using CLOs. They do not trust the existing reports by rewards programs and believe that they take credit of their returning customers.", "POS systems can potentially help merchants gain trust in rewards programs.", "Local merchants are struggling to compete with online retail giants like Amazon."];
    const merchantPersonaDesc = "Based on this research, we will develop these two personas for merchants. The first persona is Jasmine, a newer small merchant who is trying to bring in more customers.  The second persona is Joy, a more long term business owner who struggles in competing with large store and companies. These personas will help guide our work in the future.";


    //Function to generate image blurb for Prototyping and Our Team sections
    const generateImageBlurb = (obj) => {
      return (
        <div className="image-blurb">
          {
            (window.screen.width <= 420 && obj.mobileImg) ?
            <img src={obj.mobileImg} alt={obj.altText} />
            :
            <img src={obj.image} className="image-blurb-bg" alt={obj.altText} />
          }
          <div className="image-blurb-title">{obj.title}</div>
          <div className="image-blurb-desc">{obj.description}</div>
        </div>
      )
    }

    return (
      <div className="merchant-research-page">
        <div className="landing-title">
          <img src={merchantLandingBG} className="landing-background" alt="merchant interview" />
          <div className="page-name">Primary Research: Merchants</div>
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

        {generateImageBlurb(imageBlurbData["semiStructuredInterviews"])}

        <div className="semi-structured-interviews-block">
          <div className="semi-subheader">Guerilla Research</div>
          <div className="semi-desc">{semiStructuredDesc}</div>
          <ul>
            {semiQuestions.map((question, index) => {
              return (
                <li key={"semi-question-" + index}>{question}</li>
              )
            })}
          </ul>
          <div className="semi-subheader">Who we talked to</div>
          <div className="semi-images">
              <img src={merchant1} alt="merchant logo" />
              <img src={merchant2} alt="merchant logo" />
              <img src={merchant3} alt="merchant logo" />
              <img src={merchant4} alt="merchant logo" />
              <img src={merchant5} alt="merchant logo" />
              <img src={merchant6} alt="merchant logo" />
          </div>
          {/* <div className="semi-subheader">What do people say?</div>
          <div className="semi-quote-list">
            {interviewQuotes.map((quote, index) => {
              return (
                <div key={"quote" + index} className="quote">"{quote}"</div>
              )
            })}
          </div> */}
          <img src={semiStructuredMerchantInterview} className="merchant-interview-img" alt="semi structured interview with merchant" />
        </div>

        {generateImageBlurb(imageBlurbData["merchantInterpretation"])}

        <div className="merchant-insights-block">
          <div className="merchant-insights-title">Insights</div>
          <div className="merchant-insights">
            <div className="merchant-insights-list">
              {merchantInsights.map((merchantInsight, index) => {
                return (
                  <div key={"merchant-insight" + index} className="merchant-insight">
                    <div className="merchant-insight-number">{index + 1}.</div>
                    <div className="merchant-insight-desc">{merchantInsight}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="super-merchant-block">
          <div className="super-merchant-title">Super Merchant Interview</div>
          <div className="super-merchant-desc">{superMerchantDesc}</div>
          <div className="super-merchant-takeaways">
            <div className="super-merchant-takeaways-list">
              {superMerchantTakeaways.map((superMerchantTakeaway, index) => {
                return (
                  <div key={"super-merchant-takeaway" + index} className="super-merchant-takeaway">
                    <div className="super-merchant-takeaway-number">{index + 1}.</div>
                    <div className="super-merchant-takeaway-desc">{superMerchantTakeaway}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="merchant-persona-block">
          <div className="merchant-persona-title">Merchant Personas</div>
          <div className="merchant-persona-desc">{merchantPersonaDesc}</div>
          <Carousel showArrows={true}>
            <div>
                <img src={merchantPersona1} alt="Merchant persona- Jasmine" />
            </div>
            <div>
                <img src={merchantPersona2} alt="Merchant persona- Joy" />
            </div>
          </Carousel>
        </div>

        <Pagination previous="Background Research" previousUrl="/background" next="Consumer Research" nextUrl="/consumers"  />
      </div>
    );
  }
}

export default Merchants;
