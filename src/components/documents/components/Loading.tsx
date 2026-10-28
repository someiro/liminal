import { Loading as LiminalLoading, Spacer } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Loading = () => (
  <>
    <h3>Loading</h3>
    <Spacer size={10} />
    <p>
      データの取得や処理が終わるまで、読み込み中であることを示すスピナーを表示します。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample code="<Loading size={42} />" />
    <Spacer size={30} />
    <DemoSection>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {[24, 42, 64].map((size) => (
          <div
            key={size}
            style={{ display: "grid", justifyItems: "center", gap: 8 }}
          >
            <LiminalLoading size={size} />
            <small>{size}px</small>
          </div>
        ))}
      </div>
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>size</code></small> :
        スピナーの幅と高さをピクセル単位で指定します。 (既定値は 42)
      </li>
    </ul>
    <Spacer size={30} />
  </>
);

export default Loading;
