import RangeSlider from "./Range-slider";

export const RangeComponent = () => {
    return (
        <section className="range-component">
            <div>
                <h1>
                    Evaluate your <br /> potential return
                </h1>
                <p>
                    Whether it&apos;s building a passive income stream <br />
                    through rental properties or capitalizing on <br />
                    property appreciation.
                </p>
            </div>
            <div>
                <RangeSlider />
            </div>
        </section>
    );
};
