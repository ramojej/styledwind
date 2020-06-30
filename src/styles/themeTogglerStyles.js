import tw, { styled } from "twin.macro"

export const ToggleContainer = styled.button`
  ${tw`cursor-pointer flex items-center overflow-hidden relative justify-center text-center focus:outline-none`};
  width: 20px;
  height: 20px;

  svg {
    ${tw`absolute inline-block align-middle`}
    transition: all 0.2s linear;

    &:first-child {
      transform: ${({ isDarkMode }) =>
        isDarkMode ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ isDarkMode }) =>
        isDarkMode ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`
