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
        <div class="h-[525px] overflow-hidden rounded-lg">
          <img class="w-full h-full object-cover" src="~/assets/images/modal.png" alt="modal" />
        </div>
        <div class="space-y-4">
          <h4 class="tetxt-lg md:text-xl font-semibold">Representation of transport companies with rich experience EU-Uzbekistan, Asia-Uzbekistan</h4>
          <p class="text-sm md:text-base text-grey-0">
            Our company cooperates with experienced transport companies specialising in EU-Uzbekistan and Asia-Uzbekistan routes. We ensure reliable and timely delivery of cargo,
            which contributes to the smooth operation of your business. Our partners offer various modes of transport, including road, rail and air to meet any customer needs.
          </p>
        </div>
        <div class="p-5 md:p-10 bg-black rounded-lg flex flex-col gap-y-4 sm:flex-row justify-between sm:items-center">
          <div class="space-y-2">
            <h4 class="text-lg md:text-xl font-semibold text-white uppercase">Get advice from a manager</h4>
            <p class="text-grey-2 text-sm md:text-base sm:max-w-[80%] md:max-w-[70%]">Need more details? Discuss requirements? We will help you find the right solution</p>
          </div>
          <UButton
            class="w-fit"
            to="#contacts"
            size="xl"
            color="primary"
            variant="solid"
            label="Получить консультацию"
            trailingIcon="i-heroicons-arrow-right"
            :ui="{ font: 'font-normal', size: { xl: 'text-sm' }, icon: { size: { xl: 'h-4 w-4' } } }"
          />
        </div>
      </article>
    </UModal>
    <section id="hero">
      <div
        class="flex items-end min-h-[600px] bg-[url('~/assets/images/hero.png')] bg-no-repeat bg-center bg-cover relative before:absolute before:pointer-events-none before:left-0 before:top-0 before:h-full before:w-full before:z-1 before:bg-gradient-to-t before:from-[rgba(0,0,0,0.6)] before:to-[rgba(0,0,0,0)]"
      >
        <div class="mb-5 sm:mb-10 wrapper flex flex-col gap-y-6 sm:flex-row sm:items-center justify-between z-[2]">
          <h1 class="text-white text-base sm:text-xl md:text-3xl sm:max-w-[70%] font-roboto font-extrabold leading-[120%] uppercase">
            We offer a wide range of services in the field of logistics and supply chain management
          </h1>
          <UButton
            class="w-fit"
            to="#contacts"
            size="xl"
            color="primary"
            variant="solid"
            label="Contact us"
            trailingIcon="i-heroicons-arrow-right"
            :ui="{ font: 'font-normal', size: { xl: 'text-sm' }, icon: { size: { xl: 'h-4 w-4' } } }"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <div class="min-h-[530px] bg-[url('~/assets/images/about.png')] bg-no-repeat bg-cover bg-center">
        <div class="wrapper grid grid-cols-1 md:grid-cols-10 gap-10 py-20 items-center">
          <div class="md:col-span-4 rounded-2xl overflow-hidden group">
            <img class="w-full h-full object-cover group-hover:scale-105 duration-200" src="~/assets/images/about-2.png" alt="about image" />
          </div>
          <div class="md:col-span-6">
            <p class="text-red">About us</p>
            <h2 class="uppercase font-roboto text-xl lg:text-3xl font-extrabold mt-1">central asia container service</h2>
            <p class="text-base lg:text-xl mt-6">
              CENTRAL ASIA CONTAINER SERVICE was founded in 2018 and specializes in providing comprehensive services in the field of logistics, equipment installation and <br />
              installation, as well as personnel training. Our goal is to provide you with high quality services that will help your business grow and prosper. <br />
              <br />
              The company offers a wide range of services in the field of logistics and supply chain management:
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="services">
      <div class="wrapper py-16 sm:py-[120px]">
        <h3 class="text-xl md:text-3xl font-roboto uppercase font-extrabold">Services</h3>
        <div class="mt-6 grid grid-cols-12 gap-6">
          <figure
            @click="isModalOpen = true"
            v-for="item in 8"
            :key="item"
            class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 min-h-[460px] flex flex-col justify-end cursor-pointer p-6 rounded-2xl overflow-hidden relative group before:left-0 before:top-0 before:absolute before:pointer-events-none before:h-full before:w-full before:z-[1] before:bg-gradient-to-t before:from-[rgba(0,0,0,0.5)] before:to-[rgba(0,0,0,0)]"
          >
            <img class="absolute z-0 top-0 left-0 w-full h-full object-cover group-hover:scale-105 duration-200" src="~/assets/images/service.png" alt="service image" />
            <figcaption class="text-lg font-semibold line-clamp-3 z-[2] text-white">
              Representation of transport companies with rich experience EU-Uzbekistan, Asia-Uzbekistan
            </figcaption>
            <p class="flex items-center gap-2 mt-6 z-[2] text-white group-hover:text-red duration-200"><span>Read more</span><UIcon name="i-heroicons-arrow-right" /></p>
          </figure>
        </div>
        <div class="bg-black p-6 sm:p-10 lg:px-[120px] xl:px-[240px] rounded-3xl flex justify-center mt-[120px]">
          <div class="grid grid-cols-1 sm:grid-cols-10 gap-10 lg:gap-20 items-center">
            <div
              class="sm:col-span-5 md:col-span-3 rounded-lg overflow-hidden h-[480px] sm:h-[340px] md:h-[240px] text-white relative flex flex-col justify-end p-4 before:left-0 before:top-0 before:absolute before:pointer-events-none before:h-full before:w-full before:z-[1] before:bg-gradient-to-t before:from-[rgba(0,0,0,0.6)] before:to-[rgba(0,0,0,0)]"
            >
              <img class="absolute top-0 left-0 w-full h-full object-cover" src="~/assets/images/manager.jfif" alt="manager img" />
              <h4 class="text-2xl sm:text-lg lg:text-xl font-medium z-[2]">Исмоилов Акбар</h4>
              <p class="text-lg sm:text-base z-[2]">Менежер</p>
            </div>
            <div class="sm:col-span-5 md:col-span-7 flex flex-col">
              <h3 class="text-white font-extrabold text-xl lg:text-3xl font-roboto uppercase">Get advice from a manager</h3>
              <p class="text-base lg:text-xl text-grey-2 mt-1">Need more details? Discuss requirements? We will help you find the right solution</p>
              <div class="mt-10 flex flex-col-reverse sm:flex-col md:flex-row md:items-center gap-y-2 gap-x-10">
                <UButton
                  class="w-fit"
                  to="#contacts"
                  size="xl"
                  color="primary"
                  variant="solid"
                  label="Получить консультацию"
                  trailingIcon="i-heroicons-arrow-right"
                  :ui="{ font: 'font-normal', size: { xl: 'text-sm' }, icon: { size: { xl: 'h-4 w-4' } } }"
                />
                <a class="text-white hover:text-red duration-200" target="_blank" href="mailto:projects@cacs.hk">projects@cacs.hk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="clients">
      <div class="wrapper">
        <h3 class="text-xl md:text-3xl font-roboto uppercase font-extrabold text-center">Our clients and partners</h3>
        <Swiper
          class="mt-6"
          :modules="[SwiperAutoplay]"
          :slides-per-view="6"
          :loop="true"
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
          <SwiperSlide class="border-r border-grey-4 last:border-0" v-for="slide in 12" :key="slide">
            <div class="h-[80px] overflow-hidden relative flex justify-center items-center">
              <img class="object-contain" src="~/assets/images/partner.png" alt="partner" />
            </div>
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
          <SwiperSlide v-for="slide in 6" :key="slide">
            <div class="rounded-2xl overflow-hidden max-h-[370px] relative flex justify-center items-center">
              <img class="w-full h-full object-cover" src="~/assets/images/about-2.png" alt="clients" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <section id="contacts">
      <div class="wrapper py-20">
        <div class="p-4 sm:p-7 md:p-14 rounded-3xl bg-grey-1">
          <h3 class="text-center md:text-start text-xl md:text-3xl font-roboto uppercase font-extrabold">Contact us</h3>
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
                      v-model="user.phone"
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
                    v-model="user.message"
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
                class="mt-6 w-[200px]"
                type="submit"
                size="xl"
                color="primary"
                variant="solid"
                label="Send"
                trailingIcon="i-heroicons-arrow-right"
                :ui="{ base: 'justify-center', font: 'font-normal', size: { xl: 'text-sm' }, icon: { size: { xl: 'h-4 w-4' } } }"
              />
            </UForm>
            <div class="bg-white rounded-2xl p-6 flex flex-col justify-between">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <p class="text-grey-3">Adress</p>
                  <p>18/F., on Hong Commercial Building 145 Hennessy Road, Wanchai HONG KONG</p>
                </div>
                <div class="space-y-4">
                  <p class="text-grey-3">Всего здесь для вас</p>
                  <p>Горячая линия обслуживания 24/7</p>
                </div>
                <div class="space-y-4">
                  <p class="text-grey-3">E-mail</p>
                  <div class="flex flex-col xl:flex-row gap-x-4 gap-y-1">
                    <ULink class="hover:text-red duration-200" target="_blank" to="mailto:info@cacs.hk">info@cacs.hk</ULink>
                    <ULink class="hover:text-red duration-200" target="_blank" to="mailto:projects@cacs.hk">projects@cacs.hk</ULink>
                  </div>
                </div>
                <div class="space-y-4">
                  <p class="text-grey-3">Соц, сеть</p>
                  <div class="flex gap-2">
                    <ULink to="https://facebook.com" target="_blank"
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
                    <ULink to="https://linkedin.com" target="_blank"
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
              <ULink to="/" class="font-black text-xs sm:text-sm md:text-base lg:text-lg tracking-tighter uppercase font-roboto mt-10"> Central Asia Container Service </ULink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead(() => {
  return {
    title: 'Central Asia Container Service',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Central Asia Container Service'
      }
    ]
  };
});

