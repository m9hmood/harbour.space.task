<template>
  <section>
    <!-- About Hero Section -->
    <div
      class="relative border mx-5 lg:mx-0 lg:border-0 lg:grid lg:grid-cols-[1fr_1fr] lg:px-48 items-center mb-10 bg-white"
    >
      <div>
        <div class="relative student-image">
          <img
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            src="../../assets/student.png"
            width="380"
            height="380"
            alt="Student Photo"
          />
        </div>
      </div>
      <div class="p-5 lg:p-0">
        <h2 class="text-4xl text-harbour mb-10 mt-0 lg:mt-10 lg:mt-0">
          About the <br />
          apprenticeship
        </h2>
        <p class="text-2xl font-lighter">
          Our scholarships are designed to give talented and driven young people
          from any background access to top-class education, experience and
          network. We offer a fully-funded master’s degree alongside an
          apprenticeship and a guaranteed job upon graduation.
        </p>
      </div>
    </div>
    <!--/ About Hero Section -->

    <!-- About Info -->
    <div
      class="relative px-5 lg:grid lg:grid-cols-[1fr_2fr] lg:px-48 mb-10 lg:gap-4"
    >
      <!-- Left Column -->
      <div class="bg-white lg:border p-5 lg:pb-0 pt-10">
        <div class="lg:h-60">
          <span class="text-base text-harbour">Scholarship value</span>
          <p class="text-2xl mt-10">€31,300</p>
        </div>
        <hr />
        <div class="flex my-5">
          <div class="w-3/6">
            <span class="text-harbour">Tutation Covered</span>
            <p class="text-base font-light">$20,900</p>
          </div>
          <div class="w-3/6">
            <span class="text-harbour">Remaining</span>
            <p class="text-base font-light">$2,000</p>
          </div>
        </div>
        <div class="flex my-5">
          <div class="w-3/6">
            <span class="text-harbour">Living Stipend</span>
            <p class="text-base font-light">$8,400 ($700/month)</p>
          </div>
        </div>
      </div>
      <!--/ Left Column -->

      <!-- Right Column -->
      <div>
        <div class="relative lg:grid lg:grid-cols-[1fr_1fr] lg:gap-4">
          <div class="bg-white border p-5 mt-5 lg:mt-0">
            <span class="text-base text-harbour">Study Commitment</span>
            <p class="text-2xl my-5">3 hours/day</p>
            <hr class="w-10 mb-5" />
            <p class="font-lighter">
              You will complete 15 modules to graduate. Daily classes are 3
              hours, plus coursework to complete in your own time.
            </p>
          </div>
          <div class="bg-white border p-5 mt-5 lg:mt-0">
            <span class="text-base text-harbour">Work Commitment</span>
            <p class="text-2xl my-5">4 hours / day</p>
            <hr class="w-10 mb-5" />
            <p class="font-lighter">
              Immerse yourself in the professional world during your
              apprenticeship. You’ll learn the ropes from the best and get to
              apply your newly acquired knowledge in the field from day one.
            </p>
          </div>
        </div>
        <div class="mt-5">
          <div class="relative my-10">
            <hr />
            <span
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-base px-2"
            >
              GRADUATION
            </span>
          </div>
          <div class="bg-white border p-5">
            <span class="text-base text-harbour">A full-time contract</span>
            <p class="text-2xl my-5">1 Year / Full-Time</p>
            <hr class="w-10 mb-5" />
            <p class="font-lighter">
              You’ll be guaranteed a 1 year contract with SCG upon graduation.
            </p>
          </div>
        </div>
      </div>
      <!--/ Right Column  -->
    </div>
    <!--/ About Info -->
  </section>
</template>

<style lang="scss">
.student-image {
  width: 438px;
  height: 438px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: url("../../assets/pattern.png");
    background-size: cover;
    border: 1px solid #e6e6e6;
  }
  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    img {
      width: 90%;
    }
  }
}
</style>
