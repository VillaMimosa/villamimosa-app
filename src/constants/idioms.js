import styled from 'styled-components';
import Flags from 'country-flag-icons/react/3x2';

const flagSize = '25px';

const FlagES = styled(Flags.ES)`
    width: ${flagSize};
`
const FlagEN = styled(Flags.GB)`
    width: ${flagSize};
`

export const ESP = 'es';

export const IDIOMS = [
    { label: <FlagES/>, value: ESP },
    { label: <FlagEN/>, value: 'en' }
];