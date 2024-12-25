import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import "../Styles/Login.scss";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      if (email === "sudesh@gmail.com" && password === "Sudesh@123") {
        onLogin();
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    },
  });

  return (
    <div className="login">
      <h2 className="login-heading">Login Here</h2>
      <form onSubmit={formik.handleSubmit} className="login-form">
        <div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="login-email"
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="login-password"
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
