import styled from 'styled-components';
import breakpoint from '../../assets/commonStyles/breakpoints';

export const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .75)'
    },
    content: {
      position: `absolute`,
      background: `#fff`,
      display: 'flex',
      borderRadius: '25px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '0',
      overflow: 'visible',
      maxWidth: `53vw`,
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
}

export const Image = styled.img`
  margin: -0.781vw 0 -0.781vw -0.260vw;
  @media only screen and ${breakpoint.device.xs}{
    max-width: 40%;
  }
`;

export const ModalInfo = styled.div`
  margin: 0 2.083vw 0 3.125vw
`;

export const ModalHeader = styled.span`
  display: inline-block;
  font-weight: 700;
  line-height: 180%;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media only screen and ${breakpoint.device.xs}{
    font-size: 2.5vw;
    line-height: 3vh;
    margin-top: 4.7vh;
  }
`;

export const ModalText = styled.p`
  font-family: 'Open Sans', sans-serif;
  text-align: justify;
  @media only screen and ${breakpoint.device.xs}{
    margin-top: 2.8vh;
    font-size: 2vw;
  }
  @media only screen and ${breakpoint.device.sm}{
    margin-top: 2.8vh;
    font-size: 1.5vw;
  }
  @media only screen and ${breakpoint.device.md}{
    margin-top: 2.8vh;
    font-size: 1.3vw;
  }
  @media only screen and ${breakpoint.device.lg}{
    margin-top: 2.8vh;
    font-size: 1.2vw;
    line-height: 4.5vh 
  }
`;

export const ModalForm = styled.form`
@media only screen and ${breakpoint.device.xs}{
    max-width: 85%;
    margin-top: 4.8vh
  };
  @media only screen and ${breakpoint.device.sm}{
  };
  @media only screen and ${breakpoint.device.md}{
    max-width: 75%;
  }
  & input:last-of-type {
    margin-top: 9px;
  }
`;

export const ModalInput = styled.input`
  border-radius: 10px;
  width: 100%;
  border: solid 1px #cfcece;
  outline: none;
  @media only screen and ${breakpoint.device.xs}{
    padding: 1.1vh 0 1.9vh 1.9vh;
    ::placeholder {
    color: #909090;
    line-height: 2.5vh;
    font-size: 2.8vw;
    }
  };
  @media only screen and ${breakpoint.device.sm}{
    padding: 2.5vh 0 2.5vh 1.5vh;
    ::placeholder {
    line-height: 3.5vh;
  };
  @media only screen and ${breakpoint.device.md}{
    padding: 3vh 0 3vh 2.5vh;
    ::placeholder {
    line-height: 5vh;
    font-size: 2.2vw;
    }
  }
  @media only screen and ${breakpoint.device.xl}{
    ::placeholder {
    font-size: 2vw;
  }
  };
  @media only screen and ${breakpoint.device.xxl}{
    ::placeholder {
    font-size: 1.5vw;
  }
`;

export const ModalButton = styled.button`
  border-radius: 10px;
  background: #C774EE;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #fff;
  border: none;
  outline: none;
  @media only screen and ${breakpoint.device.xs}{
    max-width: 100%;
    margin: 2vh 0 4.4vh;
    font-size: 2.8vw;
    padding: 1.7vh 1.15vw;
  };
  @media only screen and ${breakpoint.device.sm}{
    font-size: 2.5vw;
    padding: 2vh 1.5vw;
  };
  @media only screen and ${breakpoint.device.md}{
    font-size: 2vw;
    padding: 2vh 1.8vw;
  };
  @media only screen and ${breakpoint.device.lg}{
    font-size: 1.8vw;
    padding: 2.5vh 2vw;
  };
  @media only screen and ${breakpoint.device.xl}{
    font-size: 1.5vw;
    margin-top: 3vh;
  };
  @media only screen and ${breakpoint.device.xxl}{
    font-size: 1.2vw;
  }
`;

export const ModalClose = styled.a`
  position: absolute;
  opacity: .2;
@media only screen and ${breakpoint.device.xs}{
  top: 2.3vh;
  right: 1.3vw;
  width: 1.7vw;
  height: 1.7vw
  }
  :hover {
  opacity: 1;
};
  &::before, &::after {
  position: absolute;
  left: 0.8vw;
  content: ' ';
  height: 3vh;
  width: 0.052vw;
  background-color: #333;
  };
  &:before {
  transform: rotate(45deg);
}
  &:after {
  transform: rotate(-45deg);
}
`;