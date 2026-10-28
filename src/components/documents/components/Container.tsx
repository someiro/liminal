import { Container as LiminalContainer, Spacer, Text } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Container = () => (
  <>
    <h3>Container</h3>
    <Spacer size={10} />
    <p>
      ページの内容を中央にまとめ、最大幅を制限するレイアウト用コンテナです。ページ全体や本文の幅を読みやすく整えたいときに使います。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<Container maxWidth={800} padding>
  <p>コンテンツ</p>
</Container>`}
    />
    <Spacer size={30} />
    <DemoSection>
      <div style={{ display: "grid", gap: 20 }}>
        {[false, true].flatMap((fullWidth) =>
          [false, true].map((padding) => (
            <div
              key={`${fullWidth}-${padding}`}
              style={{ border: "2px dashed #c9c9c984", padding: 8 }}
            >
              <small
                style={{
                  color: "#888",
                  backgroundColor: "#f2f2f2",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                fullWidth = {String(fullWidth)}, padding = {String(padding)}
              </small>
              <Spacer size={5} />

              <LiminalContainer
                maxWidth={400}
                fullWidth={fullWidth}
                padding={padding}
              >
                <Text weight="bold">コンテンツ</Text>
              </LiminalContainer>
            </div>
          )),
        )}
      </div>
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>maxWidth</code></small> :
        最大幅をピクセル単位で指定します。 (既定値は 1000)
      </li>
      <li>
        <small className={labelStyles.label}><code>fullWidth</code></small> :
        true にすると最大幅の制限を外し、幅を 100% にします。
      </li>
      <li>
        <small className={labelStyles.label}><code>padding</code></small> : true にすると内側に余白を付けます。
      </li>
      <li>
        <small className={labelStyles.label}><code>children</code></small> : コンテナ内に配置する要素です。
      </li>
    </ul>
    <Spacer size={30} />
  </>
);

export default Container;
