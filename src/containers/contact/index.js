import React from "react";
import './styles.css'
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent";

const Contact = () => {
  return (
    <>    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
    <div className="content">
      <h3 className="header-text">Let's Talk</h3>
      <div className="content-form">
        <div className="controls-wrapper">
          <div className="name-wrapper">
          <label htmlFor="name" className="nameLabel">Name</label>
          <input required type="text" name="name" className="Inputname" />
          </div>
          <div className="name-wrapper">
          <label htmlFor="email" className="nameLabel">Email Address</label>
          <input required type="text" name="email" className="Inputname" />
          </div>
          <div className="name-wrapper">
          <label htmlFor="description" className="nameLabel">Description</label>
          <textarea type="text" name="description" className="Inputname" rows={5} />
          </div>
        </div>
        <button className="btn">Submit</button>
      </div>
    </div>
    </>
  );
};
export default Contact;
