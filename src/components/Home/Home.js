import React from 'react';
import { Link } from "react-router-dom";
import './Home.scss';
import landingBG from '../../assets/images/landing-bg.png';
import numoLogo from '../../assets/images/numo-logo.png';
import clo from '../../assets/images/what-is-clo.png';
import primarybg from '../../assets/images/primary-research-bg.png';
import merchant from '../../assets/images/merchant-research.png';
import consumer from '../../assets/images/consumer-research.png';
import prototype from '../../assets/images/prototyping-bg.png';
import team from '../../assets/images/about-us-bg.png';

class Home extends React.Component {
  render() {

    //Static text in home page
    const projectDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore";
    const problemDescription = "Card-linked offers(CLO) on debit cards were introduced by PNC. However, these offers did not gain traction amongst bank customers. Our team was asked to explore the CLO space to discover unmet needs of the customers and come up with better metrics to measure value of a CLO for banks, merchants and customers.";
    const aboutNumo = "numo is part startup, part corporate innovation lab and part tech incubator. They are an independent subsidiary of a Fortune 500 financial institution. They look for unsolved problems in the financial industry and built innovative solutions for them using emerging technologies.";
    const goals = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit", "Lorem ipsum dolor sit amet, consectetur adipisicing elit", "Lorem ipsum dolor sit amet, consectetur adipisicing elit", "Lorem ipsum dolor sit amet, consectetur adipisicing elit"];
    const blurbData = {
      "clo": {
        type: "clo",
        title: "What is CLO?",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        keywords: ["Card-linked Offers", "Publisher Apps", "Mastercard/Visa", "Cardlytics"],
        url: '/background',
        image: clo
      },
      "merchant": {
        type: "merchant",
        title: "Merchants",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        keywords: ["Guerilla Research", "Affinity Diagram", "Superuser Interview", "Persona"],
        url: '/merchants',
        image: merchant,
        quotes: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"]
      },
      "consumer": {
        type: "consumer",
        title: "Consumers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        keywords: ["Guerilla Research", "Semi-structured Interview", "Affinity Diagram", "Persona"],
        url: '/consumers',
        image: consumer,
        quotes: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore"]
      }
    };
    const imageBlurbData = {
      "prototyping": {
        title: "Prototyping",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image: prototype,
        altText: "prototypes",
        url: '/prototypes'
      },
      "primaryResearch": {
        title: "Primary Research",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image: primarybg,
        altText: "affinity diagram",
        url: null
      },
      "aboutUs": {
        title: "About Us",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
        image: team,
        altText: "capstone team members",
        url: '/team'
      }
    }


    //Function to generate CLO, merchant and consumer innfo blurbs
    const generateInfoBlurb = (obj) => {
      return (
        <div className={obj.type!=='clo'?"blurb":"blurb white-bg"}>
          <div className="blurb-title">{obj.title}</div>
          <div className="blurb-section">
            <div className="blurb-content">
              <div className="blurb-description">{obj.description}</div>
              <div className="keywords">
                <div className="keywords-header">Keywords:</div>
                <div className="keywords-list">
                  {obj.keywords.map((keyword, index) => {
                    return (
                      <div className="keyword-blocks" key={"keyword" + index}>
                        <div>{keyword}</div>
                        <div>{(obj.keywords.length-1 !== index)?' |':''}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="learn-more"><Link to={obj.url}>Learn more</Link></div>
            </div>
            <div className="blurb-image">
              <img src={obj.image} className="blurb-img" alt="Team doing background research" />
            </div>
          </div>
        </div>
      );
    }

    //Function to generate quotation blurbs
    const generateQuoteBlock = (list) => {
      return (
        <div className="quote-block">
          <div className="quote-title">What do people say?</div>
          <div className="quote-list">
            {list.map((quote, index) => {
              return (
                <div key={"quote" + index} className="quote">"{quote}"</div>
              )
            })}
          </div>
        </div>
      )
    }

    //Function to generate image blurb for Prototyping and Our Team sections
    const generateImageBlurb = (obj) => {
      return (
        <div className="image-blurb">
          <img src={obj.image} className="image-blurb-bg" alt={obj.altText} />
          <div className="image-blurb-title">{obj.title}</div>
          <div className="image-blurb-desc">{obj.description}</div>
          {obj.url && 
            <div className="image-blurb-link">
              <Link to={obj.url}>Learn more</Link>
            </div>
          }
        </div>
      )
    }

    return (
      <div>
        <div className="landing-title">
          <img src={landingBG} className="landing-background" alt="Capstone team" />
          <div className="project-name">MHCI  x numo</div>
          <div className="project-desc">{projectDescription}</div>
        </div>

        <div className="landing-problem">
          <div className="landing-problem-title">What's the problem?</div>
          <div className="landing-problem-desc">{problemDescription}</div>
        </div>

        <div className="about-numo">
          <div className="about-numo-title">About numo</div>
          <div className="about-numo-section">
            <div className="about-numo-content">{aboutNumo}</div>
            <div className="about-numo-image">
              <img src={numoLogo} className="numo-logo" alt="numo logo" />
            </div>
          </div>
          <div className="about-numo-goals">
            <div className="about-numo-goals-title">Our goals</div>
            <div className="goals-list">
              {goals.map((goal, index) => {
                return (
                  <div key={"goal" + index} className="goal">
                    <div className="goal-number">{index + 1}.</div>
                    <div>{goal}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {generateInfoBlurb(blurbData['clo'])}

        {generateImageBlurb(imageBlurbData["primaryResearch"])}

        {generateInfoBlurb(blurbData['merchant'])}
        {generateQuoteBlock(blurbData["merchant"].quotes)}

        {generateInfoBlurb(blurbData['consumer'])}
        {generateQuoteBlock(blurbData["consumer"].quotes)}

        {generateImageBlurb(imageBlurbData["prototyping"])}
        
        {generateImageBlurb(imageBlurbData["aboutUs"])}

      </div>
    );
  }
}

export default Home;
