import tw, { styled } from "twin.macro"

export const Container = styled.div`
  ${tw`max-w-5xl mx-auto px-4`}
  background: ${props => props.theme.body};

  @media ${props => props.theme.screens.lg} {
    color: red;
  }
`
