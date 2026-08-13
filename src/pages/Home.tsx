import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* <h2 className="font-bold text-2xl">Footer</h2>
      <Footer /> */}

      <h2 className="font-bold text-2xl">Header</h2>
      <Header />
    </div>
  );
};

export default Home;
