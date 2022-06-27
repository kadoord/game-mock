import React, {useState} from 'react';

const Registration = () => {
    const [UserRegistration, setUserRegistration] = useState({
        username: "",
        surname: "",
        email: "",
        password: ""
    })

    const [records, setRecords] = useState([])
    const handleSubmit = (ev) => {
        ev.preventDefault()
        setLoading(true)
        const newRecord = { ...UserRegistration, id: new Date().getTime().toString()}
        console.log(records)
        setRecords([...records, newRecord])
        console.log(records)
    }
    const handleInput = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setUserRegistration({... UserRegistration, [name]: value})
    }

    const [loading, setLoading] = useState(false)
    return(
        <form>
            {loading ? (
                <span>Loading ...</span>
            ) : null}
            <div className="form-inner">
                <h2>Registration</h2>
                <div className="form-group">
                    <label htmlFor="username">Fullname</label>
                    <input type="text"
                           name="username"
                           id="username"
                           value={UserRegistration.username}
                           onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="surname">Surname</label>
                    <input type="text"
                           name="surname"
                           id="surname"
                           value={UserRegistration.surname}
                           onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                           name="email"
                           id="email"
                           value={UserRegistration.email}
                           onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           name="password"
                           id="password"
                           value={UserRegistration.password}
                           onChange={handleInput}
                    />
                </div>
                <input type="submit"
                       value="Registration"
                       onClick={handleSubmit}/>

            </div>
        </form>
    )
}

export default Registration;