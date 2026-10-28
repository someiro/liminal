import {
  Button as LiminalButton,
  Modal as LiminalModal,
  Spacer,
} from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h3>Modal</h3>
      <Spacer size={10} />
      <p>
        確認や入力など、現在の画面の上に重ねて見せたい内容を表示します。{" "}
        <code>open</code>{" "}
        が true の間だけ表示され、閉じる操作や表示状態の管理は利用側で行います。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>開く</Button>

<Modal open={open}>
  <h2>確認</h2>
  <Button onClick={() => setOpen(false)}>閉じる</Button>
</Modal>`}
      />
      <Spacer size={30} />
      <DemoSection>
        <LiminalButton onClick={() => setOpen(true)}>
          モーダルを開く
        </LiminalButton>
        <LiminalModal open={open}>
          <h2>確認</h2>
          <Spacer size={10} />
          <p>liminal の Modal コンポーネントです。</p>
          <Spacer size={20} />
          <LiminalButton onClick={() => setOpen(false)}>閉じる</LiminalButton>
        </LiminalModal>
      </DemoSection>
      <h4>props</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <small className={labelStyles.label}><code>open</code></small> :
          true のとき表示します。false または省略時は表示されません。
        </li>
        <li>
          <small className={labelStyles.label}><code>children</code></small> : モーダル内に表示する内容です。
        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default Modal;
