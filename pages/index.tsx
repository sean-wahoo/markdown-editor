import type { NextPage } from "next";
import styles from "styles/index.module.scss";
import React, { useState } from "react";
import Editor from "components/Editor";
import Preview from "components/Preview";
import Head from "next/head";
const Index: NextPage = () => {
  const [code, setCode] = useState<string>(`
  # :computer: + :coffee: = :grin:
  # Here is a web-based markdown editor I made.
    
    ---
    
  ## It uses Remark and Next.js I got a lot of help following [*this*](https://www.youtube.com/watch?v=gxBis8EgoAg) tutorial.
  
  ## Feel free to look at more of my stuff at [*my website.*](https://seanreichel.com)
  
  # TODO:
  ### - Add Syntax Highlighting
  ### - Make tables look better
  `);

  return (
    <main className={styles.main}>
      <Head>
        <title>Markdown Editor - Sean Reichel</title>
        <meta name="description">
          A markdown editor where you can see a preview of what you've written
          off to the side
        </meta>
      </Head>
      <Editor
        onChange={(c: string) => {
          console.log(code);
          setCode(c);
        }}
        initialDoc={code}
        className={styles.markdown_editor}
      />
      <Preview className={styles.preview} code={code} />
    </main>
  );
};

export default Index;
