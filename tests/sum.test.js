import { sum } from "../src/helper";

test("Add 2 to 5 to equal 7", () => {
  expect(sum(2, 5)).toBe(7);
});

test("Add 1 to 5 to equal 6", () => {
  expect(sum(1, 5)).toBe(6);
});
