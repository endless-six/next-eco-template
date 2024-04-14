import Markdown from "markdown-to-jsx";

const content = `
## Hello world

Thi is paragraph One

- list one
- list two
`;

export default function MdContent() {
  return (
    <article className="prose lg:prose-xl">
      <Markdown>{content}</Markdown>
    </article>
  );
}
