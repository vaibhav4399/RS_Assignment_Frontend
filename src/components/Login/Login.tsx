import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login_section">
            <div className="login_title">Login</div>
            <div>
                <p className="login_msg">Welcome back to ECOMMERCE</p>
                <p className="login_info">The next gen business marketplace</p>
            </div>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter" />
                </div>
                <div className="relative">
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter" />
                    <button onClick={() => setShowPassword(!showPassword)} className="password_toggle" type="button">Show</button>
                </div>
                <button className="submit">Login</button>
            </form>
            <div className="register_toggle">
                <p>Don’t have an Account? </p>
                <Link className="font-medium" to="/register">SIGN UP</Link>
            </div>
        </div>
    )
}

export default Login;