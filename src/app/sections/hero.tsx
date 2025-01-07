import Image from 'next/image';

export default function HeroSection() {
  return (
    <section>
      <div className="flex justify-center">
        <Image
          width={10}
          height={10}
          className="w-20 h-20 rounded-full object-contain"
          src="/avatars/me.svg"
          alt="Rounded avatar"
        />
      </div>
      <h3 className="text-center text-lg">Hii There</h3>
      <h1 className="text-4xl font-bold text-center">I&apos;m Huy Nguyen</h1>
      <p className="text-lg text-center">Web developer</p>
    </section>
  );
}