// dynamic datas
const isModalOpen = ref(false);

const state = reactive({
  errors: [],
  loading: false
});
const user = reactive({
  first_name: '',
  last_name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
});

async function submitMessage() {
  state.loading = true;
  try {
    alert('hello');
    // let res = await useServices().postServices('/application/create', {
    //   ...user
    // });
    // if (res.status === 201) {
    //   state.errors = [];
    //   user.name = '';
    //   user.phone = '';
    //   user.message = '';
    // } else {
    //   state.errors = [{ path: 'form', message: 'Something went wrong' }];
    // }
  } catch {
    state.errors = [{ path: 'form', message: 'Something went wrong' }];
  } finally {
    state.loading = false;
  }
}

function validate() {
  const errors = [];
  if (!user.phone || user.phone.length < 19)
    errors.push({
      path: 'phone',
      message: user.phone.length < 19 && user.phone.length > 0 ? 'Phone number should be full' : 'Phone number can not be blank'
    });
  if (!user.first_name) errors.push({ path: 'first_name', message: 'First Name can not be blank' });
  if (!user.last_name) errors.push({ path: 'last_name', message: 'Last name can not be blank' });
  if (!user.company) errors.push({ path: 'company', message: 'Company can not be blank' });
  if (!user.email) errors.push({ path: 'email', message: 'Email can not be blank' });
  if (!user.message) errors.push({ path: 'message', message: 'Message can not be blank' });

  return errors;
}
</script>

<style></style>
