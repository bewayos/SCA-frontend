'use client';

import { useState } from 'react';
import { NewCat } from '@/types/cat';
import Alert from '@/components/Alert';

export default function CatForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState<NewCat>({
    name: '',
    years_experience: 0,
    breed: '',
    salary: 0,
  });

  const [feedback, setFeedback] = useState<{ msg: string; type: 'error' | 'success' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === 'years_experience' || name === 'salary' ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cats`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFeedback({ msg: '✅ Cat added successfully.', type: 'success' });
        setForm({ name: '', years_experience: 0, breed: '', salary: 0 });
        onSuccess();
      } else {
        const data = await res.json();
        setFeedback({ msg: data?.detail || '❌ Failed to add cat.', type: 'error' });
      }
    } catch (err) {
      setFeedback({ msg: '❌ Network error. Please try again.', type: 'error' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2 w-full max-w-md">
      {feedback && <Alert message={feedback.msg} type={feedback.type} />}

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full border p-2 text-black placeholder-gray-600 rounded"
      />
      <input
        name="years_experience"
        type="number"
        value={form.years_experience}
        onChange={handleChange}
        placeholder="Years of experience"
        className="w-full border p-2 text-black placeholder-gray-600 rounded"
      />
      <input
        name="breed"
        value={form.breed}
        onChange={handleChange}
        placeholder="Breed"
        className="w-full border p-2 text-black placeholder-gray-600 rounded"
      />
      <input
        name="salary"
        type="number"
        value={form.salary}
        onChange={handleChange}
        placeholder="Salary"
        className="w-full border p-2 text-black placeholder-gray-600 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Cat
      </button>
    </form>
  );
}
