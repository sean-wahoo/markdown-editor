import React, { useCallback, useEffect } from "react";
import useCodeMirror from "utils/useCodeMirror";
import styles from "styles/index.module.scss";

interface Props {
  initialDoc: string;
  onChange: (c: string) => void;
  className: any;
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, className } = props;
  const handleChange = useCallback(
    (state) => onChange(state.doc.toString()),
    [onChange]
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: props.initialDoc,
    onChange: handleChange,
  });
  useEffect(() => {
    if (editorView) {
    }
  }, [editorView]);
  return (
    <div className={styles.container}>
      <h1>Editor</h1>
      <div className={className} ref={refContainer}></div>
    </div>
  );
};

export default Editor;
