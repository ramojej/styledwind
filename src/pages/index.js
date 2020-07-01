import React, { useState } from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { MenuToggle } from "../components/MenuToggle"
import { motion, useCycle } from "framer-motion"
import { MobileMenuOverlay } from "../styles"

const P = styled.p`
  ${tw`text-2xl`}
`

const IndexPage = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)

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
      {/* <button onClick={() => setOpen(!isOpen)}>Scale</button>
      <motion.div
        animate={{ scale: isOpen ? 1 : 0 }}
        initial={{ scale: 0 }}
        //transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        style={{ height: "300px", background: "red" }}
      ></motion.div> */}
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggle toggle={() => toggleOpen()} style={{ fillColor: "red" }} />
      </motion.nav>
      <div style={{ position: "relative", height: "500px" }}>
        <motion.div
          animate={{ scale: isOpen ? 1 : 0 }}
          initial={{ scale: 0 }}
          //transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          style={{
            height: "100%",
            width: "100%",
            background: "red",
            position: "absolute",
          }}
        ></motion.div>
      </div>
      <MobileMenuOverlay
        animate={{ scale: isOpen ? 1 : 0 }}
        initial={{ scale: 0 }}
      >
        <p>aw</p>
      </MobileMenuOverlay>
    </Layout>
  )
}

export default IndexPage
