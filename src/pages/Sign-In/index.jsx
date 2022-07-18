import { Navbar } from "fileModules";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "contexts/authContext";

export function SignIn() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGuestLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("/api/auth/login", {
        email: "satyam@gmail.com",
        password: "satyam123",
      });
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
    navigate(location?.state?.from?.pathname || "/", { replace: true });
  };

  return (
    <>
      <Navbar />
      <section className="sign-up-wrapper">
        <div className="sign-up-left">
          <img className="rotate" src="/assets/shoes.png" alt="shoe" />
        </div>
        <div className="sign-up-right">
          <div className="sign-in-container">
            <div className="header">
              <h2>Sign-In</h2>
            </div>
            <form id="form" className="form">
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
              </div>
              <div className="keep-signed">
                <input type="checkbox" />
                <p>Keep me signed in</p>
              </div>
              <div className="sign-up button-group">
                <span className="guest-login" onClick={handleGuestLogin}>
                  Log in as Guest
                </span>
                <button id="sign-btn">Sign-In</button>
                <Link to="/signup">
                  <button id="sign-btn">
                    Sign-Up <i className="fas fa-chevron-right"></i>
                  </button>
                </Link>
              </div>
              <a href=".">
                <p className="forgot-password">Forgot Password?</p>
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
