'use client';

import Link from 'next/link';
import Alert from '@/components/Alert';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8 bg-black text-white">
      <h1 className="text-3xl font-bold">Spy Cat Agency Dashboard</h1>

      <Alert
        message="Welcome! Use the link below to manage spy cats."
        type="info"
      />

      <nav className="flex flex-col items-center gap-4">
        <Link
          href="/spy-cats"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow"
        >
          ➤ Manage Spy Cats
        </Link>
      </nav>

      <footer className="mt-16 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Spy Cat Agency. All rights meorved.
      </footer>
    </div>
  );
}
