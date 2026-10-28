import { Spacer } from "../liminal";
import parse from "html-react-parser";
import { codeToHtml } from "shiki";

const reactIconsCommand = "$ npm install -S react-icons react-easy-crop";
const reactIcons = await codeToHtml(reactIconsCommand, {
  lang: "shellscript",
  theme: "github-dark",
});

const importGlobalCssText = 'import "./components/liminal/globals.css";';
const importGlobaCss = await codeToHtml(importGlobalCssText, {
  lang: "tsx",
  theme: "github-dark",
});

const importComponentText = `\
import { Button, Text } from "./components/liminal";

export default function App() {
  return (
    <main>
      <Text size="xl" weight="bold">
        こんにちは、liminal！
      </Text>
      <p>これはコンポーネントを使った画面です。</p>
      <Button onClick={() => alert("ボタンが押されました")}>
        押してみる
      </Button>
    </main>
  );
}
`;
const importComponent = await codeToHtml(importComponentText, {
  lang: "tsx",
  theme: "github-dark",
});

const Foundation = () => {
  return (
    <>
      <h3>導入</h3>
      <Spacer size={8} />
      <p>
        1. liminal では <code className="code">react-icons</code> <code className="code">react-easy-crop</code> を使用しています。事前にインストールしてください。
      </p>
      <Spacer size={20} />
      {parse(reactIcons)}
      <Spacer size={30} />

      <p>
        2. このリポジトリの<code className="code">src/components/liminal/</code>の中身を、自分のプロジェクトの{" "}
        <code className="code">src/components/liminal/</code> にコピーします。
      </p>
      <Spacer size={20} />

      <p>
        3. <code className="code">src/main.tsx</code>で{" "}
        <code className="code">globals.css</code> をインポートします。
      </p>
      <Spacer size={20} />

      {parse(importGlobaCss)}
      <Spacer size={20} />

      <p>
        4. <code className="code">src/App.tsx</code>で必要なコンポーネントをインポートして使用します。次の例は、文字を表示し、ボタンを押すとメッセージを表示する画面です。
      </p>
      <Spacer size={20} />
      {parse(importComponent)}

    </>
  );
};

export default Foundation;
