import Image from "next/image";
import React from "react";
import { Head } from "@/utilities/header";

const Header = () => {
    return (
        <div className="flex h-fit w-full justify-between px-4 py-5">
            <div className="flex cursor-pointer gap-[2px]">
                <h1 className="text-3xl font-semibold">Splice</h1>
                <Image src={"/assets/images/logo.svg"} alt={""} width={50} height={50} />
            </div>
            <div>
                <ul className="flex cursor-pointer space-x-3 text-lg font-medium ">
                    {Head.map((item, index) => (
                        <div key={index}>
                            <li className="hover:text-[#888]">{item.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
