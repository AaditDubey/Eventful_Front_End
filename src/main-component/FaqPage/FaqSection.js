import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Bg from '../../images/background/faq.jpg'

const FaqSection = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <section className="faq-two">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <ul className="accordion-box style-two">
                            <li className="accordion block active-block">
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>What About My Learning Lab Workshop Options? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>How Do I Rollover My Conference Registration? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>How Do i Cancel My Hotel Reservation? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Learning Lab registrations will also be rolled over to 2024 conference. The learning lab workshop schedule will be revised for 2024, and we will announce the new schedule when it is available.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>When is The Next APQC Conference? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>How Do You Prepare For a Conference? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>What questions should be ask in an conference? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>When is The Next APQC Conference? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="accordion block active-block">
                                    <AccordionSummary
                                        expandIcon={""}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        className='acc-btn'
                                    >
                                        <Typography>What questions should be ask in an conference? <div className="icon fa fa-angle-down"></div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="faq-two_form-box" style={{ backgroundImage: `url(${Bg})` }}>
                            <h3 className="faq-two_form-title">Quick Contact</h3>
                            <div className="faq-form">
                                <form method="post" action="blog.html">

                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="Name" required="" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="Email" required="" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name="phone" placeholder="Phone Number" required="" />
                                    </div>

                                    <div className="form-group">
                                        <textarea className="" name="message" placeholder="Enter your Massage*"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <div className="button-box">
                                            <button className="theme-btn submit-btn">
                                                Submit Now
                                            </button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default FaqSection;