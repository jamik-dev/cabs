<template>
  <main>
    <UModal
      v-model="isModalOpen"
      :ui="{
        width: 'sm:max-w-[1000px]',
        shadow: 'shadow-none',
        rounded: 'rounded-2xl md:rounded-3xl',
        container: 'items-center'
      }"
    >
      <article class="p-4 md:p-10 space-y-10 relative">
        <div class="flex justify-end absolute top-1 right-2 md:top-4 md:right-10 xl:-top-1 xl:-right-14">
          <UButton
            class="xl:text-white"
            color="white"
            variant="soft"
            size="lg"
            :ui="{ rounded: 'rounded-full', icon: { size: { lg: 'w-8 h-8' } } }"
            icon="i-heroicons-x-mark-20-solid"
            @click="isModalOpen = false"
          />
        </div>
        <div class="h-[300px] sm:h-[400px] md:h-[525px] overflow-hidden rounded-lg">
          <img class="w-full h-full object-cover" :src="`${useRuntimeConfig().public.BASE_URL}/storage/${service.photo}`" :alt="service.title.en" />
        </div>
        <div class="space-y-4">
          <h4 class="text-xl md:text-3xl font-bold font-big uppercase">{{ service.title.en }}</h4>
          <div v-html="service.descriptions.en" class="text-sm md:text-base text-grey-0">
          </div>
        </div>
        <div class="p-5 md:p-10 bg-blue text-white rounded-lg flex flex-col gap-y-4 sm:flex-row justify-between sm:items-center">
          <div class="space-y-2">
            <h4 class="text-lg md:text-4xl font-semibold uppercase font-big">{{ data.translations['main.manager_title'] }}</h4>
            <p class="text-sm md:text-base sm:max-w-[80%] md:max-w-[70%]">{{ data.translations['main.manager_subtitle'] }}</p>
          </div>
          <UButton
            @click="isModalOpen = false"
            class="w-fit text-blue"
            to="#contacts"
            size="xl"
            color="white"
            variant="solid"
            :label="data.translations['main.get_consulatation']"
            trailingIcon="i-heroicons-arrow-right"
            :ui="{ font: 'font-normal', size: { xl: 'text-sm' }, icon: { size: { xl: 'h-4 w-4' } }, rounded: 'rounded-lg' }"
          />
        </div>
      </article>
    </UModal>
    <section id="hero">
      <div
        class="flex items-center justify-center min-h-screen bg-[url('~/assets/images/hero.png')] bg-no-repeat bg-center bg-cover relative before:absolute before:pointer-events-none before:left-0 before:top-0 before:h-full before:w-full before:z-1 before:bg-black before:opacity-50"
      >
        <div class="flex flex-col gap-6 z-[2]">
          <p @click="isMenuOpen = false" to="/" class="font-black text-center text-white text-base lg:text-xl uppercase font-big shrink-0">{{ data.translations['logo.title'] }}</p>
          <h1 class="text-white text-center text-4xl md:text-6xl xl:text-[80px] max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto font-big font-extrabold uppercase leading-[120%]">
            {{ data.translations['main.hero_title'] }}
          </h1>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="bg-grey-5 relative overflow-hidden">
        <div class="wrapper grid grid-cols-1 md:grid-cols-10 gap-y-20 gap-x-10 py-20">
          <div class="md:col-span-6 items-center">
            <p>About company</p>
            <h2 class="uppercase font-big text-xl lg:text-3xl font-extrabold mt-1">{{ data.translations['main.about_title'] }}</h2>
            <p class="text-base lg:text-xl mt-6 text-grey-0">
              {{ data.translations['main.about_description'] }}
            </p>
          </div>
          <div
            class="absolute bottom-0 w-full h-[500px] md:top-0 right-0 md:h-full md:w-2/5 before:bg-blue before:top-0 before:h-full before:w-full before:z-[2] before:absolute before:opacity-80 bg-[url('~/assets/images/about.jfif')] bg-cover bg-no-repeat bg-center"
          ></div>
          <div class="md:col-span-4 z-10 flex md:pl-10 lg:pl-20 h-[400px] md:h-auto">
            <h2 class="uppercase text-white font-big text-xl lg:text-2xl font-extrabold mt-1 z-10">{{ data.translations['logo.title'] }}</h2>
          </div>
        </div>
      </div>
    </section>
    <section id="choose">
      <div class="wrapper py-20">
        <h3 class="text-2xl md:text-4xl font-big uppercase font-extrabold text-center">Why choose CENTRAL ASIA BUSINESS SERVICE</h3>
        <div class="grid grid-cols-6 gap-6 mt-10">
          <div v-for="post in data.posts" :key="post.id" class="col-span-6 sm:col-span-3 lg:col-span-2 rounded-2xl bg-grey-1 p-6">
            <div class="h-14 w-14 flex items-center justify-center bg-white rounded-lg">
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.4"
                  d="M0.666504 13.4375V5.4272C0.666504 4.31278 1.23718 3.29401 2.1406 2.79562L4.87373 1.28786C5.61429 0.879318 6.43089 0.666626 7.25887 0.666626H9.50046C11.1551 0.666626 12.6976 1.512 13.6984 2.92124L11.1125 6.48754C10.4791 7.36118 10.5423 8.62063 11.2593 9.41175C12.0365 10.2692 13.2965 10.2692 14.0737 9.41175L15.9606 7.32984L19.0151 13.5083C19.8508 15.1987 19.0139 17.3046 17.3208 17.7716L12.6144 19.0697C10.9182 19.5376 9.12977 19.3795 7.52274 18.6196L2.28272 16.1419C1.30223 15.6782 0.666504 14.6145 0.666504 13.4375Z"
                  fill="#1878F3"
                />
                <path
                  d="M27.333 13.7688V5.4272C27.333 4.31278 26.7623 3.29401 25.8589 2.79562L23.1258 1.28786C22.3852 0.879318 21.5686 0.666626 20.7406 0.666626H17.8963C16.2762 0.666626 14.7438 1.4792 13.7317 2.87507L11.1124 6.48754C10.4789 7.36118 10.5421 8.62063 11.2592 9.41175C12.0363 10.2692 13.2964 10.2692 14.0735 9.41175L15.9605 7.32984L19.0149 13.5083C19.5468 14.5841 19.4012 15.8282 18.7886 16.711H24.6663C26.1391 16.711 27.333 15.3937 27.333 13.7688Z"
                  fill="#1878F3"
                />
              </svg>
            </div>
            <h4 class="text-xl lg:text-2xl font-medium mt-6">{{ post.title.en }}</h4>
            <div v-html="post.descriptions.en" class="text-sm lg:text-grey-0 mt-4">
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 wrapper bg-blue text-white py-7 sm:py-14 px-5 sm:px-20 rounded-2xl flex flex-col gap-y-10 md:flex-row justify-between items-center">
        <div class="space-y-2">
          <h2 class="text-2xl lg:text-4xl font-semibold font-big uppercase text-center md:text-start">{{ data.translations['contact.contact_us'] }}</h2>
          <p class="text-center md:text-start">{{ data.translations['contact.socials'] }}</p>
        </div>
        <div class="flex flex-col sm:flex-row gap-y-4 gap-x-10">
          <ULink class="text-xl lg:text-2xl font-medium text-center md:text-start" :to="`mailto:${data.translations['contact.email_1']}`">{{ data.translations['contact.email_1'] }}</ULink>
          <ULink class="text-xl lg:text-2xl font-medium text-center md:text-start" :to="`tel:${data.translations['contact.phone']}`">{{ data.translations['contact.phone'] }}</ULink>
        </div>
      </div>
    </section>
    <section id="services">
      <div class="wrapper py-16 sm:py-[120px]">
        <div class="flex flex-col gap-4">
          <h3 class="text-2xl text-center md:text-4xl font-big uppercase font-extrabold">Services</h3>
          <p class="mx-auto md:max-w-[50%] text-center text-grey-0">
            {{data.translations['main.services_subtitle']}}
          </p>
        </div>
        <div class="mt-6 grid grid-cols-2 gap-6">
          <figure
            @click="serviceModal(service.id)"
            v-for="service in data.services"
            :key="service.id"
            class="bg-grey-1 col-span-2 sm:col-span-1 rounded-2xl p-2 group grid grid-cols-2 sm:grid-cols-10 gap-5 lg:gap-10 cursor-pointer"
          >
            <div class="sm:col-span-4 rounded-xl overflow-hidden h-[160px] lg:h-[260px]">
              <img class="w-full h-full object-cover group-hover:scale-105 duration-200" :src="`${useRuntimeConfig().public.BASE_URL}/storage/${service.photo}`" :alt="service.title.en" />
            </div>
            <div class="sm:col-span-6 py-4 lg:py-8 pr-4 lg:pr-8 flex flex-col justify-between">
              <figcaption class="text-base lg:text-2xl font-semibold line-clamp-3">{{ service.title.en }}</figcaption>
              <p class="flex items-center gap-2 mt-6 text-blue duration-200"><span>Read more</span><UIcon name="i-heroicons-arrow-right" /></p>
            </div>
          </figure>
        </div>
      </div>
    </section>
    <section id="clients">
      <div class="wrapper">
        <h3 class="text-2xl md:text-4xl font-big uppercase font-extrabold text-center">Our clients and partners</h3>
        <Swiper
          class="mt-6"
          :modules="[SwiperAutoplay]"
          :slides-per-view="6"
          :loop="true"
          :space-between="12"
          :speed="1000"
          :breakpoints="{
            0: {
              slidesPerView: 2
            },
            640: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 4.5
            },
            1024: {
              slidesPerView: 6
            }
          }"
          :autoplay="{
            delay: 2000
            // disableOnInteraction: true
          }"
        >
          <SwiperSlide class="border-r border-grey-4 last:border-0" v-for="partner in data.partners" :key="partner.id">
            <ULink :to="partner.link" target="_blank" class="h-[80px] overflow-hidden relative flex justify-center items-center">
              <img class="object-contain" :src="`${useRuntimeConfig().public.BASE_URL}/storage/${partner.photo}`" :alt="partner.title.en" />
            </ULink>
          </SwiperSlide>
        </Swiper>
        <Swiper
          class="mt-20 rounded-2xl"
          :modules="[SwiperAutoplay]"
          :slides-per-view="2.5"
          :loop="true"
          :speed="1000"
          :space-between="24"
          :breakpoints="{
            0: {
              slidesPerView: 1.1
            },
            640: {
              slidesPerView: 2.5
            }
          }"
          :autoplay="{
            delay: 3000
            // disableOnInteraction: true
          }"
        >
          <SwiperSlide v-for="banner in data.banners" :key="banner.id">
            <div class="rounded-2xl overflow-hidden h-[370px] relative flex justify-center items-center">
              <img class="w-full h-full object-cover" :src="`${useRuntimeConfig().public.BASE_URL}/storage/${banner.photo}`" :alt="banner.title.en" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section id="contacts">
      <div class="wrapper py-20">
        <div class="p-4 sm:p-7 md:p-14 rounded-3xl bg-grey-1">
          <h3 class="text-center md:text-start text-2xl md:text-3xl font-big uppercase font-extrabold">Contact us</h3>
          <div class="grid md:grid-cols-2 gap-7 mt-6">
            <UForm :validate="validate" :state="state" @submit="submitMessage">
              <div class="grid sm:grid-cols-2 gap-x-4 gap-y-6">
                <UFormGroup name="first_name">
                  <UInput
                    type="text"
                    placeholder="First name"
                    v-model="user.first_name"
                    size="xl"
                    :ui="{
                      rounded: 'rounded-none',
                      padding: {
                        xl: 'px-4 py-3'
                      },
                      placeholder: 'text-grey-0',
                      color: {
                        white: {
                          outline: 'shadow-none ring-0 focus:border-b-2 focus:ring-0 border-b border-grey-2 focus:border-red bg-transparent'
                        }
                      }
                    }"
                    class="w-full"
                  />
                </UFormGroup>

                <UFormGroup name="last_name">
                  <UInput
                    type="text"
                    placeholder="Last name"
                    v-model="user.last_name"
                    size="xl"
                    :ui="{
                      rounded: 'rounded-none',
                      padding: {
                        xl: 'px-4 py-3'
                      },
                      placeholder: 'text-grey-0',
                      color: {
                        white: {
                          outline: 'shadow-none ring-0 focus:border-b-2 focus:ring-0 border-b border-grey-2 focus:border-red bg-transparent'
                        }
                      }
                    }"
                    class="w-full"
                  />
                </UFormGroup>

                <UFormGroup class="sm:col-span-2" name="company">
                  <UInput
                    type="text"
                    placeholder="Company"
                    v-model="user.company"
                    size="xl"
                    :ui="{
                      rounded: 'rounded-none',
                      padding: {
                        xl: 'px-4 py-3'
                      },
                      placeholder: 'text-grey-0',
                      color: {
                        white: {
                          outline: 'shadow-none ring-0 focus:border-b-2 focus:ring-0 border-b border-grey-2 focus:border-red bg-transparent'
                        }
                      }
                    }"
                    class="w-full"
                  />
                </UFormGroup>

                <UFormGroup name="email">
                  <UInput
                    type="email"
                    placeholder="Email"
                    v-model="user.email"
                    size="xl"
                    :ui="{
                      rounded: 'rounded-none',
                      padding: {
                        xl: 'px-4 py-3'
                      },
                      placeholder: 'text-grey-0',
                      color: {
                        white: {
                          outline: 'shadow-none ring-0 focus:border-b-2 focus:ring-0 border-b border-grey-2 focus:border-red bg-transparent'
                        }
                      }
                    }"
                    class="w-full"
                  />
                </UFormGroup>

                <UFormGroup name="phone">
                  <ClientOnly>
                    <UInput
                      placeholder="Phone number"
                      v-maska
                      data-maska="+998 (##) ###-##-##"
                      v-model="user.phone_number"
                      size="xl"
                      :ui="{
                        rounded: 'rounded-none',
                        padding: {
                          xl: 'px-4 py-3'
                        },
                        placeholder: 'text-grey-0',
                        color: {
                          white: {
                            outline: 'shadow-none ring-0 focus:border-b-2 focus:ring-0 border-b border-grey-2 focus:border-red bg-transparent'
                          }
                        }
                      }"
                    />
                  </ClientOnly>
                </UFormGroup>

                <UFormGroup class="sm:col-span-2" name="message">
                  <UTextarea
                    v-model="user.descriptions"
                    placeholder="Your message"
                    size="xl"
                    :ui="{
                      base: 'h-24',
                      rounded: 'rounded-none',
                      padding: {
                        xl: 'px-4 py-3'
                      },
                      placeholder: 'text-grey-0',
                      color: {
                        white: {
                          outline: 'shadow-none ring-0 focus:border-b-2 focus:ring-0 border-b border-grey-2 focus:border-red bg-transparent'
                        }
                      }
                    }"
                  />
                </UFormGroup>
              </div>

              <UButton
                :disabled="isDisabled"
                :loading="state.loading"
                class="mt-6 w-[200px]"
                type="submit"
                size="xl"
                color="primary"
                variant="solid"
                :label="data.translations['contact.send']"
                trailingIcon="i-heroicons-arrow-right"
                :ui="{ base: 'justify-center', font: 'font-normal', size: { xl: 'text-sm' }, icon: { size: { xl: 'h-4 w-4' } } }"
              />
            </UForm>
            <div class="bg-white rounded-2xl p-6 flex flex-col justify-between">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <p class="text-grey-3">{{ data.translations['contact.address_title'] }}</p>
                  <p>{{ data.translations['contact.address'] }}</p>
                </div>
                <div class="space-y-4">
                  <p class="text-grey-3">{{ data.translations['contact.work_title'] }}</p>
                  <p>{{ data.translations['contact.work_time'] }}</p>
                </div>
                <div class="space-y-4">
                  <p class="text-grey-3">{{ data.translations['contact.email_title'] }}</p>
                  <div class="flex flex-col xl:flex-row gap-x-4 gap-y-1">
                    <ULink class="hover:text-red duration-200" target="_blank" :to="`mailto:${data.translations['contact.email_1']}`">{{ data.translations['contact.email_1'] }}</ULink>
                    <ULink class="hover:text-red duration-200" target="_blank" :to="`mailto:${data.translations['contact.email_2']}`">{{ data.translations['contact.email_2'] }}</ULink>
                  </div>
                </div>
                <div class="space-y-4">
                  <p class="text-grey-3">{{ data.translations['contact.social_title'] }}</p>
                  <div class="flex gap-2">
                    <ULink :to="data.translations['contact.facebook']" target="_blank"
                      ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_23_633)" />
                        <path
                          d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_23_633" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#18ACFE" />
                            <stop offset="1" stop-color="#0163E0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </ULink>
                    <ULink :to="data.translations['contact.linkedin']" target="_blank"
                      ><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1" />
                        <path
                          d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z"
                          fill="white"
                        />
                        <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white" />
                        <path
                          d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z"
                          fill="white"
                        />
                      </svg>
                    </ULink>
                  </div>
                </div>
              </div>
              <ULink to="/" class="font-black text-base lg:text-lg uppercase font-big mt-10 text-blue">{{ data.translations['logo.title'] }}</ULink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useAxios } from '~/api/index';

