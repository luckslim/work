import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;
export const Content = styled.div`
    background-color: ${props=>props.theme['slate-100']};
    width: 600px;
    
    border-radius: 10px;
    box-shadow: -20px 30px 80px  ${props=>props.theme['gray-950']};
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
export const ContentFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    div{
        p{
            font-size: 30px;
            font-weight: 800;
        }
    }
    span{
        color:${props=>props.theme['slate-500']}
    }
    button{
        background-color: ${props=>props.theme['slate-700']};
        color:${props=>props.theme['slate-100']};
        padding: 1rem;
        border: none;
        border-radius: 8px;
        font-weight: 600;  
    }
    button:hover{
        background-color: ${props=>props.theme['green-100']};
        color:${props=>props.theme['slate-100']};
        transition: background-color 1s;
        font-weight: 600;
        opacity: 30%;
        cursor: not-allowed ;
    }
`;