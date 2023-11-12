import figure from "../assets/figure.png";
import Navbar from "./Navbar";
import Placeholder from "./Placeholder";
import CryptoList from "./Crypto/CryptoList";
import NewCrypto from "./Crypto/NewCrypto";

const Home = () => {
  return (
    <div>
      <section className="bg-bgPrimary bg-[url('assets/bg.png')] bg-[length:49%] bg-no-repeat bg-[155%_0%] flex justify-center">
        <div className="lg:container mx-auto px-4 md:px-6 lg:mx-auto md:m-0">
          <Navbar />

          <div className="grid md:grid-cols-12 lg:grid-cols-3 grid-cols-1 gap-4 pt-10 pb-14 relative">
            <div className="flex flex-col col-span-1 lg:col-span-1 md:col-span-6">
              <h2 className="text-white text-4xl">
                Now you can track all your cryptos here!
              </h2>
              <p className="text-white/40 text-2xl mt-2 w-3/4 mb-10 mt-4 hidden md:block">
                Just enter the cryptocurrency code on the form to the right.
              </p>
              <p className="text-white/40 text-2xl mt-2 w-3/4 mb-10 mt-4 md:hidden">
                Just enter the cryptocurrency code on the form below.
              </p>

              <CryptoList />
            </div>

            <NewCrypto />

            <img
              src={figure}
              alt="An elf figure"
              className="w-96 lg:w-96 md:w-80 m-auto absolute bottom-0 left-1/2 -translate-x-2/4 hidden md:block"
            />
          </div>
        </div>
      </section>
      <Placeholder />
    </div>
  );
};

export default Home;
