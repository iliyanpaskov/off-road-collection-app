import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { updateLoginUrl } from "../../services/utils";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../redux/features/userSlice";
import "../Forms.css";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Field must be filled !';
        } else if (values.username.length < 5) {
            errors.username = 'Invalid username!';
        } else if (values.username.length > 16) {
            errors.username = 'Invalid username!';
        }

        if (!values.password) {
            errors.password = 'Field must be filled !';
        } else if (values.password.length < 5) {
            errors.password = 'Invalid password!';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validate,
        onSubmit: values => {
            const url = updateLoginUrl('username', values.username, 'password', values.password);
            const getLogin = async () => {
                dispatch(fetchLogin(url));
            }
            getLogin();
            navigate("/");
        }
    });


    return (
        <section className="form-wapper">
            <h2 className="form-title">Login</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
                <article className="form-label-input-wrapper" >
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input className="form-input"
                        type="text"
                        id="username"
                        name="username"
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
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-input"
                        type="password"
                        id="password"
                        name="password"
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
                    <input className="form-submit-btn" type="submit" value={"Login"} />
                </article>
            </form>
            <Link className="form-link" to="/sign-up">{`don't have an account? sign up here !`}</Link>
        </section>
    )
}
export default Login;