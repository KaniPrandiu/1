import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="font-bold text-xl">Pope League</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
