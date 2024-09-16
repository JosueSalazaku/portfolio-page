export default function Home() {
  return (
    <main className="mx-auto font-roboto text-[17px] mb-14 w-full max-w-screen-sm flex-1 px-4 pb-8">
      <section className="h-screen pt-20 flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <img
            className="rounded-full size-[65px]"
            src="josuesalazaku.png"
            alt="Profile Picture"
          />
          <div className="">
            <p className="font-meduim">Josué Salazaku</p>
            <p className="text-zinc-500">
              Visual Artist / Web Developer
            </p>
          </div>
        </div>
        <div className="pt-8 space-y-3">
          <p className="font-meduim">About me</p>
          <p className="text-zinc-500">
            Creating vibrant paintings that explore emotions, stories, and
            abstract concepts into vivid, expressive artworks. Balancing my
            artistic practice with professional web development, I focus on
            crafting visually compelling and functional websites. Passionate
            about blending creativity with functionality, I aim to deliver
            unique experiences both on canvas and online.
          </p>
        </div>
      </section>
    </main>
  );
}
