// import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
    ContainerBody,
        ContainerSlide,
        ContainerSlideHeader,
        ContainerSlideHeaderDescription,
        ContainerSlideHeaderImage,
        SwiperSlideStyled,
        SwiperStyled,
         } from './style';
import pizza from '../../../assets/pizza.png'
import torrada from '../../../assets/torradas.png'
import arroz from '../../../assets/arroz.png'
import { AppWindow, CaretUp, Coin, ForkKnife, User } from 'phosphor-react';

export function TestimonialSwiper(){
    return (
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <SwiperStyled
                    
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 10000 }}
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
                            spaceBetween: 10,
                        },
                    }}
                    className="init-swiper"
                >
                    
                   
                        <SwiperSlideStyled>
                            <ContainerSlide>
                                <ContainerSlideHeaderImage>
                                    <div>
                                        <img src={pizza} alt="" />
                                        <img src={torrada} alt="" />
                                        <img src={arroz} alt="" />
                                    </div>
                                    <div>
                                        <p></p>
                                        <a href="">Peça já</a>
                                    </div>
                                </ContainerSlideHeaderImage>
                                <ContainerSlideHeader>
                                    <div>
                                    <p><User size={32} /></p>
                                    <p>Tenha mais Clientes</p>
                                    </div>
                                    <div>
                                    <p><ForkKnife size={32} /></p>
                                    <p>Peça seu App</p>
                                    </div>
                                        
                                </ContainerSlideHeader>
                                <ContainerBody>
                                    <h1>Aplicativo para Restaurantes</h1>
                                    <div>
                                        <ul>
                                            <li>Facilidade no atendimento</li>
                                            <li>Melhor gestão de pedidos</li>
                                            <li>Maior engajamento</li>
                                        </ul>
                                        <p>Um aplicativo para restaurantes permite uma experiência mais fluida e moderna para os clientes</p>
                                    </div>
                                </ContainerBody>
                            </ContainerSlide>
                        </SwiperSlideStyled>
                        <SwiperSlideStyled>
                            <ContainerSlide>
                                <ContainerSlideHeaderDescription>
                                    <div>
                                    <CaretUp color="#5fcf8e" size={32} weight="fill" />
                                    <p>Aumente Suas Vendas</p>
                                    <Coin size={22} color="#31758a"/>
                                    <p>Cabe no seu bolso</p>
                                    </div>
                                    <div>
                                        <p><AppWindow size={22} /></p>
                                        <p>Peça seu App</p>
                                    </div>
                                </ContainerSlideHeaderDescription>
                                <ContainerBody>
                                    <h1>Sites Profissionais e Pessoais</h1>
                                    <div>
                                        <ul>
                                            <li>Integração com Banco de dados.</li>
                                            <li>Site responsivo para todas as telas.</li>
                                            <li>Lojas Virtuais.</li>
                                        </ul>
                                        <p>Transforme seu negócio com tecnologia e agregue valor com inovação digital.</p>
                                    </div>
                                    <button>Peça Seu App</button>
                                </ContainerBody>
                            </ContainerSlide>
                        </SwiperSlideStyled>
                </SwiperStyled>
                <div className="swiper-pagination"></div>
            </div>



    );
};