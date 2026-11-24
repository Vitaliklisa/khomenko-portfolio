import type { Metadata } from "next";
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for khomenko.de.",
};

export default function PrivacyPage() {
  return (
    <article className="page-width" style={{ maxWidth: 760, paddingBlock: 72 }}>
      <H1>Privacy</H1>
      <p>
        This site is a personal portfolio. You can browse it without creating
        an account or submitting personal information.
      </p>
      <H2>Basic website operation</H2>
      <p>
        The hosting provider may process standard technical request data, such
        as IP address, browser, and requested page, to deliver and protect the
        website. This portfolio does not intentionally use advertising pixels
        or analytics cookies.
      </p>
      <H2>Links and contact</H2>
      <p>
        Links to project and social websites take you to services operated by
        others, which have their own privacy policies. If you contact me by
        email, the details you choose to share are used to reply to your
        message.
      </p>
      <H2>Questions</H2>
      <p>
        For privacy questions, email{" "}
        <a href="mailto:vhomenko119@gmail.com">vhomenko119@gmail.com</a>.
      </p>
    </article>
  );
}
