import { Divider } from 'antd';
import styled from 'styled-components';

const Div = props => <Divider {...props} />

export const Division = styled(Divider)`
    margin: 10px 0px;
`;

export const DashedDivision = styled(Div)`
    ${({ $trans }) => !$trans ? `border-top: 1px dashed #22222230;`
        : `border-top: 1px solid transparent;`};
    margin: 10px 0px;
`;

export const AppWrapper = styled.div`
    height: 100%;
`;

export const FlexSpace = styled.div`
    display: flex;
    align-items: center;
    width: ${props => props.width ? props.width : '100%'};
    justify-content: ${props => {
        if (props.content === 'center') { return 'center' };
        if (props.content === 'between') { return 'space-between' };
        if (props.content === 'evenly') { return 'space-evenly' };
        return 'start'
    }};
    & > * {
        margin-right: 5px;
        ${props => props.margin && `margin: ${props.margin}`}
    }
`;

export const DocumentDiv = styled.div`
    display: flex;
    align-items: center;
    width: '100%';
    justify-content: space-between;
    margin-bottom: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px;
    border-radius: 10px;
`;