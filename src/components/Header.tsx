import { Box } from "@chakra-ui/react"
import { slate } from "../utils/colors"
import SvgLogo from "./SvgLogo"

function Header() {
  return (
    <Box
      bgColor={slate}
      gridArea="1 / 1 / 2 / 5"
      borderTopLeftRadius="10px"
      borderTopRightRadius="10px"
      p="6px"
    >
      <SvgLogo />
    </Box>
  )
}

export default Header
