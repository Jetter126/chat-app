import React from "react";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ReactChat</span>
                <span className="title">Log In</span>
                <form action="">
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign In</button>
                </form>
                <p>Don't have an account? <span style={{color: "#1abc9c"}}>Register.</span></p>
            </div>
        </div>
    )
}

export default Login