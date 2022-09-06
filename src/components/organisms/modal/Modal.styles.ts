import styled, { css, IModalStyleProps, keyframes } from 'styled-components'

const ModalBgBlind = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const ModalBgShow = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const Wrap = styled.div`
  ${({ theme }) => css`
    width: 30%;
    max-width: 500px;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${theme.paddings.big};
    background-color: ${theme.backgroundColor};
    box-shadow: ${theme.boxShadow};

    & > h2 {
      margin-bottom: ${theme.margins.big};
    }
  `}
`

const ButtonWrap = styled.div<IModalStyleProps>`
  width: 100%;
  ${({ theme, align }) => css`
    justify-content: ${align || 'center'};

    & button {
      margin-left: ${theme.margins.md};
      margin-right: ${theme.margins.md};
    }
  `}
`

const Blind = styled.div<IModalStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100vh;
  ${({ theme, blindBg }) =>
    blindBg
      ? css`
          background-color: rgba(0, 0, 0, 0.6);
          animation: ${ModalBgBlind} 0.3s;
        `
      : css`
          background-color: ${theme.backgroundColor};
          animation: ${ModalBgShow} 0.3s;
        `}
`

export default {
  Wrap,
  ButtonWrap,
  Blind,
}
