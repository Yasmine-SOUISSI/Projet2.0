import React from "react";
import "./Footer.css";
function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-container-left">
                        <h2 class="logo">Bwdigital</h2>
                        <p class="footer-description">
                            We are always open to discuss your project and
                            improve your online presence.
                        </p>
                    </div>
                    <div class="footer-container-right">
                        <h2 class="footer-title">Let's talk</h2>
                        <p class="footer-description2">
                            We are always open to discuss your project, improve
                            your online presence and help with your UX/UI design
                            challenges.
                        </p>
                    </div>
                </div>

                <div class="footer-link">
                    <div class="footer-container">
                        <div>
                            <p class="footer-copyright">&copy;Copyright</p>
                        </div>
                        <ul class="footer-link-items">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Work</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
