import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"
import '../style/dark-mode.css'

export default function Home() {
    return ( 
        <div>
            <Header />
            <Container>
                <div className="my-5 about-me">
                    <h1>Vignesh Rajendran</h1>
                    <h2>I'm a front-end engineer with 3+ long stretches of experience creating site and user interfase. Resourceful Front End Web Developer bringing in-depth knowledge of the latest technology trends to produce clean website design. Experience handling complex HTML and CSS coding, design, and extensions to meet the organisation front-facing internet needs.</h2>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
