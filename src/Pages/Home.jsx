
function Home() {
  return (
      <main className={darkMode ? "h-screen flex flex-col justify-start items-center" : "h-screen flex flex-col justify-start items-center" }>
      <section className="h-screen pt-20 ">
      <h1 className="text-7xl px-20">
        Frontend Developer
      </h1> 
      </section>  
      <section className="h-screen w-screen rounded-t-2xl bg-indigo-400">
        <h1 className="text-6xl px-20 pt-20">WHAT I DO.</h1>
      </section>
    </main>
  );
}

export default Home;
