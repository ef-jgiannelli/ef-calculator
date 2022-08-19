import {
  divide,
  multiply,
  percent,
  sqrt,
  solve,
  solveSqrt,
  solveMultiplication,
  solvePercentage,
  solveAddition,
  solveSubtraction,
} from "./operations"

test("can calculate square root", () => {
  expect(sqrt(45)).toBe(6.708203932499369)

  expect(sqrt(-45)).toBe(-6.708203932499369)
})

test("can multiply", () => {
  expect(multiply(123, 45)).toBe(5535)

  expect(multiply(12.3, 45)).toBe(553.5)

  // will fail with ,
  expect(multiply(+"12,3", +"45")).toBe(NaN)

  expect(multiply(+"12.3", +"45")).toBe(553.5)
})

test("can do percent", () => {
  expect(percent(45)).toBe(0.45)
})

test("can divide", () => {
  expect(divide(45, 7)).toBe(6.428571428571429)
})

test("can solve square root from string", () => {
  expect(solveSqrt("√45")).toBe("6.708203932499369")

  expect(solveSqrt("5√45")).toBe("56.708203932499369")

  expect(solveSqrt("√-45")).toBe("-6.708203932499369")

  expect(solveSqrt("4x8-9-√-45")).toBe("4x8-9--6.708203932499369")
})

test("can solve multiplication from string", () => {
  expect(solveMultiplication("12×5")).toBe("60")

  expect(solveMultiplication("12×5-8")).toBe("60-8")

  expect(solveMultiplication("12×512×5")).toBe("6144×5")

  expect(solveMultiplication("12×512×5")).toBe("6144×5")
})

test("can solve percentage from string", () => {
  expect(solvePercentage("20%")).toBe("0.2")

  expect(solvePercentage("8%+2")).toBe("0.08+2")
})

test("can solve addition from string", () => {
  expect(solveAddition("20+40%")).toBe("60%")

  expect(solveAddition("88%4+2×5")).toBe("88%6×5")
})

test("can solve subtraction from string", () => {
  expect(solveSubtraction("20-40%")).toBe("-20%")

  expect(solveSubtraction("88%4+5-4×5")).toBe("88%4+1×5")
})

test("can solve equation", () => {
  const result = solve("125+3×4,6÷6")
  expect(result).toBe("127.3")
})
