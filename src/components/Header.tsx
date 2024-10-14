import Image from "next/image";
import React from "react";
import { Head } from "@/utilities/header";

const Header = () => {
    return (
        <div className=" header-div">
            <div className=" header-logo">
                <h1 className=" logo-text">Splice</h1>
                <Image src={"/assets/images/logo.svg"} alt={""} width={50} height={50} />
            </div>
            <div className="header-middle">
                <ul>
                    {Head.map((item, index) => (
                        <div key={index}>
                            <li>{item.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="header-end">
                <p>Contact us</p>
                <button>Get this template</button>
            </div>
        </div>
    );
};

export default Header;

//737373
