// src/components/Sidebar.jsx
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className={`h-screen bg-teal-800 text-white flex flex-col transition-all duration-300 ${open ? 'w-60' : 'w-16'}`}>
        {/* Header with toggle */}
        <div className="p-3 flex items-center justify-between border-b border-zinc-950">
          <div className="flex items-center gap-2">
            <div className="text-lg font-bold">{open ? "Expense-Tracker" : "ET"}</div>
          </div>
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle sidebar"
            className="p-1 rounded hover:bg-gray-700"
          >
            {open ? "«" : "»"}
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 p-3 space-y-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
            <span className="w-6 text-center">🏠</span>
            <span className={`${open ? "inline" : "hidden"}`}>Dashboard</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
            <span className="w-6 text-center">🪙</span>
            <span className={`${open ? "inline" : "hidden"}`}>Budgets</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
            <span className="w-6 text-center">💳</span>
            <span className={`${open ? "inline" : "hidden"}`}>Expenses</span>
          </a>

          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700">
            <span className="w-6 text-center">📊</span>
            <span className={`${open ? "inline" : "hidden"}`}>Reports</span>
          </a>
        </nav>
      </aside>

      {/* Main content still to the right */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      </main>
    </div>
  );
}
