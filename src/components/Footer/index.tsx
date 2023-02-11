import { useContext } from "react";
import { LanguageContext } from "../../context/context";

import { FooterContainer } from "./styles";

export function Footer() {
  const { texts } = useContext(LanguageContext);
  return (
    <>
      <FooterContainer>
        <p>
          Feito com <span>❤</span> por{" "}
          <a href="https://github.com/aleksanderpalamar" target="_blank">
            <strong>Aleksander Palamar</strong>
          </a>
        </p>
      </FooterContainer>
    </>
  )
}