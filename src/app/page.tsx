import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-sm font-roboto text-[17px] mb-14 w-full flex-1 px-4 pb-8">
      <section className="h-screen pt-20 flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <Image
            className="rounded-full cursor-pointer"
            src="/josuesalazaku.png"
            alt="Profile Picture"
            width={60}
            height={60}
          />
          <div>
            <p className="font-medium text-black dark:text-white">Josué Salazaku</p>
            <p className="text-zinc-500 dark:text-zinc-400">Frontend Developer</p>
          </div>
        </div>
        <div className="pt-8 space-y-3">
          <p className="font-medium text-black dark:text-white">About me</p>
          <p className="text-gray-500 dark:text-gray-400">
            Based in Antwerp, Belgium, I focus on creating great web experiences
            by blending creativity with practicality. With attention to detail
            and user-centric design, my goal is to deliver websites that are
            both intuitive and enjoyable to use.
          </p>
        </div>
      </section>
    </main>
  );
}
