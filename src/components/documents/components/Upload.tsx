import { Spacer, Upload as LiminalUpload } from "../../liminal";
import CodeExample from "./CodeExample";
import { useState } from "react";
import DemoSection from "./DemoSection";
import demoImage from "../../liminal/assets/liminal.png";
import labelStyles from "./DemoLabel.module.css";

const Upload = () => {
  const [thumbnail, setThumbnail] = useState<{
    file: Blob | null;
    preview: string;
  }>({ file: null, preview: "" });
  const [existingThumbnail, setExistingThumbnail] = useState<{
    file: Blob | null;
    preview: string;
  }>({ file: null, preview: demoImage });

  return (
    <>
      <h3>Upload</h3>
      <Spacer size={10} />
      <p>
        jpeg または png 画像をクリック選択、またはドラッグ & ドロップで読み込み、16 : 9 に切り抜いてサムネイルを作成します。<br />
        完成した画像データとプレビュー URL は <code>onChange</code> から受け取ります。
      </p>
      <Spacer size={30} />
      <h4>使い方</h4>
      <Spacer size={10} />
      <CodeExample
        code={`const [thumbnail, setThumbnail] = useState<{
  file: Blob | null;
  preview: string;
}>({ file: null, preview: "" });

<Upload value={thumbnail} onChange={setThumbnail} />`}
      />
      <Spacer size={30} />
      <DemoSection>
        <div style={{ display: "grid", gap: 20 }}>
          <div>
            <small>未選択（画像を追加できます）</small>
            <Spacer size={10} />
            <LiminalUpload value={thumbnail} onChange={setThumbnail} />
          </div>
          <Spacer size={3} />

          <div>
            <small>プレビュー表示済み (画像を差し替えできます)</small>
            <Spacer size={10} />
            <LiminalUpload
              value={existingThumbnail}
              onChange={setExistingThumbnail}
            />
          </div>
        </div>
      </DemoSection>
      <h4>props</h4>
      <Spacer size={10} />
      <ul>
        <li>
          <small className={labelStyles.label}><code>value</code></small> : 現在の画像情報です。
          <small className={labelStyles.label}><code>file</code></small> (
          <code>Blob</code> または <code>null</code>) と {" "}
          <small className={labelStyles.label}><code>preview</code></small>
          (プレビュー URL) を渡します。
        </li>
        <li>
          <small className={labelStyles.label}><code>onChange</code></small> : 切り抜き完了後、画像情報を受け取る関数です。
        </li>
      </ul>
      <Spacer size={10} />
      <p>
        完成画像は 16 : 9 の 1280 x 720 ピクセルで生成され、jpeg 形式で返されます。編集中は拡大率を調整し、完了またはキャンセルを選べます。
      </p>
      <Spacer size={30} />
    </>
  );
};

export default Upload;
