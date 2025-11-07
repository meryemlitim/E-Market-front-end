import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
export default function AuthForm({ type = "register" }) {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("🔪🔪🔪🔪");  
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (type === "register") {
        await register({
          fullName: form.name,
          email: form.email,
          password: form.password,
        });
        alert("✅ Registered successfully!");
        navigate("/");
      } else {
        await login(form.email, form.password);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-[91vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-violet-600 mb-6">
          {type === "register" ? " Register Now" : "Login"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          {type === "register" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={form.name}
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                onChange={handleChange}
                required
                />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={form.email}
              onChange={handleChange}
              required  
              />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={form.password}
              onChange={handleChange}
              required    
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-lg font-medium hover:bg-violet-700 transition-all"
            disabled= {loading}
          >
             {loading ? "Processing..." : type === "register" ? "Register" : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}
