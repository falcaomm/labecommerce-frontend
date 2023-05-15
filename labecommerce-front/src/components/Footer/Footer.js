import React from "react"
import { DivStyle, FooterStyle, FooterTitle, Text} from "./styles"
import { RiWhatsappFill } from 'react-icons/ri'
import { GoMarkGithub } from 'react-icons/go'

function Footer() {
    return (
        <FooterStyle>
            <DivStyle>
                <FooterTitle>Projeto Front-End React</FooterTitle>
                <Text><a target="_blank" href="https://www.linkedin.com/in/manuela-falc%C3%A3o-06b520256/" rel="noreferrer"><RiWhatsappFill />Contato</a>
                </Text>
            </DivStyle>
            <DivStyle>
                <Text>
                    Developed by <a target="_blank" href="https://github.com/falcaomm" rel="noreferrer"><GoMarkGithub /> falcaomm</a>
                </Text>
            </DivStyle>

        </FooterStyle>
    )
}

export default Footer