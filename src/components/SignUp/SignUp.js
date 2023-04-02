import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { fetchSignUp, setSignUpUsername } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import "../Forms.css";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Field must be filled !';
        } else if (values.username.length < 5) {
            errors.username = 'Username needs to be longer then 4 characters!';
        } else if (values.username.length > 16) {
            errors.username = 'Username needs to be shorter then 16 characters!';
        }

        if (!values.email) {
            errors.email = 'Field must be filled !';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address !';
        }

        if (!values.password) {
            errors.password = 'Field must be filled !';
        } else if (values.password.length < 5 || values.password.length > 20) {
            errors.password = 'Invalid password!';
        }

        if (!values.repassword) {
            errors.repassword = 'Field must be filled !';
        } else if (values.repassword !== values.password) {
            errors.repassword = 'Invalid confirm password !';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            repassword: "",
        },
        validate,
        onSubmit: values => {
            const username = values.username;
            const getSignUp = async () => {
                dispatch(fetchSignUp(values, username));
            }
            getSignUp();
            dispatch(setSignUpUsername(username));
            navigate("/");
        }
    });

    return (
        <section className="form-wapper">
            <h2 className="form-title">sign up</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="john.sillver"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.username && formik.errors.username
                        ? <div className="form-error">{formik.errors.username}</div>
                        : null
                }
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john.sillver@gmail.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.email && formik.errors.email
                        ? <div className="form-error">{formik.errors.email}</div>
                        : null
                }
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="* * * * * * * * "
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.password && formik.errors.password
                        ? <div className="form-error">{formik.errors.password}</div>
                        : null
                }
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="repassword">Confirm Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        name="repassword"
                        id="repassword"
                        placeholder="* * * * * * * * "
                        value={formik.values.repassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </article>
                {
                    formik.touched.repassword && formik.errors.repassword
                        ? <div className="form-error">{formik.errors.repassword}</div>
                        : null
                }
                <article className="form-label-input-wrapper" >
                    <input className="form-submit-btn" type="submit" value={"Sign Up"} />
                </article>
            </form>
            <Link className="form-link" to="/login">{`Have an account? login here !`}</Link>
        </section>
    )
}

export default SignUp;