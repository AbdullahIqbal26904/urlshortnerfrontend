import { FaLock, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

function SecurityDashboard() {
  return (
    <div className="absolute left-[257px] top-20 w-[82%] h-[85%] bg-gray-100 flex flex-col items-center py-10 overflow-hidden">
      {/* Title */}
      <div className="w-[80%] mb-6">
        <h2 className="text-gray-500 text-lg font-semibold">Security</h2>
        <h1 className="text-3xl font-bold mt-2">Security Dashboard</h1>
      </div>

      {/* Content Layout */}
      <div className="w-[80%] flex justify-between items-start gap-6">
        {/* Change Password Section (Left) */}
        <div className="w-[50%] bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>

          {/* Current Password */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Current Password</label>
            <div className="flex items-center border border-gray-300 rounded p-2">
              <input
                type="password"
                placeholder="********"
                className="w-full bg-transparent focus:outline-none"
              />
              <FaLock className="text-gray-500 text-lg" />
            </div>
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">New Password</label>
            <div className="flex items-center border border-gray-300 rounded p-2">
              <input
                type="password"
                placeholder="********"
                className="w-full bg-transparent focus:outline-none"
              />
              <FaLock className="text-gray-500 text-lg" />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="text-gray-700 font-medium">Confirm Password</label>
            <div className="flex items-center border border-gray-300 rounded p-2">
              <input
                type="password"
                placeholder="********"
                className="w-full bg-transparent focus:outline-none"
              />
              <FaLock className="text-gray-500 text-lg" />
            </div>
          </div>

          {/* Update Password Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold w-full">
            Update Password
          </button>
        </div>

        {/* Link Social Accounts Section (Right) */}
        <div className="w-[40%] bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Link Social Accounts</h3>

          {/* Social Account Icons */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
              <FaGoogle className="text-red-500" /> Google
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
              <FaFacebook className="text-blue-600" /> Facebook
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200">
              <FaTwitter className="text-blue-400" /> Twitter
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <button className="mt-6 text-red-600 border border-red-600 px-6 py-2 rounded-md font-semibold">
        Log Out
      </button>
    </div>
  );
}

export default SecurityDashboard;
