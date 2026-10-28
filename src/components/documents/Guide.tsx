import { Spacer } from "../liminal";
import parse from "html-react-parser";
import { codeToHtml } from "shiki";

const reactIconsCommand = "$ npm install react-icons --save";
const reactIcons = await codeToHtml(reactIconsCommand, {
  lang: "shellscript",
  theme: "github-dark",
});

const importGlobalCssText = 'import "@/components/liminal/globals.css";';
const importGlobaCss = await codeToHtml(importGlobalCssText, {
  lang: "tsx",
  theme: "github-dark",
});

const importComponentText = `\
import { Button, Text } from "@/components/liminal";

export default function Page() {
  return (
    <Button>
      <Text size="xl" weight="bold">Hello, liminal</Text>
    </Button>
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
        0. liminal では react-icons
        を使用しています。事前にインストールしてください。
      </p>
      <Spacer size={20} />
      {parse(reactIcons)}
      <Spacer size={30} />

      <p>
        1. <code className="code">liminal/</code> をプロジェクトの{" "}
        <code className="code">components/</code> に複製します。
      </p>
      <Spacer size={20} />

      <p>
        2. プロジェクトのエントリーポイントで{" "}
        <code className="code">grobal.css</code> をインポートします。
      </p>
      <Spacer size={20} />

      {parse(importGlobaCss)}
      <Spacer size={20} />

      <p>
        3. 必要なコンポーネントをインポートして使用します。
      </p>
      <Spacer size={20} />
      {parse(importComponent)}

    </>
  );
};

export default Foundation;
