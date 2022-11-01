import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import style from './Login.module.scss'
import { loginSchema } from '../../schemas';
import { useFormik } from 'formik';
import axios from '../../services/axios.instance'
import { LoginContext } from './LoginProvider/LoginProvider';
import utility from '../../utlity/utility';

const initialValues = {
    username: "",
    password: "",
}


const Login = () => {
    const navigate = useNavigate();

    const loginContext = useContext(LoginContext);

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, action) => {

            const response = await axios.post("auth/login", values)

            const token = response.data.data.token;

            const role = utility.ROLE_PAGE_MAP[response.data.data.role]
            loginContext.onLogin({ token: token, role: role })
            navigate('/home');
            action.resetForm();
        }
    })

    return (<>
        <div className={style.page}>
            <div className={style["form-container"]}>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" hidden>Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder='username'
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.username && touched.username ? (
                            <p className={style.link}>{errors.username}</p>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="password" hidden>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                            <p className={style.link}>{errors.password}</p>
                        ) : null}
                    </div>
                    <div>
                        <button type='submit'>login</button>
                    </div>
                </form>
                <div className={style.link}>
                    <p>Forgot Password?</p>
                </div>
            </div>
        </div>

    </>)
}

export default Login;