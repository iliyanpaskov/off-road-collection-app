import { Link } from "react-router-dom";
import "../Forms.css";

const SignUp = () => {
    return (
        <section className="form-wapper">
            <h2 className="form-title">sign up</h2>
            <form className="form" onSubmit={''}>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input className="form-input" type="text" name="username" id="username" placeholder="john.sillver" />
                </article>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-input" type="email" name="email" id="email" placeholder="john.sillver@gmail.com" />
                </article>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-input" type="password" name="password" id="password" placeholder="* * * * * * * * "/>
                </article>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="confirm-password">Confirm Password:</label>
                    <input className="form-input" type="password" name="confirm-password" id="confirm-password" placeholder="* * * * * * * * "/>
                </article>
                <article className="form-label-input-wrapper" >
                    <input className="form-submit-btn" type="submit" value={"Sign Up"}/>
                </article>
            </form>
            <Link className="form-link" to="/login">{`Have an account? login here !`}</Link>
        </section>
    )
}

export default SignUp;