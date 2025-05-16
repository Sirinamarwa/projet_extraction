import List from "../components/List";

export default function Factures() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg-facturexpert.png')" }}
      ></div>

      {/* Superposition du contenu */}
      <div className="relative z-10 w-full px-4 py-8 flex flex-col items-center gap-12">
        {/* Titre */}
        <div className="px-6  max-w-[1000px] text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#03224c] drop-shadow-md">
            FactureXpert - Extraction Automatique
          </h1>
        </div>
        <p className="text-sm mt-2 text-[#03224c]/80 font-bold text-center ">
            Visualisez l’historique de vos factures extraites automatiquement
          </p>
        {/* Liste des factures */}
       
          <List />
      
      </div>
    </main>
  );
}
