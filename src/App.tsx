import { onCleanup, onMount } from "solid-js";
import type { Component } from "solid-js";

const App: Component = () => {
  let alertClass: HTMLDivElement | undefined;
  let timeout: number;

  const setSuccess = (msg: string) => {
    if (!alertClass) return;
    alertClass.classList.remove("bg-red-600");
    alertClass.classList.add("bg-green-600");

    alertClass.textContent = msg;

    alertClass.classList.remove("hidden");

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      alertClass?.classList.add("hidden");
    }, 3000);
  };

  const setError = (msg: string) => {
    if (!alertClass) return;
    alertClass.classList.remove("bg-green-600");
    alertClass.classList.add("bg-red-600");

    alertClass.textContent = msg;

    alertClass.classList.remove("hidden");

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      alertClass?.classList.add("hidden");
    }, 3000);
  };

  onMount(() => {
    // add event listener for scroll position
    // if > 100px, add class to header
    // else remove class from header

    let classes = ["bg-blue-900/50", "shadow-md"];

    const header = document.querySelector("header") as HTMLElement;
    let prevScrollPos = window.scrollY;

    const fn = (close: boolean) => {
      if (close) {
        header.classList.add("-translate-y-full");
      } else {
        header.classList.remove("-translate-y-full");
      }
    };

    window.addEventListener("scroll", () => {
      let currentScrollPos = window.scrollY;

      if (currentScrollPos > 100) {
        header.classList.add(...classes);
      } else {
        header.classList.remove(...classes);
      }

      // if (prevScrollPos > currentScrollPos) {
      //   fn(false);
      // } else {
      //   let timeout;

      //   clearTimeout(timeout);

      //   timeout = setTimeout(() => {
      //     fn(true);
      //   }, 1000);
      // }
      // prevScrollPos = currentScrollPos;
    });
  });

  // clear event listener on unmount
  onCleanup(() => {
    window.removeEventListener("scroll", () => {});
  });

  return (
    <>
      <header class="px-3 py-2 flex justify-between items-center fixed top-0 left-0 right-0 z-10 transition-all">
        <a href="#">
          <h1 class="font-['Pacifico'] text-2xl gradient-text inline-block">
            PS
          </h1>
        </a>

        <div class="flex gap-1 items-center text-primary-offwhite">
          <a
            href="#my-work"
            class="text-xs md:text-base  px-2 py-1 rounded-full min-w-5 min-h-5"
          >
            My Work
          </a>
          <a
            href="#achievements"
            class="text-xs md:text-base px-2 py-1 rounded-full min-w-5 min-h-5"
          >
            Achievements
          </a>
          <a
            href="#contact"
            class="text-xs md:text-base  px-2 py-1 rounded-full min-w-5 min-h-5"
          >
            Contact
          </a>
        </div>
      </header>

      <main class="overflow-x-hidden">
        {/* hero */}
        <section class="hero flex flex-col justify-start pt-2 pb-4 items-center font-[Montserrat] min-h-screen relative overflow-hidden">
          <h2 class="text-4xl font-bold text-center text-primary-cyan mt-20 mb-1">
            Priyanshu Sharma
          </h2>
          <div class="relative inline-block mb-6">
            <p class="text-center text-white text-xl font-medium italic">
              full stack developer
            </p>
            <div class="absolute w-[95px] h-1 bg-primary-cyan left-0 transform -translate-y-1/2 shadow-md shadow-primary-cyan rounded-full animate-pulse duration-75"></div>
          </div>
          <p class="inline-block max-w-[45ch] text-white text-center px-1">
            full time tech enthusiast providing services for building apps and
            websites.
          </p>

          {/* social links */}
          <div class="flex gap-4 mt-6">
            <a href="https://twitter.com/Priyans05834140" target="_blank">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#2D95FF] hover:fill-none hover:stroke-[#2D95FF] hover:stroke-2 hover:transition-all hover:duration-300"
              >
                <path d="M44.6429 0.330688H5.35714C2.39955 0.330688 0 2.73024 0 5.68783V44.9735C0 47.9311 2.39955 50.3307 5.35714 50.3307H44.6429C47.6004 50.3307 50 47.9311 50 44.9735V5.68783C50 2.73024 47.6004 0.330688 44.6429 0.330688ZM39.1853 18.0539C39.2076 18.3664 39.2076 18.6901 39.2076 19.0026C39.2076 28.6789 31.8415 39.8285 18.3817 39.8285C14.2299 39.8285 10.3795 38.6231 7.14286 36.5472C7.73437 36.6142 8.30357 36.6365 8.90625 36.6365C12.3326 36.6365 15.4799 35.4758 17.9911 33.5115C14.7768 33.4445 12.0759 31.3352 11.1496 28.4334C12.2768 28.6008 13.2924 28.6008 14.4531 28.2994C11.1049 27.6186 8.59375 24.6722 8.59375 21.1119V21.0227C9.56473 21.5695 10.7031 21.9044 11.8973 21.949C10.8933 21.2812 10.0703 20.3752 9.50164 19.3119C8.93299 18.2486 8.63642 17.061 8.63839 15.8552C8.63839 14.4936 8.99554 13.2436 9.6317 12.161C13.2366 16.603 18.6496 19.5048 24.721 19.8173C23.683 14.8508 27.3996 10.8218 31.8638 10.8218C33.9732 10.8218 35.8705 11.7035 37.2098 13.132C38.8616 12.8195 40.4464 12.2057 41.8527 11.3686C41.3058 13.0651 40.1562 14.4936 38.6384 15.3977C40.1116 15.2414 41.5402 14.8285 42.8571 14.2593C41.8638 15.7213 40.6138 17.016 39.1853 18.0539Z" />
              </svg>
            </a>
            <a href="https://github.com/PriyanshuSharma23" target="_blank">
              <svg
                width="50"
                height="51"
                viewBox="0 0 50 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#2D95FF] hover:fill-none hover:stroke-[#2D95FF] hover:stroke-2 hover:transition-all hover:duration-300"
              >
                <path d="M44.6429 0.330688H5.35714C2.39955 0.330688 0 2.73024 0 5.68783V44.9735C0 47.9311 2.39955 50.3307 5.35714 50.3307H44.6429C47.6004 50.3307 50 47.9311 50 44.9735V5.68783C50 2.73024 47.6004 0.330688 44.6429 0.330688ZM30.9487 43.1544C30.0112 43.3218 29.6652 42.7414 29.6652 42.2615C29.6652 41.6588 29.6875 38.5785 29.6875 36.0896C29.6875 34.3485 29.1071 33.2436 28.4263 32.6633C32.5558 32.2057 36.9085 31.6365 36.9085 24.5048C36.9085 22.4735 36.183 21.4579 35 20.1521C35.1897 19.6722 35.8259 17.6968 34.8103 15.1298C33.2589 14.6499 29.7098 17.1276 29.7098 17.1276C28.2366 16.7146 26.6406 16.5026 25.067 16.5026C23.4933 16.5026 21.8973 16.7146 20.4241 17.1276C20.4241 17.1276 16.875 14.6499 15.3237 15.1298C14.308 17.6856 14.933 19.661 15.1339 20.1521C13.9509 21.4579 13.3929 22.4735 13.3929 24.5048C13.3929 31.603 17.5558 32.2057 21.6853 32.6633C21.1496 33.1432 20.6696 33.9691 20.5022 35.1521C19.442 35.632 16.7299 36.4579 15.1116 33.6008C14.096 31.8374 12.2656 31.6923 12.2656 31.6923C10.4576 31.67 12.1429 32.8307 12.1429 32.8307C13.3482 33.3887 14.1964 35.5316 14.1964 35.5316C15.279 38.8463 20.4576 37.7302 20.4576 37.7302C20.4576 39.2816 20.4799 41.8039 20.4799 42.2615C20.4799 42.7414 20.1451 43.3218 19.1964 43.1544C11.8304 40.6878 6.67411 33.6789 6.67411 25.4869C6.67411 15.2414 14.5089 7.46239 24.7545 7.46239C35 7.46239 43.3036 15.2414 43.3036 25.4869C43.3147 33.6789 38.3147 40.699 30.9487 43.1544ZM20 36.3352C19.7879 36.3798 19.5871 36.2905 19.5647 36.1454C19.5424 35.978 19.6875 35.8329 19.8996 35.7883C20.1116 35.766 20.3125 35.8552 20.3348 36.0003C20.3683 36.1454 20.2232 36.2905 20 36.3352ZM18.9397 36.2347C18.9397 36.3798 18.7723 36.5026 18.5491 36.5026C18.3036 36.5249 18.1362 36.4021 18.1362 36.2347C18.1362 36.0896 18.3036 35.9668 18.5268 35.9668C18.7388 35.9445 18.9397 36.0673 18.9397 36.2347ZM17.4107 36.1119C17.3661 36.257 17.1429 36.324 16.9531 36.257C16.7411 36.2124 16.596 36.045 16.6406 35.8999C16.6853 35.7548 16.9085 35.6878 17.0982 35.7325C17.3214 35.7994 17.4665 35.9668 17.4107 36.1119ZM16.0379 35.5093C15.9375 35.632 15.7254 35.6097 15.558 35.4423C15.3906 35.2972 15.346 35.0852 15.4576 34.9847C15.558 34.8619 15.7701 34.8843 15.9375 35.0517C16.0826 35.1968 16.1384 35.42 16.0379 35.5093ZM15.0223 34.4936C14.9219 34.5606 14.7321 34.4936 14.6094 34.3262C14.4866 34.1588 14.4866 33.9691 14.6094 33.891C14.7321 33.7905 14.9219 33.8686 15.0223 34.036C15.1451 34.2035 15.1451 34.4043 15.0223 34.4936ZM14.2969 33.411C14.1964 33.5115 14.029 33.4557 13.9062 33.3441C13.7835 33.199 13.7612 33.0316 13.8616 32.9535C13.9621 32.853 14.1295 32.9088 14.2522 33.0204C14.375 33.1655 14.3973 33.3329 14.2969 33.411ZM13.5491 32.5852C13.5045 32.6856 13.3594 32.7079 13.2366 32.6298C13.0915 32.5628 13.0246 32.4401 13.0692 32.3396C13.1138 32.2727 13.2366 32.2392 13.3817 32.295C13.5268 32.3731 13.5938 32.4959 13.5491 32.5852Z" />
              </svg>
            </a>
            <span
              data-discord-username="whyme#7590"
              tabindex="0"
              aria-details="click to copy discord username"
              onClick={() => {
                let username = "whyme#7590";
                navigator.clipboard.writeText(username);
                setSuccess(`Copied ${username} to clipboard`);
              }}
            >
              <svg
                width="50"
                height="56"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-[#2D95FF] hover:fill-none hover:stroke-[#2D95FF] hover:stroke-2 hover:transition-all hover:duration-300"
              >
                <path d="M33.1714 26.4557C33.1714 28.1332 31.8857 29.5082 30.2571 29.5082C28.6571 29.5082 27.3429 28.1332 27.3429 26.4557C27.3429 24.7782 28.6286 23.4032 30.2571 23.4032C31.8857 23.4032 33.1714 24.7782 33.1714 26.4557ZM19.8286 23.4032C18.2 23.4032 16.9143 24.7782 16.9143 26.4557C16.9143 28.1332 18.2286 29.5082 19.8286 29.5082C21.4571 29.5082 22.7429 28.1332 22.7429 26.4557C22.7714 24.7782 21.4571 23.4032 19.8286 23.4032ZM50 5.99569V55.3307C42.802 49.2083 45.104 51.2349 36.7429 43.7532L38.2571 48.8407H5.85714C2.62857 48.8407 0 46.3107 0 43.1757V5.99569C0 2.86069 2.62857 0.330688 5.85714 0.330688H44.1429C47.3714 0.330688 50 2.86069 50 5.99569ZM41.8571 32.0657C41.8571 23.2107 37.7429 16.0332 37.7429 16.0332C33.6286 13.0632 29.7143 13.1457 29.7143 13.1457L29.3143 13.5857C34.1714 15.0157 36.4286 17.0782 36.4286 17.0782C29.6416 13.4979 21.6692 13.4973 15.0857 16.2807C14.0286 16.7482 13.4 17.0782 13.4 17.0782C13.4 17.0782 15.7714 14.9057 20.9143 13.4757L20.6286 13.1457C20.6286 13.1457 16.7143 13.0632 12.6 16.0332C12.6 16.0332 8.48571 23.2107 8.48571 32.0657C8.48571 32.0657 10.8857 36.0532 17.2 36.2457C17.2 36.2457 18.2571 35.0082 19.1143 33.9632C15.4857 32.9182 14.1143 30.7182 14.1143 30.7182C14.5346 31.0014 15.2277 31.3684 15.2857 31.4057C20.1083 34.0051 26.9585 34.8567 33.1143 32.3682C34.1143 32.0107 35.2286 31.4882 36.4 30.7457C36.4 30.7457 34.9714 33.0007 31.2286 34.0182C32.0857 35.0632 33.1143 36.2457 33.1143 36.2457C39.4286 36.0532 41.8571 32.0657 41.8571 32.0657Z" />
              </svg>
            </span>
          </div>

          {/* avatar image */}
          <div class="relative mt-auto pb-10">
            <div class="w-[45vh] h-[45vh] rounded-full internal-avatar flex justify-center items-center ">
              <img
                class="w-[45vh] h-[45vh] object-cover rotate-180"
                src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/hi.webp?alt=media&token=745d149a-4d77-4014-a7f8-b340ff0dc469"
                alt="Hi Bitmoji"
              />
            </div>
            <div class="w-[70vh] h-[70vh] -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full highlight-gradient flex justify-center items-center bg-opacity-10 "></div>
          </div>

          {/* ellipse 1 */}
          <div class="w-[100vw] h-[100vw]  absolute -z-10 -right-[45vw] -top-[40vw] rounded-full upper-ellipse-gradient"></div>

          {/* ellipse 2 */}
          <div class="w-[100vw] h-[100vw]  absolute -z-10 -left-[45vw] -bottom-[40vw]  rounded-full lower-ellipse-gradient"></div>
        </section>

        {/* <hr class="border-white" /> */}
        {/* <!-- My Work and Projects Section --> */}
        <section
          class="min-h-screen pt-11 flex flex-col px-2 mx-auto max-w-7xl overflow-x-hidden"
          id="my-work"
        >
          {/* <!-- Section heading --> */}
          <h2 class="text-3xl mb-4 md:text-4xl font-bold text-center gradient-text-section-heading font-[Montserrat]">
            My Work
          </h2>

          {/* <!-- projects --> */}
          <article class="flex flex-col gap-4 md:flex-row justify-around items-center md:items-start mb-10">
            <div class="md:w-max">
              <p class="text-md md:text-lg font-semibold text-secondary-purple">
                Featured Project
              </p>
              <div class="flex text-3xl md:text-4xl items-center">
                <h2 class=" text-primary-offwhite mr-4">
                  AIRG's Website
                  {/* <!-- unlink --> */}
                  <a href="https://airg-nsut.netlify.app/" target="_blank">
                    <svg
                      class=" fill-primary-offwhite hover:fill-blue-400 mr-2 inline"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      width="25"
                      height="25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                    </svg>
                  </a>
                  {/* <!-- github --> */}
                  <a
                    href="https://github.com/PriyanshuSharma23/airg"
                    target="_blank"
                  >
                    <svg
                      class="  inline fill-primary-offwhite hover:fill-blue-400"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.8418 19.2598C11.8418 20.4844 11.2031 22.4883 9.69141 22.4883C8.17969 22.4883 7.54102 20.4844 7.54102 19.2598C7.54102 18.0352 8.17969 16.0312 9.69141 16.0312C11.2031 16.0312 11.8418 18.0352 11.8418 19.2598ZM29.0625 16.3008C29.0625 18.1699 28.875 20.1504 28.0371 21.8672C25.8164 26.3555 19.7109 26.25 15.3398 26.25C10.8984 26.25 4.42969 26.4082 2.12109 21.8672C1.26563 20.168 0.9375 18.1699 0.9375 16.3008C0.9375 13.8457 1.75195 11.5254 3.36914 9.64453C3.06445 8.71875 2.91797 7.74609 2.91797 6.78516C2.91797 5.52539 3.20508 4.89258 3.77344 3.75C6.42773 3.75 8.12695 4.27734 10.1484 5.85937C11.8477 5.45508 13.5937 5.27344 15.3457 5.27344C16.9277 5.27344 18.5215 5.44336 20.0566 5.8125C22.0488 4.24805 23.748 3.75 26.373 3.75C26.9473 4.89258 27.2285 5.52539 27.2285 6.78516C27.2285 7.74609 27.0762 8.70117 26.7773 9.60937C28.3887 11.5078 29.0625 13.8457 29.0625 16.3008ZM25.2949 19.2598C25.2949 16.6875 23.7305 14.4199 20.9883 14.4199C19.8809 14.4199 18.8203 14.6191 17.707 14.7715C16.834 14.9062 15.9609 14.959 15.0645 14.959C14.1738 14.959 13.3008 14.9062 12.4219 14.7715C11.3262 14.6191 10.2539 14.4199 9.14062 14.4199C6.39844 14.4199 4.83398 16.6875 4.83398 19.2598C4.83398 24.4043 9.54492 25.1953 13.6465 25.1953H16.4707C20.5898 25.1953 25.2949 24.4102 25.2949 19.2598ZM20.4551 16.0312C18.9434 16.0312 18.3047 18.0352 18.3047 19.2598C18.3047 20.4844 18.9434 22.4883 20.4551 22.4883C21.9668 22.4883 22.6055 20.4844 22.6055 19.2598C22.6055 18.0352 21.9668 16.0312 20.4551 16.0312Z" />
                    </svg>
                  </a>
                </h2>
              </div>
              {/* <!-- card --> */}
              <div class="w-full glass mt-4 px-2 py-3 border-white/60 rounded-md border lg:max-w-xl flex-shrink-0">
                <p class=" text-white text-lg ">
                  A website made for AIRG, NSUT. It is made in NextJS and uses
                  three js to display the stunning visuals
                </p>
                <div class="flex mt-4 gap-2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/js.png?alt=media&token=52d68c5b-7376-48bb-882a-767249b1a96f"
                    alt="javascript logo"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/css.png?alt=media&token=7bc83ce0-f6b5-4379-a20b-6aaa6b2e5de9"
                    alt="css logo"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/html.png?alt=media&token=f866f3db-a2a3-4d2e-9698-11eecc1782a6"
                    alt="html logo"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/next.png?alt=media&token=68093f64-4346-42b5-b57e-65a7553b3ed9"
                    alt="nextjs"
                  />
                </div>
              </div>
            </div>
            <div class="relative">
              <img
                class="rounded-br-xl lg:w-[40vw]"
                src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/airg-project-screen.webp?alt=media&token=4ed915f2-8fe9-44d8-9b11-137eacc798a4"
                alt="AIRG's Screenshots"
              />
              <div class="absolute -left-[15vh] -z-10 -top-[10vh] w-[40vh] h-[40vh] rounded-full highlight-gradient bg-opacity-10 opacity-50  mt-auto" />
            </div>
          </article>

          {/* <!-- projects --> */}
          <article class="flex flex-col gap-4 md:flex-row-reverse justify-around items-center md:items-start mb-10">
            <div class="md:w-max">
              <p class="text-md md:text-lg font-semibold text-secondary-purple">
                Featured Project
              </p>
              <div class="flex text-3xl md:text-4xl items-center">
                <h2 class=" text-primary-offwhite mr-4">
                  Rentit
                  {/* <!-- github --> */}
                  <a
                    href="https://github.com/A-d-i-b/HouseHunt"
                    target="_blank"
                  >
                    <svg
                      class="  inline fill-primary-offwhite hover:fill-blue-400"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.8418 19.2598C11.8418 20.4844 11.2031 22.4883 9.69141 22.4883C8.17969 22.4883 7.54102 20.4844 7.54102 19.2598C7.54102 18.0352 8.17969 16.0312 9.69141 16.0312C11.2031 16.0312 11.8418 18.0352 11.8418 19.2598ZM29.0625 16.3008C29.0625 18.1699 28.875 20.1504 28.0371 21.8672C25.8164 26.3555 19.7109 26.25 15.3398 26.25C10.8984 26.25 4.42969 26.4082 2.12109 21.8672C1.26563 20.168 0.9375 18.1699 0.9375 16.3008C0.9375 13.8457 1.75195 11.5254 3.36914 9.64453C3.06445 8.71875 2.91797 7.74609 2.91797 6.78516C2.91797 5.52539 3.20508 4.89258 3.77344 3.75C6.42773 3.75 8.12695 4.27734 10.1484 5.85937C11.8477 5.45508 13.5937 5.27344 15.3457 5.27344C16.9277 5.27344 18.5215 5.44336 20.0566 5.8125C22.0488 4.24805 23.748 3.75 26.373 3.75C26.9473 4.89258 27.2285 5.52539 27.2285 6.78516C27.2285 7.74609 27.0762 8.70117 26.7773 9.60937C28.3887 11.5078 29.0625 13.8457 29.0625 16.3008ZM25.2949 19.2598C25.2949 16.6875 23.7305 14.4199 20.9883 14.4199C19.8809 14.4199 18.8203 14.6191 17.707 14.7715C16.834 14.9062 15.9609 14.959 15.0645 14.959C14.1738 14.959 13.3008 14.9062 12.4219 14.7715C11.3262 14.6191 10.2539 14.4199 9.14062 14.4199C6.39844 14.4199 4.83398 16.6875 4.83398 19.2598C4.83398 24.4043 9.54492 25.1953 13.6465 25.1953H16.4707C20.5898 25.1953 25.2949 24.4102 25.2949 19.2598ZM20.4551 16.0312C18.9434 16.0312 18.3047 18.0352 18.3047 19.2598C18.3047 20.4844 18.9434 22.4883 20.4551 22.4883C21.9668 22.4883 22.6055 20.4844 22.6055 19.2598C22.6055 18.0352 21.9668 16.0312 20.4551 16.0312Z" />
                    </svg>
                  </a>
                </h2>
              </div>
              {/* <!-- card --> */}
              <div class="w-full glass mt-4 px-2 py-3 border-white/60 rounded-md border lg:max-w-xl flex-shrink-0">
                <p class=" text-white text-lg ">
                  A cross platform app, which aims to provide students with
                  housing near our college
                </p>
                <div class="mt-4 gap-2">
                  <img
                    class="inline-block mr-1"
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/dart.png?alt=media&token=36e9098b-7613-49ea-941e-346dfd66dd3d"
                    alt="dart logo"
                  />
                  <img
                    class="inline-block mr-1"
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/flutter.png?alt=media&token=91ff755e-f94d-4b3a-98ec-62b3337d8d2b"
                    alt="flutter logo"
                  />
                  <img
                    class="inline-block mr-2"
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/firebase.png?alt=media&token=b2e3c552-4c78-4fed-9b67-3b1572e96396"
                    alt="firebase logo"
                  />
                  <img
                    class="inline-block mr-1"
                    src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/nodejs.png?alt=media&token=1a8f747d-0747-45f1-9737-e0bf35aa33f3"
                    alt="nodejs logo"
                  />
                </div>
              </div>
            </div>
            <div class="relative">
              <img
                class="rounded-bl-xl lg:w-[40vw]"
                src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/rentit-ss.webp?alt=media&token=721b9926-d658-40a4-87c0-22417ab7eecf"
                alt="Rentit's Screenshots"
              />
              <div class="absolute -right-[15vh] -z-10 -top-[10vh] w-[40vh] h-[40vh] rounded-full highlight-gradient bg-opacity-10 opacity-50  mt-auto" />
            </div>
          </article>

          {/* <!-- view more projects in my github --> */}
          <div class="flex justify-center mt-4 group">
            <a
              href="https://github.com/PriyanshuSharma23"
              target="_blank"
              class="text-primary-offwhite text-lg font-bold group-hover:text-blue-400"
            >
              View More Projects
            </a>
            <svg
              class="ml-2 fill-primary-offwhite group-hover:fill-blue-400 mr-2 inline"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
            </svg>
          </div>
        </section>

        {/* <!-- <hr class="border-white mt-4"> --> */}

        {/* <!-- Achievements Section --> */}
        <section
          class="min-h-screen pt-11 flex flex-col px-2 mx-auto max-w-6xl overflow-x-hidden"
          id="achievements"
        >
          {/* <!-- Section heading --> */}
          <h2 class="text-3xl mb-4 md:text-4xl font-bold text-center gradient-text-section-heading font-[Montserrat]">
            Achievements & Skills
          </h2>
          <article class="grid grid-cols-1 md:grid-cols-2 mt-4 gap-8">
            {/* <!-- card 1 --> */}
            <div class="w-full  p-3 mettalic-linear-gradient flex justify-between relative">
              <img
                class="flex-shrink-0 w-16 h-16"
                src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/intern-logo.png?alt=media&token=b5c91a9d-dfce-4181-b3b5-67d76c6151ab"
                alt="cup"
              />
              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-offwhite text-lg font-bold text-center flex-grow flex flex-col justify-center items-center">
                Tech Intern at PerceptionAI
              </p>
            </div>

            {/* <!-- card 2 --> */}
            <div class="w-full  p-3 mettalic-linear-gradient flex justify-between relative">
              <img
                class="flex-shrink-0 w-16 h-16"
                src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/achievement-logo.png?alt=media&token=94f46b83-f9d7-4bed-9d61-0eacc8d24bcf"
                alt="pedestal"
              />
              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-offwhite text-lg font-bold text-center flex-grow flex flex-col justify-center items-center">
                1st Place Amity CyberCup
              </p>
            </div>

            {/* <!-- card 3 --> */}
            <div class="w-full  p-3 mettalic-linear-gradient flex justify-between relative">
              <img
                class="flex-shrink-0 w-16 h-16"
                src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/achievement-logo.png?alt=media&token=94f46b83-f9d7-4bed-9d61-0eacc8d24bcf"
                alt="pedestal"
              />
              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-offwhite text-lg font-bold text-center flex-grow flex flex-col justify-center items-center">
                Won IIITD Solana Hackaday
              </p>
            </div>

            {/* <!-- card 4 --> */}
            <div class="w-full  p-3 mettalic-linear-gradient flex justify-between relative">
              <img
                class="flex-shrink-0 w-16 h-16"
                src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/education-logo.png?alt=media&token=6ee160e8-3acb-4129-9e12-47234ccde678"
                alt="lightbulb"
              />
              <p class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-offwhite text-lg font-bold text-center flex-grow flex flex-col justify-center items-center">
                2nd Year Student NSUT
              </p>
            </div>
          </article>
          <article>
            <h3 class="text-2xl font-thin mt-10 mb-4 md:text-3xl text-center text-white">
              Skill Board
            </h3>
            {/* <!-- <div class="md:max-w-xl grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-4 mx-auto place-items-center "> --> */}
            <div class="md:max-w-xl flex flex-wrap justify-center mx-auto gap-4">
              {/* <!-- figma --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-10"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/figma.png?alt=media&token=70abd316-51b4-45c3-bc7b-28f728d2409e"
                  alt="figma"
                />
              </div>
              {/* <!-- react --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-10"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/react.png?alt=media&token=3ab1c731-1400-49fa-8403-b077a936e4d4"
                  alt="react"
                />
              </div>
              {/* <!-- C --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-10"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/c.png?alt=media&token=123c2dda-58fa-4276-9b8f-5cf0bdd17227"
                  alt="C"
                />
              </div>
              {/* <!-- nodejs --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-10"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/nodejs.png?alt=media&token=1a8f747d-0747-45f1-9737-e0bf35aa33f3"
                  alt="nodejs"
                />
              </div>
              {/* <!-- nodejs --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-8"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/flutter.png?alt=media&token=91ff755e-f94d-4b3a-98ec-62b3337d8d2b"
                  alt="flutter"
                />
              </div>
              {/* <!-- javascript --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-8"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/js.png?alt=media&token=52d68c5b-7376-48bb-882a-767249b1a96f"
                  alt="javascript"
                />
              </div>
              {/* <!-- tailwind--> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="w-8"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/tailwindcss.png?alt=media&token=7278ea33-abe2-4438-a031-bb29a0aea7c1"
                  alt="tailwindcss"
                />
              </div>
              {/* <!-- python --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="w-8"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/python.png?alt=media&token=83dd32d4-de47-4449-af62-6bc9aaf44c6e"
                  alt="python"
                />
              </div>
              {/* <!-- NextJS --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-10"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/next.png?alt=media&token=68093f64-4346-42b5-b57e-65a7553b3ed9"
                  alt="nextjs"
                />
              </div>
              {/* <!-- solidjs --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="w-8"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/solidjs.png?alt=media&token=6d9098ab-b7c4-490f-8a89-73587fab673c"
                  alt="solidjs"
                />
              </div>
              {/* <!-- firebase --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="h-8"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/firebase.png?alt=media&token=b2e3c552-4c78-4fed-9b67-3b1572e96396"
                  alt="firebase"
                />
              </div>
              {/* <!-- express js --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="w-14"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/express.png?alt=media&token=3c60e291-4dc6-4d56-b69b-0cde010c3804"
                  alt="express js"
                />
              </div>
              {/* <!-- mongo db --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <img
                  class="w-14"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/mongodb.png?alt=media&token=d8eb8002-4bed-4d5a-87cc-2ba8b57ee511"
                  alt="express js"
                />
              </div>
              {/* <!-- Typescript --> */}
              <div class="w-16 h-16 bg-secondary-violet/70 rounded-full flex justify-center items-center">
                <svg
                  class="h-8 fill-blue-500"
                  viewBox="0 0 27 26"
                  width="27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </article>
        </section>

        {/* <!-- <hr class="border-white mt-4"> --> */}

        {/* <!-- Contact Me Section --> */}
        <section
          class="min-h-screen pt-11 flex flex-col px-2 mx-auto max-w-6xl"
          id="contact"
        >
          {/* <!-- Section heading --> */}
          <h2 class="text-3xl mb-4 md:text-4xl font-bold text-center gradient-text-section-heading font-[Montserrat]">
            Let's Talk
          </h2>
          <article class="p-4 flex flex-col md:flex-row-reverse justify-around items-center gap-4 mt-8">
            <div class="w-full flex-grow">
              <form
                action=""
                class="mx-auto w-full px-2 md:w-3/4 text-white"
                onSubmit={(e) => {
                  e.preventDefault();
                  let form = e.target as HTMLFormElement;
                  let formData = {
                    // @ts-ignore
                    name: form.name.value,
                    email: form.email.value,
                    message: form.message.value,
                  };

                  // @ts-ignore
                  console.log(formData);

                  // send formdata to backend
                  fetch("", {
                    method: "POST",
                    body: JSON.stringify(formData),
                  }).then((res) => {
                    if (res.status === 200) {
                      setSuccess("Message sent successfully!");
                    } else {
                      setError("Message failed to send.");
                    }
                  });
                }}
              >
                <div>
                  <label
                    for="name"
                    class="ml-1 text-lg font-bold text-primary-offwhite"
                  >
                    Name
                  </label>{" "}
                  <br />
                  <input
                    required
                    placeholder="John Doe"
                    type="text"
                    name="name"
                    id="name"
                    class="px-2 py-1 w-full bg-primary-cyan/30 border-primary-cyan border-2 h-10 rounded-lg"
                  />
                </div>
                <br />
                <div>
                  <label
                    for="email"
                    class="ml-1 text-lg font-bold text-primary-offwhite"
                  >
                    Email
                  </label>{" "}
                  <br />
                  <input
                    required
                    placeholder="john@doe.com"
                    type="email"
                    name="email"
                    id="email"
                    class="px-2 py-1 w-full bg-primary-cyan/30 border-primary-cyan border-2 h-10 rounded-lg"
                  />
                </div>
                <br />
                <div>
                  <label
                    for="message"
                    class="ml-1 text-lg font-bold text-primary-offwhite"
                  >
                    Message
                  </label>{" "}
                  <br />
                  <textarea
                    required
                    placeholder="What's your obsession with John Doe?"
                    name="message"
                    id="message"
                    class="px-2 py-1 w-full bg-primary-cyan/30 border-primary-cyan border-2 h-20 rounded-lg"
                  ></textarea>
                </div>
                <br />
                <button
                  type="submit"
                  class="md:w-1/4 w-full border-primary-cyan text-primary-cyan border-2 py-1 px-2 rounded-lg hover:bg-primary-cyan hover:text-white transition-colors"
                >
                  Send
                </button>
              </form>
            </div>

            <div class="relative">
              <div class=" w-[50vh] h-[50vh] lg:w-[50vh] lg:h-[50vh] md:w-[50vw] md:h-[50vw] -z-10   rounded-full highlight-gradient flex justify-center items-center bg-opacity-10">
                <img
                  class=" object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/deathwish-2ae85.appspot.com/o/contact-bitmoji.png?alt=media&token=b3b8d0b6-4a92-42d2-bed6-bd183d3603cc"
                  alt="contact-bitmoji"
                />
              </div>
            </div>
          </article>
        </section>

        <footer class="w-screen text-white flex flex-col items-center justify-center py-4">
          <p class="text-sm">
            Made with ❤️ by
            <a
              href="#"
              class="text-primary-cyan hover:text-primary-cyan/50 transition-colors ml-2"
            >
              Priyanshu
            </a>
          </p>
        </footer>
      </main>

      <div
        class="fixed bottom-4 left-4 text-white rounded-lg px-4 py-2 flex items-center justify-between "
        data-alert
        ref={alertClass}
      ></div>
    </>
  );
};

export default App;
