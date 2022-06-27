import React, {useState} from 'react';
import LoginComp from "../components/LoginComp";


function Login(){
    const adminUser = {
        email: "adminuser@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details =>{
        console.log(details)
        if (details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            setError("Details Undefined")
        }

    }

    const Logout = () =>{
        console.log("Logout")

    }

    return(

        <div className="Login">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            ) : (
                <LoginComp Login={Login} error={error}/>
            )}
        </div>

    )
}

export default Login;
