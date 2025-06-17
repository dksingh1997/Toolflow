// apps/web/pages/index.tsx

import Link from 'next/link';

const tools = [
  {
    id: 'gmail.findEmail',
    name: 'Gmail - Find Email',
    description: 'Search Gmail inbox using a query string.',
  },
];

export default function HomePage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">🧠 AI Middleware Tools</h1>
      <ul className="space-y-4">
        {tools.map((tool) => (
          <li key={tool.id} className="border rounded-xl p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{tool.name}</h2>
            <p className="text-gray-600">{tool.description}</p>
            <Link
              href={`/tools/${tool.id}`}
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              → Try Tool
            </Link>


          </li>
        ))}
      </ul>
    </main>
  );
}
