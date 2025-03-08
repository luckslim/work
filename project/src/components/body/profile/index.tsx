import { CardContent, CardProfile, CardTitle, Container, Content, ContentCard,Title } from "./style";
import profile from "../../../assets/perfil.jpeg"
import { Coins, House, Tag } from "phosphor-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TestimonialSwiper } from "../avaliations";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Profile(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duração da animação em milissegundos
          once: true, // Se a animação deve acontecer apenas uma vez
        });
      }, []);
    return(
        <>
            <Container>
                <Content>
                    <Title>                    
                        <p id="title">text</p>
                        <nav>
                            <a href=""><House size={22} weight="fill" />Home</a>
                            <a href=""><Tag size={22} weight="fill" />Projects</a>
                            <a href=""><Coins size={22} weight="fill" />Price</a>
                        </nav>
                    </Title>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenet</p>
                    <ContentCard>
                        <img src={profile} alt="" />
                        <p>
                            <h1>text</h1>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet tempore suscipit neque nisi nemo vitae itaque nulla! Eaque, quidem? Quia illum voluptates asperiores odit, sit repudiandae magni eos. Distinctio, fugiat.</p>
                    </ContentCard>
                </Content>
                <Content>
                    <CardProfile data-aos="fade-up">
                        <TestimonialSwiper/>
                    </CardProfile>
                </Content>
            </Container>
        </>
    )
}
