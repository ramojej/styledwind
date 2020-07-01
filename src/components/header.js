import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { MenuToggle } from "./MenuToggle"
import { ThemeContext } from "../context/ThemeContext"
import { BsSun, BsMoon } from "react-icons/bs"
import Menus from "../constants/routes"
import {
  Container,
  StyledHeader,
  ToggleContainer,
  SVGContainer,
  Menu,
  HeaderRight,
} from "../styles"
import { motion, useCycle } from "framer-motion"
import { MobileMenuOverlay } from "../styles"

const Header = ({ siteTitle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  const [isOpen, toggleOpen] = useCycle(false, true)

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
          <HeaderRight>
            <Menu>
              {Menus.map((item, i) => {
                return (
                  <Link key={i} to={item.path}>
                    {item.text}
                  </Link>
                )
              })}
            </Menu>
            <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
              <MenuToggle
                toggle={() => toggleOpen()}
                style={{ fillColor: "red" }}
              />
            </motion.nav>
            <ToggleContainer type="button" onClick={toggleDarkMode}>
              <SVGContainer
                isDarkMode={isDarkMode}
                initial={{ opacity: 0 }}
                animate={{
                  transform: isDarkMode ? "translateY(0)" : "translateY(100px)",
                  opacity: 1,
                }}
              >
                <BsSun />
              </SVGContainer>
              <SVGContainer
                isDarkMode={isDarkMode}
                initial={{ opacity: 0 }}
                animate={{
                  transform: isDarkMode
                    ? "translateY(-100px)"
                    : "translateY(0)",
                  opacity: 1,
                }}
              >
                <BsMoon />
              </SVGContainer>
            </ToggleContainer>
          </HeaderRight>
        </StyledHeader>
      </Container>
      <MobileMenuOverlay
        animate={{ scale: isOpen ? 1 : 0 }}
        initial={{ scale: 0 }}
      >
        <p>aw</p>
      </MobileMenuOverlay>
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
