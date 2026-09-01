import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to UserHub
        </h1>

        <p className="text-gray-600 mb-8">
          MERN authentication and user management system
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-gray-800 text-white px-6 py-3 rounded"
          >
            Signup
          </Link>
        </div>
      </div>
    </main>
  );
}