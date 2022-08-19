import Header from "./Header"
import Button, { ButtonProps } from "./Button"
import Screen from "./Screen"
import { slate } from "../utils/colors"
import { Grid } from "@chakra-ui/react"
import { useState } from "react"
import { add, dot2comma, solve, subtract } from "../utils/operations"

const keypad: ButtonProps[] = [
  { label: "C", type: "tertiary" },
  { label: "%" },
  { label: "√" },
  { label: "MC" },
  { label: "MR" },
  { label: "M+" },
  { label: "M-" },
  { label: "÷", type: "secondary" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "×", type: "secondary" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "-", type: "secondary" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "+", type: "secondary" },
  { label: "0", isLarge: true, isBottomLeft: true },
  { label: "," },
  { label: "=", type: "secondary", isBottomRight: true },
]

function Calculator() {
  const [screenValue, setScreenValue] = useState("")
  const [memoryValue, setMemoryValue] = useState("")

  const handlePressedButton = ({ label }: Pick<ButtonProps, "label">) => {
    // TODO do not allow multiple commas for same number
    // TODO do not allow multiple operators without numbers between
    let solvedScreen = dot2comma(solve(screenValue))

    if (solvedScreen === "NaN") solvedScreen = "ERROR"
    switch (label) {
      case "C":
        setScreenValue("")
        break
      case "MC":
        setMemoryValue("")
        break
      case "MR":
        setScreenValue(memoryValue)
        break
      case "M+":
        setMemoryValue(add(+memoryValue, +solvedScreen) + "")
        break
      case "M-":
        setMemoryValue(subtract(+memoryValue, +solvedScreen) + "")
        break
      case "=":
        setScreenValue(solvedScreen + "")
        break
      default:
        setScreenValue(screenValue + label)
        break
    }
  }

  return (
    <Grid
      h="370px"
      w="230px"
      bgColor={slate}
      p="1px"
      borderRadius="10px"
      gridTemplateColumns="repeat(4, 1fr)"
      gridTemplateRows="30px repeat(7, 1fr)"
      gap="1px 1px"
      boxShadow="0px 0px 45px 25px lightgray"
    >
      <Header />
      <Screen value={screenValue} />
      {keypad.map(({ label, ...rest }, i) => (
        <Button
          key={i}
          label={label}
          handleAction={() => handlePressedButton({ label })}
          {...rest}
        />
      ))}
    </Grid>
  )
}

export default Calculator
