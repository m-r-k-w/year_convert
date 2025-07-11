# 和暦・西暦変換ツール

シンプルで使いやすい和暦・西暦相互変換ツールです。

## 機能

- **西暦 → 和暦変換**: 4桁の西暦を入力して和暦に変換
- **和暦 → 西暦変換**: 和暦の年数を入力して西暦に変換
- **対応期間**: 明治元年（1868年）以降
- **対応元号**: 明治、大正、昭和、平成、令和

## 使用方法

### 西暦から和暦への変換
1. 「西暦（4桁の数字）」欄に西暦を入力（例: 2024）
2. 「和暦変換」ボタンをクリック
3. 結果が表示されます（例: 2024年は令和6年です。）

### 和暦から西暦への変換
1. 「元号」プルダウンから元号を選択（例: 令和）
2. 「和暦（最大2桁の数字）」欄に和暦の年数を入力（例: 6）
3. 「西暦変換」ボタンをクリック
4. 結果が表示されます（例: 令和6年は2024年です。）

## ファイル構成

```
year_convert/
├── index.html          # メインのHTMLファイル
├── styles.css          # スタイルシート
├── script.js           # JavaScriptロジック
├── package.json        # プロジェクト設定
├── generate-ogp.js     # OGP画像生成スクリプト
├── images/
│   ├── ogp-image.html  # OGP画像用HTML
│   ├── ogp-image.png   # 生成されるOGP画像
│   └── favicon.svg     # ファビコン
└── README.md           # このファイル
```

## 技術仕様

- **フロントエンド**: HTML5, CSS3, JavaScript (ES6+)
- **対応ブラウザ**: モダンブラウザ（Chrome, Firefox, Safari, Edge）
- **レスポンシブデザイン**: モバイル・タブレット対応
- **アクセシビリティ**: キーボード操作対応

## 特徴

- **ミニマルデザイン**: シックで洗練されたUI
- **直感的操作**: 分かりやすい説明文とプレースホルダー
- **エラーハンドリング**: 適切なエラーメッセージ表示
- **アニメーション**: スムーズな結果表示アニメーション
- **入力制限**: 適切な文字数制限とバリデーション

## 元号データ

| 元号 | 開始年 | 開始月日 |
|------|--------|----------|
| 令和 | 2019年 | 5月1日 |
| 平成 | 1989年 | 1月8日 |
| 昭和 | 1926年 | 12月25日 |
| 大正 | 1912年 | 7月30日 |
| 明治 | 1868年 | 1月25日 |

## ローカルでの実行

1. ファイルをダウンロード
2. `index.html`をブラウザで開く
3. 変換ツールが使用可能

## OGP画像の生成

SNSでシェアした時に表示されるOGP画像を生成するには：

```bash
npm install
npm run generate-ogp
```

これで `images/ogp-image.png` が生成されます。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 更新履歴

- v1.0.0: 初回リリース
  - 基本的な和暦・西暦変換機能
  - レスポンシブデザイン
  - エラーハンドリング 