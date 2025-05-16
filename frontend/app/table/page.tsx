import Informations from "../components/Informations";

export default function TablePage() {
  return (
    <main className="relative min-h-screen text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('bg-facturexpert.png')" }}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-6 h-full">
        {/* Titre en haut */}
        <h1 className="text-8xl sm:text-6xl font-bold text-[#03224c] text-center mx-auto mt-4">
          FactureXpert - Extraction Automatique
        </h1>
      </div>

      <Informations />
    </main>
  );
}
