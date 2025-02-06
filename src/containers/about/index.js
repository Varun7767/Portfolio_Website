import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Value } from "sass";
import { Animate } from "react-simple-animate";
import "./styles.css";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";

const PersonalDetails = [
  {
    label: "Name :",
    Value: " Varun Rajeshirke",
  },
  {
    label: "Age :",
    Value: " 24",
  },
  {
    label: "Address :",
    Value: " Pune, Maharashtra",
  },
  {
    label: "Email :",
    Value: " rajeshirkevarun@gmail.com",
  },
  {
    label: "Contact No. :",
    Value: " 8484976409",
  },
];

const JobSummary =
  "React.js Developer | Frontend Developer Passionate and detail-oriented React.js Developer with a strong foundation in JavaScript, React.js, HTML, and CSS. Eager to develop scalable, high-performance web applications and contribute to a dynamic development team. Adept at building responsive user interfaces and performant web applications. Quick learner with a problem-solving mindset and a keen interest in modern web technologies.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about-Content">
        <div className="about-Summary">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(-100%)",
            }}
            end={{
              transform: "translatex(0%)",
            }}
          >
            <h3 className="summary-heading1">Front End Developer</h3>
            <p className="summary">{JobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(50%)",
            }}
            end={{
              transform: "translatex(0%)",
            }}
          >
            <h3 className="summary-heading2">Personal Information</h3>
            <ul>
              {PersonalDetails.map((item, i) => (
                <li key={i} className="info">
                  <span className="span-title">{item.label}</span>
                  <span className="span-value">{item.Value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about-Right">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translatex(100%)",
            }}
            end={{
              transform: "translatex(0%)",
            }}
          >
          <div className="about-Right-inner">
            <div className="item1">
              <DiHtml5
                size={60}
                color="var(--yellow-theme-main-color)"
              ></DiHtml5>
            </div>
            <div className="item2">
              <DiCss3 size={60} color="var(--yellow-theme-main-color)"></DiCss3>
            </div>
            <div className="item3">
              <DiJavascript
                size={60}
                color="var(--yellow-theme-main-color)"
              ></DiJavascript>
            </div>
            <div className="item4">
              <DiReact
                size={60}
                color="var(--yellow-theme-main-color)"
              ></DiReact>
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
