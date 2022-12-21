import Image from "next/image"

const Jumbotron = () => {
  return (
    <section className="lg:px-24 px-12 lg:mt-0 mt-[70%]">
      <h1 className="text-white font-semibold lg:text-7xl text-4xl w-1/2">Decentralized Perpetual Exchange and AMM</h1>
      <p className="font-semibold text-white my-4 lg:my-8">Powered by Aptos</p>
      <Image src="/launch-app-button.svg" alt="launch app button" width={350} height={150} className="hidden lg:block cursor-pointer ml-[-23px]" />
      <Image src="/launch-app-button.svg" alt="launch app button" width={150} height={50} className="lg:hidden block cursor-pointer ml-[-23px]" />
    </section>
  )
}

export default Jumbotron