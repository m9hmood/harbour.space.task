<template>
  <div
    class="relative w-[48px] h-[48px] rounded-full cursor-pointer"
    @mouseenter="animateOnHover"
    @mouseleave="animateOnLeave"
  >
    <svg class="h-button__ring" width="48" height="48">
      <circle
        ref="ringRef"
        stroke="#DADADA"
        stroke-width="2"
        fill="transparent"
        r="22"
        cx="24"
        cy="24"
      />
      <circle
        ref="progressRef"
        class="transition-[stroke-dashoffset] -rotate-90 origin-[50%_50%]"
        stroke="#685DC5"
        stroke-width="2"
        fill="transparent"
        r="22"
        cx="24"
        cy="24"
      />
    </svg>
    <div
      ref="iconRef"
      class="absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4"
    >
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.248 6.56807L4.24799 10.8161L5.59199 10.8161L5.59199 6.56807L5.592 5.22407L5.592 0.976074L4.248 0.976074L4.248 5.22407L4.248 6.56807Z"
          fill="#959595"
        />
        <path
          d="M4.248 5.22387L-3.6972e-06 5.22387L-3.8147e-06 6.56787L4.248 6.56787L5.592 6.56787L9.84 6.56787L9.84 5.22387L5.592 5.22387L4.248 5.22387Z"
          fill="#959595"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  isActive: Boolean,
});

const progressRef = ref();
const iconRef = ref();
const ringRef = ref();
const radius = ref(null);
const circumference = ref(null);

const setProgress = (percent) => {
  progressRef.value.style.strokeDashoffset =
    circumference.value - (percent / 100) * circumference.value;
};

const animateOnHover = () => {
  if (!props.isActive) {
    setProgress(100);
    gsap.to(iconRef.value, {
      rotate: 270,
    });
  }
};

const animateOnLeave = () => {
  if (props.isActive) return;
  setProgress(0);
  gsap.to(iconRef.value, {
    rotate: 0,
  });
  gsap.to(progressRef.value, {
    fill: "transparent",
  });
};

const onActivate = () => {
  gsap.to(iconRef.value.querySelectorAll("path")[0], {
    rotation: 360,
    transformOrigin: "50% 50%",
  });
  gsap.to(iconRef.value.querySelectorAll("path")[1], {
    rotation: 270,
    transformOrigin: "50% 50%",
  });
  gsap.to(
    [
      iconRef.value.querySelectorAll("path")[0],
      iconRef.value.querySelectorAll("path")[1],
    ],
    {
      fill: "#fff",
      delay: 0.3,
    }
  );
  gsap.to(ringRef.value, {
    stroke: "#685DC5",
  });
  gsap.to(ringRef.value, {
    attr: {
      r: 0.2,
      "stroke-width": 45,
    },
    duration: 1,
  });
};
const onDeactivate = () => {
  gsap.to(iconRef.value.querySelectorAll("path")[0], {
    rotation: 90,
    transformOrigin: "50% 50%",
  });
  gsap.to(iconRef.value.querySelectorAll("path")[1], {
    rotation: 90,
    transformOrigin: "50% 50%",
  });
  gsap.to(
    [
      iconRef.value.querySelectorAll("path")[0],
      iconRef.value.querySelectorAll("path")[1],
    ],
    {
      fill: "#959595",
      delay: 0.3,
    }
  );
  gsap.to(ringRef.value, {
    stroke: "#DADADA",
  });
  gsap.to(ringRef.value, {
    attr: {
      r: 22,
      "stroke-width": 2,
    },
    duration: 1,
  });
};

onMounted(() => {
  radius.value = progressRef.value.r.baseVal.value;
  circumference.value = radius.value * 2 * Math.PI;
  progressRef.value.style.strokeDasharray = `${circumference.value} ${circumference.value}`;
  progressRef.value.style.strokeDashoffset = `${circumference.value}`;
  setProgress(0);
});

watch(
  () => props.isActive,
  (value) => {
    if (value) {
      onActivate();
    } else onDeactivate();
  }
);
</script>

<style lang="scss">
.h-button2 {
  &__progress {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    color: #959595;
  }
}
</style>
