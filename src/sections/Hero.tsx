import { Link } from "@/components/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen h-full flex-col items-center justify-center">
      <h1 className="text-black text-9xl">João Cardoso</h1>
      <div className="my-2" />
      <Image
        src="/title_underline.svg"
        width={690}
        height={54}
        alt="text underline"
      />
      <div className="my-10" />
      <div className="flex gap-36">
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </div>
    </section>
  );
}
