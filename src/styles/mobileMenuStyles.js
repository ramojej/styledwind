import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"

export const MobileMenuOverlay = styled(motion.div)`
  ${tw`absolute h-full w-full p-5 bg-gray-400 lg:hidden`}
`
