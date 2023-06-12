import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen bg-white flex-col items-center justify-center">
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
        <h2 className="text-black text-6xl">About</h2>
        <h2 className="text-black text-6xl">Projects</h2>
        <h2 className="text-black text-6xl">Contact</h2>
      </div>
    </main>
  );
}
