import React from 'react';
import './style.css'
import { Spinner } from 'reactstrap';

function Loading(props) {
    return (
        <section className="layout-loading">
            <header className="container h-100">
                <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {/* <span className="spinner-border text-primary" role="status" style={{color: "green"}}></span> */}
                        <Spinner style={{color: "var(--main-color)"}}/>
                        <span className="text-muted fs-6 fw-semibold mt-2">Loading...</span>
                    </div>
                </div>
            </header>
        </section>


    );
}

export default Loading;