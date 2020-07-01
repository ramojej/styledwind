import tw, { styled } from "twin.macro"

export const HeaderRight = styled.div`
  ${tw`flex items-center`};

  & > div {
    ${tw`order-1 ml-4`}

    @media ${props => props.theme.screens.lg} {
      ${tw`order-none mr-4 ml-0`}
    }
  }
`
