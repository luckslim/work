import {
  CardBody,
  CardFooter,
  CardHeader,
  CardProfile,
  Container,
  ContainerImg,
  Content,
  ContentCard,
  Title,
} from "./style";
import profile from "../../../assets/perfil.jpeg";
import { CaretUp, Coins, House, Tag, User } from "phosphor-react";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pizza from "../../../assets/pizza.png";
import torrada from "../../../assets/torradas.png";
import arroz from "../../../assets/arroz.png";

export function Profile() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true, // Se a animação deve acontecer apenas uma vez
    });
  }, []);
  return (
    <>
      <Container>
        <Content>
          <Title>
            <p id="title">Developer-Web</p>
            <nav>
              <a href="">
                <House size={22} weight="fill" />
                Home
              </a>
              <a href="">
                <Tag size={22} weight="fill" />
                Projects
              </a>
              <a href="">
                <Coins size={22} weight="fill" />
                Price
              </a>
            </nav>
            <p>
              "Transformamos suas ideias em experiências digitais inovadoras"
            </p>
          </Title>
          <ContentCard>
            <img src={profile} alt="" />
            <div>
              <h1>Lucas Soares Lima</h1>
              <p>
              "Sou um desenvolvedor especializado em soluções web e integração
              de sistemas, focado em criar experiências digitais ágeis e
              eficientes."
              </p>
            </div>
          </ContentCard>
        </Content>
        <Content data-aos="fade-up">
          <ContainerImg>
            <div>
              <img src={pizza} alt="" />
              <img src={torrada} alt="" />
              <img src={arroz} alt="" />
            </div>
            <span>
              <p className="text">Exiba seu menu de forma atrativa.</p>
              <p>
                <a>Peça já!</a>
              </p>
            </span>
          </ContainerImg>
          <CardProfile>
            <CardHeader>
              <div>
                <CaretUp size={32} color="#43a800" weight="fill" />
                <p>+ Vendas</p>
              </div>
              <div>
                <User size={32} weight="fill" color="#5f5f5f"/>
                <p>+ Clientes</p>
              </div>
              <div>
                <Coins size={32} weight="fill" color="#047a74" />
                <p>Bom Preço</p>
              </div>
            </CardHeader>
            <CardBody>
                <p>Pedidos Inteligentes</p>
                <span>Com um sistema intuitivo de carrinho de compras, os clientes podem navegar pelo cardápio, selecionar seus pratos favoritos e finalizar seus pedidos com facilidade.</span>
            </CardBody>
            <CardFooter><button onClick={()=>window.location.href="https://api.whatsapp.com/send/?phone=5524988310291&text=Ol%C3%A1%21+Cheguei+atrav%C3%A9s+do+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"}>Peça seu App</button></CardFooter>
          </CardProfile>
        </Content>
      </Container>
    </>
  );
}
