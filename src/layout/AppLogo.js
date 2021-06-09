
import { AppLogoWrapper } from './Styles';
import logoW from '../assets/app/logoIso.png';

const AppLogo = ({ width = 22, padding = 0 }) => {
    return (
        <AppLogoWrapper style={{ padding, marginRight: '15px' }}>
            <img src={logoW} width={`${width}%`}
                style={{ maxWidth: 300 }}
                alt="Logo - Villa Mimosa" />
                Villa Mimosa
        </AppLogoWrapper>
    )
}

export default AppLogo;