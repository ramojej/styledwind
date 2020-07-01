import tw, { styled } from "twin.macro"

export const Menu = styled.div`
  ${tw`flex items-center hidden`}

  @media ${props => props.theme.screens.lg} {
    ${tw`block`}
  }

  & a:not(:last-child) {
    ${tw`mr-4`}
  }
`
