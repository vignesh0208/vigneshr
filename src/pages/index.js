import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import '../style/dark-mode.css'

export default function Home() {
    return ( 
        <div>
            <Header />
            <Container>
                <h1>Hello gatsby!</h1>
            </Container>
        </div>
    )
}
