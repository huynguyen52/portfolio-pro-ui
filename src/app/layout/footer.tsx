export default function Footer() {
  return (
    <footer className="">
      <div className="container p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Powered by © 2025 Huy Nguyen
          </span>
          <div className="flex mt-4 justify-center sm:mt-0 items-center">
            <a
              target="_blank"
              href="https://www.facebook.com/quochuy211000"
              className="text-primary-600 hover:text-primary-300 duration-150 ms-5"
            >
              <svg className="w-5 h-6" fill="currentColor" viewBox="-6 0 24 24">
                <path d="m12.462.173v3.808h-2.265c-.079-.011-.171-.017-.264-.017-.542 0-1.036.203-1.411.538l.002-.002c-.275.384-.439.863-.439 1.381 0 .062.002.124.007.185v-.008 2.726h4.229l-.56 4.27h-3.663v10.946h-4.417v-10.947h-3.68v-4.269h3.68v-3.145c-.007-.102-.011-.222-.011-.342 0-1.478.575-2.822 1.513-3.82l-.003.003c.972-.92 2.288-1.485 3.735-1.485.09 0 .18.002.27.007h-.013c.118-.002.256-.003.395-.003 1.02 0 2.025.064 3.011.188l-.117-.012z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/huy-nguyen-124783255/"
              className="text-primary-600 hover:text-primary-300 duration-150 ms-5"
            >
              <svg className="w-8 h-8" viewBox="0 0 76 76">
                <path
                  fill="currentColor"
                  fill-opacity="1"
                  stroke-width="0.2"
                  stroke-linejoin="round"
                  d="M 17.4167,30.0833L 26.9167,30.0833L 26.9167,58.5833L 17.4167,58.5833L 17.4167,30.0833 Z M 31.6667,30.0833L 41.1667,30.0833L 41.1667,33.5574C 44.1836,31.7521 47.7589,30.0833 50.6667,30.0833C 57,30.0833 58.5833,36.4167 58.5833,36.4167L 58.5833,58.5833L 49.0833,58.5833L 49.0833,39.5833C 47.8558,35.9009 44.7251,36.0249 41.1667,39.2176L 41.1667,58.5833L 31.6667,58.5833L 31.6667,30.0833 Z M 22.1667,17.4167C 24.79,17.4167 26.9167,19.5433 26.9167,22.1667C 26.9167,24.79 24.79,26.9167 22.1667,26.9167C 19.5433,26.9167 17.4167,24.79 17.4167,22.1667C 17.4167,19.5433 19.5433,17.4167 22.1667,17.4167 Z "
                />
              </svg>
              <span className="sr-only">Linkedin Page</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/huynguyen52"
              className="text-primary-600 hover:text-primary-300 duration-150 ms-5"
            >
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                data-name="Layer 1"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/nq.hyu/"
              className="text-primary-600 hover:text-primary-300 duration-150 ms-5"
            >
              <svg
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                data-name="Layer 1"
              >
                <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z" />
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
