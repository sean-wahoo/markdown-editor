import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import styles from "styles/index.module.scss";

import React from "react";

import remarkEmoji from "remark-emoji";
import rehypeReact from "rehype-react/lib";

interface Props {
  code: string;
  className: string;
}

const Preview: React.FC<Props> = (props) => {
  const md: any = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkToc)
    .use(remarkEmoji, {
      emoticon: true,
    })
    .use(rehypeHighlight)
    .use(remarkRehype)

    .use(rehypeReact, { createElement: React.createElement })
    .processSync(props.code).result;

  return (
    <div className={styles.container}>
      <h1>Preview</h1>
      <div className={props.className}>{md}</div>
    </div>
  );
};

export default Preview;
