import styled from "styled-components";

export const Container =styled.div`
    margin: 100px 0px ;
    width: 430px;
    
`;

export const StyledSlide = styled.div`
    background-color: ${props=>props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem;
    height: auto;
`;
export const ContainerTestimonial = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ContainerAvaible = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img{
        width: 88px;
        height: 88px;
        object-fit: cover;
        border-radius: 9999px;
    }
    span img{
        width: 40px;
        object-fit: contain;
    }
`;
export const InfoAvaible = styled.div`
    line-height: 40px;
    h4{
        border-bottom: 1px solid ${props=>props.theme['violet-500']};
        color: ${props=>props.theme['gray-100']};
        display: flex;
        justify-content: space-between;
        margin: 10px 0 ;
    }
    small{
        color: ${props=>props.theme['gray-100']};
    }
`;

export const ContainerComents = styled.div`

`;

export const ContainerButtonComents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    color: aliceblue;
    a{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props=>props.theme['gray-800']};
        padding: 0.1rem;
        width: 100px;

        border-radius: 8px;
        height: 30px;
        cursor: pointer;

    }
    a:hover{

    }
`;