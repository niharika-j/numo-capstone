import React from 'react';
import './Team.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import aboutUsLandingBG from '../../assets/images/about-us-landing-bg.png';
import mediumBG from '../../assets/images/medium-bg.png';
import mia from '../../assets/images/mia.png';
import bin from '../../assets/images/bin.png';
import kyle from '../../assets/images/kyle.png';
import lauren from '../../assets/images/lauren.png';
import niharika from '../../assets/images/niharika.png';
import miaGrey from '../../assets/images/mia-grey.png';
import binGrey from '../../assets/images/bin-grey.png';
import kyleGrey from '../../assets/images/kyle-grey.png';
import laurenGrey from '../../assets/images/lauren-grey.png';
import niharikaGrey from '../../assets/images/niharika-grey.png';

class Team extends React.Component {
  state = {
    "mia": false,
    "niharika": false,
    "kyle": false,
    "lauren": false,
    "bin":  false
  };
  
  render() {
    const members = [
      {
        key: "mia",
        name: "Mia Manavalan",
        profile: mia,
        role: "Project Manager",
        desc: "Mia graduated from Northwestern University with a Bachelors's in Cognitive Science and Economics. After, she worked at IBM as a technology consultant in the Cognitive Business Decision sector. She worked with clients to implement Watson solutions, such as- conversation agents and predictive technologies for the retail and healthcare industries. As an MHCI student, she is taking courses in Mobile & IoT Technologies, Persuasive Design, and is doing an independent research project on improving machine learning and data visualization dashboards for physicians.",
        linkedin: "https://www.linkedin.com/in/miamanavalan/",
        email: "mailto:mmanaval@andrew.cmu.edu"
      },
      {
        key: "niharika",
        name: "Niharika Jayanthi",
        profile: niharika,
        role: "UX Engineer",
        desc: "Niharika received a Bachelor’s degree in Computer Engineering in 2016 from University of Mumbai. She has three years of industry work experience as a front-end developer at Tata Consultancy Services. As part of a horizontal unit ‘Digital Enterprise System Solutions’, she has worked in multiple domains such as banking, insurance, aerospace and racing. She is currently a part of the Master’s in Human-Computer Interaction program at CMU, learning courses such as User-Centered Research, Interactive Data Science and Human-AI Interaction.",
        linkedin: "https://www.linkedin.com/in/niharika-j/",
        email: "mailto:njayanth@andrew.cmu.edu"
      },
      {
        key: "kyle",
        name: "Kyle Barron",
        profile: kyle,
        role: "Project Manager",
        desc: "Kyle graduated from the University of Wisconsin — Madison in 2018 with a B.S. in psychology, as well as a minor in computer science. He is interested in user research, particularly in the field of live streaming and how audiences interact with one another. As a student in the MHCI program at CMU, he is taking courses related to user-centered research, as well as working on an independent study project looking into information availability on the popular live streaming platform Twitch.",
        linkedin: "https://www.linkedin.com/in/kyledbarron/",
        email: "mailto:kdbarron@andrew.cmu.edu"
      },
      {
        key: "lauren",
        name: "Lauren Whittingham",
        profile: lauren,
        role: "Product Manager",
        desc: "Lauren Whittingham worked for four years in a medical device and imaging company, after graduating from UC Berkeley with a BS in Mechanical Engineering. Inspired by her work managing new software projects, she decided to pursue UX. She worked for several startups in the Bay Area as a UX Research and Design Consultant before joining CMU’s MHCI program. She has taken courses in Persuasive Design and Machine Learning and is currently studying Lean Entrepreneurship, Document Design, and Service Design.",
        linkedin: "https://www.linkedin.com/in/laurenwhittingham/",
        email: "mailto:lwhittin@andrew.cmu.edu"
      },
      {
        key: "bin",
        name: "Xiaobin(Bin) Li",
        profile: bin,
        role: "Design Lead",
        desc: "Bin graduated from ArtCenter College of Design in Product Design. In 2016.6–2018.8, he worked as a user experience designer at BloomSky Inc., Burlingame. BloomSky was a startup that was dedicated to the development of IoT weather stations and weather data services to both consumers and enterprise clients. At BloomSky, he led the design of a new toB product line, SPOT. As an MHCI student, he is taking Corporate Startup Lab, and working on the CubeRover project, which aims at creating low-cost, mobile robotic lunar access for companies, governments, universities and non-profits across the world.",
        linkedin: "https://www.linkedin.com/in/xiaobinli/",
        email: "mailto:xiaobin2@andrew.cmu.edu"
      }
    ];
    const popup = (obj) =>  {
      return (
        <Modal open={this.state[obj.key]} className={"team-member-" + obj.key} key={"team-member-" + obj.key} onClose={() => closeModal(obj.key)} center>
          <div className="member-profile-block">
            <div className="member-profile-pic"><img src={obj.profile} alt={obj.name} /></div>
            <div className="member-profile-text">
              <div className="member-profile-name">{obj.name}</div>
              <div className="member-profile-role">{obj.role}</div>
              <div className="member-profile-desc">{obj.desc}</div>
              <div className="member-links">
                <a href={obj.email}><i className="fas fa-envelope"></i></a>
                <a href={obj.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </Modal>
      )
    };

    const openModal = (key) => {
      let state = JSON.parse(JSON.stringify(this.state));
      state[key] = true;
      this.setState(state);
    }

    const closeModal = (key) => {
      let state = JSON.parse(JSON.stringify(this.state));
      state[key] = false;
      this.setState(state);
    }

    return (
      <div className="about-us-page">

        <div className="landing-title">
          <img src={aboutUsLandingBG} className="landing-background" alt="think aloud research with consumers" />
          <div className="page-name">Meet the Team</div>
        </div>

        <div className="multidisciplinary-team">
          <div className="multidisciplinary-title">The multi-disciplinary team</div>
          <div className="multidisciplinary-desc">Our 5-person team spans multiple expertises, including research, design, engineering, consulting, and product management. We were able to collaborate and use each person’s strengths to make sure we were framing the problem space in a way that made sense to all of us.</div>
        </div>

        <div className="team-gallery">
          <div className="team-member" onClick={() => openModal("mia")}>
            <img src={miaGrey} alt="Mia Manavalan" className="member-image" onMouseOver={e => (e.currentTarget.src = mia)} onMouseOut={e => (e.currentTarget.src = miaGrey)} />
            <div className="member-name">Mia Manavalan</div>
            <div className="member-role">Project Manager</div>
          </div>
          <div className="team-member" onClick={() => openModal("niharika")}>
            <img src={niharikaGrey} alt="Niharika Jayanthi" className="member-image" onMouseOver={e => (e.currentTarget.src = niharika)} onMouseOut={e => (e.currentTarget.src = niharikaGrey)} />
            <div className="member-name">Niharika Jayanthi</div>
            <div className="member-role">UX Engineer</div>
          </div>
          <div className="team-member" onClick={() => openModal("kyle")}>
            <img src={kyleGrey} alt="Kyle Barron" className="member-image" onMouseOver={e => (e.currentTarget.src = kyle)} onMouseOut={e => (e.currentTarget.src = kyleGrey)} />
            <div className="member-name">Kyle Barron</div>
            <div className="member-role">Research Lead</div>
          </div>
          <div className="team-member" onClick={() => openModal("lauren")}>
            <img src={laurenGrey} alt="Lauren Whittingham" className="member-image" onMouseOver={e => (e.currentTarget.src = lauren)} onMouseOut={e => (e.currentTarget.src = laurenGrey)} />
            <div className="member-name">Lauren Whittingham</div>
            <div className="member-role">Product Manager</div>
          </div>
          <div className="team-member" onClick={() => openModal("bin")}>
            <img src={binGrey} alt="Bin(Xiaobin) Li" className="member-image" onMouseOver={e => (e.currentTarget.src = bin)} onMouseOut={e => (e.currentTarget.src = binGrey)} />
            <div className="member-name">Bin(Xiaobin) Li</div>
            <div className="member-role">Design Lead</div>
          </div>
        </div>

        <div className="medium">
          <img src={mediumBG} className="medium-bg" alt="computer displaying our medium posts" />
          <div className="medium-title">Follow our journey @ Medium</div>
          <button className="medium-button" onClick={() => {window.open("https://medium.com/numo-mhci-capstone", "_blank")}}>Go to Medium</button>
        </div>

        {members.map((member) => {
          return (
            popup(member)
          )
        })}

      </div>
    );
  }
}

export default Team;
