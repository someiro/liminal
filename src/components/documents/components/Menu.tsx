import {
  Button as LiminalButton,
  Menu as LiminalMenu,
  Spacer,
} from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Menu = () => (
  <>
    <h3>Menu</h3>
    <Spacer size={10} />
    <p>
      画面右下のボタンで開閉する展開式メニューです。ナビゲーションなど、表示・非表示を切り替えたい項目を子要素に渡します。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<Menu>
  <Button>Home</Button>
  <Button>Search</Button>
</Menu>`}
    />
    <Spacer size={30} />
    <DemoSection>
      <LiminalMenu>
        <LiminalButton>Home</LiminalButton>
        <LiminalButton>Search</LiminalButton>
      </LiminalMenu>
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}><code>children</code></small> : メニュー内に表示する要素です。
      </li>
    </ul>
    <Spacer size={10} />
    <p>開閉状態はコンポーネント内部で管理されます。</p>
    <Spacer size={30} />
  </>
);

export default Menu;
