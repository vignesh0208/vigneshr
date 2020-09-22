import React from "react"
import { Link } from "gatsby"
import Container from "./container"
import Logo from '../images/logo.svg';
import SEO from './seo'

export default function Header() {
    return (
        <header className="header">
            <SEO />
            <Container>
                <div className="d-flex justify-content-between">
                    <Link to="/"><img src={Logo} alt="vigneshr" className="logo" /></Link>
                </div>
            </Container>
        </header>
    )
}