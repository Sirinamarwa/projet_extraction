const infos = {
  numero_facture: "12222347",
  date: "18/03/2017",
  nom_vendeur: "Gregory, Patterson and Fischer",
  adresse_vendeur: "439 Hunter Land, South Jameschester, MT 09091",
  ID_fiscal_vendeur: "958-94-6606",
  IBAN: "GB10YCPS61791374226282",
  nom_client: "Wilson PLC",
  adresse_client: "667 Wu Ports, Marshallmouth, AK 03373",
  ID_fiscal_client: "928-91-2431",
  TVA: "10%",
  sous_total: "123,75",
  taxe: "12,38",
  total: "136,13",
};

const headers = [
  "numero_facture",
  "date",
  "nom_vendeur",
  "adresse_vendeur",
  "ID_fiscal_vendeur",
  "IBAN",
  "nom_client",
  "adresse_client",
  "ID_fiscal_client",
  "TVA",
  "sous_total",
  "taxe",
  "total",
];
function formatKey(str: string) {
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
const List = () => {
  return (
    <div className="w-full  p-4 rounded-xl bg-gradient-to-l from-[#650036] to-black">
      <div className="mb-4 flex flex-row w-full bg-white text-[#650036] py-3 px-5 gap-4 rounded-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          placeholder="Rechercher des produits..."
          className=" w-full min-w-[100px]  focus:outline-none focus:ring-0"
        ></input>
      </div>
      <div className="w-full  bg-[rgb(255,255,255,0.8)] p-4 text-[#650036] rounded-xl">
        <div className="overflow-x-auto overflow-y-auto h-[600px]">
          <div className="grid grid-cols-[repeat(13,minmax(200px,1fr))] gap-2">
            {headers.map((header) => (
              <div key={header} className="text-sm col-span-1 font-bold">
                {formatKey(header)}
              </div>
            ))}

            {Array.from({ length: 20 }).map((_, rowIndex) =>
              Object.entries(infos).map(([key, value]) => (
                <div
                  key={`${rowIndex}-${key}`}
                  className="col-span-1 text-sm flex items-center border-b border-[rgb(101,0,54,0.2)]"
                >
                  {value}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <button className="absolute bottom-15 right-60 px-4 py-2 bg-[rgb(255,255,255,1)] text-lg border border-[#650036] rounded-xl font-bold text-[#650036] cursor-pointer">
        Charger plus
      </button>
    </div>
  );
};

export default List;
