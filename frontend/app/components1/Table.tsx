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
    <div className="flex flex-row flex-wrap gap-3 justify-center text-[#03224c] text-xs">
      {/* Colonne gauche : Facture */}
      <div className="w-full md:w-[49%] px-3 py-3 bg-gradient-to-l from-[#03224c] to-black rounded-xl">
        <div className="bg-white p-2.5 rounded-xl shadow-sm">
          <h2 className="text-base font-semibold text-center mb-2">
            Les Informations sur Facture
          </h2>
          {factures_data ? (
            Object.entries(factures_data).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center py-1 border-b border-[#03224c]/10 border-[0.5px] last:border-none"
              >
                <div className="w-[140px] font-medium">{formatKey(key)}</div>
                <div className="flex-1">{value}</div>
              </div>
            ))
          ) : (
            <p className="text-center italic text-[#03224c]/60">
              Aucune donnée disponible
            </p>
          )}
        </div>
      </div>
      <div></div>
      {/* Colonne droite : Produits */}
      <div className="w-full md:w-[49%] px-3 py-3 bg-gradient-to-l from-[#03224c] to-black rounded-xl">
        <div className="bg-white p-2.5 rounded-xl shadow-sm">
          <h2 className="text-base font-semibold text-center mb-2">
            Informations Produits
          </h2>
          {products_data ? (
            <Sous_table products={products_data} />
          ) : (
            <p className="text-center italic text-[#03224c]/60">
              Aucune donnée disponible
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
