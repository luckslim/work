import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
    height: 500;
    
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
    height: 500;
`;
export const ContainerSlide = styled.div`
    display: grid;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    @media screen and (max-width:480px){
        display: flex;
        flex-direction: column;  
        gap : 2rem;
    }
`;
export const ContainerSlideHeaderImage = styled.div`
    display: grid;
    background-color: ${props=>props.theme['blue-500']};
    border-radius: 40px;
    height: 190px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-items: auto;
        img{
            width: 135px;
            animation: rotate 10s linear infinite;
            margin: 0 10px;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }

        }
        a{
            background-color: ${props=>props.theme['slate-100']};
            padding: 0.372rem 2rem;
            text-decoration: none;
            color: ${props=>props.theme['slate-600']};
            border-radius: 9999px;
            font-weight: 500;
            margin-top: -40px;
            margin-right: 20px;
            cursor: pointer;  
        }

  }
  @media screen and (max-width:480px){
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 320px;
    height: 150px;
    
    div{
        display: flex;
        justify-content: space-around;
        img{
            width: 90px;
        }
        a{
            margin-left: 150px;
        }
    }
    
  }
`;
export const ContainerSlideHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        text-align: center;
    }
    @media screen and (max-width:480px){
        display: flex;
        gap: 2rem;
    }
`;
export const ContainerBody=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 25px;
        color:${props=>props.theme['slate-700']};
        font-weight: 800;
    }
    div{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        p{
            width: 300px;
            border-left: 1px solid ${props=>props.theme['slate-400']};
            padding: 1rem;
        }

    }
    button{
        background-color: ${props=>props.theme['slate-950']};
        width: 300px;
        color:${props=>props.theme['slate-100']};
        padding: 1rem;
        border: none;
        border-radius: 8px;

    }
    button:hover{
        opacity: 70%;
        transition: opacity 1s;
    }
    @media screen and (max-width:480px){
        text-align: start;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            width: 300px;
        }
        div{
            display: grid;
            
        }
        button{
        background-color: ${props=>props.theme['slate-950']};
        width: 300px;
        color:${props=>props.theme['slate-100']};
        padding: 1rem;
        border: none;
        border-radius: 8px;
        margin-top: 50px;
        }
    }
`;
export const ContainerSlideHeaderDescription = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
    div{
        text-align: center;
    }
    @media screen and (max-width:480px){
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-top: -6px;
        
    }
`;
