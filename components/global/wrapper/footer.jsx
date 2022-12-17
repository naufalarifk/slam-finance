import Image from "next/image";
import React from "react";

const Footer = () => {
  const icons = [
    {
      name: "twitter",
      src: "/footer/twitter.svg",
      alt: "twitter",
    },
    {
      name: "instagram",
      src: "/footer/instagram.svg",
      alt: "instagram",
    },
    {
      name: "youtube",
      src: "/footer/youtube.svg",
      alt: "youtube",
    },
    {
      name: "github",
      src: "/footer/github.svg",
      alt: "github",
    },
    {
      name: "notion",
      src: "/footer/notion.svg",
      alt: "notion",
    },
    {
      name: "medium",
      src: "/footer/medium.svg",
      alt: "medium",
    }
  ];

  return (
    <section className="flex lg:flex-row flex-col lg:px-24 px-12 justify-between bg-transparent text-white items-center my-8">
      <div className="flex flex-row items-center space-x-3 lg:space-x-5">
        <Image src='/footer/wave.svg' width={50} height={50} alt='wave' />
      <p className="text-2xl lg:text-3xl font-semibold">Join Our Community</p>
      </div>
      <div className="flex flex-row items-center space-x-3 mt-4">
        {icons.map((icon) => (
          <Image
            key={icon.name}
            src={icon.src}
            width={40}
            height={40}
            alt={icon.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Footer;
