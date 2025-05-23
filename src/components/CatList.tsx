import { Cat } from '@/types/cat';

export default function CatList({ cats, onUpdate }: { cats: Cat[]; onUpdate: () => void }) {
  const handleDelete = async (id: number) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cats/${id}`, {
      method: 'DELETE',
    });
    onUpdate();
  };

  return (
    <ul className="space-y-2">
      {cats.map((cat) => (
        <li key={cat.id} className="border p-2 flex justify-between items-center">
          <span>
            <b>{cat.name}</b> ({cat.breed}) — {cat.salary}$
          </span>
          <button onClick={() => handleDelete(cat.id)} className="bg-red-500 text-white px-2 py-1">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
