import HeaderImg from "../assets/Air1.jpg";
const Header = () => {
  return (
    <>
      <header className="relative w-full h-96 overflow-hidden z-0 ">
        <img
          src={HeaderImg}
          className="flex flex-col relative inset-0 w-full md:h-full object-cover md:rounded-b-[4rem] rounded-b-3xl "
        />
      </header>
      <div className="flex flex-col items-center max-w-[45rem] md:m-auto m-3 relative md:mt-[-2rem] mt-[-10rem] shadow-2xl bg-[#128dbd] text-white rounded-lg p-[1rem]">
        <h2 className="font-semibold m-1 text-2xl">
          Embrace the thrill, shop now, let your style do the talking.
        </h2>
        <h3>Final Pair Alert: Exclusive Size 42 Only!</h3>
        <p className="text-center">
          Welcome to Rare Air Kicks, your premier online destination for limited
          edition retro models that redefine sneaker culture. Step into a world
          where nostalgia meets exclusivity, where every pair tells a story of
          iconic design and timeless appeal.
        </p>
      </div>
    </>
  );
};

export default Header;
