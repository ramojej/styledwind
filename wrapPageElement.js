import React from "react"
import { Layout } from "./src/layouts"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element }) => <Layout>{element}</Layout>

export default wrapPageElement
