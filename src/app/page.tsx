// Inside a page component (e.g., login page)
'use client'; // Ensure this is a client-side component

import { useRouter } from 'next/navigation'; // Import from next/navigation
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter(); // Ensure it's used inside a page component
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Example of using router after the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/home'); // Redirect to home page if token exists
    }
  }, [router]);

  return (
    <div>
      {/* Render your login form here */}
      {error && <div>{error}</div>}
    </div>
  );
}
