import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:baseline;
    margin-top: 10px;
    padding-bottom: 4rem;
    @media screen and (max-width:880px){
        display: grid;
        gap: 6rem;
    }
`;
export const Content = styled.div`
    background-color: ${props=>props.theme['slate-100']};
    width: 600px;
    align-content: center;
    border-radius: 10px;
    box-shadow: -20px 30px 80px  ${props=>props.theme['gray-950']};
    @media screen and (max-width:480px){
        width: 350px;
    }
`;
export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            color: ${props=>props.theme['slate-500']};
        }
    }
`;
export const ContentBody = styled.div`
    display: grid;
    align-items: center;
    padding: 2rem;
    div{
        display: grid;
        gap: 1rem;
        p{
            font-size: larger;
        }
        span{
            color:${props=>props.theme['slate-500']};
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
`;
export const PasswordKey = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    form{
        display: flex;
        gap: 1rem;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        button{
        background-color: ${props=>props.theme['slate-200']};
        font-weight: 500;
        padding: 1rem;
        border-radius: 8px;
        width: 30%;
        border: none;
        color: ${props=>props.theme['slate-400']};
    }
    input{
        text-align: center;
        border: none;
        border-radius: 8px;
        padding: 1rem;
        width: 60%;
    }
    }


`;
export const ContentFooter = styled.div`
    
    display: flex;
    align-items: end;
    justify-content: space-around;
    padding: 1rem;
    border-top: 1px solid ${props=>props.theme['slate-300']};
    div{
        p{
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 30px;
            font-weight: 800;
            small{
                font-size: 15px;
                color: ${props=>props.theme['slate-400']};
            }
        }
    }
    span{
        color:${props=>props.theme['slate-500']};
        display:flex;
        gap: 1rem;
        img{
            width: 50px;
            border: 1px solid ${props=>props.theme['slate-300']};
            border-radius: 4px;
            padding: 2px;
        }        
    }
    button{
        background-color: ${props=>props.theme['slate-400']};
        color:${props=>props.theme['slate-100']};
        padding: 1rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor:not-allowed;
        opacity: 30%;
    }
    button:not(:disabled){
        background-color: ${props=>props.theme['green-100']};
        cursor: pointer;
        opacity: 100%;
        transition: background-color 5s ;
    }
    @media screen and (max-width:480px) {
        display: grid;
        gap: 1rem;
        
    }

`;