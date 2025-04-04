"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-2 w-full max-w-md shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Input Field */}
      <input
        className="flex-1 text-gray-700 outline-none bg-transparent placeholder-gray-400 px-2 py-1 text-sm"
        type="text"
        name="name"
        placeholder="Search for clothes..."
      />

      {/* Search Button */}
      <button
        type="submit"
        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300"
        title="Search"
      >
        <Image src="/search.png" alt="Search icon" width={18} height={18} />
      </button>
    </form>
  );
};

export default Searchbar;
