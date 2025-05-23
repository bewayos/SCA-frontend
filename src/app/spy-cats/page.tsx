'use client';
import { useEffect, useState } from 'react';
import { Cat } from '@/types/cat';
import CatList from '@/components/CatList';
import CatForm from '@/components/CatForm';

export default function SpyCatsPage() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCats = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cats`);
      const data = await res.json();
      setCats(data);
    } catch (err) {
      setError('Failed to fetch cats.');
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Spy Cats</h1>
      {error && <p className="text-red-500">{error}</p>}
      <CatForm onSuccess={fetchCats} />
      <CatList cats={cats} onUpdate={fetchCats} />
    </div>
  );
}
