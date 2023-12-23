import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Test from './page';

// 'src/app/test/page.tsx'に対するテストを記述
describe('src/app/test/page.tsx', () => {
  // 画面の初期表示に関するテストを記述
  describe('画面の初期表示確認', () => {
    // クリック数の初期表示が「0」であることをテスト
    test('クリック数の初期表示が「0」であること', () => {
      // TestコンポーネントをレンダリングしてgetByTextを取得
      const { getByText } = render(<Test />);
      // 'You clicked 0 times'が定義されていることを期待
      expect(getByText('You clicked 0 times')).toBeDefined();
    });
  });
  // ボタンをクリックした時、クリック数が画面に表示されていることをテスト
  test('ボタンをクリックした時、クリック数が画面に表示されていること', () => {
    // TestコンポーネントをレンダリングしてgetByTextを取得
    const { getByText } = render(<Test />);
    // 'Click'をクリックするイベントを発火
    fireEvent.click(getByText('Click'));
    // 'You clicked 1 times'が定義されていることを期待
    expect(getByText('You clicked 1 times')).toBeDefined();
  });
});
