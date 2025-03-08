import { Bookmark, Browsers, Checks, CheckSquare, } from "phosphor-react";
import { Container, Content, ContentBody, ContentFooter, ContentHeader } from "./style";
import visa from '../../../assets/visa.png'
import master from '../../../assets/master.png'
import elo from '../../../assets/elo.png'
import american from '../../../assets/american.png'
import hipercard from '../../../assets/hipercard.png'
export function Settings(){
    
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
                        <Bookmark size={52} color="#b4b8c9" weight="fill" />
                    </ContentHeader>
                    <ContentBody>
                        <div>
                            <p>Tenha um site moderno, responsivo e funcional</p>
                            <span>Apresentamos um site profissional, rápido e totalmente responsivo, perfeito para qualquer negócio ou projeto. Com um design elegante e intuitivo, ele se adapta a qualquer dispositivo, garantindo uma experiência impecável para seus visitantes.</span>
                            <span><Checks color="#1c7fff" size={22} />Carregamento rápido e otimizado</span>
                            <span><Checks color="#1c7fff" size={22} />Interface moderna e fácil de navegar</span>
                            <span><Checks color="#1c7fff" size={22} />Totalmente ajustável para desktop, tablet e mobile</span>
                        </div>
                    </ContentBody>
                    <ContentFooter>
                        <div>
                            <p>R$ 400,00 <small>**confira as parcelas**</small></p>
                            <span>
                                <img src={american} alt="" />
                                <img src={visa} alt="" />
                                <img src={elo} alt="" />
                                <img src={master} alt="" />
                                <img src={hipercard} alt="" />
                            </span>
                        </div>
                        <button >Comprar Projeto</button>
                    </ContentFooter>
                </Content>
                <Content>
                    <ContentHeader>
                        <Browsers size={52} />
                        <div>
                            <p>Site de Vendas Personalizado<CheckSquare color="#0046a1" size={22} weight="fill" /> </p>
                            <span>Entre 1 e 2 páginas</span>
                        </div>
                        <Bookmark size={52} color="#e2e627" weight="fill" />
                    </ContentHeader>
                    <ContentBody>
                        <div>
                            <p>Tenha um site moderno, responsivo e funcional</p>
                            <span>Está em busca de uma plataforma moderna e eficiente para vender comida ou qualquer outro tipo de produto online? Apresentamos um site completo e otimizado para vendas, com todas as funcionalidades essenciais para impulsionar seu negócio!</span>
                            <span><Checks color="#1c7fff" size={22} />Loja Virtual Intuitiva: Interface moderna e responsiva.</span>
                            <span><Checks color="#1c7fff" size={37} />Carrinho de Compras: Sistema dinâmico que permite aos clientes adicionar produtos e finalizar a compra com facilidade.</span>
                            <span><Checks color="#1c7fff" size={22} /> Login Seguro com Google:</span>
                            <span><Checks color="#1c7fff" size={22} />Integração com WhatsApp Business:</span>
                        </div>
                    </ContentBody>
                    <ContentFooter>
                        <div>
                            <p>R$ 600,00 <small>**confira as parcelas**</small></p>
                            <span>
                                <img src={american} alt="" />
                                <img src={visa} alt="" />
                                <img src={elo} alt="" />
                                <img src={master} alt="" />
                                <img src={hipercard} alt="" />
                            </span>
                        </div>
                        <button >Comprar Projeto</button>
                    </ContentFooter>
                </Content>
            </Container>
        </>
    )
}