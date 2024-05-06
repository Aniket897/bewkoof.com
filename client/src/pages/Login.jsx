import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const Login = () => {
  const [active, setActive] = useState("login");
  const auth = useAuth();

  if (auth?.token) {
    return <Navigate to={"/"} />;
  }

  function handleChange(text) {
    setActive(text);
  }

  return (
    <RootLayout>
      <div className="flex">
        <div className="max-lg:hidden text-center flex-1 bg-[#FFFBE9] p-9 pb-16">
          <p className="text-3xl text-bold">
            Welcome to the world of Bewakoof®!
          </p>
          <img
            src="https://images.bewakoof.com/web/group-19-1617704502.png"
            alt=""
            className="mt-[100px]"
          />
        </div>
        <div className="flex-1 flex items-center justify-center flex-col max-lg:h-[90vh]">
          <div className="text-center flex items-center w-[400px]">
            <div
              className={`flex-1 p-3 cursor-pointer ${
                active == "login" ? "bg-red-100" : ""
              }`}
              onClick={() => handleChange("login")}
            >
              Login
            </div>
            <div
              className={`flex-1 p-3 cursor-pointer ${
                active == "register" ? "bg-red-100" : ""
              }`}
              onClick={() => handleChange("register")}
            >
              Register
            </div>
          </div>
          {active == "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </RootLayout>
  );
};

export default Login;
