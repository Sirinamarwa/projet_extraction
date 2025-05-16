"use client";
import Image from "next/image";


 const DownloadjsonButton = () => {
   const handleDownload = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/ocr/downloadjson/`;
  };

 
   return (
    <button onClick={handleDownload} className="px-4 py-3 border-white bg-white/70 rounded-xl flex items-center gap-2 cursor-pointer shadow-md hover:bg-white/80 transition">
       <Image
     src="/json.png"
  alt="JSON"
  width={24}
  height={24}
/>
<p className="text-xs font-bold text-[#03224c] "> Exporter vers JSON </p>
</button>
   );
 };
 
 export default DownloadjsonButton;
 