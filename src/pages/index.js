import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const P = styled.p`
  ${tw`text-2xl`}
  ${props => console.log(props)}
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-4xl">Hi people</h1>
      <P>Welcome to your new Gatsby site.</P>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
