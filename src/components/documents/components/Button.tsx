import { Button as LiminalButton, Spacer } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import styles from "./Button.module.css";
import labelStyles from "./DemoLabel.module.css";

const buttonVariants = ["outlined", "filled", "text"] as const;
const buttonIntentions = ["primary", "secondary", "shade", "negative"] as const;
const buttonSizes = ["small", "large"] as const;

const Button = () => (
  <>
    <h3>Button</h3>
    <Spacer size={10} />
    <p>
      クリックやフォーム送信など、ユーザーの操作を受け付けるボタンです。表示する文言や要素は子要素に指定します。
    </p>
    <Spacer size={30} />

    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<Button
  variant="filled"
  size="large"
  intention="primary"
  onClick={() => console.log("click")}
>
  保存
</Button>`}
    />
    <Spacer size={40} />

    <DemoSection>
      <Spacer size={10} />
      <h5>スタイル</h5>
      <Spacer size={15} />
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">variant</th>
              <th scope="col">intention</th>
              {buttonSizes.map((size) => (
                <th key={size} scope="col">
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonVariants.flatMap((variant) =>
              buttonIntentions.map((intention) => (
                <tr key={`${variant}-${intention}`}>
                  <td>{variant}</td>
                  <td>{intention}</td>
                  {buttonSizes.map((size) => (
                    <td key={size}>
                      <LiminalButton
                        variant={variant}
                        intention={intention}
                        size={size}
                      >
                        Button
                      </LiminalButton>
                    </td>
                  ))}
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      <Spacer size={40} />
      <h5>無効状態</h5>
      <Spacer size={10} />
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">intention</th>
              {buttonSizes.map((size) => (
                <th key={size} scope="col">
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonIntentions.map((intention) => (
              <tr key={intention}>
                <td>{intention}</td>
                {buttonSizes.map((size) => (
                  <td key={size}>
                    <LiminalButton intention={intention} size={size} disabled>
                      Button
                    </LiminalButton>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Spacer size={40} />
      <h5>Type</h5>
      <Spacer size={10} />
      <form onSubmit={(event) => event.preventDefault()}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">type</th>
                <th scope="col">button</th>
              </tr>
            </thead>
            <tbody>
              {(["button", "submit", "reset"] as const).map((type) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td>
                    <LiminalButton
                      type={type}
                      variant={type === "submit" ? "filled" : "outlined"}
                      intention={type === "submit" ? "primary" : "shade"}
                    >
                      {type}
                    </LiminalButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </DemoSection>
    <Spacer size={14} />

    <h4>主なprops</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}>
          <code>variant</code>
        </small>{" "}
        : <code>outlined</code>, <code>filled</code>, <code>text</code> {" "}
        から見た目を選びます。
      </li>
      <li>
        <small className={labelStyles.label}>
          <code>intention</code>
        </small>{" "}
        : <code>primary</code>, <code>secondary</code>, <code>shade</code>, {" "}
        <code>negative</code> で用途に応じた色を選びます。
      </li>
      <li>
        <small className={labelStyles.label}>
          <code>size</code>
        </small>{" "}
        : <code>small</code> または <code>large</code> {" "}
        を指定します。
      </li>
      <li>
        <small className={labelStyles.label}>
          <code>disabled</code>
        </small>{" "}
        : true にすると操作できません。
      </li>
      <li>
        <small className={labelStyles.label}>
          <code>type</code>
        </small>{" "}
        : <code>button</code>, <code>submit</code>, <code>reset</code> {" "}
        を指定します。
      </li>
      <li>
        <small className={labelStyles.label}>
          <code>onClick</code>
        </small>{" "}
        : クリック時に呼び出す関数です。
      </li>
    </ul>
  </>
);

export default Button;
