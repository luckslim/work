import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    justify-content: space-around;
    margin-top: 80px ;

    p{
         color: ${props=>props.theme['gray-950']};
         opacity: 80%;
    }
    @media screen and (max-width:880px){
        display: grid;
        gap: 10rem;
        grid-template-columns: 1fr;
        
    }
    @media screen and (max-width:480px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;
export const Content = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media screen and (max-width:880px){
        display: grid;
        width: 100%;
        text-align: justify;
        justify-content: space-around;
    }
    @media screen and (max-width:480px){
        width: 350px;
        display: grid;
        align-content: center;
        justify-content: center;
        align-items: center;
        justify-items: center;

    }

`
export const Title=styled.div`
    display: grid;
    align-items:center;
    gap: 1rem;
    justify-content: space-between;
    margin: 10px;
    #title{
        color:${props=>props.theme['blue-950']};
        font-size: 100px;
        font-weight: 800;
    }
    nav{
        display: flex;
        gap: 2rem;
        a{
            text-decoration: none;
            color: ${props=>props.theme['slate-950']};
            display: flex;
            align-items: center;

        }
        a:hover{
            border-bottom: 2px solid ${props=>props.theme['slate-950']};
        }
    }

    @media screen and (max-width:880px) {
        #title{
            width: 100%;
            text-align: justify;
            font-size: 4rem;
        }
    }
    @media screen and (max-width:480px){
        #title{
            width: 100%;
            text-align: justify;
            font-size: 2rem;
        }
        p{
            text-align: center;
            width: 300px;
        }

    }
`;
export const ContentCard = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    img{
        width:150px;
        border-radius: 8px;
        box-shadow: -10px 10px 60px  ${props=>props.theme['gray-950']};
    }
    p{
        width: 400px;
    }
    @media screen and (max-width:880px) {
        width: 100%;
        p{
            width: 300px;
        }
    }
    @media screen and (max-width:480px) {
        display: flex;
        flex-direction: column;
        img{
            width:200px;
            border-radius: 8px;
            box-shadow: -10px 10px 60px  ${props=>props.theme['gray-950']};
        }
    }


`;
export const CardProfile = styled.div`
    width: 500px;
    background: ${props=>props.theme['gray-950']};
    background-position: unset;
    background-size: cover;
    height: 500px;
    border-radius: 8px;
    box-shadow: -20px 30px 80px  ${props=>props.theme['gray-950']};
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width:880px){
        width: 600px;
    }
    @media screen and (max-width:480px){
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        width: 350px;
        height: 600px;
        margin-top: -100px;
    }


`;
export const CardTitle = styled.div``;
export const CardContent = styled.div`
    color: linear-gradient(to right,${props=>props.theme['blue-950']},${props=>props.theme['blue-950']});
    display: grid;
    gap: 1rem;
    button{
        background-color: ${props=>props.theme['gray-300']};
        padding: 1rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem; 
    }
`;

