import { Spacer as LiminalSpacer, Text as LiminalText } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Spacer = () => (
  <>
    <h3>Spacer</h3>
    <LiminalSpacer size={10} />
    <p>
      要素と要素の間に、指定した高さの空白を追加します。マージンを個別に設定せず、縦方向の間隔を調整したいときに使います。
    </p>
    <LiminalSpacer size={30} />
    <h4>使い方</h4>
    <LiminalSpacer size={10} />
    <CodeExample
      code={`<h2>見出し</h2>
<Spacer size={24} />
<p>本文</p>`}
    />
    <LiminalSpacer size={30} />
    <DemoSection>
      {[10, 24, 50].map((size) => (
        <div key={size} style={{ marginBottom: 16 }}>
          <small className={labelStyles.label}>size = {size}px</small>
          <LiminalSpacer size={size} />
          <LiminalText>下のテキスト</LiminalText>
        </div>
      ))}
    </DemoSection>
    <h4>props</h4>
    <LiminalSpacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>size</code></small> : 空白の高さをピクセル単位で指定します。 (既定値は 24)
      </li>
    </ul>
    <LiminalSpacer size={30} />
  </>
);

export default Spacer;
