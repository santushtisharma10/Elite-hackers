import React, { useState } from 'react'
import "./Login.css"

function Login() {

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
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({

                email,
                pwd
            })
        })
            .then(handleError)
            .then(() => window.location.href = "/dashboard")
            .catch((err) => {
                console.log("Invalid Login")
                setTimeout(()=>setError(false), 2000)
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
                        <input name="name" value={user.email} onChange={handleChange} type="email" placeholder='Enter your email' required />
          <br />
                        <input name="pwd" value={user.pwd} onChange={handleChange} type="password" placeholder='Enter your password' required/>
                        <br /><br />
                        <button className='login_btn btn1' type='submit'>Login</button>
                        <button className='login_btn btn2' onClick={()=>window.location.href = "/login/new"} >Register</button>
                    </form>
                    
                </div>

            </div>
        </div>
    )
}

export default Login