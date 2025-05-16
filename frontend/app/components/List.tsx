"use client";

import React, { useEffect, useState } from "react";

const headers = [
  "numero_facture",
  "date_emission",
  "nom_vendeur",
  "adresse_vendeur",
  "identifiant_fiscal_vendeur",
  "iban_vendeur",
  "nom_client",
  "adresse_client",
  "identifiant_fiscal_client",
  "taux_tva",
  "valeur_nette",
  "valeur_brute",
];

function formatKey(str: string) {
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

type Factures = {
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

const List = () => {
   const [factures, setFactures] = useState<Factures[]>([]);

  useEffect(() => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/ocr/factures/`;
  console.log("Fetching from:", apiUrl);

  fetch(apiUrl)
    .then(async (res) => {
      const text = await res.text();
      console.log("Raw response:", text);
      try {
        const data = JSON.parse(text);
        if (data?.facture) {
          setFactures(data.facture);
        } else {
          console.error("Facture data missing", data);
        }
      } catch (e) {
        console.error("Failed to parse JSON", e);
      }
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}, []);


  return (
    <div className="w-full overflow-x-auto px-12">
      <div className="min-w-[1000px] border border-[#03224c] rounded-lg overflow-hidden bg-white shadow-lg">
        {/* En-tête */}
        <div className="grid grid-cols-12 gap-1 bg-[#e6f0ff] border-b border-[#03224c] p-2 text-[11px] font-semibold text-[#03224c] rounded-t-lg">
          {headers.map((header, i) => (
            <div key={i} className="col-span-1 text-center px-1">
              {formatKey(header)}
            </div>
          ))}
        </div>

        {/* Lignes de données */}
        {factures && factures.length > 0 ? (
          factures.map((facture, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-1 border-b border-[#03224c]/20 px-2 py-1 text-[11px] text-[#03224c] bg-white/90"
            >
              {headers.map((key, j) => (
                <div key={j} className="col-span-1 text-center px-1 break-words">
                  {facture[key as keyof Factures]}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="italic text-[#03224c]/70 p-2 text-sm text-center">
            Aucune facture disponible.
          </p>
        )}
      </div>
    </div>
  );
};

export default List;
