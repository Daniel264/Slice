import Image from "next/image";
import React from "react";
import { Head } from "@/utilities/header";
import { Button } from "./Button";

const Header = () => {
    return (
        <header className=" header-div">
            <div aria-label="Splice logo" className="header-logo">
                <Image src={"/assets/logo/logo.svg"} alt={"Image of splice logo"} width={140} height={120} />
                <div className="header-middle">
                    <ul aria-label="A header navigation.">
                        {Head.map((item, index) => (
                            <div key={index}>
                                <li>{item.name}</li>
                            </div>
                        ))}
                    </ul>
                </div>
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
