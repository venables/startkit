import { getInitials } from "./get-initials"

const testNames = [
  { name: "matt   venables", initials: "MV" },
  { name: "Thomas Edward Brady", initials: "TB" },
  { name: "user@email.com", initials: "U" },
  { name: "Albus Percival Wulfric Brian dumbledore", initials: "AD" },
  { name: "Harry Potter", initials: "HP" },
  { name: "Ron", initials: "R" },
  { name: "", initials: "" },
  { name: "Çigkofte With Érnie", initials: "ÇÉ" },
  { name: "Hermione ", initials: "H" },
  { name: "Neville LongBottom ", initials: "NL" }
]

testNames.forEach(({ name, initials }) => {
  test(`properly handles '${name}'`, () => {
    expect(getInitials(name)).toEqual(initials)
  })
})
