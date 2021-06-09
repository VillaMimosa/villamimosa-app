import { Layout } from "antd";
import styled from "styled-components";
import { Radio } from 'antd';

const { Header } = Layout;


export const DetailViewMain = styled.div`
        overflow: auto;
        width: 90%;
`;

export const AppHeaderWrapper = styled(Header)`
    z-index: 1000;
    line-height: initial;
    padding: 0px 15px;
    width: 100%;
    @media (min-width: 1024px) { 
        z-index: 0;
    }
`;

export const AppHeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

export const PageHeaderTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    color: #FFF;
    font-weight: 700;
    & > :first-child {
        margin-right: 15px;
    };
    & > :nth-child(2) {
        margin-right: 5px;
    }
`;

export const TypeInputWrapper = styled(Radio.Group)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > label {
        flex-grow: 1;
        text-align: center;
    }
`;

export const HomeDetailImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 92%;
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/226/226978700.jpg");
    background-color: #222;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const ObjectDetailMain = styled.div`    
    width: 100%;
    height: 92%;
    padding: 0px 10px 0px 10px;
`;