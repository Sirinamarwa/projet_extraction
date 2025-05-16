import { Products } from "./Informations";

type SousTotalProps = {
  products: Products[] | null;
};

const headers = ["description", "quantité", "unité", "prix unitaire", "valeur nette", "TVA", "valeur brute"];

function formatKey(str: string) {
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

const Sous_total: React.FC<SousTotalProps> = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-7 gap-2">
      {headers.map((header, index) => (
        <p key={`header-${index}`} className="col-span-1 text-center font-bold">
          {formatKey(header)}
        </p>
      ))}

      {products &&
        products.map((product, rowIndex) =>
          Object.values(product).map((value, colIndex) => (
            <p
              key={`row-${rowIndex}-col-${colIndex}`}
              className={`flex flex-col col-span-1 justify-center ${colIndex == 0 ? "w-[250px]" : "text-center"}`}
            >
              {value}
            </p>
          ))
        )}
    </div>
  );
};

export default Sous_total;
