import React from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import "./Service.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function ServiceList({ services }) {
    return (
        <section class="work">
            <div class="work-content-left">
                <h2 class="work-title">Nos Services</h2>
                <p class="work-description">
                    Nous réalisations des applications natives et cross-platform
                    Android, iOS (Apple) web et web mobile, webapp et
                    back-office.
                </p>
                <div class="work-button">
                    <Link to="/Contact">
                        {" "}
                        <p class="work-button-text">
                            Get in touch with us{" "}
                            <AiOutlineArrowRight class="work-icons" />{" "}
                        </p>
                    </Link>
                </div>
            </div>
            <div class="work-content-right">
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber1 className="icons" />
                    </div>

                    <h5 class="work-title2">App Mobile</h5>
                    <p class="work-description">
                        Conception d’applications mobiles sur-mesure iOS et
                        Android, natives et cross-plateformes.
                    </p>
                </div>
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber2 className="icons" />
                    </div>
                    <h5 class="work-title2">Site Internet</h5>
                    <p class="work-description">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam .
                    </p>
                </div>
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber3 className="icons" />
                    </div>
                    <h5 class="work-title2">Social Media</h5>
                    <p class="work-description">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam .
                    </p>
                </div>
                <div class="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber4 className="icons" />
                    </div>
                    <h5 class="work-title2">Sur mesure</h5>
                    <p class="work-description">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam .
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServiceList;
