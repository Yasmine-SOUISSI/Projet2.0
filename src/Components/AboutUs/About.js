import React from "react";
import "./About.css";
import amy from "../../2.jpg";

function About() {
    return (
        <section class="about">
            <div class="about-top">
                <div class="about-container">
                    <h2 class="about-heading">About Us</h2>
                    <h1 class="about-title">Our design solve problems</h1>
                    <p class="about-text">
                        Our team of developers manages the server part, data
                        processing and integration of the information system
                        before moving on to the web and/or mobile development of
                        user interfaces
                    </p>
                </div>
                <img class="about-img" src={amy} />
            </div>
            <div class="about-bottom">
                <h2 class="about-heading-2">Who we are</h2>
                <div class="about-container-2">
                    <div style={{ display: "flex", marginBottom: 20 }}>
                        <div class="about-container-bottom">
                            <h3 class="about-title-bottom">Goal Focused</h3>
                            <p class="about-text-bottom">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div class="about-container-bottom">
                            <h3 class="about-title-bottom">
                                Continous improvement
                            </h3>
                            <p class="about-text-bottom">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                    <img class="about-img2" src="" />
                </div>
            </div>
        </section>
    );
}

export default About;
