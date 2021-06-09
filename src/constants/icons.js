import { colors } from './colors';
import { HomeOutlined, HomeFilled, AlertFilled } from '@ant-design/icons';

// MENU
export const HomeIcon = ({ light, ...props }) => <HomeFilled style={{ color: light ? colors.light : 'unset' }} {...props} />
export const HomeIconX = ({ light, ...props }) => <HomeOutlined style={{ color: light ? colors.light : 'unset' }} {...props} />

// APP
export const CoffeeIcon = props => <AlertFilled {...props} />
