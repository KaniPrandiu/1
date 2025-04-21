import Navbar from '../components/Navbar';

export default function LeaderboardPage() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Classifica Previsioni</h1>
        <p>(Da implementare con fetch alle previsioni e ranking per utente)</p>
      </div>
    </>
  );
}
