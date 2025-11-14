import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 ">
      <h1 className="text-8xl font-bold text-violet-600 mb-2">404</h1>
      <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-6">Page Not Found</h2>
      <Link
        to="/"
        className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
