import { Spacer } from "../liminal";
import { Link } from "react-router-dom";

const componentSections = [
  { title: "アクション", components: ["Button"] },
  { title: "テキスト", components: ["Text"] },
  {
    title: "フォーム",
    components: [
      "TextField",
      "TextArea",
      "Checkbox",
      "Radio",
      "Switch",
      "Select",
      "Upload",
    ],
  },
  { title: "データ表示", components: ["Badge", "Card"] },
  {
    title: "レイアウト",
    components: ["Container", "CardContainer", "Spacer"],
  },
  { title: "ナビゲーション", components: ["Header", "Menu", "Tabs"] },
  { title: "フィードバック・オーバーレイ", components: ["Modal", "Loading"] },
];

const Components = () => {
  return (
    <>
      <h3>要素</h3>
      <Spacer size={20} />
      <h4>コンポーネント一覧</h4>
      <Spacer size={10} />

      {componentSections.map((section) => (
        <section key={section.title}>
          <Spacer size={10} />
          <h4>{section.title}</h4>
          <Spacer size={10} />
          <ul>
            {section.components.map((component) => (
              <li key={component}>
                <Link to={`/components/${component}`}>{component}</Link>
              </li>
            ))}
          </ul>
          <Spacer size={30} />
        </section>
      ))}
    </>
  );
};

export default Components;
