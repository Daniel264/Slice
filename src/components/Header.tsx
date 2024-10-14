import Image from "next/image";
import React from "react";

const Header = () => {
    return <div>
        <div>
            <h1>
                Splice
            </h1>
            <Image src={"/assets/images/logo.svg"} alt={""} width={50} height={50} />
        </div>
        <div>
            
        </div>

    </div>;
};

export default Header;
