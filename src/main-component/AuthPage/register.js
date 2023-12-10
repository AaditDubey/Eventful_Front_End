import React, {useState} from 'react';
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SignUpPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        password: '',
        confirm_password: '',
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
                full_name: '',
                password: '',
                confirm_password: '',
            });
            validator.hideMessages();
            toast.success('Registration Complete successfully!');
            push('/register');
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
                {validator.message('name', value.full_name, 'required|name')}
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
                <label>New Password</label>
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
                <label>Confirm Password</label>
                <input
                    className="inputOutline"
                    placeholder="Confirm Password"
                    value={value.confirm_password}
                    variant="outlined"
                    name="confirm_password"
                    type="password"
                    label="Password"
                    onBlur={(e) => changeHandler(e)}
                    onChange={(e) => changeHandler(e)}
                />
                {validator.message('Confirm password', value.confirm_password, 'required')}
            </div>
            <div className="form-group">
                <div className="check-box">
                    <input type="checkbox" name="remember-password"  id='type-2'/>
                    <label htmlFor="type-2">Remember Me?</label>
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

export default SignUpPage;