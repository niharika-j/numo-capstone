import React from 'react';
import { Link } from "react-router-dom";
import './Home.scss';
import landingBG from '../../assets/images/landing-bg.png';
import mobileLandingBG from '../../assets/images/home-mobile-bg.png';
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
    const projectDescription = "";
    const problemDescription = "Card-linked offers(CLO) on debit cards were introduced by PNC. However, these offers did not gain traction amongst bank customers. Our team was asked to explore the CLO space to discover unmet needs of the customers and come up with better metrics to measure value of a CLO for banks, merchants and customers.";
    const aboutNumo = "numo is part startup, part corporate innovation lab and part tech incubator. They are an independent subsidiary of a Fortune 500 financial institution. They look for unsolved problems in the financial industry and built innovative solutions for them using emerging technologies.";
    const blurbData = {
      "clo": {
        type: "clo",
        title: "What is CLO?",
        description: "Our very first task was to learn more about card linked offers and the space they existed in.",
        keywords: ["Card-linked Offers", "Publisher Apps", "Mastercard/Visa", "Cardlytics"],
        url: '/background',
        image: clo
      },
      "merchant": {
        type: "merchant",
        title: "Merchants",
        description: "We conducted several interviews with merhcants to better understand them and their needs.",
        keywords: ["Guerilla Research", "Affinity Diagram", "Superuser Interview", "Persona"],
        url: '/merchants',
        image: merchant,
        quotes: ["Online retailers and Amazon are slowing down my business. Traffic has been down over the last couple years since online options.", "I use my PoS system to track inventory, and get ratios of new vs. returning customers."]
      },
      "consumer": {
        type: "consumer",
        title: "Consumers",
        description: "We needed to understand what motivates consumers, especially in terms of CLO’s, so we could create a product for them.",
        keywords: ["Guerilla Research", "Semi-structured Interview", "Affinity Diagram", "Persona"],
        url: '/consumers',
        image: consumer,
        quotes: ["If deals were personalized to me, then I would care about them more. It will make the experience more meaningful.", "I feel the time spent using the app has to be proportional to money saved to make it worthwhile."]
      }
    };
    const imageBlurbData = {
      "prototyping": {
        title: "Prototyping",
        description: "This is where we take all our insights and research and synthesize it into ideas that can benefit both stakeholders.",
        image: prototype,
        altText: "prototypes",
        url: '/prototypes'
      },
      "primaryResearch": {
        title: "Primary Research",
        description: "To really understand our problem space we had to better understand our two main stake holders: merchants and consumers.",
        image: primarybg,
        altText: "affinity diagram",
        url: null
      },
      "aboutUs": {
        title: "About Us",
        description: "",
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
      <div className="home-page">
        <div className="landing-title">
          {
            (window.screen.width <= 420) ? 
            <img src={mobileLandingBG} className="landing-background" alt="Capstone team" />
            :
            <img src={landingBG} className="landing-background" alt="Capstone team" />
          }
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
