import React from 'react'
import { Link } from 'react-router-dom'
import pIcon1 from '../../images/background/11.jpg'

const PageTitle = (props) => {
    return (
        <section className="page-title" style={{ backgroundImage: `url(${pIcon1})` }}>
            <div className="auto-container">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="left-box">
                        <div className="page-title_big">{props.pageTitle2}</div>
                        <h2 className="page-title_heading">{props.pageTitle}</h2>
                    </div>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="/home">Home</Link></li>
                        <li>{props.pagesub}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;