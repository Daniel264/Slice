import { firstLink, secondLink } from "@/utilities/footerLinks";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="footer_component">
            <div className="footer_component__logo_container">
                <Image src="/assets/logo/logo.svg" alt="Image of the Splice logo" width={200} height={100} />
            </div>
            <div className="footer_component__links">
                <article>
                    <h3>Slice</h3>
                    <ul>
                        {firstLink.map((item) => (
                            <a href={item.url} key={item.id}>
                                {item.text}
                            </a>
                        ))}
                    </ul>
                </article>
                <article>
                    <h3>Resources</h3>
                    <ul>
                        {secondLink.map((item) => (
                            <a href={item.url} key={item.id}>
                                {item.text}
                            </a>
                        ))}
                    </ul>
                </article>
            </div>
        </footer>
    );
};
