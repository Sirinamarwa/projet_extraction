import Image from "next/image";
import Link from "next/link";
import DownloadFactureButton from "./components/DownloadFactureButton";
import DownloadjsonButton  from "./components/DownloadjsonButton";

export default function App() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage: "url('/bg-facturexpert.png')",
      }}
    >
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-8 flex flex-col items-center justify-center gap-6 h-full">
        {/* Titre en haut */}
        <div></div>
        
      
        <h1 className="text-8xl sm:text-6xl font-bold text-[#03224c] text-center mx-auto mt-4">
          FactureXpert - Extraction Automatique
        </h1>

        {/* Boutons Export */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
       
      

        <div className="flex  items-center justify-center flex-col sm:flex-row gap-4 mt-8">
         
         <DownloadFactureButton></DownloadFactureButton>

          <div></div>
          <div></div>
          <Link href={"/factures"}>
          <button className="px-4 py-3 border-white bg-white/70 rounded-xl flex items-center gap-2 cursor-pointer shadow-md hover:bg-white/80 transition">
           <Image
            src="/base-de-donnees.png" 
            alt="Archive"
            width={24}
            height={24}
           />
           <p className="text-xs font-bold text-[#03224c]"> Historique des factures </p>
           </button>
           </Link>
           <div></div>
           <div></div>
            <DownloadjsonButton ></DownloadjsonButton>
          </div>
          <div></div>
          
       
        {/* Texte descriptif */}
        <div className=" mt-20 text-center space-y-4">
          <p className="text-l sm:text-3xl text-[#03224c] font-bold">
            DÉPOSEZ VOTRE FACTURE, NOUS NOUS OCCUPONS DU RESTE
          </p>
          <p className="text-l sm:text-xl text-center text-[#03224c]">
          Notre technologie OCR transforme instantanément vos factures en données structurée.
          </p>
        </div>
         <div></div>
        {/* Bouton */}
        <Link href={"/table"}>
  <button
    className="mt-4 px-6 py-3 flex flex-col items-center border-white bg-white rounded-xl gap-2 cursor-pointer shadow-md hover:bg-white/80 transition"
    style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-[#03224c]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
      />
    </svg>
    <p className="text-sm font-bold text-[#03224c]">Commencer</p>
  </button>
</Link>


      </div>
    </main>
  );
}
