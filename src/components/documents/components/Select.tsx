import { Select as LiminalSelect, Spacer } from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Select = () => {
  const [category, setCategory] = useState("music");

  return (
    <>
      <h3>Select</h3>
      <Spacer size={10} />
      <p>
        複数の選択肢から 1 つをドロップダウンで選ぶ入力欄です。選択値は親コンポーネントの state で管理します。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [category, setCategory] = useState("music");

<Select
  label="カテゴリー"
  value={category}
  onChange={setCategory}
  options={[
    { label: "音楽", value: "music" },
    { label: "映像", value: "movie" },
  ]}
/>`}
      />
      <Spacer size={30} />
      <DemoSection>
        <div style={{ display: "grid", gap: 20 }}>
          <LiminalSelect
            label="カテゴリー (選択済み・操作可能)"
            value={category}
            onChange={setCategory}
            options={[
              { label: "音楽", value: "music" },
              { label: "映像", value: "movie" },
              { label: "イラスト", value: "illustration" },
            ]}
          />
          <LiminalSelect
            label="未選択 (プレースホルダー)"
            value=""
            onChange={() => {}}
            options={[
              { label: "音楽", value: "music" },
              { label: "映像", value: "movie" },
            ]}
          />
          <LiminalSelect
            label="無効"
            value="music"
            onChange={() => {}}
            disabled
            options={[
              { label: "音楽", value: "music" },
              { label: "映像", value: "movie" },
            ]}
          />
        </div>
      </DemoSection>
      <h4>props</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <small className={labelStyles.label}>
            <code>options</code>
          </small>{" "}
          : 選択肢の配列です。各項目に表示名の{" "}
          <small className={labelStyles.label}>
            <code>label</code>
          </small>{" "}
          と識別値の{" "}
          <small className={labelStyles.label}>
            <code>value</code>
          </small>{" "}
          を指定します。
        </li>
        <li>
          <small className={labelStyles.label}>
            <code>value</code>
          </small>{" "}
          <small className={labelStyles.label}>
            <code>onChange</code>
          </small>{" "}
          : 現在の値と、選択時に呼び出す関数です。
        </li>
        <li>
          <small className={labelStyles.label}>
            <code>label</code>
          </small>{" "}
          : 入力欄のラベルです。
        </li>
        <li>
          <small className={labelStyles.label}>
            <code>disabled</code>
          </small>{" "}
          : true にすると選択できません。
        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default Select;
