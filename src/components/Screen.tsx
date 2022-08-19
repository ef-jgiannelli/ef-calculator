import { Box } from "@chakra-ui/react"
import { slate, white } from "../utils/colors"

export type ScreenProps = {
  value?: string
}

function Screen({ value = "" }: ScreenProps) {
  return (
    <Box
      as="input"
      bgColor={slate}
      color={white}
      textAlign="right"
      fontSize="4xl"
      px="0.2em"
      gridArea="2 / 1 / 3 / 5"
      value={value}
      overflow="hidden"
    />
  )
}

export default Screen
