import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    justify-content: space-around;
    margin-top: 50px ;

    p{
         color: ${props => props.theme['gray-950']};
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
    gap:1rem;
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
export const Title = styled.div`
    display: grid;
    align-items:center;
    gap: 1rem;
    justify-content: space-between;
    margin: 10px;
    #title{
        color:${props => props.theme['blue-950']};
        font-size: 100px;
        font-weight: 800;
    }
    nav{
        display: flex;
        gap: 2rem;
        a{
            text-decoration: none;
            color: ${props => props.theme['slate-950']};
            display: flex;
            align-items: center;

        }
        a:hover{
            border-bottom: 2px solid ${props => props.theme['slate-950']};
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
        box-shadow: -10px 10px 60px  ${props => props.theme['gray-950']};
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
            box-shadow: -10px 10px 60px  ${props => props.theme['gray-950']};
        }
    }


`;
export const CardProfile = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    background: ${props => props.theme['gray-950']};
    background-position: unset;
    background-size: cover;
    height: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    box-shadow: -20px 30px 80px  ${props => props.theme['gray-950']};
    @media screen and (max-width:480px){
        width: 99%;
        
    }


`;
export const ContainerImg = styled.div`
    width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    background-color: ${props => props.theme['blue-500']};
    border-radius: 8px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        img{
            width: 100%;
            height: auto;
            animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }

        }

    }
    span{
        width: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: space-around;
        padding: 1rem;
        
        a{
            background-color: ${props=>props.theme['slate-50']} ;
            color:${props=>props.theme['slate-900']} ;
            padding: 1rem;
            border-radius: 9999px;
            cursor: pointer;
        }
        .text{
            color: ${props=>props.theme['slate-50']};
            border-bottom:0.5px solid  ${props=>props.theme['slate-50']};
        }
    }
    @media screen and (max-width:480px){
        margin-top: -100px;
        width:99%;
        span{
        width: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: space-around;

        a{
            background-color: ${props=>props.theme['slate-50']} ;
            color:${props=>props.theme['slate-900']} ;
            padding: 0.5rem;
            border-radius: 9999px;
            cursor: pointer;
        }
        .text{
            width: 50%;
            color: ${props=>props.theme['slate-50']};
            border-bottom:0.5px solid  ${props=>props.theme['slate-50']};
        }
    }
        
    }
`;
export const CardHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.594rem;
    }
`;
export const CardBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:normal;
    justify-content: center;
    padding: 0px 4rem;
    p{
        font-size: 30px;
        font-weight: 800;
    }
    

`;
export const CardFooter = styled.div`
    width: 100%;
    display: grid;
    button{
        color: ${props=>props.theme['slate-50']};
        background-color: ${props=>props.theme['slate-800']};
        padding: 1rem;
        border: none;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
        
    }
    button:hover{
        color: ${props=>props.theme['slate-50']};
        background-color: ${props=>props.theme['slate-800']};
        padding: 1rem;
        border: none;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
        opacity: 70%;
        
    }
`;

