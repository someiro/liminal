import { Card as LiminalCard, Spacer } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import demoImage from "../../liminal/assets/card-demo.jpg";
import labelStyles from "./DemoLabel.module.css";

const Card = () => (
  <>
    <h3>Card</h3>
    <Spacer size={10} />
    <p>
      サムネイル画像、タイトル、詳細、日付などのメタ情報をひとまとまりに表示します。記事や作品などの概要を並べるときに使います。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<Card
  image="/images/photo.jpg"
  title="カードタイトル"
  detail="ここに詳細情報"
  meta="2026-10-28"
/>`}
    />
    <Spacer size={30} />
    <DemoSection>
      <div style={{ display: "grid", gap: 20 }}>
        <div>
          <small className={labelStyles.label}>props = すべて省略 (既定値)</small>
          <Spacer size={10} />

          <LiminalCard />
        </div>
        <div>
          <small className={labelStyles.label}>image, title, detail, meta を指定</small>
          <Spacer size={10} />

          <LiminalCard
            image={demoImage}
            title="カードタイトル"
            detail="ここに詳細情報が表示されます。"
            meta="2026-10-28"
          />
        </div>
      </div>
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>image</code></small> : サムネイル画像のURLです。
      </li>
      <li>
        <small className={labelStyles.label}><code>title</code></small> : カードのタイトルです。
      </li>
      <li>
        <small className={labelStyles.label}><code>detail</code></small> : カードの説明文です。
      </li>
      <li>
        <small className={labelStyles.label}><code>meta</code></small> : 日付などの補足情報です。
      </li>
    </ul>
    <Spacer size={10} />
    <p>props を省略すると、サンプル用の既定値が表示されます。</p>
    <Spacer size={30} />
  </>
);

export default Card;
