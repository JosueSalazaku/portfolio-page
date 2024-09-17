import Nav from "@/Components/Nav";
import Image from "next/image";


export default function Home() {
  return (
    <main className="mx-auto font-roboto text-[17px] mb-14 w-full max-w-screen-sm flex-1 px-4 pb-8">
      <section className="h-screen pt-20 flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <Image
            className="rounded-full size-[62px] cursor-pointer"
            src="/josuesalazaku.png"
            alt="Profile Picture"
            width={60}
            height={60}
          />
          <div className="">
            <p className="font-meduim">Josué Salazaku</p>
            <p className="text-zinc-500">
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="pt-8 space-y-3">
          <p className="font-meduim">About me</p>
          <p className="text-zinc-300">
            Based in Antwerp, Belgium, I focus on creating great web experiences
            by blending creativity with practicality. With attention to detail
            and user-centric design, My goal is to deliver websites that are
            both intuitive and enjoyable to use.
          </p>
        </div>
      </section>
      <Nav />
    </main>
  );
}