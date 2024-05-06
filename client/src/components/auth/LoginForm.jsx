import { useState } from "react";
import axiosInstance from "../../utils/axios";
import { useAuth } from "../../contexts/authContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = useAuth();

  console.log(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      auth.login(response.data.token, response.data.user);

      console.log(response);
    } catch (error) {
      const errorMsg = error.response.data.message || error.message;
      console.log(error);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[400px]">
      <form onSubmit={handleLogin} className="space-y-5">
        <div className="flex flex-col mt-8">
          <label htmlFor="email">Email</label>
          <input
            className="border rounded-md p-3 mt-1 outline-[#fdd835]"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="assword">Password</label>
          <input
            className="border rounded-md p-3 mt-1 outline-[#fdd835]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          disabled={!email || !password}
          className="bg-[#fdd835] p-3 rounded-md  text-white w-full"
        >
          {loading ? "Loading.." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
