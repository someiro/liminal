import { Checkbox as LiminalCheckbox, Spacer } from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import labelStyles from "./DemoLabel.module.css";

const Checkbox = () => {
  const [checkedStates, setCheckedStates] = useState([
    false,
    true,
    false,
    true,
  ]);

  return (
    <>
      <h3>Checkbox</h3>
      <Spacer size={10} />
      <p>
        規約への同意など、独立した項目の選択・解除に使います。状態は
        <code>checked</code> で渡し、変更後の boolean 値を <code>onChange</code> {" "}
        で受け取ります。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [accepted, setAccepted] = useState(false);

<Checkbox
  label="利用規約に同意する"
  checked={accepted}
  onChange={setAccepted}
/>`}
      />
      <Spacer size={30} />
      <DemoSection>
        <div style={{ display: "grid", gap: 12 }}>
          {[false, true].flatMap((disabled, disabledIndex) =>
            [false, true].map((checked, checkedIndex) => {
              const index = disabledIndex * 2 + checkedIndex;
              return (
                <LiminalCheckbox
                  key={`${disabled}-${checked}`}
                  label={`${disabled ? "無効" : "有効"} / ${checked ? "チェックあり" : "チェックなし"}`}
                  checked={checkedStates[index]}
                  disabled={disabled}
                  onChange={(nextChecked) =>
                    setCheckedStates((current) =>
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
          <small className={labelStyles.label}><code>checked</code></small> : チェック状態です。
        </li>
        <li>
          <small className={labelStyles.label}><code>onChange</code></small> : 状態変更時に新しいチェック状態を受け取ります。
        </li>
        <li>
          <small className={labelStyles.label}><code>label</code></small> : チェックボックスの説明です。
        </li>
        <li>
          <small className={labelStyles.label}><code>disabled</code></small> : true にすると操作できません。
        </li>
      </ul>
      <Spacer size={30} />
    </>
  );
};

export default Checkbox;
