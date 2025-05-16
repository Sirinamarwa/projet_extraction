import Sous_table from "../components/Sous_table";
import { Factures, Products } from "./Informations";

interface TableProps {
  factures_data: Factures | null;
  products_data: Products[] | null;
}

function formatKey(str: string) {
  return str
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const Table: React.FC<TableProps> = ({ factures_data, products_data }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-3 justify-center text-[#03224c] text-xs items-start">
      {/* Colonne gauche : Facture */}
      <div className="w-full md:w-[35%] px-2 py-2 bg-gradient-to-l from-[#03224c] to-black rounded-xl shadow-lg">
        <div className="bg-white p-2 rounded-xl shadow-inner">
          <h2 className="text-base font-semibold text-center mb-3 text-[#03224c] border-b border-[#03224c]/30 pb-1">
            Les Informations sur Facture
          </h2>
          {factures_data ? (
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[500px] pr-1">
              {Object.entries(factures_data).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between py-1 border-b border-[#03224c]/10 last:border-none"
                >
                  <div className="w-[140px] text-center font-semibold text-[#03224c]">
                    {formatKey(key)}
                  </div>
                  <div
                    className="flex-1 text-center text-[#555] truncate"
                    title={String(value)}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center italic text-[#03224c]/60 py-4">
              Aucune donnée disponible
            </p>
          )}
        </div>
      </div>

      {/* Colonne droite : Produits */}
      <div className="w-full md:w-[60%] px-3 py-3 bg-gradient-to-l from-[#03224c] to-black rounded-xl shadow-lg">
        <div className="bg-white p-2 rounded-xl shadow-inner">
          <h2 className="text-base font-semibold text-center mb-2 text-[#03224c] border-b border-[#03224c]/20 pb-1">
            Informations Produits
          </h2>
          {products_data ? (
            <Sous_table products={products_data} />
          ) : (
            <p className="text-center italic text-[#03224c]/60 py-4">
              Aucune donnée disponible
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
