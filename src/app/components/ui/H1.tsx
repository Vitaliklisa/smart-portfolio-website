import { cn } from "@/lib/utils";

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(
        " text-3xl tracking-tight marker:font-bold sm:text-4xl",
        props.className,
      )}
    />
  );
}
