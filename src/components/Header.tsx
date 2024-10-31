import Image from "next/image";
import React from "react";
import { Head } from "@/utilities/header";
import { Button } from "./Button";

const Header = () => {
    return (
        <header className=" header-div">
            <div aria-label="Splice logo" className=" header-logo">
                <h1 className=" logo-text">Splice</h1>
                <Image src={"/assets/images/logo.svg"} alt={""} width={50} height={50} />
            </div>
            <div className="header-middle">
                <ul aria-label="A header navigation">
                    {Head.map((item, index) => (
                        <div key={index}>
                            <li>{item.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="header-end">
                <Button buttonType={"white_butn"}>Contact us</Button>
                <Button buttonType={"butn"}>Get this template</Button>
            </div>
        </header>
    );
};

export default Header;

//737373
