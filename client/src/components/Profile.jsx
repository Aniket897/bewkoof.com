import { UserCircle } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/authContext";

const Profile = () => {
  const [show, setShow] = useState(false);
  const auth = useAuth();

  const handleClick = () => {
    setShow((pre) => !pre);
  };
  return (
    <div className="relative flex items-center justify-center">
      <button onClick={handleClick}>
        <UserCircle size={20} />
      </button>
      {show && (
        <div className="absolute top-[150%] border -left-[150%] bg-white shadow-md rounded-sm z-10">
          <div className="flex items-center gap-x-3 p-4">
            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-neutral-200">
              AK
            </div>
            <div>
              <p className="text-base">{auth.user.email}</p>
              <p className="text-xs">{auth.user.username}</p>
            </div>
          </div>
          <div>
            <p className="px-2 py-3">Orders</p>
          </div>
          <button
            onClick={auth.logout}
            className="w-full p-2 bg-red-500 text-white"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
