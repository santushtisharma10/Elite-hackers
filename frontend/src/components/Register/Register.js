import React,{useState} from 'react'

function Register() {

    const [user, setUser] = useState({
        name:"",
        email:"",
        pwd:"",
        rePwd:""
    }) 
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const handleChange = (e) => {

        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleError = async(res)=>{

        setError(false)

        if(!res.ok) {

            const {msg} = await res.json()
            throw Error(msg)
        }

        return res.json()
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        // if pwd and rePwd is different return error
        if(user.pwd != user.rePwd) {

            setError(true)
            setErrorMsg("Password does not match")
            return ;
        }

        // api call to save the user info
        const {name, email, pwd} = user
        fetch("http://localhost:5000/register", {
            method: 'POST',
            headers:{
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
        .then(()=>window.location.href = '/login')
        .catch((err)=>{

            setError(true)
            setErrorMsg(err.msg)
        })        
    }
  return (
    <div>
        Registration page
        {error && <h1>{errorMsg}</h1>}
        <form onSubmit={handleSubmit}>
            <input name="name" value={user.name} onChange={handleChange} type="text" placeholder='Username' />
            <input name="email" value={user.email} onChange={handleChange} type="email" placeholder='email'/>
            <input name="pwd" value={user.pwd} onChange={handleChange} type="password" placeholder='Enter password' />
            <input name="rePwd" value={user.rePwd} onChange={handleChange} type="password" placeholder='re-enter password'/>
            <button type='submit'>Submit</button>
        </form>
    
    </div>
  )
}

export default Register