import { Box } from "@chakra-ui/react"
import { ColorType, getColorFromType, white } from "../utils/colors"

export type ButtonProps = {
  label: string
  isLarge?: boolean
  type?: ColorType
  isBottomLeft?: boolean
  isBottomRight?: boolean
  handleAction?: () => void
}

function Button({
  label = "",
  isLarge = false,
  type = "primary",
  isBottomLeft = false,
  isBottomRight = false,
  handleAction = () => {},
}: ButtonProps) {
  return (
    <Box
      as={"button"}
      gridArea={isLarge ? "8 / 1 / 9 / 3" : "auto"}
      backgroundColor={getColorFromType(type)}
      onClick={handleAction}
      _active={{
        transform: "scale(0.98)",
      }}
      borderBottomLeftRadius={isBottomLeft ? "10px" : "none"}
      borderBottomRightRadius={isBottomRight ? "10px" : "none"}
      color={white}
      fontSize="2xl"
    >
      {label}
    </Box>
  )
}

export default Button
