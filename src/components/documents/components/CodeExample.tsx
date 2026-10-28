import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { codeToHtml } from "shiki";

type Props = {
  code: string;
};

type HighlightResult =
  | { code: string; html: string }
  | { code: string; error: string };

const CodeExample = ({ code }: Props) => {
  const [result, setResult] = useState<HighlightResult | null>(null);

  useEffect(() => {
    let cancelled = false;

    codeToHtml(code, {
      lang: "tsx",
      theme: "github-dark",
    })
      .then((html) => {
        if (!cancelled) {
          setResult({ code, html });
        }
      })
      .catch((cause: unknown) => {
        if (!cancelled) {
          setResult({
            code,
            error: cause instanceof Error ? cause.message : String(cause),
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [code]);

  const currentResult = result?.code === code ? result : null;

  return (
    <>
      {"error" in (currentResult ?? {}) && (
        <p role="alert">
          シンタックスハイライトに失敗しました: {currentResult.error}
        </p>
      )}
      {currentResult && "html" in currentResult ? (
        parse(currentResult.html)
      ) : (
        <pre>
          <code>{code}</code>
        </pre>
      )}
    </>
  );
};

export default CodeExample;
