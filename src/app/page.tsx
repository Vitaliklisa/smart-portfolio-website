import { H1 } from "./components/ui/H1";
import { H2 } from "./components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import me from "@/assets/me.jpeg";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Vitalii Khomenko - My smart portfolio",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Vitalii</H1>
          <p className="text-center sm:text-start">
            I&apos;m a student which try a lot of cool things such as: Blender,
            Unity, Programming, Investing, and Entrepreneur.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={me}
            alt="A photo of me"
            height={200}
            width={200}
            className="rounded-full border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot something about me</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar
          to activate the AI chat. You cab ask the chatbot any question abut me
          and it will find the relevant info on this website. The bot can even
          provide links to pages your&apos;re looking for.
        </p>
      </section>
    </section>
  );
}
