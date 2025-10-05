import { Link } from '@tanstack/react-router'
export function Header() {
  return (
    <header className="p-4 border-b border-slate-200 flex items-center justify-between">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <Link
          to="/"
          className="text-blue-500 hover:underline"
          activeProps={{ className: 'font-bold' }}
        >
          Home
        </Link>
      </nav>
    </header>
  )
}