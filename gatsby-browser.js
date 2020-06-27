/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import Wrapper from "./src/context/ThemeContext"
import "./src/css/style.css"

export const wrapRootElement = ({ element }) => <Wrapper>{element}</Wrapper>
