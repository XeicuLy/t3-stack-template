import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Test from './page';

describe('src/app/test/page.tsx', () => {
  describe('画面の初期表示確認', () => {
    test('クリック数の初期表示が「0」であること', () => {
      const { getByText } = render(<Test />);
      expect(getByText('You clicked 0 times')).toBeDefined();
    });
  });
  test('ボタンをクリックした時、クリック数が画面に表示されていること', () => {
    const { getByText } = render(<Test />);
    fireEvent.click(getByText('Click'));
    expect(getByText('You clicked 1 times')).toBeDefined();
  });
});
