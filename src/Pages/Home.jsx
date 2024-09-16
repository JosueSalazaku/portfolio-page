function Home() {
  return (
    <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 ">
      <section className="h-screen pt-12 flex flex-col gap-10">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full size-[60px]"
            src="public/josuesalazaku.png"
            alt="Profile Picture"
          />
          <div className="font-sans">
            <p className="font-bold">Josué Salazaku</p>
            <p className="font-light">Visual Artist / Web Developer</p>
          </div>
        </div>
        <div className="font-sans">
          <p>About me</p>
          <p className="font-light">Add text</p>
        </div>
        <div className="font-sans">
          <p>Now</p>
          <p className="font-light">Add text</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
