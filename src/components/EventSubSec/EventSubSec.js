import React from 'react'

const EventSubSec = (props) => {

    return (
        <section className="event-one">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="event-block_one col-lg-6 col-md-6 col-sm-12">
                        <div className="event-block_one-inner">
                            <div className="event-block_one-content">
                                <div className="event-block_one-icon fi flaticon-maps-and-flags"></div>
                                <strong>WHERE IS THE EVENT:</strong>
                                221B Baker Street, P.O Box 353 Park Road, San <br/> Francisco USA - 215431
                            </div>
                        </div>
                    </div>
                    <div className="event-block_one col-lg-6 col-md-6 col-sm-12">
                        <div className="event-block_one-inner">
                            <div className="event-block_one-content">
                                <div className="event-block_one-icon fi flaticon-calendar"></div>
                                <strong>WHERE IS THE EVENT:</strong>
                                ( Sunday to Wednesday ) 20 January 2025 <br/> to 24 January 2025.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSubSec;