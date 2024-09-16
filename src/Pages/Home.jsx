function Home() {
  return (
    <main className="mx-auto font-roboto mb-14 w-full max-w-screen-sm flex-1 px-4 pb-8">
      <section className="h-screen pt-20 flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <img
            className="rounded-full size-[65px]"
            src="josuesalazaku.png"
            alt="Profile Picture"
          />
          <div className="font-semibold text-[18px]">
            <p>Josué Salazaku</p>
            <p className="font-light">
              Visual Artist / Web Developer
            </p>
          </div>
        </div>
        <div className="pt-8 space-y-3">
          <p className="font-semibold">About me</p>
          <p className="font-normal">
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

export default Home;
