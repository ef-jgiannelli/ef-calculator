export const ArithmeticSymbols = {
  multiply: "×",
  divide: "÷",
  add: "+",
  subtract: "-",
  percent: "%",
  sqrt: "√",
}

export const sqrt = (value: number): number => {
  const minus = value < 0
  const res = Math.sqrt(Math.abs(value))
  return minus ? -res : res
}
export const multiply = (v1: number, v2: number): number => v1 * v2
export const percent = (value: number): number => value / 100
export const divide = (v1: number, v2: number): number => v1 / v2
export const add = (v1: number, v2: number): number => v1 + v2
export const subtract = (v1: number, v2: number): number => v1 - v2

/**
 * PEMDAS
 *
 * we dont have Parenthesis so...
 * E = Exponents and Roots
 * M = Multiplications
 * D = Division
 * A = Addition
 * S = Subtraction
 */

// match a number (12|4.5|0.7789|...)
const E_Matcher = /√([+-]?(\d*\.)?\d+)/
const M_Matcher = /([+-]?(\d*\.)?\d+)×([+-]?(\d*\.)?\d+)/
const P_Matcher = /([+-]?(\d*\.)?\d+)%/
const D_Matcher = /([+-]?(\d*\.)?\d+)÷([+-]?(\d*\.)?\d+)/
const A_Matcher = /([+-]?(\d*\.)?\d+)\+([+-]?(\d*\.)?\d+)/
const S_Matcher = /([+-]?(\d*\.)?\d+)-([+-]?(\d*\.)?\d+)/

export const solve = (value: string): string => {
  value = comma2dot(value)

  if (isSqrt(value)) {
    return solveSqrt(value)
  }

  if (isMultiplication(value)) {
    return solveMultiplication(value)
  }

  if (isPercentage(value)) {
    return solvePercentage(value)
  }

  if (isDivision(value)) {
    return solveDivision(value)
  }

  if (isAddition(value)) {
    return solveAddition(value)
  }

  if (isSubtraction(value)) {
    return solveSubtraction(value)
  }

  return value
}

export const dot2comma = (value: string): string => value.replace(".", ",")
export const comma2dot = (value: string): string => value.replace(",", ".")

export const solveSqrt = (value: string): string => {
  const [match] = value.match(E_Matcher) ?? [value]

  const base = match.replace(ArithmeticSymbols.sqrt, "")
  const res = sqrt(+base) + ""
  return value.replace(match, res)
}

export const solveMultiplication = (value: string): string => {
  const [match] = value.match(M_Matcher) ?? [value]
  const [v1, v2] = match.split(ArithmeticSymbols.multiply)
  const res = multiply(+v1, +v2) + ""
  return value.replace(match, res)
}

export const solveDivision = (value: string): string => {
  const [match] = value.match(D_Matcher) ?? [value]
  const [v1, v2] = match.split(ArithmeticSymbols.divide)
  const res = divide(+v1, +v2) + ""
  return value.replace(match, res)
}

export const solvePercentage = (value: string): string => {
  const [match] = value.match(P_Matcher) ?? [value]
  const base = match.replace(ArithmeticSymbols.percent, "")
  const res = percent(+base) + ""
  return value.replace(match, res)
}

export const solveAddition = (value: string): string => {
  const [match] = value.match(A_Matcher) ?? [value]
  const [v1, v2] = match.split(ArithmeticSymbols.add)
  const res = add(+v1, +v2) + ""
  return value.replace(match, res)
}

export const solveSubtraction = (value: string): string => {
  const [match] = value.match(S_Matcher) ?? [value]
  const [v1, v2] = match.split(ArithmeticSymbols.subtract)
  const res = subtract(+v1, +v2) + ""
  return value.replace(match, res)
}

export const isSqrt = (value: string): boolean =>
  value.includes(ArithmeticSymbols.sqrt)
export const isPercentage = (value: string): boolean =>
  value.includes(ArithmeticSymbols.percent)
export const isMultiplication = (value: string): boolean =>
  value.includes(ArithmeticSymbols.multiply)
export const isDivision = (value: string): boolean =>
  value.includes(ArithmeticSymbols.divide)
export const isAddition = (value: string): boolean =>
  value.includes(ArithmeticSymbols.add)
export const isSubtraction = (value: string): boolean =>
  value.includes(ArithmeticSymbols.subtract)
