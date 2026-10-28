import { Radio as LiminalRadio, Spacer } from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Radio = () => {
  const [size, setSize] = useState("s");

  return (
    <>
      <h3>Radio</h3>
      <Spacer size={10} />
      <p>
        複数の選択肢から 1 つを選ぶ入力欄です。選択肢を <code>contents</code> {" "}
        で渡し、現在値を <code>value</code> で管理します。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [size, setSize] = useState("s");

<Radio
  label="サイズ"
  value={size}
  onChange={setSize}
  contents={[
    { label: "小", value: "s" },
    { label: "大", value: "l" },
  ]}
/>`}
      />
      <Spacer size={30} />
      <DemoSection>
        <LiminalRadio
          label="サイズ"
          value={size}
          onChange={setSize}
          contents={[
            { label: "小", value: "s" },
            { label: "大", value: "l" },
          ]}
        />
        <Spacer size={20} />
        <LiminalRadio
          label="無効状態"
          value="s"
          disabled
          contents={[
            { label: "小", value: "s" },
            { label: "中", value: "m" },
            { label: "大", value: "l" },
          ]}
        />
        <Spacer size={20} />
        <LiminalRadio
          label="checked による初期選択 (value 未指定)"
          contents={[
            { label: "選択肢A", value: "a" },
            { label: "選択肢B", value: "b", checked: true },
            { label: "選択肢C", value: "c" },
          ]}
        />
      </DemoSection>
      <h4>props</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <small className={labelStyles.label}>
            <code>contents</code>
          </small>{" "}
          : 選択肢の配列です。各項目に{" "}
          <small className={labelStyles.label}>
            <code>label</code>
          </small>{" "}
          と
          <small className={labelStyles.label}>
            <code>value</code>
          </small>{" "}
          を指定します。
        </li>
        <li>
          <small className={labelStyles.label}>
            <code>value</code>
          </small> {" "}
          <small className={labelStyles.label}>
            <code>onChange</code> 
          </small>{" "}
          : 選択中の値と、選択時に呼び出す関数です。
        </li>
        <li>
          <small className={labelStyles.label}>
            <code>label</code>
          </small>{" "}
          : グループ全体の説明です。
        </li>
        <li>
          <small className={labelStyles.label}>
            <code>disabled</code>
          </small>{" "}
          : true にするとすべての選択肢を操作できません。
        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default Radio;
