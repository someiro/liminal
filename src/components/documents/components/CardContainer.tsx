import {
  Card as LiminalCard,
  CardContainer as LiminalCardContainer,
  Spacer,
} from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import demoImage from "../../liminal/assets/card-demo.jpg";
import labelStyles from "./DemoLabel.module.css";

const CardContainer = () => (
  <>
    <h3>CardContainer</h3>
    <Spacer size={10} />
    <p>
      カードをグリッド状に並べるためのコンテナです。画面幅が 700px 以下になると 1 列に切り替わります。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<CardContainer maxWidth={1200} padding>
  <Card title="お知らせ" />
  <Card title="新着情報" />
</CardContainer>`}
    />
    <Spacer size={30} />
    <DemoSection>
      <div style={{ display: "grid", gap: 20 }}>
        {[false, true].flatMap((fullWidth) =>
          [false, true].map((padding) => (
            <div
              key={`${fullWidth}-${padding}`}
              style={{ border: "2px dashed #d4d4d478", padding: 8 }}
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

              <Spacer size={15} />
              <LiminalCardContainer
                maxWidth={800}
                fullWidth={fullWidth}
                padding={padding}
              >
                <LiminalCard
                  image={demoImage}
                  title="お知らせ"
                  detail="新着のお知らせです。"
                />
                <LiminalCard
                  image={demoImage}
                  title="新着情報"
                  detail="新しい情報を紹介します。"
                />
              </LiminalCardContainer>
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
        <small className={labelStyles.label}><code>fullWidth</code></small> : true にすると幅を 100% にします。
      </li>
      <li>
        <small className={labelStyles.label}><code>padding</code></small> : true にすると内側に左右の余白を付けます。
      </li>
      <li>
        <small className={labelStyles.label}><code>children</code></small> : グリッド内に並べる要素です。
      </li>
    </ul>
    <Spacer size={30} />
  </>
);

export default CardContainer;
