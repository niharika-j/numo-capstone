import React from 'react';
import './Consumers.scss';
import Pagination from '../Pagination/Pagination';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import consumerLandingBG from '../../assets/images/consumer-landing-bg.png';
import talkToConsumersBG from '../../assets/images/talk-to-consumers-bg.png';
import talkToConsumersMobileBG from '../../assets/images/talk-to-consumers-mobile-bg.png';
import guerillaResearchImg from '../../assets/images/guerilla-research.png';
import boothInterviewImg from '../../assets/images/booth-interview.png';
import interpretationBG from '../../assets/images/interpretation-session-bg.png';
import surveyDetailsImg from '../../assets/images/survey-details.png';
import consumerSuperuserBG from '../../assets/images/consumer-superuser-bg.png';
import consumerPersona1 from '../../assets/images/consumer-persona-1.jpg';
import consumerPersona2 from '../../assets/images/consumer-persona-2.jpg';
import consumerPersona3 from '../../assets/images/consumer-persona-3.jpg';
import consumerPersona4 from '../../assets/images/consumer-persona-4.jpg';


class Consumers extends React.Component {
  render() {
    const pageDescription = "While talking to merchants we were conducting in depth research with consumers as well.  As our second main stakeholder, it was important we understood both sides of card-linked offers.  It can feel like there is a conflict of interest between merchants who want to increase their profits and consumers who want to spend less, so both points of view are essential to create a solution which benefits both parties.";
    const approach = "To better understand our users we carried out an intensive set of research that involved guerilla semi-structured interviews, booth interviews using TAP (Think Aloud Protocol), surveys, and interviews.";
    const methods = [
      {
        name: "Talk to consumers",
        desc: "Spoke to consumers during guerilla research, booth interviews and superuser interviews"
      },
      {
        name: "Survey",
        desc: "Posted surveys on various social media platforms and derived insights from responses"
      },
      {
        name: "Interpretation Session",
        desc: "Interpreted interviews and generated notes to use in affinity diagram"
      },
      {
        name: "Persona",
        desc: "Gave form to the synthesized insights by creating 4 personas"
      }
    ];
    const imageBlurbData = {
      talkToConsumers: {
        title: "Talk to Consumers",
        description: "",
        image: talkToConsumersBG,
        altText: "Talking to consumers during think aloud",
        mobileImg: talkToConsumersMobileBG
      },
      interpretation: {
        title: "Interpretation Session",
        description: "To better understand what we learned from our interviews (36 in total), we divided our feedback in two categories: quantitative and qualitative.  For the Qualitative data, we collected it in interpretation notes and in a 11 hour intensive session we analyzed, organized and synthesized all of our learning and notes into a hierarchical affinity diagram with insights at the top of the diagram.",
        image: interpretationBG,
        altText: "Notes from interpretation session"
      },
      superuser: {
        title: "Superuser Interview",
        description: "We wanted to get more in-depth insight into the different apps and the feelings surrounding them, as well as the users who used card linked offer/cashback apps to understand their motivations better.  To do this we conducted five interviews with participants who fit the profile of superuser- those who used multiple money saving apps.",
        image: consumerSuperuserBG,
        altText: "wallet with debit and credit cards"
      }
    };
    const guerillaResearch = "Our very first step was guerilla research.  We went out to many spots around Pittsburgh where we anticipated people might be shopping, such as malls, and stores (thus they would be primed to think about spending).  We asked the users questions centered around their saving and spending habits, technology use, and card linked offer awareness and asked follow-up questions as necessary.  In total we interviewed 24 potential users.";
    const boothInterview = "From our guerilla research we learned that many consumers were unfamiliar with any type of CLO, whether it was through banks or publisher apps such as Dosh.  We couldn’t fully understand how customers would feel about these apps when posed pure hypotheticals.  We determined our next step was to conduct TAP on both PNC’s card linked offers as well as Dosh and continue to ask the same semi-structured interview questions.  We chose TAP, less for usability feedback and more to gauge their response as they experienced and interacted with the apps.";
    const consumerInsights = ["Banks can offer more value to its target audience by associating debit cards with rewards", "Deals can be viewed as a way to manipulate consumer spending rather than saving money", "Immediate and significant value must be shown to users in order to utilize CLO apps", "Offers need to be personalized in order for people to take advantage of them People want cashback offers that fit their lifestyles more", "However, security and privacy are important concerns for users when adopting new tech", "If value created exceeds effort spent, then people will use CLOs more", "But first, education about CLO processes is crucial to get people to adopt it"];
    const surveyDesc = "Concurrently with our booth interviews we created an online survey (Google Forms) and posted it in several forums related to financial literacy and saving.  The questions posted there were very similar to our interview questions, but went more into depth with cash back apps.";
    const surveyInsights = "To understand how merchants who are very active in marketing themselves feel about CLOs, we interviewed a ‘super merchant’. Some key takeaways from this interview were-";
    const consumerSuperuserInsights = ["Saw obtaining deals as a tradeoff between time/effort and money and their experience with an app was judged by this standard", "Most interviewees mentioned starting off using frequently but lost momentum", "Credit cards (4) are valued for their points and rewards programs", "With those that used PNC none of them really used the offers (thought they were irrelevant or too much effort)"];
    const consumerPersonaDesc = "Based on all of our research we decided it was essential to develop personas so we could develop archetypes of our users- both merchant and consumer.  From our consumer data we developed four personas: Ezra, James, Sara, and Olivia. Ezra is the investor, he views investing as a form of saving money. James is our cautious user, he is very concerned about privacy and security. Sara is our busy college student- who wants to save but struggles to find the time. Olivia is our superuser, she has tried many different methods of saving.";

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
    };

