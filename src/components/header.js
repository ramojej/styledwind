import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import tw, { styled } from "twin.macro"

const StyledHeader = styled.header`
  ${tw`mb-16`};
  background: rebeccapurple;
`

const ToggleButton = styled.button`
  ${tw`active:outline-none overflow-hidden focus:outline-none`}
`

const Header = ({ siteTitle }) => {
  const { toggleDarkMode } = useContext(ThemeContext)

  return (
    <StyledHeader>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <ToggleButton type="button" onClick={toggleDarkMode}>
          Toggle
        </ToggleButton>
      </div>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
