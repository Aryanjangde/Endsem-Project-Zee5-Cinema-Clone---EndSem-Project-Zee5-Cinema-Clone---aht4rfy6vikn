import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import 'tailwindcss/tailwind.css'; /* Import Tailwind CSS */
import { Link } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleLogin() {
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "projectID": "treoo5dhf86s",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: "ott",
        }),
      });
      
      const data = await response.json();
      
      if (data.status === "success") {
        localStorage.setItem("user", data.token);
        nav("/");
        alert("Login Successful");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");

      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
      alert("An error occurred. Please try again.");
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-14 bg-black">
      <div className="bg-violet-700 shadow-md rounded-2xl p-8 w-3/10 mb-32">
        <div className="flex flex-col items-center justify-center gap-5">
          <div>
            <input
              className="border-2 border-customPurple rounded-xl w-full py-2 px-3 mb-3"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="border-2 border-customPurple rounded-xl w-full py-2 px-3 mb-3"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
          )}
          <div>
            <button
              className="hue-rotate-180 drop-shadow-2xl text-lg text-white"
              onClick={handleLogin}
            >
              Login
            </button>
            <br/>
            <Link to="/signup" className="text-white">
              Create Account 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
