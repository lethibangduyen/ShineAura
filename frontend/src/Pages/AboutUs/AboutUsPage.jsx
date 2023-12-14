
    import React from "react";
    import NavBar from "../../Components/Navbar/Navbar";
    import Footer from "../../Components/Footer/Footer";
    import ImageSlider from "../../Components/ImageSlider/ImageSlider";
    import "../../Components/Assets/css/global.css";

    import UsImage from "../../Components/Assets/Media/About_us/Us.png"
    import "./AboutUsPage.css";
    import SkincareImage from "../../Components/Assets/Media/About_us/Skincare.png";
    import MakeupImage from "../../Components/Assets/Media/About_us/Makeup.png";
    import Value1 from "../../Components/Assets/Media/About_us/Value_1.png";
    import Value2 from "../../Components/Assets/Media/About_us/Value_2.png";
    import Value3 from "../../Components/Assets/Media/About_us/Value_3.png";
    import Value4 from "../../Components/Assets/Media/About_us/Value_4.png";
    import Value5 from "../../Components/Assets/Media/About_us/Value_5.png";
    import Value6 from "../../Components/Assets/Media/About_us/Value_6.png";

    const sliderImages = [
        UsImage,
        SkincareImage,
        MakeupImage
    ]

    const valueImages = [
        Value1,
        Value2,
        Value3,
        Value4,
        Value5,
        Value6
    ]

    const AboutUsPage = () => {
        const imageWidth = `calc(100% / ${valueImages.length} - 32px)`;

        return (
            <div>
                <NavBar />
                <div className="flex-col content-container">
                    <div className="hero-image">
                        <img src={UsImage} alt="us" />
                    </div>
                    <div className="sectionContainer flex-col">
                        <div className="section gap-md flex-col">
                            <h2 className="h2">What we do.</h2>
                            <p className="body">Sit anim in id enim aliqua sint labore non officia mollit esse Lorem amet aliqua laborum excepteur est aliquip elit.</p>
                                <div className="flex-row">
                                    <div className="flex-col">
                                        <img className="img-size" src={SkincareImage} alt="" />
                                        <div className="md-spc gap-ms flex-col ivory-bg">
                                            <h3 className="h3">Skincare</h3>
                                            <p className="body">Excepteur consequat labore voluptate adipisicing elit nostrud quis commodo. Ad cillum nostrud mollit </p>
                                        </div>
                                    </div>
                                    <div className="flex-col">
                                        <img className="img-size" src={MakeupImage} alt="" />
                                        <div className="md-spc gap-ms flex-col ivory-bg">
                                            <h3 className="h3">Makeup</h3>
                                            <p className="body">Excepteur consequat labore voluptate adipisicing elit nostrud quis commodo. Ad cillum nostrud mollit </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="sectionContainer flex-col ourStoryContainer">
                        <div className="section our-story">
                            <div className="right-container flex-row">
                                <ImageSlider images={sliderImages}/>
                            </div>
                            <div className="left-container flex-col flex-align-top md-spc">
                                <p class="pre-title">About  us</p>
                                <h2 className="h2">Our Story</h2>
                                <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus. Sed sagittis, risus vitae dignissim semper, turpis arcu congue augue, eget ornare orci libero nec enim. Aenean a aliquam nunc. Morbi tincidunt mattis nulla et interdum. Donec mollis tincidunt pellentesque. Vivamus laoreet sodales accumsan. Integer ornare vulputate mi posuere elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus. Sed sagittis, risus vitae dignissim semper, turpis arcu congue augue, eget ornare orci libero nec enim. Aenean a aliquam nunc. Morbi tincidunt mattis nulla et interdum. Donec mollis tincidunt pellentesque. Vivamus laoreet sodales accumsan. Integer ornare vulputate mi posuere elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus. Sed sagittis, risus vitae dignissim semper, turpis arcu congue augue, eget ornare orci libero nec enim. Aenean a aliquam nunc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="sectionContainer flex-col">
                        <div className="section flex-col our-value gap-lg">
                            <h2 className="h2">OUR VALUE</h2>
                            <div className="flex-row flex-l gap-md value-images">
                                {valueImages.map((image, index) => (
                                    <img
                                    key={index}
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    style={{ width: imageWidth }}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    };

            </div>
            <Footer />
        </div>
    )
};

export default AboutUsPage;

