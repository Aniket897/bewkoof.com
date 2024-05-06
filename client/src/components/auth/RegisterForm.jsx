import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import axiosInstance from "../../utils/axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.post(
        "/auth/register",
        {
          email,
          password,
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("registeration successfull");
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
      <form onSubmit={handleRegister} className="space-y-5">
        <div className="flex flex-col mt-8">
          <label htmlFor="email">Username</label>
          <input
            className="border rounded-md p-3 mt-1 outline-[#fdd835]"
            type="text"
            placeholder="jonh doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
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
          disabled={!username || !password || !email}
          className="bg-[#fdd835] p-3 rounded-md  text-white w-full"
        >
          {loading ? "Loading..." : " Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
