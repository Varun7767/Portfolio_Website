import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";
// import { Value } from "sass";
import { Animate} from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.css'

const skillsData = [
  {
    label: "Langauges",
    Value: [
      {
        skillName: "C",
        percentage: "80",
      },
      {
        skillName: "C++",
        percentage: "70",
      },
      {
        skillName: "Java",
        percentage: "70",
      },
      {
        skillName: "JavaScript",
        percentage: "80",
      },
    ]
  },{
    label: "Web Technologies",
    Value: [
      {
        skillName: "HTML",
        percentage: "90",
      },
      {
        skillName: "CSS",
        percentage: "90",
      },
      {
        skillName: "React JS",
        percentage: "60",
      },
    ]
  },{
    
    label: "Databases",
    Value: [
      {
        skillName: "SQL",
        percentage: "70",
      },
      {
        skillName: "Mongo DB",
        percentage: "60",
      },
    ],
  }
];

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills">
        <PageHeaderContent
          headerText="Skill Set"
          icon={<BsInfoCircleFill size={40} />}
        />
      </section>
      <div className="skills-content" >
        {skillsData.map((item, i) => (
          <div className="skills-inner-content">
            <div className="inner-box">
            <Animate
              play
              duration={1}
              delay={0.5}
              start={{
                transform: "translateX(-100%)",
              }}
              end={{
                transform: "translateX(0%)",
              }}
            >
              <h3 className="inner-heading">{item.label}</h3>
              <div>
                {item.Value.map((skillItem, j) => (
                  <>
                      <p className="progress-header">{skillItem.skillName}</p>
                      <Line className="progress"
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor="var(--yellow-theme-main-color)"
                      trailWidth="2"
                      strokeLinecap="square"/>
                      </>
             
                ))}
              </div>
            </Animate>
            </div>
          </div>
        ))}
      </div>  
    </>
  );
};
export default Skills;
