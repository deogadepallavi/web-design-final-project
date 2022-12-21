import { useRef, useState } from 'react';
import "./ModalStyles.css";
import trophy from "../images/Trophy.jpg";



function Modal() {
    const modalRef = useRef(null);

    const [registerWithUs, setRegisterWithUs] = useState(false);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('Email is invalid');
    const [confirmEmailError, setConfirmEmailError] = useState('Confirm email does not match!');
    const [passwordError, setPasswordError] = useState('Password should be at least 8 characters!');

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleEmailChange = event => {
        if (!isValidEmail(event.target.value)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError(null);
        }

        setEmail(event.target.value);
    };

    const handleConfirmEmailChange = event => {
        if (email == event.target.value) {
            setConfirmEmailError(null);
        } else {
            setConfirmEmailError('Confirm email does not match!');
        }

        setConfirmEmail(event.target.value);
    };

    const handlePasswordChange = event => {
        if (event.target.value.length >= 8) {
            setPasswordError(null);
        } else {
            setPasswordError('Password should be at least 8 characters!');
        }

        setPassword(event.target.value);
    };


    return (
        <div>
            <div className="card-left">
                <div className="card-pic-left">
                    <img className="left-img" src={trophy} alt="Trophy of FIFA" />
                </div>
                <div className="text-style-left">
                    <h1>FIFA Connect</h1>
                    <p>
                        The FIFA Connect Programme helps member associations (MAs) register all their stakeholders in a systematic way and keep track of players, coaches and referees – wherever they are in the world.
                    </p>
                    <p>
                        The Connect Programme provides a unique FIFA ID code for every individual who has a role in the football organisation. This code is like a digital football passport number and has the information of the history of each stakeholder.
                    </p>
                    <button id="register_button"
                        onClick={() => {
                            modalRef.current.showModal();
                        }}
                    >Subscribe</button>
                </div>
            </div>
            <dialog className="modal" ref={modalRef}>
                <form name="myForm" id="form_id" action="/register" method="post">
                    <h2>Subscribe for FIFA Connect!</h2>
                    <label>Email: </label>
                    <label id="font_type"></label>
                    <div class="color">
                        <input
                            name="email"
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <h3 style={{ color: 'red' }}>{emailError}</h3>}
                        <div> <span class="email-input"></span></div>
                    </div>
                    <label>Confirm Email: </label>
                    <label id="font_type"></label>
                    <div class="color-confirm-email">
                        <input
                            name="confirmEmail"
                            type="text"
                            value={confirmEmail}
                            onChange={handleConfirmEmailChange}
                        />
                        {confirmEmailError && <h3 className="error-style">{confirmEmailError}</h3>}
                        <div><span class="email-check"></span></div>
                    </div>

                    {registerWithUs &&
                        <div>
                            <label>Password: </label>
                            <label id="font_type"></label>
                            <div class="color-confirm-email">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                {passwordError && <h3 className="error-style">{passwordError}</h3>}
                                <div></div>
                            </div>
                        </div>}
                    <button id="register_with_us" onClick={() => setRegisterWithUs(true)} type="button">Register with us!</button>
                    <button id="submit_button" disabled={haveValidInputs()}>Submit</button>
                    <button class="close" id="cancel_button" onClick={() => modalRef.current.close()} type="button">Cancel</button>
                </form>
            </dialog>
        </div>

    );

    function haveValidInputs() {
        return (
            emailError !== null ||
            confirmEmailError !== null
        );
    }
}

export default Modal;
