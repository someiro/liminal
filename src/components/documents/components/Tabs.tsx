import { Spacer, Tabs as LiminalTabs } from "../../liminal";
import CodeExample from "./CodeExample";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Tabs = () => (
  <>
    <h3>Tabs</h3>
    <Spacer size={10} />
    <p>
      関連する複数の内容をタブで切り替えて表示します。最初に表示するタブを{" "}
      <code>default</code> で指定し、各タブのラベルと内容を <code>tabs</code>{" "}
      に渡します。
    </p>
    <Spacer size={30} />
    <h4>使い方</h4>
    <Spacer size={10} />
    <CodeExample
      code={`<Tabs
  default="home"
  tabs={[
    { value: "home", label: "ホーム", component: <p>ホームの内容</p> },
    { value: "about", label: "概要", component: <p>概要の内容</p> },
  ]}
/>`}
    />
    <Spacer size={30} />
    <DemoSection>
      <LiminalTabs
        default="home"
        tabs={[
          {
            value: "home",
            label: "ホーム",
            component: <p>ホームの内容</p>,
          },
          { value: "about", label: "概要", component: <p>概要の内容</p> },
          {
            value: "help",
            label: "ヘルプ",
            component: <p>ヘルプの内容</p>,
          },
        ]}
      />
    </DemoSection>
    <h4>props</h4>
    <Spacer size={10} />
    <ul>
      <li>
        <small className={labelStyles.label}>
          <code>default</code>
        </small>{" "}
        : 初期表示するタブの{" "}
        <small className={labelStyles.label}>
          <code>value</code>
        </small>{" "}
        です。
      </li>
      <li>
        <small className={labelStyles.label}>
          <code>tabs</code>
        </small>{" "}
        : タブ情報の配列です。各項目に一意な
        <small className={labelStyles.label}>
          <code>value</code>
        </small>
        、タブ見出しの
        <small className={labelStyles.label}>
          <code>label</code>
        </small>
        、表示内容の
        <small className={labelStyles.label}>
          <code>component</code>
        </small>
        を指定します。
      </li>
    </ul>
    <Spacer size={10} />
    <p>
      選択状態は Tabs
      内部で管理され、ユーザーがタブを選ぶと内容が切り替わります。
    </p>
    <Spacer size={30} />
  </>
);

export default Tabs;
