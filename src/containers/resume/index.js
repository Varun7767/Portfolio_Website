import React from "react";
import "./styles.css";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"; 
// import 'react-vertical-timeline-component/style.min.css'
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";


const data = {
  experience : [
      {
          title : "Frontend Developer",
          subTitle : "Shiv Infotech, Sangli",
          description : "Developing Websites using React js"
      },
      {
          title : "Fronetend Web Developer Intern",
          subTitle : "MASCOT software Technologies, Kolhapur",
          description : "Developing Websites using HTML and CSS"
      },
  ],
  Education : [
      {
          title : "Bachelor's of Technology",
          subTitle : "Rajarambapu Institute of Technology, Sangli",
          description : "Computer Science and Engineering - 7.80 CGPA"
      },
      {
          title : "Higher Secondary Education",
          subTitle : "M.G.S.K.Gujarathi Junior College, Sangli",
          description : "PCM Group - 65.38%"
      },
      {
          title : "Secondary Education",
          subTitle : "Shriram Ramdayal Malu Highschool, Sangli",
          description : "10th Grade - 84.40%"
      },
  ],
};

const Resume = () => {
  return (
    <>
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
    <div className="timeline">
     
    <div className="experience">
    <Animate
                  play
                  duration={1.5}
                  delay={1}
                  start={{
                    transform: "translateY(130%)",
                  }}
                  end={{
                    transform: "translateY(0%)",
                  }}
                >
      <h3 className="experience-header">
        Experience
      </h3>
      {/* <VerticalTimeline
      layout={'1-column'}
      lineColor="var(--yellow-theme-main-color)"
      >
       <VerticalTimelineElement
              key = {i}
              className = "timeline-element"
              ></VerticalTimelineElement>
              </VerticalTimeline> */ }
        {
          data.experience.map((item, i) => (
           
                <div className="timeline-element-title-content">
                  <h3 className="timeline-element-title">{item.title}</h3>
                  <h4 className="timeline-element-subtitle">{item.subTitle}</h4>
                  <p className="timeline-element-subtitle">{item.description}</p>
                </div>
            

          ))
        }

</Animate>
     
    </div>
  
    <div className="education">
    <Animate
                  play
                  duration={1.5}
                  delay={1}
                  start={{
                    transform: "translateY(100%)",
                  }}
                  end={{
                    transform: "translateY(0%)",
                  }}
                >
      <h3 className="education-header">
        Education
      </h3>
      {
          data.Education.map((item, i) => (
           
                <div className="timeline-element-title-content">
                  <h3 className="timeline-element-title">{item.title}</h3>
                  <h4 className="timeline-element-subtitle">{item.subTitle}</h4>
                  <p className="timeline-element-subtitle">{item.description}</p>
                </div>
            

          ))
        }
</Animate>
    </div>
    
    </div>
    </>
  );
};
export default Resume;
