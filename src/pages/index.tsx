import { CompaniesCarousel } from "@/components/CompaniesCarousel";
import Header from "@/components/Header";
import { HeroSection } from "@/components/Hero-section-Template";
import { SecondHero } from "@/components/Second-hero";
import SEO from "@/components/SEO";
import { works } from "@/utilities/yellow-text";


export default function Home() {
    return (
        <>
            <SEO title="Home" />

            <main className="flex min-h-screen flex-col items-center p-5">
                {/* <div className="m-auto w-full max-w-8xl"> */}

                {/* <h3 className="my-5 text-5xl font-semibold">Splice</h3> */}
                <Header />
                <HeroSection flexDirection={"row"} designedText={true} src={"/assets/images/hero-img.svg"} arrayName={works} />
                <CompaniesCarousel />
                <SecondHero />
            </main>
        </>
    );
}
