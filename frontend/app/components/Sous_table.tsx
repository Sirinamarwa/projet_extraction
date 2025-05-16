import { Products } from "./Informations";

type SousTotalProps = {
  products: Products[] | null;
};

const headers = [
  "description",
  "quantité",
  "unité",
  "prix unitaire",
  "valeur nette",
  "TVA",
  "valeur brute",
];

const formatKey = (str: string) =>
  str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const Sous_total: React.FC<SousTotalProps> = ({ products }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] border border-[#03224c] rounded-lg overflow-hidden">
        {/* En-têtes */}
        <div className="grid grid-cols-8 gap-1 bg-[#e6f0ff] border-b border-[#03224c] p-2 text-[11px] font-semibold text-[#03224c] rounded-t-lg">
          {headers.map((header, i) => (
            <div
              key={i}
              className={`${
                i === 0 ? "col-span-2 text-left" : "col-span-1 text-center"
              }`}
            >
              {formatKey(header)}
            </div>
          ))}
        </div>

        {/* Lignes produits */}
        {products && products.length > 0 ? (
          products.map((product, i) => (
            <div
              key={i}
              className="grid grid-cols-8 gap-1 border-b border-[#03224c]/30 px-2 py-1 text-[11px] text-[#03224c]"
            >
              {Object.values(product).map((val, j) => (
                <div
                  key={j}
                  className={`${
                    j === 0 ? "col-span-2 text-left" : "col-span-1 text-center"
                  }`}
                >
                  {val}
                </div>
              ))}
            </div>
          ))
        ) : (
          <p className="text-center italic text-[#03224c]/60 py-2">
            Aucun produit disponible.
          </p>
        )}
      </div>
    </div>
  );
};

export default Sous_total;
