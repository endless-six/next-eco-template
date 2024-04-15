import Markdown from "markdown-to-jsx";
import Image from "next/image";

const content = `
## Hello world

Thi is paragraph One

- list one
- list two
`;

const NextImage = ({
  title,
  alt,
  src,
  ...props
}: {
  title: string;
  alt: string;
  src: string;
  props: { width: number; height: number };
}) => <Image alt={alt} src={src} {...props} />;

export default function MdContent() {
  return (
    <article className="prose lg:prose-xl">
      <Markdown 
      options={{
        overrides: {
          img: {
            component: NextImage,
            props: {
              width: 400,
              height: 400,
            },
          }
        },
      }}
      >{content}</Markdown>
    </article>
  );
}
