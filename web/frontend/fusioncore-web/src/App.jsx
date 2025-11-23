import { FaRoblox } from "react-icons/fa";

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Side - Blur Background */}
      <div
        className="w-1/2 h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/your-image.jpg')`, // Replace this with provided image
          filter: "blur(5px)",
        }}
      ></div>

      {/* Right Side - Black Panel */}
      <div className="w-1/2 h-full bg-black flex flex-col justify-center items-start p-16 text-white">
        <h1 className="text-6xl font-bold">Hi</h1>
        <h2 className="text-3xl mt-2 opacity-80">Welcome to FusionCore</h2>

        {/* Login Button */}
        <button
          className="flex items-center gap-3 mt-8 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          onClick={() => {
            window.location.href = "/auth/roblox"; // Placeholder Roblox login route
          }}
        >
          <FaRoblox className="text-2xl" />
          Login with Roblox
        </button>

        {/* Discord fallback */}
        <button
          className="mt-4 text-sm underline opacity-70 hover:opacity-100"
          onClick={() => {
            window.location.href = "/auth/discord"; // Placeholder Discord login
          }}
        >
          Unable to sign in with Roblox
        </button>
      </div>
    </div>
  );
}
