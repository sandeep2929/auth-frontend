"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      router.push("/login");
      return;
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  if (!user) {
    return <p className="p-8">Loading...</p>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold">
          Welcome, {user.name} 👋
        </h1>

        <p className="mt-3 text-gray-600">
          Email: {user.email}
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => router.push("/dashboard/users")}
            className="bg-blue-600 text-white px-5 py-3 rounded"
          >
            View Users
          </button>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              router.push("/login");
            }}
            className="bg-red-600 text-white px-5 py-3 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}