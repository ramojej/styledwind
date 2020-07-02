import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useEffect } from "react"
import { MenuToggle, MenuToggleContainer } from "./MobileMenu/MenuToggle"
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
import { useCycle, AnimatePresence } from "framer-motion"
import { MobileMenuOverlay } from "../styles"

const Header = ({ siteTitle }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  const [isOpen, toggleOpen] = useCycle(false, true)

  useEffect(() => {
    console.log("mount")
  }, [])

  console.log(isDarkMode)

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
            <MenuToggleContainer
              initial={false}
              animate={isOpen ? "open" : "closed"}
            >
              <MenuToggle
                toggle={() => toggleOpen()}
                style={{ fillColor: "red" }}
              />
            </MenuToggleContainer>
            {/* animate the icons up and down */}
            <ToggleContainer type="button" onClick={toggleDarkMode}>
              <AnimatePresence>
                {isDarkMode ? (
                  <SVGContainer
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    key="1"
                  >
                    <BsSun />
                  </SVGContainer>
                ) : (
                  <SVGContainer
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    key="2"
                  >
                    <BsMoon />
                  </SVGContainer>
                )}
              </AnimatePresence>
            </ToggleContainer>
          </HeaderRight>
        </StyledHeader>
      </Container>
      <MobileMenuOverlay
        animate={{
          scale: isOpen ? 1 : 0,
        }}
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
