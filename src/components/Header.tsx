import Image from "next/image";
import React from "react";
import { Head } from "@/utilities/header";

const Header = () => {
    return (
        <div className="flex h-fit w-full justify-between px-4 py-5 header-div">
            <div className="flex cursor-pointer gap-[2px] header-logo">
                <h1 className="text-3xl font-semibold logo-text">Splice</h1>
                <Image src={"/assets/images/logo.svg"} alt={""} width={50} height={50} />
            </div>
            <div className="header-middle">
                <ul className="flex cursor-pointer space-x-3 text-lg font-medium md:space-x-6 lg:text-xl ">
                    {Head.map((item, index) => (
                        <div key={index}>
                            <li className="hover:text-[#888]">{item.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="header-end">
                <p>Contact us</p>
                <button className="rounded-lg bg-[#1A1A1A] px-4 py-2 text-white">Get this template</button>
            </div>
        </div>
    );
};

export default Header;

//737373