import styled from 'styled-components';
import breakpoint from '../../assets/commonStyles/breakpoints';

export const Image = styled.img`
@media only screen and ${breakpoint.device.lg} {
    display: none;
}
`