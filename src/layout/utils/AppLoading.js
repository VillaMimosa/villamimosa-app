import { Spin } from 'antd';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import loadingLogo from '../../assets/app/loadingLogo.svg';
import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { scheme } from '../../constants/colors';

export const ProgressBar = ({ bottom }) => {
    const Progress = withStyles((theme) => ({
        root: {
            position: 'fixed',
            width: '100%',
            right: 0,
            left: 0,
            top: bottom ? 'unset' : 0,
            bottom: 0,
            zIndex: 1000
        },
        colorPrimary: { backgroundColor: scheme.main },
        bar: { borderRadius: 5, backgroundColor: scheme.mainTrans },
    }))(LinearProgress);
    return <Progress />
};


export const Loading = ({ text, centered }) => {
    return (
        <LoadingWrapper $centered={centered}
            tip={text && text} />
    )
};


const AppLoading = () => {
    return (
        <AppLoadingWrapper>
            <img src={loadingLogo} {...imgProps} alt="Loading..." />
        </AppLoadingWrapper>
    )
}

export default AppLoading;

Loading.propTypes = {
    text: PropTypes.string,
};

const imgProps = {
    style: {
        maxWidth: '100%',
        maxHeight: '100%',
        height: '50px',
        margin: 'auto'
    }
};

const boxeffect = keyframes`
    0% {
    -webkit-transform: scale(1);
            transform: scale(1);
        }
    100% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
    }
`;

const AppLoadingWrapper = styled.div`
    position: absolute;
    display: grid;
    width: 83px;
    height: 78px;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background: #00000014;
    border-radius: 5px;
	        animation: ${boxeffect} 500ms cubic-bezier(0.445, 0.050, 0.550, 0.950) 0.5s infinite alternate ;
`;

const LoadingWrapper = styled(Spin)`
    display: flex;
    align-items: center;
    & > :first-child {
        margin-right: 5px;
    }
    ${({ $centered }) => $centered &&
        `   justify-content: center;
            margin: auto;
            height: 50%;`}
`;