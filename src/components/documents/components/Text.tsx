import { Spacer, Text as LiminalText } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const textSizes = ["xs", "s", "r", "xr", "l", "xl"] as const;
const textWeights = ["normal", "bold"] as const;

const Text = () => (
  <>
    <h3>Text</h3>
    <Spacer size={10} />
    <p>
      文字サイズと太さを揃えてテキストを表示します。見出しや本文など、画面内の文字の強弱を整えるときに使います。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<Text size="xl" weight="bold">
  お知らせ
</Text>`}
    />
    <Spacer size={30} />
    <DemoSection>
      <div style={{ display: "grid", gap: 12 }}>
        {textSizes.flatMap((size) =>
          textWeights.map((weight) => (
            <div key={`${size}-${weight}`}>
              <LiminalText size={size} weight={weight}>
                {size} / {weight} - お知らせ
              </LiminalText>
            </div>
          )),
        )}
      </div>
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>size</code></small> : <code>xs</code>, <code>s</code>, <code>r</code>, {" "}
        <code>xr</code>, <code>l</code>, <code>xl</code> {" "}
        から文字サイズを選びます。既定値は <code>r</code> です。
      </li>
      <li>
        <small className={labelStyles.label}><code>weight</code></small> : <code>normal</code> または <code>bold</code> {" "}
        を指定します。既定値は <code>normal</code> です。
      </li>
      <li>
        <small className={labelStyles.label}><code>children</code></small> : 表示するテキストや要素です。
      </li>
    </ul>
    <Spacer size={30} />
  </>
);

export default Text;
