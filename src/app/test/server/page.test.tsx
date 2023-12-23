// Testコンポーネントをレンダリングするための関数をimport
import { render } from '@testing-library/react';
// テストフレームワークvitestから必要な関数やオブジェクトをimport
import { afterEach, describe, expect, test, vi } from 'vitest';
// テスト対象のコンポーネントTestをimport
import ServerTest from './page';

// 404エラー時のモック関数を作成
const notFoundMock = vi.hoisted(() => vi.fn());
// テストデータを定義
const responseData = [
  {
    id: 1,
    title: 'test title 1',
    body: 'test body 1',
  },
  {
    id: 2,
    title: 'test title 2',
    body: 'test body 2',
  },
];

// テストスイートの開始
describe('src/app/test/server/page.tsx', () => {
  // レスポンスオブジェクトを空のResponseとして定義
  const response = new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  // next/navigationモジュールのnotFound関数をモック化
  vi.mock('next/navigation', () => ({
    notFound: notFoundMock,
  }));
  // 各テストケースの実行後に実行される処理を定義
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // 投稿の一覧が画面に表示されることをテスト
  test('投稿の一覧が画面に表示されること', async () => {
    // モックされたfetch関数がresponseを返すように設定
    response.json = vi.fn().mockResolvedValue(responseData);
    // globalのfetch関数をスパイしてresponseを返すように設定
    vi.spyOn(global, 'fetch').mockResolvedValue(response);
    // Testコンポーネントをレンダリングし、画面に表示される要素を取得
    const { getByText } = render(await ServerTest());

    // 画面に特定のテキストが表示されることを検証
    expect(getByText('test title 1')).toBeDefined();
    expect(getByText('test body 1')).toBeDefined();
    expect(getByText('test title 2')).toBeDefined();
    expect(getByText('test body 2')).toBeDefined();
    // notFoundMockが呼び出されていないことを検証
    expect(notFoundMock).not.toBeCalled();
  });

  // 投稿が取得できなかった場合、notFound関数がコールされることをテスト
  test('投稿が取得できなかった場合、notFound関数がコールされること', async () => {
    // モックされたfetch関数が空の配列を返すように設定
    response.json = vi.fn().mockResolvedValue([]);
    // globalのfetch関数をスパイしてresponseを返すように設定
    vi.spyOn(global, 'fetch').mockResolvedValue(response);
    // Testコンポーネントをレンダリング
    render(await ServerTest());

    // notFoundMockが1回呼び出されたことを検証
    expect(notFoundMock).toHaveBeenCalledOnce();
  });
});
