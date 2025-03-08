import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    justify-content: space-around;
    margin-top: 80px ;
    #title{
        color:${props=>props.theme['blue-950']};
        font-size: 100px;
        font-weight: 800;
    }
    p{
         color: ${props=>props.theme['gray-950']};
         opacity: 80%;
    }
`;
export const Content = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 1rem;

`
export const Title=styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 10px;
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
`;
export const CardProfile = styled.div`
    width: 500px;
    background: ${props=>props.theme['gray-950']};
    background-position: unset;
    background-size: cover;
    height: 400px;
    border-radius: 8px;
    box-shadow: -20px 30px 80px  ${props=>props.theme['gray-950']};
    display: flex;
    align-items: center;
    justify-content: space-around;

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

