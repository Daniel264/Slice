import { firstLink, secondLink, thirdLink } from "@/utilities/footerLinks";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer aria-label="You are now in the footer section of the page" className="footer_component">
            <div className="footer_component__first_section">
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
            </div>
            <div className="footer_component__second_section">
                <div className="footer_component__second_links">
                    <p>© 2024 – Slice </p>
                    <ul>
                        {thirdLink.map((item) => (
                            <a key={item.id} href={item.url}>
                                {item.text}
                            </a>
                        ))}
                    </ul>
                </div>
                <p className="footer_component__second_text">
                    Important Information: These details do not constitute an invitation to invest. The content published on this site by Slice App Srl is for communication purposes and does not represent financial recommendations or an offer or solicitation for the financial products contained
                    within this site. These financial products will be offered by AQA Capital Ltd, an EU-authorized AIFM, with whom Slice App Srl has an agreement. Any expression of interest in the opportunity, such as, for example, requesting to join the waiting list or seeking clarification or
                    expressing an intent to invest, is not binding on any of the parties. It is advisable to carefully read the prospectus, when available, before making any investment.
                </p>
            </div>
        </footer>
    );
};
