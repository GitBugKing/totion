import Navbar from "./_component/Navbar";
import Footer from "./_component/footer";
import Heading from "./_component/heading";
import Heros from "./_component/heros";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col ite justify-center
      md:justify-start text-center gap-y-8 flex-1 px-6 pd-10">
        <Heading />
        <Heros />
      </div>
      <Footer />
    </div>
  );
}

export default MarketingPage;