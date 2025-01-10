import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="h-screen mt-1/2 flex justify-center items-center">
      <div className="mb-[10%] flex flex-col gap-6 justify-center items-center">
        <Image
          width={10}
          height={10}
          className="w-20 h-20 rounded-full object-contain block ml-auto mr-auto"
          src="/avatars/me.svg"
          alt="Rounded avatar"
        />
        <p className="select-none font-bold text-3xl ml-auto mr-auto text-center relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-primary-400">
          Hello, I&apos;m Huy. A passionate{' '}
          <span className="text-primary-400">Software Engineer</span>
        </p>
        <a
          type="button"
          href="#"
          className="select-none duration-200 text-black bg-white hover:bg-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
