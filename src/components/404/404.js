import React from 'react'
import { Link } from 'react-router-dom'


const Error = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="error-section">
            <div className="auto-container">
                <div className="content">
                    <h1>404</h1>
                    <h2>Oops... It looks like you ‘re lost !</h2>
                    <div className="text">Oops! The page you are looking for does not exist. It might have been moved or deleted.</div>
                    <div className="button-box text-center">
                        <Link onClick={ClickHandler} to="/home" className="theme-btn btn-style-one">
                            <span className="btn-wrap">
                                <span className="text-one">Go To Home</span>
                                <span className="text-two">Go To Home</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;