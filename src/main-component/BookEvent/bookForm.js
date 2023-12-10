import React, { useState } from 'react';
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import apiService from '../../apis';
import utils from '../../utils/utils';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BookForm = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        phone: '',
        quantity: 1,
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            const result = await apiService.order.create({ customerEmail: value.email, firstName: value.full_name, orderItems: [{ productId: props.productId, quantity: value.quantity }] })
            if (result) {
                toast.success('Book this event Complete successfully!');
                push(`/success/${result.id}`);
            }

        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (

        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>Your Name</label>
                <input type="text"
                    placeholder='Enter Your Name'
                    value={value.full_name}
                    variant="outlined"
                    name="full_name"
                    label="E-mail"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                />
                {validator.message('full_name', value.full_name, 'required')}
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="text"
                    placeholder='Enter Your Email'
                    value={value.email}
                    variant="outlined"
                    name="email"
                    label="E-mail"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                />
                {validator.message('email', value.email, 'required|email')}
            </div>
            <div className="form-group">
                <label>Your phone</label>
                <input type="text"
                    placeholder='Enter Your Phone'
                    value={value.phone}
                    variant="outlined"
                    name="phone"
                    label="phone"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                />
                {validator.message('phone', value.phone, 'required')}
            </div>
            <div className='row'>
                <div className="form-group col-9">
                    <label>Quantity</label>
                    <input type="number"
                        min={1}
                        placeholder='Quantity'
                        value={value.quantity}
                        variant="outlined"
                        name="quantity"
                        label="quantity"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                    />
                    {validator.message('quantity', value.quantity, 'required')}
                </div>
                <div className="form-group col-3">
                    <label>Price</label>
                    <p style={{padding: '10px 0', fontWeight: 800}}>{utils.convertCurrency(props.price) }</p>
                </div>
            </div>


            <div className="form-group">
                <button className="theme-btn btn-style-one" type="submit" onClick={ClickHandler}>
                    <span className="btn-wrap">
                        <span className="text-one">Book this event</span>
                        <span className="text-two">Book this event</span>
                    </span>
                </button>
            </div>
        </form>
    )
};

export default BookForm;