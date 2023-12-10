import React, { useState } from 'react';
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import {Link, useNavigate} from "react-router-dom";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Login = (props) => {
    const push = useNavigate()

    const [value, setValue] = useState({
        email: 'user@gmail.com',
        password: '123456',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('Successfully Login Khoa Nguyen Event & Conference');
                push('/home');
            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (

        <form onSubmit={submitForm}>
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
                <label>Your Password</label>
                <input
                    className="inputOutline"
                    placeholder="Password"
                    value={value.password}
                    variant="outlined"
                    name="password"
                    type="password"
                    label="Password"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                />
                {validator.message('password', value.password, 'required')}
            </div>
            <div className="form-group">
                <div className="check-box">
                    <input type="checkbox" name="remember-password"  id='type-1'/>
                    <label htmlFor="type-1">I agree to al <Link onClick={ClickHandler} to="/terms">Terms</Link> & <Link onClick={ClickHandler}  to="/terms">Condition</Link> and Feeds</label>
                </div>
            </div>
            <div className="form-group">
                <button className="theme-btn btn-style-one" type="submit" onClick={ClickHandler}>
                    <span className="btn-wrap">
                        <span className="text-one">sign up</span>
                        <span className="text-two">sign up</span>
                    </span>
                </button>
            </div>
        </form>
    )
};

export default Login;