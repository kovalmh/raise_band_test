import styled from 'styled-components';
import breakpoint from '../../assets/commonStyles/breakpoints';

export const HeaderWrapper = styled.div`
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const TopHeader = styled.header`
    height: 88px;
    display: flex;
    align-items: center;
    @media only screen and ${breakpoint.device.xl}{
        box-shadow: 0px 2px 16px rgba(32, 108, 164, .16);
    }
`;