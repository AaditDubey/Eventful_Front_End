import React from "react";
// import { Link } from 'react-router-dom'
import abimg from "../../images/resource/business-1.jpg";
import abimg2 from "../../images/resource/business-2.jpg";
import bg1 from "../../images/background/pattern-21.png";

const Business = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="business-one mt-4" id="about">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="business-one_content-column col-lg-6 col-md-12 col-sm-12">
            <div className="business-one_content-inner">
              <div className="sec-title title-anim">
                {/* <div className="sec-title_title">Become Succesfuly day 3</div> */}
                <h2 className="sec-title_heading">
                  Welcome to Eventful, where we turn your events into
                  unforgettable experiences!
                </h2>
              </div>
              <div className="business-one_text">
                At Eventful, we understand the importance of creating seamless
                and memorable events. Whether it's a professional conference, a
                lively concert, or an intimate gathering, we're here to help you
                plan and execute events that leave a lasting impression.
              </div>
              <div className="business-one_text">
                Our dedicated team of event experts is passionate about bringing
                your ideas to life. From concept to execution, we work
                tirelessly to ensure every detail is perfect. With Eventful, you
                can focus on what you do best while we handle the logistics.
              </div>
              <div className="business-one_text">
                <strong>Why choose Eventful?</strong>
              </div>
              <div className="business-one_text">
                <ul style={{marginLeft: 20}}>
                  <li style={{listStyle: 'disc'}}>
                    Easy-to-use platform for event creation and management.
                  </li>
                  <li style={{listStyle: 'disc'}}>Customizable solutions to suit your event needs.</li>
                  <li style={{listStyle: 'disc'}}>Experienced team dedicated to your event's success.</li>
                  <li style={{listStyle: 'disc'}}>
                    Seamless integration of ticketing and promotional tools.
                  </li>
                </ul>
              </div>

              <div className="business-one_text">
                Join us in making every event extraordinary. Let's create
                something unforgettable together!
              </div>
            </div>
          </div>
          <div className="business-one_image-column col-lg-6 col-md-12 col-sm-12">
            <div className="business-one_image-inner">
              <div
                className="business-one_pattern-one"
                style={{ backgroundImage: `url(${bg1})` }}
              ></div>
              <div className="business-one_experiance">
                <div className="business-one_counter">
                  <span className="odometer" data-count="35"></span>35years
                </div>
                <i>Successful Worldwide</i>
                <strong>Conference</strong>
              </div>
              <div className="business-one_image">
                <img src={abimg} alt="" />
              </div>
              <div className="business-one_image-two">
                <img src={abimg2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
