import { Spacer, TextField as LiminalTextField } from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const TextField = () => {
  const [name, setName] = useState("");

  return (
    <>
      <h3>TextField</h3>
      <Spacer size={10} />
      <p>
        ユーザー名やメールアドレスなど、1 行の文字列を入力するための欄です。
        <code>value</code> と <code>onChange</code> {" "}
        を使い、入力値は親コンポーネントの state で管理します。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [name, setName] = useState("");

<TextField
  label="ユーザー名"
  value={name}
  onChange={(event) => setName(event.target.value)}
  required
/>`}
      />
      <Spacer size={30} />
      <DemoSection>
        <div style={{ display: "grid", gap: 20 }}>
          <div>
            <small className={labelStyles.label}>
              required = false, error = false, disabled = false
            </small>
            <Spacer size={5} />

            <LiminalTextField
              label="ユーザー名"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <small className={labelStyles.label}>required = true</small>
            <Spacer size={5} />

            <LiminalTextField label="メールアドレス" value="" required />
          </div>
          <div>
            <small className={labelStyles.label}>error = true</small>
            <Spacer size={5} />

            <LiminalTextField
              label="ユーザー名"
              value=" "
              error
              helperText="ユーザー名を入力してください"
            />
          </div>
          <div>
            <small className={labelStyles.label}>disabled = true</small>
            <Spacer size={5} />

            <LiminalTextField
              label="変更できません"
              value="入力不可"
              disabled
            />
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
          入力値と変更ハンドラーです。state と組み合わせて入力を制御します。
        </li>
        <li>
          <small className={labelStyles.label}><code>required</code></small> : 必須項目として表示し、入力欄を必須にします。
        </li>
        <li>
          <small className={labelStyles.label}><code>error</code></small>{" "}
          <small className={labelStyles.label}><code>helperText</code></small> :
          エラー状態と、そのときに表示する補足文を指定します。
        </li>
        <li>
          <small className={labelStyles.label}><code>disabled</code></small> : true にすると入力できません。
        </li>
        <li>
          <small className={labelStyles.label}><code>size</code></small> : サイズを指定します。 (現在は <code>medium</code>)        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default TextField;
