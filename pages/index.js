import Wrapper from "../components/global/wrapper";
import Jumbotron from "../components/jumbotron";
import Image from "next/image";
export default function Home() {

  const data = [
    {
      title: "Safe",
      src: "/testimonial/safe.svg",
    },
    {
      title: "Scalable",
      src: "/testimonial/scalable.svg",
    },
    {
      title: "Reliable",
      src: "/testimonial/reliable.svg",
    },
  ];


  return (
    <Wrapper>
      <Jumbotron />
      <section className="lg:px-24 px-12">
        <h1 className="font-semibold lg:text-6xl text-2xl mt-12 lg:mt-0 text-white">Twin Token System</h1>
        <div className="my-10 h-[114px] flex flex-row justify-between mx-auto bg-[#02AF91]">
          <div className="mx-auto my-auto w-1/2">
            <p className="text-white text-center font-semibold text-sm lg:text-2xl">Utility and Governance</p>
            <p className="text-white text-center font-semibold text-xs lg:text-2xl">20% accures 30% fees</p>
          </div>
          <Image src='/Divider.svg' className="my-4" height={10} width={10} alt='divider' />
          <div className="mx-auto my-auto w-1/2">
            <p className="text-white text-center font-semibold text-sm lg:text-2xl">Liquidity Token</p>
            <p className="text-white text-center font-semibold text-xs lg:text-2xl">65% accures 70% fees</p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-6 space-y-6">
          <h1 className="font-semibold text-3xl lg:text-6xl text-white w-full lg:w-1/3">Why Aptos</h1>
          <p className=" lg:font-semibold text-lg text-white w-full lg:w-2/3">Aptos is a new layer one blockchain that uses the move language, parallel execution and other innovations to enable incredibly fast infrastructure for mass web3 adoption</p>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-6 lg:space-y-0 space-y-3 mt-10">
        {
          data.map((item, index) => {
            return (
              <div key={index} className='bg-white bg-opacity-10 flex flex-row items-center w-full lg:w-1/3 h-full justify-center py-6 border border-white rounded-lg space-x-5'>
                <Image src={item.src} height={80} width={80} alt={item.title} />
                <h1 className="font-semibold text-2xl text-white w-1/3">{item.title}</h1>
                </div>
            )
          })}
        </div>
      </section>
    </Wrapper>
  );
}
