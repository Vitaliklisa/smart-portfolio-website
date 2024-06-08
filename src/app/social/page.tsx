import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media accounts and how to connect with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My Accounts</H2>

        <p>Links to all my social accounts how you can contact with me:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.instagram.com/vitalikhomenkoo/"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/Vitalikrisa"
              className="text-primary hover:underline"
            >
              Twitter (X)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Vitaliklisa"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vitaliikhomenko/"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.goodreads.com/?ref=nav_hom"
              className="text-primary hover:underline"
            >
              GoodReads
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>

      <section className="space-y-3"></section>
    </section>
  );
}
