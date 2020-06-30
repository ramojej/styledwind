import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { BsSun, BsMoon } from "react-icons/bs"
import { Container, StyledHeader, ToggleContainer } from "../styles"

const Header = ({ siteTitle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <>
      <Container>
        <StyledHeader>
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
          <ToggleContainer
            isDarkMode={isDarkMode}
            type="button"
            onClick={toggleDarkMode}
          >
            <BsSun />
            <BsMoon />
          </ToggleContainer>
        </StyledHeader>
      </Container>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
