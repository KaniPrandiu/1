import Navbar from '../components/Navbar';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">Entra</button>
        </form>
      </div>
    </>
  );
}
