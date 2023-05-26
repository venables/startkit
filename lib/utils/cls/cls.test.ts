import { cls } from "./cls"

test("merges class names", () => {
  const result = cls("foo", "bar")
  expect(result).toBe("foo bar")
})

test("removes conflicting tailwind classes", () => {
  const result = cls("p-4", "p-6")
  expect(result).toBe("p-6")
})
