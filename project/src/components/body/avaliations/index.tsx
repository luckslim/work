import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Container, ContainerAvaible, ContainerButtonComents, ContainerComents, ContainerTestimonial, InfoAvaible } from './style';
import { StyledSlide } from './style'
import { Star } from 'phosphor-react';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
interface Person {
    id: string;
    nome: string;
    idPerson: string;
    description: string;
}

const students: Person[] = [
    {
        id: '1',
        nome: 'Rute Motta Lisboa',
        idPerson: 'Aluna-OMTC',
        description: 'A minha jornada na música teve o início na OMTC aos 8 anos de idade, onde aprendi a ler partitura e aprendi minhas primeiras músicas no violino. A OMTC me ajudou no meu desenvolvimento técnico no instrumento e na minha percepção musical. Hoje, tenho 19 anos e estudo música na UNIRIO e tive a oportunidade de tocar em importantes salas de concertos e em Teatros, como a Sala Cecília Meireles e o Teatro Municipal do Rio de Janeiro. ',
    },
    {
        id: '2',
        nome: 'Sury Silva ',
        idPerson: 'Aluna-OMTC',
        description: 'Uma experiência maravilhosa, um ótimo profissional,atencioso e muito didático.',
    },
    {
        id: '3',
        nome: 'Maicon Libonati',
        idPerson: 'Aluno-OMTC',
        description: 'Um excelente lugar para aprender música, ótimas didáticas de ensino. Um estudo de qualidade. ',
    },
    {
        id: '4',
        nome: 'Pricila Sena',
        idPerson: 'Aluna-OMTC',
        description: 'Riquísima em conhecimento,eu recomendo e super indico! Aprendizado de ampla qualidade, Gratidão!',
    },
    {
        id: '5',
        nome: 'Temotio santos',
        idPerson: 'Aluno-OMTC',
        description: 'Estudei por alguns anos e não me arrependo.  A escola de música se destaca pelo profissionalismo e dedicação do professor. Quem se dedicar, com certeza aprenderá muito.',
    },
    {
        id: '6',
        nome: 'Vanessa Couto',
        idPerson: 'Responsável-OMTC',
        description: 'Excelente trabalho desenvolvido pela OMTC. O aluno recebe toda atenção e ensinamentos para se desenvolver no ramo musical. O professor Cláudio está de parabéns!',
    },
]

export function TestimonialSwiper(){
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    width={430}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 1000 }}
                    slidesPerView="auto"
                    pagination={{
                        el: ".swiper-pagination", // Use a valid DOM element here
                        type: "bullets",
                        clickable: true,
                        bulletClass: "bg-amber-400",
                        bulletActiveClass: "#9b2424",
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 1,
                        },
                    }}
                    className="init-swiper"
                >
                    {/* Testimonial 1 */}
                    {students.map((person) => (
                        <SwiperSlide key={person.id}>

                            <StyledSlide>
                                <ContainerTestimonial >
                                    <ContainerAvaible >
                                        <img

                                            src=""
                                            className="testimonial-img"
                                            alt="Rute Lisboa"
                                        />
                                        <span>

                                            <img

                                                src=""
                                                alt="Google"
                                            />
                                        </span>

                                    </ContainerAvaible>
                                    <InfoAvaible>
                                        <h4>{person.nome}
                                            <span>
                                                <Star size={20} color="#ffee00f9" />
                                                <Star size={20} color="#ffee00f9" />
                                                <Star size={20} color="#ffee00f9" />
                                                <Star size={20} color="#ffee00f9" />
                                                <Star size={20} color="#ffee00f9" />
                                            </span>
                                        </h4>
                                        <ContainerButtonComents>
                                            <small>{person.idPerson}</small>
                                            <a                 
                                                onClick={() => setOpen(!open)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}>
                                                {open ? 'Fechar' : 'Abrir'}
                                            </a>
                                        </ContainerButtonComents>
                                    </InfoAvaible>
                                    <ContainerComents>
                                        <Collapse in={open}>
                                            <p>{person.description}</p>
                                        </Collapse>
                                    </ContainerComents>
                                </ContainerTestimonial>
                            </StyledSlide>


                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
        </Container>


    );
};