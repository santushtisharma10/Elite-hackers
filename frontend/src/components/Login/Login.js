import React, { useState } from 'react'

function Login() {

    const [user, setUser] = useState({

        name: "",
        pwd: ""
    })

    const [error, setError] = useState(false)

    const handleChange = (e) => {

        const {name, value} = e.target
        setUser({

            ...user,
            [name]: value
        })
    }

    const handleError = (res) => {

        setError(false)

        if(!res.ok) {

            setError(true)
            throw Error()
        }

        return res.json()
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const {name, pwd} = user
        fetch("http://localhost:5000/login",{
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({

                name,
                pwd
            })
        })
        .then(handleError)
        .then(()=>window.location.href="/")
        .catch((err)=>console.log("Invalid Login"))
    }
  return (
    <div>
        Login page
        {error && <h1>Invalid Login</h1>}
        <form onSubmit={handleSubmit}>
            <input name="name" value={user.name} onChange={handleChange} type="text" placeholder='Enter username'/>
            <input name="pwd" value={user.pwd} onChange={handleChange} type="password" placeholder='enter password'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login