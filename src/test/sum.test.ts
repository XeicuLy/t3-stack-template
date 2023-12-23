import { sum } from '@/lib/test';
import { expect, test } from 'vitest';

// 1 + 2 は 3 になることをテスト
test('1 + 2 は 3 になること', () => {
  // sum(1, 2)が3であることを期待
  expect(sum(1, 2)).toBe(3);
});
