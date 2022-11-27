<template>
  <section
    id="h-header"
    class="relative flex flex-col-reverse justify-center px-10 lg:grid lg:grid-cols-[1fr_1fr] lg:px-48 lg:h-screen items-center mb-10"
  >
    <div class="pr-10">
      <h2 class="text-6xl text-harbour hidden lg:inline">
        Interaction Design Apprenticeship
      </h2>
      <p class="my-10 text-xl">
        A fully funded work-study program to launch your tech career
      </p>
      <p class="text-xl font-lighter mb-10">
        Harbour.Space has partnered with SCG to empower driven talent and
        eliminate the barriers to accessing exceptional education and career
        opportunities through a Masters Fellowship.
      </p>
      <p class="text-xl font-lighter mb-20">
        <b>Position:</b> Marketing Performance
      </p>
      <a href="#" class="py-4 px-10 bg-harbour text-white rounded-3xl">
        Apply Now
      </a>
    </div>
    <div class="w-full mt-32 lg:mt-0">
      <h2 class="text-4xl text-harbour inline lg:hidden">
        Interaction Design Apprenticeship
      </h2>
      <div class="flex justify-start items-center mt-10 lg:mt-0">
        <img src="../../assets/zeptolab.png" width="80" alt="zeptolab logo" />
        <div class="ml-10">
          <span class="font-lighter text-sm">Powered by:</span>
          <h5 class="text-xl">Zeptolab</h5>
        </div>
      </div>
      <div class="bg-white border p-10 my-5">
        <span class="text-harbour">Application closes in</span>
        <p class="text-2xl">6 Day : 22 Hrs : 56 Min : 13 Seg</p>
      </div>
      <div class="bg-white border p-10 my-5">
        <div class="flex">
          <div class="w-3/6">
            <span class="text-harbour text-xl">Location</span>
            <p class="text-lg font-lighter">Bangkok</p>
          </div>
          <div class="w-3/6">
            <span class="text-harbour text-xl">Duration</span>
            <p class="text-lg font-lighter">1 Year</p>
            <p class="text-lg font-lighter">Full-Time</p>
          </div>
        </div>
        <div class="flex">
          <div class="w-3/6">
            <span class="text-harbour text-xl">Start Date</span>
            <p class="text-lg font-lighter">30 June 2020</p>
          </div>
          <div class="w-3/6">
            <span class="text-harbour text-xl">End Date</span>
            <p class="text-lg font-lighter">3 Aug 2020</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#h-header {
  &::after {
    position: absolute;
    content: " ";
    width: 580px;
    height: 257px;
    right: -10px;
    bottom: 150px;
    background: url("../../assets/pattern.png");
    border: 1px solid #e6e6e6;
    z-index: -1;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
