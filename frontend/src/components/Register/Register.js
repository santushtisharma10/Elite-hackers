import React, { useState } from 'react'

function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        pwd: "",
        rePwd: ""
    })
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange = (e) => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleError = async (res) => {

        setError(false)

        if (!res.ok) {

            const { message } = await res.json()
            console.log("response",res)
            console.log(message)
            throw Error(message)
        }

        return res.json()
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        // if pwd and rePwd is different return error
        if (user.pwd !== user.rePwd) {

            setError(true)
            setErrorMsg("Password does not match")
            setTimeout(()=>setError(false), 2000)
            return;
        }

        // api call to save the user info
        const { name, email, pwd } = user
        fetch("http://localhost:5000/register", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(
                {
                    name,
                    email,
                    pwd
                }
            )
        })
            .then(handleError)
            .then(() => window.location.href = '/login')
            .catch((err) => {

                setError(true)
                setErrorMsg(err.message)
                console.log(errorMsg)
                setTimeout(()=>setError(false), 4000)
            })
    }
    return (
        <div className='login'>
             {error && <div className='login__error'>{errorMsg}</div>}
            <div className='login__container'>
            <div className='login-container__img'>
                    <img src="https://assets.rbl.ms/25590936/origin.jpg" alt="login_image" />
                </div>
                <div className='login-container__text'>
            <h1 className='login_text__heading'>Registeration</h1>
            <br />
           
            <form onSubmit={handleSubmit}>
                <input name="name" value={user.name} onChange={handleChange} type="text" placeholder='Username' required/>
                <input name="email" value={user.email} onChange={handleChange} type="email" placeholder='email'required />
                <input name="pwd" value={user.pwd} onChange={handleChange} type="password" placeholder='Enter password' required/>
                <input name="rePwd" value={user.rePwd} onChange={handleChange} type="password" placeholder='re-enter password' required/>
                <br /><br />
                <button className='login_btn btn1' type='submit'>Register</button>
                <button className='login_btn btn2' onClick={()=>window.location.href="/login"}>Login</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default Register