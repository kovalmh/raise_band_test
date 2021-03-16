import styled from 'styled-components';
import breakpoint from '../../assets/commonStyles/breakpoints';

export const HeaderWrapper = styled.div`
    @media only screen and ${breakpoint.device.xs}{
        padding: 0 40px;
    };    
    width: 1220px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const TopHeader = styled.header`
    height: 88px;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 16px rgba(32, 108, 164, .16);
`;