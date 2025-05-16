"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import Table from "./Table";
import Link from "next/link";

export type Factures = {
  numero_facture: string;
  date_emission: string;
  nom_vendeur: string;
  adresse_vendeur: string;
  identifiant_fiscal_vendeur: string;
  iban_vendeur: string;
  nom_client: string;
  adresse_client: string;
  identifiant_fiscal_client: string;
  taux_tva: string;
  valeur_nette: string;
  valeur_brute: string;
};

export type Products = {
  description: string;
  quantite: string;
  unite: string;
  prix_unitaire: string;
  valeur_nette: string;
  TVA: string;
  valeur_brute: string;
};

export default function Informations() {
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");
  const [facture, setFacture] = useState<Factures | null>(null);
  const [products, setProducts] = useState<Products[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setStatus("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8000/api/ocr/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Upload successful!");
        console.log(data.facture_data);
        setFacture(data.facture_data);
        console.log(data.products);
        setProducts(data.products);
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setStatus(`Request failed: ${err.message}`);
    }
  };

  return (<div className="relative z-20">
    <div className="w-full mx-auto max-w-[1500px] flex flex-col items-center justify-center">
      <div className="w-full py-4">
  
        {/* Boutons Upload stylés */}
        <div className="flex items-center justify-center flex-col sm:flex-row gap-4 mt-8">
  {/* Bouton Importer une facture (avec icône image) */}
  <label
    htmlFor="file-upload"
    className="px-4 py-4 border-white bg-white/70 rounded-xl flex items-center gap-2 cursor-pointer shadow-md hover:bg-white/80 transition"
  >
    <Image
      src="/telechargeur.png" // ← Assure-toi d’avoir cette icône dans ton dossier public
      alt="Importer"
      width={24}
      height={24}
    />
    <p className="text-xs font-bold text-[#03224c]">Importer une facture</p>
    <input
      id="file-upload"
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={handleFileChange}
      className="hidden"
    />
  </label>
     < div></div>
     < div></div>
     < div></div>
     < div></div>
  {/* Bouton Extraire les informations */}
  <button
    onClick={handleUpload}
    className="px-4 py-4 border-white bg-white/70 rounded-xl flex items-center gap-2 cursor-pointer shadow-md hover:bg-white/80 transition"
  >
    <Image
      src="/extraction.png" // ← Icône symbolique pour "extraction", tu peux aussi utiliser une loupe
      alt="Extraire"
      width={24}
      height={24}
    />
    <p className="text-xs font-bold text-[#03224c]">Extraire les informations</p>
  </button>

  {/* Statut */}
  {status && (
    <div className="px-4 py-2 bg-white/70 rounded-xl shadow-md text-[#03224c] text-xs font-bold">
      {status}
    </div>
  )}
 < div></div>
     < div></div>
     < div></div>
     < div></div>
   <Link href={"/factures"}>
          <button className="px-4 py-4 border-white bg-white/70 rounded-xl flex items-center gap-2 cursor-pointer shadow-md hover:bg-white/80 transition">
           <Image
            src="/base-de-donnees.png" 
            alt="Archive"
            width={24}
            height={24}
           />
           <p className="text-xs font-bold text-[#03224c]"> Historique des factures </p>
           </button>
           </Link>
</div>

  
        {/* Table */}
        <div className="mt-8">
          <Table factures_data={facture} products_data={products} />
        </div>
      </div>
    </div>
  </div>
  );
}
