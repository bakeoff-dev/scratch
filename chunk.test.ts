import { expect, test } from "bun:test";
import { chunk } from "./paginate";

test("splits items into chunks of at most size", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test("empty input gives no chunks", () => {
  expect(chunk([], 3)).toEqual([]);
});

test("size larger than input gives one chunk", () => {
  expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
});

test("rejects invalid size", () => {
  expect(() => chunk([1], 0)).toThrow(RangeError);
  expect(() => chunk([1], 1.5)).toThrow(RangeError);
});
