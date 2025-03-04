import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;
export const Content = styled.div`
    background-color: ${props=>props.theme['slate-100']};
    width: 430px;
    height: 300px;
    border-radius: 8px;
    box-shadow: -20px 30px 80px  ${props=>props.theme['gray-950']};
`;