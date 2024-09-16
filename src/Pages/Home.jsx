function Home() {
  return (
    <main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pb-8">
      <section className="h-screen pt-20 flex flex-col gap-5">
        <div className="flex gap-5">
          <img
            className="rounded-full w-20 h-20"
            src="public/josuesalazaku.png"
            alt="Profile Picture"
          />
          <div className="font-sans">
            <p>Josué Salazaku</p>
            <p>Visual Artist / Web Developer</p>
          </div>
        </div>
        <div className="font-sans">
          <p>About me</p>
          <p>Visual Artist / Web Developer</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
