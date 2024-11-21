'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [selected, setSelected] = useState('Dashboard');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      setUser(decoded.name);
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold">WhatByte</h1>
        <span className="text-gray-700">{user.name}</span>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            {['Dashboard', 'Skillset', 'Internship'].map((item) => (
              <button
                key={item}
                className={`px-4 py-2 rounded-lg text-left font-semibold ${
                  selected === item ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelected(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Screen */}
        <main className="flex-1 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold">{selected}</h2>
          <p className="mt-2 text-gray-600">
            Welcome to the {selected} section. Customize this content as needed.
          </p>
        </main>
      </div>
    </div>
  );
}
