import React, { useState } from 'react'
// import Modal from "react-modal"
import "./Login.css"

function Login() {

    const Modal = ({ onRequestClose }) => {


        return (
            <div className="modal__backdrop">
                <div className="modal__container">
                    <input type="password" placeholder="Enter Old Password" />
                    <br /><br />
                    <input type="password" placeholder="Enter New Password" />
                    <br /><br />
                    <button type="button" className="forget__btn" onClick={onRequestClose}>
                        Submit
                    </button>
                    <button type="button" className="forget__btn" onClick={onRequestClose}>
                        Close
                    </button>

                </div>
            </div>
        );
    };


    const [isModalOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    const [user, setUser] = useState({

        email: "",
        pwd: ""
    })

    const [error, setError] = useState(false)

    const handleChange = (e) => {

        const { name, value } = e.target
        setUser({

            ...user,
            [name]: value
        })
    }

    const handleError = (res) => {

        setError(false)

        if (!res.ok) {

            setError(true)
            throw Error()
        }

        return res.json()
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const { email, pwd } = user
        fetch("https://elitehackers.herokuapp.com/user/signin", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({

                email,
                pwd
            })
        })

            .then(() => window.location.href = "/dashboard")
            .catch((err) => {
                console.log(err)
                setTimeout(() => setError(false), 2000)
            }
            )
    }
    return (
        <div className='login'>
            {error && <div className='login__error'>Invalid Login</div>}
            <div className='login__container'>
                <div className='login-container__img'>
                    <img src="https://assets.rbl.ms/25590936/origin.jpg" />
                </div>
                <div className='login-container__text'>
                    <h1 className='login-text__heading'>Login page</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input name="email" value={user.email} onChange={handleChange} type="email" placeholder='Enter your email' required />
                        <br />
                        <input name="pwd" value={user.pwd} onChange={handleChange} type="password" placeholder='Enter your password' required />
                        <br /><br />
                        <span>
                            {isModalOpen && <Modal onRequestClose={toggleModal} />}

                            <p onClick={toggleModal} className="forget__field">
                                Forget your password
                            </p>
                        </span>
                        <button className='login_btn btn1' type='submit'>Login</button>
                        <button className='login_btn btn2' onClick={() => window.location.href = "/login/new"} >Register</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Login