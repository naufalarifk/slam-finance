import Wrapper from "../components/global/wrapper";
import Jumbotron from "../components/jumbotron";
import Image from "next/image";
export default function Home() {
  return (
    <Wrapper>
      <Jumbotron />
      <section className="px-24">
        <h1 className="font-semibold text-6xl text-white">Twin Token System</h1>
        <div className="my-10 h-[114px] flex flex-row justify-between mx-auto bg-[#02AF91]">
          <div className="mx-auto my-auto">
            <p className="text-white text-center font-semibold text-2xl">Utility and Governance</p>
            <p className="text-white text-center font-semibold text-2xl">20% occures 30% fees</p>
          </div>
          <Image src='/Divider.svg' className="my-4" height={10} width={10} alt='divider' />
          <div className="mx-auto my-auto">
            <p className="text-white text-center font-semibold text-2xl">Liquidity Token</p>
            <p className="text-white text-center font-semibold text-2xl">65% occures 70% fees</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
