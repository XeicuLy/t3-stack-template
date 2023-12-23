import { sum } from '@/lib/test';
import { expect, test } from 'vitest';

test('1 + 2 は 3 になること', () => {
  expect(sum(1, 2)).toBe(3);
});
