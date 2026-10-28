import {
  Button as LiminalButton,
  Header as LiminalHeader,
  Spacer,
  Text as LiminalText,
} from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Header = () => (
  <>
    <h3>Header</h3>
    <Spacer size={10} />
    <p>
      左・中央・右の3つの領域に要素を配置できるヘッダーです。ロゴ、ナビゲーション、アカウント操作などを並べるときに使います。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<Header
  maxWidth={1200}
  fixed
  left={<Logo />}
  center={<nav>メニュー</nav>}
  right={<Account />}
/>`}
    />
    <Spacer size={30} />
    <DemoSection>
      <LiminalHeader
        maxWidth={900}
        left={<LiminalText weight="bold">liminal</LiminalText>}
        center={<LiminalText>コンポーネント</LiminalText>}
        right={<LiminalButton size="small">ログイン</LiminalButton>}
      />
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>left</code></small> <small className={labelStyles.label}><code>center</code></small> <small className={labelStyles.label}><code>right</code></small> :
        各位置に表示する React 要素です。
      </li>
      <li>
        <small className={labelStyles.label}><code>maxWidth</code></small> : 内側のコンテンツの最大幅です。 (既定値は 1200px)
      </li>
      <li>
        <small className={labelStyles.label}><code>fixed</code></small> :
        true にすると画面上部に固定し、ヘッダー分のスペースを後ろに確保します。
      </li>
    </ul>
    <Spacer size={30} />
  </>
);

export default Header;
