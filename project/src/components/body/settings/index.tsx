import { Bookmark, Browsers, Checks, CheckSquare, } from "phosphor-react";
import { Container, Content, ContentBody, ContentFooter, ContentHeader } from "./style";

export function Settings(){
    const price = 400
    return(
        <>
            <Container>
                <Content>
                    <ContentHeader>
                        <Browsers size={52} />
                        <div>
                            <p>LandingPage <CheckSquare color="#0046a1" size={22} weight="fill" /> </p>
                            <span>Entre 1 e 2 páginas</span>
                        </div>
                        <Bookmark size={52} color="#1c7fff" weight="fill" />
                    </ContentHeader>
                    <ContentBody>
                        <div>
                            <p>Tenha um site moderno, responsivo e funcional</p>
                            <span>Apresentamos um site profissional, rápido e totalmente responsivo, perfeito para qualquer negócio ou projeto. Com um design elegante e intuitivo, ele se adapta a qualquer dispositivo, garantindo uma experiência impecável para seus visitantes.</span>
                            <span><Checks color="#1c7fff" size={22} />Carregamento rápido e otimizado</span>
                            <span><Checks color="#1c7fff" size={22} />Interface moderna e fácil de navegar</span>
                            <span><Checks color="#1c7fff" size={22} />Totalmente ajustável para desktop, tablet e mobile</span>
                        </div>
                        <div>
                            <span>bootstrap</span>
                            <span>firebase</span>
                            <span>tailwind css</span>
                        </div>
                    </ContentBody>
                    <ContentFooter>
                        <div>
                            <p>R$ 400,00</p>
                            <span>Consulte os valores</span>
                        </div>
                        <button >Comprar Projeto</button>
                    </ContentFooter>
                </Content>
            </Container>
        </>
    )
}