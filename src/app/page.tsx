import { parseSrcset } from "srcset";

export default function Home() {
  const parsed = parseSrcset("banner-HD.jpg 2x, banner-phone.jpg 100w");
  return (
    <pre>
      <code>{JSON.stringify(parsed, null, 2)}</code>
    </pre>
  );
}
