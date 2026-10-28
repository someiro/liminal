import { Badge as LiminalBadge, Spacer } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import styles from "./Badge.module.css";
import labelStyles from "./DemoLabel.module.css";

const badgeIntentions = [
  "primary",
  "secondary",
  "shade",
  "negative",
  "notice",
] as const;

const Badge = () => (
  <>
    <h3>Badge</h3>
    <Spacer size={10} />
    <p>
      配信状態やステータスなど、短いラベルを小さく表示します。状態に応じて {" "}
      <code>intention</code> を選びます。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample code={'<Badge label="ライブ配信中" intention="primary" />'} />
    <Spacer size={30} />
    <DemoSection>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">intention</th>
              <th scope="col">Badge</th>
            </tr>
          </thead>
          <tbody>
            {badgeIntentions.map((intention) => (
              <tr key={intention}>
                <td>{intention}</td>
                <td>
                  <LiminalBadge label="ライブ配信中" intention={intention} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>label</code></small> : 表示する文字列です。 (既定値は <code>label</code>)
      </li>
      <li>
        <small className={labelStyles.label}><code>intention</code></small> : <code>primary</code>, <code>secondary</code>, {" "}
        <code>shade</code>, <code>negative</code>, <code>notice</code> {" "}
        から色の種類を選びます。既定値は <code>primary</code> です。
      </li>
    </ul>
    <Spacer size={30} />
  </>
);

export default Badge;
