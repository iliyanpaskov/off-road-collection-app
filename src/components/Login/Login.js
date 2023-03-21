import { Link } from "react-router-dom";
import "../Forms.css";

const Login = () => {
    return (
        <section className="form-wapper">
            <h2 className="form-title">Login</h2>
            <form className="form" onSubmit={''}>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input className="form-input" type="text" name="username" id="username" placeholder="john.sillver" />
                </article>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-input" type="password" name="password" id="password" placeholder="* * * * * * * * "/>
                </article>
                <article className="form-label-input-wrapper" >
                    <input className="form-submit-btn" type="submit" value={"Login"}/>
                </article>
            </form>
            <Link className="form-link" to="/sign-up">{`don't have an account? sign up here !`}</Link>
        </section>
    )
}
export default Login;