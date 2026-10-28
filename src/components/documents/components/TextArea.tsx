import { Spacer, TextArea as LiminalTextArea } from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const TextArea = () => {
  const [comment, setComment] = useState("");

  return (
    <>
      <h3>TextArea</h3>
      <Spacer size={10} />
      <p>
        コメントや説明文など、複数行の文字列を入力するための欄です。入力値は親コンポーネントの state で管理します。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [comment, setComment] = useState("");

<TextArea
  label="コメント"
  rows={5}
  value={comment}
  onChange={(event) => setComment(event.target.value)}
/>`}
      />
      <Spacer size={30} />
      <DemoSection>
        <div style={{ display: "grid", gap: 20 }}>
          <div>
            <small className={labelStyles.label}>
              required = false, error = false, disabled = false, rows = 4
            </small>
            <Spacer size={5} />

            <LiminalTextArea
              label="コメント"
              rows={4}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
          </div>
          <div>
            <small className={labelStyles.label}>required = true</small>
            <Spacer size={5} />

            <LiminalTextArea label="説明" rows={3} value="" required />
          </div>
          <div>
            <small className={labelStyles.label}>error = true</small>
            <Spacer size={5} />

            <LiminalTextArea
              label="コメント"
              rows={3}
              value=""
              error
              helperText="内容を入力してください"
            />
          </div>
          <div>
            <small className={labelStyles.label}>disabled = true</small>
            <Spacer size={5} />

            <LiminalTextArea
              label="変更できません"
              rows={3}
              value="入力不可"
              disabled
            />
          </div>
          <div>
            <small className={labelStyles.label}>rows = 1 / rows = 5</small>
            <Spacer size={5} />

            <LiminalTextArea label="1 行" rows={1} value="" />
            <Spacer size={10} />

            <LiminalTextArea label="5 行" rows={5} value="" />
          </div>
        </div>
      </DemoSection>
      <h4>主なprops</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <small className={labelStyles.label}><code>label</code></small> : 入力欄のラベルです。
        </li>
        <li>
          <small className={labelStyles.label}><code>value</code></small>{" "}
          <small className={labelStyles.label}><code>onChange</code></small> :
          入力値と変更ハンドラーです。
        </li>
        <li>
          <small className={labelStyles.label}><code>rows</code></small> : 表示する行数です。省略時は 1 行です。
        </li>
        <li>
          <small className={labelStyles.label}><code>required</code></small>{" "}
          <small className={labelStyles.label}><code>disabled</code></small> :
          必須指定と入力の無効化に使います。
        </li>
        <li>
          <small className={labelStyles.label}><code>error</code></small>{" "}
          <small className={labelStyles.label}><code>helperText</code></small> :
          エラー状態とエラー時の補足文を指定します。
        </li>
        <li>
          <small className={labelStyles.label}><code>size</code></small> : サイズを指定します。 (現在は <code>medium</code>)
        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default TextArea;
