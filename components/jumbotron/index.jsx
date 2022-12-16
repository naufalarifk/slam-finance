import Image from "next/image"

const Jumbotron = () => {
  return (
    <section className="px-24">
      <h1 className="text-white font-semibold text-7xl w-1/2">Decentralized Protocol Exchange and AMM</h1>
      <p className="font-semibold text-white my-8">Powered by Aptos</p>
      <Image src="/launch-app-button.svg" alt="launch app button" width={300} height={100} className="cursor-pointer ml-[-23px]" />
    </section>
  )
}

export default Jumbotron