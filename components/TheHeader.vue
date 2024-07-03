<template>
  <header id="header" :class="[screenScrolled ? 'bg-white text-black' : 'bg-transparent text-white']" class="fixed top-0 z-10 backdrop-blur-2xl w-full duration-200">
    <div class="wrapper flex sm:flex-col gap-y-4 lg:flex-row sm:items-center justify-between py-4 sm:py-8">
      <div class="flex items-center gap-6">
        <ULink @click="isMenuOpen = false" to="/" class="font-black :text-base lg:text-xl uppercase font-big shrink-0"> Central Asia Container Service </ULink>
        <div class="w-[1px] hidden lg:block bg-grey-4 h-6 shrink-0"></div>
        <nav class="hidden sm:block">
          <ul class="flex items-center gap-10">
            <li><ULink to="#about">About us</ULink></li>
            <li><ULink to="#contacts">Contacts</ULink></li>
            <li><ULink to="#services">Services</ULink></li>
          </ul>
        </nav>
      </div>
      <div class="hidden sm:flex items-center gap-6">
        <div class="space-y-1">
          <p class="text-sm hidden lg:block">E-mail</p>
          <a class="font-medium" href="mailto:info@cabs.hk" target="_blank">info@cabs.hk</a>
        </div>
        <div class="w-[1px] bg-grey-4 h-6 lg:h-10"></div>
        <div class="space-y-1">
          <p class="text-sm hidden lg:block">E-mail</p>
          <a class="font-medium" href="mailto:projects@cabs.hk" target="_blank">projects@cabs.hk</a>
        </div>
      </div>
      <div class="sm:hidden">
        <UButton
          @click="isMenuOpen = !isMenuOpen"
          size="xl"
          :ui="{ padding: { xl: 'px-2 sm:px-4 py-3 sm:py-4' }, rounded: 'rounded-xl' }"
          variant="soft"
        >
          <template #trailing>
            <label class="hamburger select-none pointer-events-none">
              <input v-model="isMenuOpen" type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </template>
        </UButton>
      </div>
    </div>
  </header>
  <transition name="fade">
    <div v-if="isMenuOpen" class="top-[74px] left-0 w-full h-full bg-white z-[20] fixed flex flex-col items-center justify-center">
      <nav>
        <ul class="flex flex-col gap-4 text-2xl font-medium -mt-20">
          <li @click="isMenuOpen = false"><ULink to="#about">About us</ULink></li>
          <li @click="isMenuOpen = false"><ULink to="#contacts">Contacts</ULink></li>
          <li @click="isMenuOpen = false"><ULink to="#services">Services</ULink></li>
        </ul>
      </nav>
      <div class="mt-20">
        <div class="space-y-1 text-center">
          <p class="text-grey-0 text-sm">E-mail</p>
          <a class="font-medium block" href="mailto:info@cabs.hk" target="_blank">info@cabs.hk</a>
          <a class="font-medium block" href="mailto:projects@cabs.hk" target="_blank">projects@cabs.hk</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const isMenuOpen = ref(false);
const screenScrolled = ref(false);
// eventListeners
onMounted(() => {
  if (process.client) {
    const header = document.querySelector('#header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 108) {
        header.classList.add('shadow-lg');
      } else if (window.scrollY <= 108) {
        header.classList.remove('shadow-lg');
      }

      if (window.scrollY > window.innerHeight - 120) {
        screenScrolled.value = true;
      } else {
        screenScrolled.value = false;
      }
    });
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', () => {
      if (window.scrollY > 108) {
        header.classList.add('shadow-lg');
      } else if (window.scrollY <= 108) {
        header.classList.remove('shadow-lg');
      }

      if (window.scrollY > window.innerHeight - 120) {
        screenScrolled.value = true;
      } else {
        screenScrolled.value = false;
      }
    });
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.hamburger {
  cursor: pointer;
}

.hamburger input {
  display: none;
}

.hamburger svg {
  /* The size of the SVG defines the overall size */
  height: 1.5em;
  /* Define the transition for transforming the SVG */
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger .line {
  fill: none;
  stroke: #1878F3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  /* Define the transition for transforming the Stroke */
  transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger .line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger input:checked+svg {
  transform: rotate(-45deg);
}

.hamburger input:checked+svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}
</style>
