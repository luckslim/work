import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
    height: 500px;
    
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
    height: 500px;
`;
export const ContainerSlide = styled.div`
    display: grid;
`;
export const ContainerSlideHeader = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-around;
    margin-top: 25px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;    
    }
    img{
        width: 150px;
        animation: rotate 20s linear infinite;

    }
    @keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
`;
export const ContainerSlideHeaderDescription = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
    div{
        text-align: center;
    }
`;

// export const StyledSlide = styled.div`
//     background-color: ${props=>props.theme['gray-700']};
//     border-radius: 8px;
//     padding: 2rem;
//     height: auto;
// `;
// export const ContainerTestimonial = styled.div`
//     display: flex;
//     flex-direction: column;
// `;
// export const ContainerAvaible = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
    
//     img{
//         width: 88px;
//         height: 88px;
//         object-fit: cover;
//         border-radius: 9999px;
//     }
//     span img{
//         width: 40px;
//         object-fit: contain;
//     }
// `;
// export const InfoAvaible = styled.div`
//     line-height: 40px;
//     h4{
//         border-bottom: 1px solid ${props=>props.theme['violet-500']};
//         color: ${props=>props.theme['gray-100']};
//         display: flex;
//         justify-content: space-between;
//         margin: 10px 0 ;
//     }
//     small{
//         color: ${props=>props.theme['gray-100']};
//     }
// `;

// export const ContainerComents = styled.div`

// `;

// export const ContainerButtonComents = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     justify-items: center;
//     color: aliceblue;
//     a{
//         text-decoration: none;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background-color: ${props=>props.theme['gray-800']};
//         padding: 0.1rem;
//         width: 100px;

//         border-radius: 8px;
//         height: 30px;
//         cursor: pointer;

//     }
//     a:hover{

//     }
// `;