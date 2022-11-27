<template>
  <div id="drag-cursor">
    <span>Drag</span>
  </div>
  <section ref="sliderRef" class="h-slider">
    <Swiper :slidesPerView="'auto'" :spaceBetween="30" :loop="true">
      <SwiperSlide v-for="i of 3" :key="i">
        <div class="bg-slate-100 border mx-5">
          <div class="flex justify-between items-center bg-white p-5">
            <div class="flex items-center justify-start">
              <img
                src="../../assets/quote.png"
                class="w-20 h-20 rounded-full"
                alt="Student"
              />
              <div class="mx-4">
                <span class="font-bold">Irene Pereyra</span>
                <p class="font-lighter text-base">
                  Interaction Design Fellow ‘19
                </p>
              </div>
            </div>
            <a href="#">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.43243 0.856445C1.08961 0.856445 0 1.92225 0 3.23572C0 4.54919 1.08961 5.63729 2.43243 5.63729C3.77525 5.63729 4.86486 4.54919 4.86486 3.23572C4.86402 1.92225 3.77441 0.856445 2.43243 0.856445ZM17.9955 18.0675V18.0667H18V11.4059C18 8.14739 17.3022 5.63729 13.5129 5.63729C11.6913 5.63729 10.4689 6.64224 9.96982 7.59497H9.91713V5.9415H6.32432V18.0667H10.0654V12.0628C10.0654 10.4819 10.3635 8.95332 12.3108 8.95332C14.2295 8.95332 14.2582 10.7574 14.2582 12.1642V18.0675H17.9955ZM4.37838 6.59346H0.486486V18.0675H4.37838V6.59346Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div class="px-10 py-10 lg:px-32 lg:py-20">
            <p class="text-2xl font-lighter">
              This Fellowship was a turning point in my career. I wouldn’t be
              where I am today without the financial support and experienced
              offered through the program.
            </p>
            <p class="mt-10">
              <span>Eduction</span>
              <span class="mx-5">.</span>
              <span> B.A. Visual Design </span>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";

const sliderRef = ref();

onMounted(() => {
  sliderRef.value.addEventListener("mousemove", (e) => {
    // console.log(e);
    gsap.to("#drag-cursor", {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
    });
  });

  document.querySelector(".swiper").addEventListener("mouseenter", () => {
    gsap.to("#drag-cursor", {
      display: "inline-flex",
      duration: 0,
    });
  });
  document.querySelector(".swiper").addEventListener("mouseleave", () => {
    gsap.to("#drag-cursor", {
      display: "none",
      duration: 0,
    });
  });
});
</script>

<style lang="scss">
.h-slider {
  position: relative;
  padding-top: 50px;
  margin-top: 250px;
  margin-bottom: 200px;
  &::after {
    position: absolute;
    content: " ";
    width: 80%;
    height: 400px;
    background-image: url("../../assets/pattern.png");
    top: 150px;
    border: 1px solid #e6e6e6;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 1024px) {
      width: 100%;
      background: #685dc5;
    }
  }
}
.swiper-wrapper {
  overflow: visible;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}

.swiper-slide {
  width: 80%;
  cursor: none;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}
#drag-cursor {
  position: fixed;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  z-index: 999;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  background: #685dc5;
  color: #ffffff;
  border-radius: 30px;
  pointer-events: none;
  opacity: 0.8;
}
</style>
