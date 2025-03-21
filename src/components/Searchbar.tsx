"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = () => {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        if(name){
            router.push(`/list?name=${name}`)
        }

    }
  return (
    <form onSubmit={handleSearch} className="bg-white flex ic items-center rounded-full border-[2px] border-black p-2 w-[500px] shadow-md transition-all duration-300">
      {/* Input Field */}
      <input
        className="flex-1 px-4 py-2 text-gray-700 outline-none bg-transparent placeholder-gray-400"
        type="text"
        name="name"
        placeholder="Search for clothes..."
      />

      {/* Search Button */}
      <button
        type="submit"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
        title="Search"
      >
        <Image src="/search.png" alt="Search icon" width={20} height={20} />
      </button>
    </form>
  );
};

export default Searchbar;