    return (
      <div className="consumer-research-page">
        <div className="landing-title">
          <img src={consumerLandingBG} className="landing-background" alt="think aloud research with consumers" />
          <div className="page-name">Learn from Consumers</div>
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

        {generateImageBlurb(imageBlurbData.talkToConsumers)}

        <div className="consumer-section">
          <div className="consumer-section-content">
            <div className="consumer-section-text">
              <div className="consumer-section-title">Guerilla Research</div>
              <div className="consumer-section-desc">{guerillaResearch}</div>
            </div>
            <div className="consumer-section-image">
              <img src={guerillaResearchImg} alt="Team doing guerilla research" />
            </div>
          </div>
        </div>

        <div className="consumer-section set-bg-white">
          <div className="consumer-section-content">
            {window.screen.width>420 ? <div className="consumer-section-image">
              <img src={boothInterviewImg} alt="Team conducting booth interview" />
            </div> : null}
            <div className="consumer-section-text">
              <div className="consumer-section-title">Booth Interview</div>
              <div className="consumer-section-desc">{boothInterview}</div>
            </div>
            {window.screen.width<=420 ? <div className="consumer-section-image">
              <img src={boothInterviewImg} alt="Team conducting booth interview" />
            </div> : null}
          </div>
        </div>

        {generateImageBlurb(imageBlurbData.interpretation)}

        <div className="consumer-insights-block">
          <div className="consumer-insights-title">Insights</div>
          <div className="consumer-insights">
            <div className="consumer-insights-list">
              {consumerInsights.map((consumerInsight, index) => {
                return (
                  <div key={"consumer-insight" + index} className="consumer-insight">
                    <div className="consumer-insight-number">{index + 1}.</div>
                    <div className="consumer-insight-desc">{consumerInsight}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        <div className="consumer-section">
          <div className="consumer-section-content">
            <div className="consumer-section-text">
              <div className="consumer-section-header">Survey</div>
              <div className="consumer-section-desc">{surveyDesc}</div>
              <div className="consumer-section-title">Insights</div>
              <div className="consumer-section-desc">{surveyInsights}</div>
            </div>
            <div className="consumer-section-image">
              <img src={surveyDetailsImg} alt="Survey stats" />
            </div>
          </div>
        </div>
        
        {generateImageBlurb(imageBlurbData.superuser)}
        
        <div className="consumer-superuser-insights-block">
          <div className="consumer-superuser-insights-title">Insights</div>
          <div className="consumer-superuser-insights">
            <div className="consumer-superuser-insights-list">
              {consumerSuperuserInsights.map((consumerSuperuserInsight, index) => {
                return (
                  <div key={"consumer-superuser-insight" + index} className="consumer-superuser-insight">
                    <div className="consumer-superuser-insight-number">{index + 1}.</div>
                    <div className="consumer-superuser-insight-desc">{consumerSuperuserInsight}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="consumer-persona-block">
          <div className="consumer-persona-title">Consumer Personas</div>
          <div className="consumer-persona-desc">{consumerPersonaDesc}</div>
          <Carousel showArrows={true}>
            <div>
                <img src={consumerPersona1} alt="consumer persona- Ezra" />
            </div>
            <div>
                <img src={consumerPersona2} alt="consumer persona- Sara" />
            </div>
            <div>
                <img src={consumerPersona3} alt="consumer persona- James" />
            </div>
            <div>
                <img src={consumerPersona4} alt="consumer persona- Olivia" />
            </div>
          </Carousel>
        </div>

        <Pagination previous="Merchant Research" previousUrl="/merchants" next="Prototypes" nextUrl="/prototypes"  />

      </div>
    );
  }
}

export default Consumers;