const { data } = await useAsyncData('home', async () => {
  const [translations, posts, banners, partners, services] = await Promise.all([
    useAxios().getRequest('/api/translations'),
    useAxios().getRequest('/api/posts'),
    useAxios().getRequest('/api/banners'),
    useAxios().getRequest('/api/partners'),
    useAxios().getRequest('/api/services')
  ]);

  return {translations, posts, banners, partners, services}
});

useHead(() => {
  return {
    title: 'Central Asia Business Service',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'CENTRAL ASIA BUSINESS SERVICE'
      }
    ]
  };
});

// dynamic datas
const isModalOpen = ref(false);
const service = ref(null);

const state = reactive({
  errors: [],
  loading: false
});

const user = reactive({
  first_name: '',
  last_name: '',
  company: '',
  email: '',
  phone_number: '',
  descriptions: ''
});

const isDisabled = computed(() => {
  return state.loading || validate().length > 0;
});

function serviceModal(id) {
  service.value = data.value.services.find((service) => service.id === id);
  isModalOpen.value = true;
}

async function submitMessage() {
  state.loading = true;
  try {
    let res = await useAxios().postRequest('/api/zayavkas', {
      ...user
    });
    if (res.status === 201) {
      user.first_name = '';
      user.last_name = '';
      user.company = '';
      user.email = '';
      user.phone_number = '';
      user.descriptions = '';
      state.errors = [];
    } else {
      state.errors = [{ path: 'form', message: 'Something went wrong' }];
    }
  } catch {
    state.errors = [{ path: 'form', message: 'Something went wrong' }];
  } finally {
    state.loading = false;
  }
}

function validate() {
  const errors = [];
  if (!user.phone_number || user.phone_number.length < 19)
    errors.push({
      path: 'phone',
      message: user.phone_number.length < 19 && user.phone_number.length > 0 ? 'Phone number should be full' : 'Phone number can not be blank'
    });
  if (!user.first_name) errors.push({ path: 'first_name', message: 'First Name can not be blank' });
  if (!user.last_name) errors.push({ path: 'last_name', message: 'Last name can not be blank' });
  if (!user.company) errors.push({ path: 'company', message: 'Company can not be blank' });
  if (!user.email) errors.push({ path: 'email', message: 'Email can not be blank' });
  if (!user.descriptions) errors.push({ path: 'message', message: 'Message can not be blank' });

  return errors;
}
</script>

<style></style>
