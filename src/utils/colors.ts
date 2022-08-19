export const white = "#ededee"
export const lightGray = "#7c7a80"
export const grey = "#5e5e64"
export const darkGrey = "#514f55"
export const slate = "#525055"
export const red = "#91162f"

export type ColorType = "primary" | "secondary" | "tertiary"

export const getColorFromType = (type: ColorType) => {
  switch (type) {
    case "primary":
      return lightGray
    case "secondary":
      return red
    case "tertiary":
    default:
      return grey
  }
}
