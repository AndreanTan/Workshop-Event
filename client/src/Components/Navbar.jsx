import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
// import React from 'react'

function Navbar() {
  return (
    <div className="py-5 shadow-lg mb-5">
      <div className="max-w-[1300px] mx-auto">
        <div className="font-Grotesk text-4xl font-bold">Jelajah</div>
        <Input
          isClearable
          radius="lg"
          placeholder="Type to search..."
          startContent={<FiSearch />}
        />
      </div>
    </div>
  );
}

export default Navbar;
