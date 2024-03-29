import ballroom from "@/assets/ballroom.jpeg";
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Vitalii Khomenko and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Vitalii Khomenko and I am a software developer from
          Ukraine. I started programming in 2021, at the age of 13.{" "}
        </p>
        <p>
          I&apos;m passionate study everything new and sharing my result in the
          internet.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I do some small projects and try out new tech. Here
          is a list of my projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://vital-kh.web.app/#/"
              className="text-primary hover:underline"
            >
              Small website in Dart
            </a>{" "}
            - When I was 11-12 years old
          </li>
          <li>
            <Link
              href="https://play.unity.com/mg/other/webgl-builds-358605"
              className="text-primary hover:underline"
            >
              My 3D Game in Unity
            </Link>{" "}
            - Summer 2023
          </li>
          <li>
            <Link
              href="https://play.unity.com/mg/other/webgl-builds-359433"
              className="text-primary hover:underline"
            >
              My 2D Game in Unity
            </Link>{" "}
            - Also made in Summer 2023
          </li>
          <li>
            <Link
              href="https://smart-portfolio-website.vercel.app"
              className="text-primary hover:underline"
            >
              Smart portfolio website
            </Link>{" "}
            - Of course this website with chatbot 2024 Mar 27-28
          </li>
          <li>
            <Link
              href="https://youtu.be/kJm5mGibKlw"
              className="text-primary hover:underline"
            >
              Donut made in Blender
            </Link>{" "}
            - Spring-Summer 2023
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p className="justify-left flex">
          Besides programming, I love doing sports. I am a ballroom dancer. I
          also enjoy reading books and going out sometimes. I think having
          hobbies other than coding is important for self-actualization and
          physical health.
        </p>
        <p className="text-center">
          I&apos;m also very much into self-improvement, read books, and connect
          with other people .
        </p>
        <Image
          src={ballroom}
          alt="Ballroom dance"
          height={200}
          width={200}
          className="text rounded-md"
        />
      </section>
    </section>
  );
}
