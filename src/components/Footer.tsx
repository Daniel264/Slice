import Image from "next/image";

export const Footer = () => {
    return (
        <footer>
            <div>
                <Image src="/assets/logo/logo.svg" alt="Image of the Splice logo" width={100} height={100} />
            </div>
            <div>
                <article>
                    <h3>Slice</h3>
                    <ul></ul>
                </article>
                <article>
                    <h3>Resources</h3>
                    <ul></ul>
                </article>
            </div>
        </footer>
    );
};
