import heroImg from "@/assets/hero-book.png";

const Banner = () => {
  return (
    <section className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          alt="Hero Book"
          className="max-w-sm rounded-lg shadow-2xl"
          loading="eager"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
