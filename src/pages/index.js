import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"

import Icon1 from "../images/web-design.svg";
import Icon2 from "../images/clean-code.svg";
import Icon3 from "../images/wordpress.svg";

import '../style/dark-mode.css'


export default function Home() {
    return ( 
        <div>
            <Header />
            <Container bgColor="background-color">
                <div className="about-me view-height">
                    <h1>Vignesh Rajendran</h1>
                    <h2>I'm a front-end engineer with 3+ long stretches of experience creating site and user interfase. Resourceful Front End Web Developer bringing in-depth knowledge of the latest technology trends to produce clean website design. Experience handling complex HTML and CSS coding, design, and extensions to meet the organisation front-facing internet needs.</h2>
                </div>
            </Container>
            <Container>
                <div className="what-do view-height">
                    <h2>WHAT I DO</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="service-icon">
                                <img src={Icon1} alt="Web Design/Development" className="img-resp" />
                            </div>
                            <div className="service-info">
                                <h4 className="service-name">Web Design/Development</h4>
                                <p className="service-description">I plan and create moderate sites to help impart your message to your clients.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-icon">
                                <img src={Icon2} alt="Clean Code" className="img-resp" />
                            </div>
                            <div className="service-info">
                                <h4 className="service-name">Clean Code</h4>
                                <p className="service-description">All sites are created with clean semantic code and improved for upgraded SEO execution.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service-icon">
                                <img src={Icon3} alt="Wordpress Themes" className="img-resp" />
                            </div>
                            <div className="service-info">
                                <h4 className="service-name">Wordpress Themes</h4>
                                <p className="service-description">Custom Wordpress theme design and development allowing users to update content on their websites without the knowledge of HTML.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
