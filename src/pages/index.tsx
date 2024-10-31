import { Benefits } from "@/components/Benefits";
import { CompaniesCarousel } from "@/components/CompaniesCarousel";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import { HeroSection } from "@/components/Hero-section-Template";
import Questions from "@/components/Questions";
import RangeSlider from "@/components/Range-slider";
import { RangeComponent } from "@/components/RangeComponent";
import Savings from "@/components/Savings";
import { SecondHero } from "@/components/Second-hero";
import SEO from "@/components/SEO";
import SmoothScrolling from "@/components/SmoothScrolling";
import { tickText, works } from "@/utilities/yellow-text";

export default function Home() {
    return (
        <SmoothScrolling>
            <SEO title="Slice: Fintech website" />

            <main className="flex min-h-screen flex-col items-center px-5">
                {/* <div className="m-auto w-full max-w-8xl"> */}

                {/* <h3 className="my-5 text-5xl font-semibold">Splice</h3> */}
                <Header />
                <HeroSection flexDirection={"row"} designedText={true} src={"/assets/images/hero-img.svg"} arrayName={tickText} showImage={true} padding={""} />
                <CompaniesCarousel />
                <SecondHero />
                <RangeComponent />
                {/* <Benefits /> */}
                {/* <Savings /> */}
                {/* <Features />
                <Questions />
                <GetStarted />
                <Footer /> */}
            </main>
        </SmoothScrolling>
    );
}
