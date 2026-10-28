import { Spacer, Switch as LiminalSwitch } from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Switch = () => {
  const [states, setStates] = useState([false, true, false, true]);

  return (
    <>
      <h3>Switch</h3>
      <Spacer size={10} />
      <p>
        通知設定など、機能の有効・無効を切り替えるスイッチです。現在の状態は親コンポーネントから渡します。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [enabled, setEnabled] = useState(false);

<Switch
  label="メール通知を受け取る"
  checked={enabled}
  onChange={setEnabled}
/>`}
      />
      <Spacer size={30} />
      <DemoSection>
        <div style={{ display: "grid", gap: 16 }}>
          {[false, true].flatMap((disabled, disabledIndex) =>
            [false, true].map((checked, checkedIndex) => {
              const index = disabledIndex * 2 + checkedIndex;
              return (
                <LiminalSwitch
                  key={`${disabled}-${checked}`}
                  label={`${disabled ? "無効" : "有効"} / ${checked ? "ON" : "OFF"}`}
                  checked={states[index]}
                  disabled={disabled}
                  onChange={(nextChecked) =>
                    setStates((current) =>
                      current.map((value, stateIndex) =>
                        stateIndex === index ? nextChecked : value,
                      ),
                    )
                  }
                />
              );
            }),
          )}
        </div>
      </DemoSection>
      <h4>props</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <small className={labelStyles.label}><code>checked</code></small> : オン・オフの状態です。 (既定値は false)
        </li>
        <li>
          <small className={labelStyles.label}><code>onChange</code></small> : 切り替え後の状態を boolean で受け取ります。
        </li>
        <li>
          <small className={labelStyles.label}><code>label</code></small> : スイッチの説明です。
        </li>
        <li>
          <small className={labelStyles.label}><code>disabled</code></small> : true にすると操作できません。
        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default Switch;
