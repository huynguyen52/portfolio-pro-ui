import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen mt-1/2 flex justify-center items-center"
    >
      <div className="mb-[10%] flex flex-col gap-6 justify-center items-center">
        <Image
          width={10}
          height={10}
          className="w-20 h-20 rounded-full object-contain block ml-auto mr-auto"
          src="/avatars/me.svg"
          alt="Rounded avatar"
        />
        <h1 className="select-none font-bold text-xl">Hello, I&apos;m Huy. </h1>
        <p className="select-none font-bold text-3xl relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-primary-400">
          A passionate{' '}
          <span className="text-primary-600">Software Engineer</span>
        </p>
        <a
          type="button"
          target="_blank"
          href="/NguyenQuocHuyCV.pdf"
          className="select-none duration-200 text-black bg-white hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Download CV
        </a>
      </div>
      <div id="skillset" className="mt-auto mb-[5%] opacity-0 invisible"></div>
    </section>
  );
}
