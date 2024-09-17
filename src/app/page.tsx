import Image from "next/image";


export default function Home() {
  return (
    <main className="mx-auto font-roboto text-[17px] mb-14 w-full max-w-screen-sm flex-1 px-4 pb-8">
      <section className="h-screen pt-20 flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <Image
            className="rounded-full size-[65px]"
            src="/josuesalazaku.png"
            alt="Profile Picture"
            width={65}
            height={65}
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
            Front-end developer based in Antwerp, Belgium, focused building visually engaging and
            functional websites I blend creativity with practicality to create user-friendly
            experiences that work seamlessly. I aim to deliver websites that are both
            aesthetically appealing and intuitive for users.
          </p>
        </div>
      </section>
    </main>
  );
}