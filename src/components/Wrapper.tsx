import { Box } from "@chakra-ui/react"
import Calculator from "./Calculator"

function Wrapper() {
  return (
    <Box ml="auto" mr="auto" p="60px" w="440px" h="570px">
      <Calculator />
    </Box>
  )
}

export default Wrapper
