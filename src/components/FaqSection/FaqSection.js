import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import fImg from '../../images/background/3.jpg'


const FaqSection = (props) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (

        <section className="faq-one" style={{ backgroundImage: `url(${fImg})` }}>
            <div className="auto-container">
                <div className="sec-title light centered">
                    <div className="sec-title_title">Freqaly Ask Question</div>
                    <h2 className="sec-title_heading">Our Customer Some <br /> Frequently Ask Question</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <ul className="accordion-box">
                            <li>
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
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <ul className="accordion-box">
                            <li className="accordion block">
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
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
                            <li className="accordion block">
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
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
                            <li className="accordion block">
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
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
                </div>
            </div>
        </section>

    )
}

export default FaqSection;