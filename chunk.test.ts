import { expect, test } from "bun:test";
import { chunk } from "./paginate";

test("chunk splits into arrays of at most size", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test("chunk of empty array is empty", () => {
  expect(chunk([], 3)).toEqual([]);
});

test("chunk with size larger than items returns one chunk", () => {
  expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
});

test("chunk rejects invalid size", () => {
  expect(() => chunk([1], 0)).toThrow(RangeError);
  expect(() => chunk([1], 1.5)).toThrow(RangeError);
});
