# liminal

React と TypeScript を活用した、宣言的 UI コンポーネントライブラリです。  
少ない記述でシンプルに UI を構築できます。

## 導入

### 1. 必要なパッケージをインストール

```shell
$ npm install react-icons react-easy-crop
```

### 2. コンポーネントをコピー

このリポジトリの [`src/components/liminal/`](./src/components/liminal/) の中身を、
利用するプロジェクトの `src/components/liminal/` にコピーします。

### 3. 共通CSSを読み込む

プロジェクトの `src/main.tsx` に以下を追加します。

```tsx
import "./components/liminal/globals.css";
```

### 4. コンポーネントを使う

`src/App.tsx` などから必要なコンポーネントをインポートします。

```tsx
import { Button, Text } from "./components/liminal";

export default function App() {
  return (
    <main>
      <Text size="xl" weight="bold">
        こんにちは、liminal！
      </Text>
      <p>これはコンポーネントを使った画面です。</p>
      <Button onClick={() => alert("ボタンが押されました")}>
        押す
      </Button>
    </main>
  );
}
```

## ライセンス
MIT LICENSE
