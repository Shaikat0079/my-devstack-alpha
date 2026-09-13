import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="container mx-auto my-25">
      <section className="flex items-center justify-between">
        <article className="flex flex-col gap-10">
          <div className="font-extrabold">
            <h2 className="text-5xl">Build Your Ideal</h2>
            <h2 className="text-5xl font-extrabold bg-linear-to-r from-red-500 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Development Stack
            </h2>
          </div>
          <p>
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits your{" "}
            <br />
            next project.
          </p>
          <div className="flex gap-5">
            <button className="rounded-2xl btn border bg-purple-500 border-red-500/40 bg-linear-to-r from-red-500/20 to-purple-600/20 px-6 py-3 text-white transition-all duration-300 hover:from-red-500 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/30">
              Explore Technologies
            </button>
            <button className="rounded-2xl btn bg-white border border-gray-300 text-transparent bg-linear-to-r from-red-500 to-purple-600 bg-clip-text px-6 py-3 hover:bg-gray-50 ">
              Learn More
            </button>
          </div>
        </article>
        <img src={hero} alt="" />
      </section>
    </div>
  );
};

export default Hero;
