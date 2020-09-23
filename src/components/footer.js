import React from 'react';
import styled from 'styled-components';
import media from './media-queries';
import Container from './container';
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faTwitter, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons'

const ConnectMeContainer = styled.div`
    display:block;
    margin-bottom: 8px;
`

const CopyRightContainer = styled.div`
    display:block;
    ${media.phone`
        font-size: 12px;
    `}
`

const Footer = () => (
    <Container>
        <ConnectMeContainer>
            <Link className="connect-link" to="https://twitter.com/Vignesh94567743"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link className="connect-link" to="https://www.linkedin.com/in/vignesh-rajendran-6a1737161/"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            <Link className="connect-link" to="https://medium.com/@vigneshwaran_7791"><FontAwesomeIcon icon={faMediumM} /></Link>
            <Link className="connect-link" to="https://github.com/vignesh0208"><FontAwesomeIcon icon={faGithub} /></Link>
            <Link className="connect-link" to="mailto:v19ne5h1994@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></Link>
        </ConnectMeContainer>

        <CopyRightContainer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link>, Hosted in 
            {` `}
            <Link to="https://www.gatsbyjs.com/cloud">Gatsby Cloud</Link>
        </CopyRightContainer>
    </Container>
)

export default Footer