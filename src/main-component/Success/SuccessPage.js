import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import apiService from '../../apis';
import Layout from '../../components/Layout';
import PageTitle from '../../components/pagetitle/PageTitle';
import utils from '../../utils/utils';
import Payment from '../../images/payment.png'
import './style.css'
import Loading from '../../components/loading';

const SuccessPage = (props) => {
    const { slug } = useParams()
    const { isLoading: loading, data: orderDetails } = useQuery([`GetOrderDetails${slug}`], async () => {
        const res = await apiService.order.get(slug);
        return res
    })

    if(loading)
        return <Loading />

    if (!orderDetails) {
        return <div>
            Order Not found
        </div>
    }
    return (
        <Layout>
            <PageTitle pageTitle={'Payment information'} pagesub={'Payment Details'} pageTitle2={'Payment Details'} />
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-4 mt-3 mb-4">
                    <div className="first d-flex justify-content-between align-items-center mb-3">
                        <div className="info">
                            <span className="d-block name mb-2">Thank you</span>
                            <span className="order">Order - {orderDetails.orderNumber}</span>

                        </div>

                    </div>
                    <div className="detail">
                        <span className="d-block summery">Your order has been dispatched. we are delivering you order.</span>
                    </div>
                    <hr />
                    {
                        orderDetails.orderItems.length > 0 &&
                        orderDetails.orderItems.map(item => (
                            <div className="row row-main" key={item.id}>
                                <div className="col-3"> <img className="img-fluid" src={utils.images.convertUrl(item.pictureThumbnailUrl)} style={{ height: 100, borderRadius: 8 }} /> </div>
                                <div className="col-6">
                                    <div className="row d-flex">
                                        <p><b>{item.productName}</b></p>
                                    </div>
                                    <div className="row d-flex">
                                        <p className="text-muted">X {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="col-3 d-flex justify-content-end">
                                    <p><b>{utils.convertCurrency(item.priceExclTax)}</b></p>
                                </div>
                            </div>
                        ))
                    }
                    <hr />
                    <div className="row row-main">
                        <div className="col-9">
                            <p><b>Total</b></p>
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                            <p><b>{utils.convertCurrency(orderDetails.orderTotal)}</b></p>
                        </div>
                    </div>

                    <div className="  money d-flex flex-row mt-2 align-items-center">
                        <img src={Payment} width="20" />

                        <span className="ms-2">Direct bank transfer</span>

                    </div>


                    <div className="form-group mt-4 mb-4">
                        <Link to="/" className="theme-btn btn-style-one" style={{ float: 'right' }}>
                            <span className="btn-wrap">
                                <span className="text-one">Back To Home Page</span>
                                <span className="text-two">Back To Home Page</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
};
export default SuccessPage;
