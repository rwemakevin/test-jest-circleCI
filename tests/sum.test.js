import { sum } from "../src/helper";

test("Add 2 to 5 to equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});

test("Add 1 to 7 to equal 8", () => {
  expect(sum(1, 7)).toBe(8);
});
