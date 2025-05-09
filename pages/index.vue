<template>
    <div class="bg-[#fef9f3]">
        <section class="relative lg:py-8 lg:h-screen flex items-center justify-center overflow-hidden">
            <div
                class="container isolate h-full flex items-center justify-center transform overflow-hidden shadow bg-[#eee5d4] relative">
                <div class="border border-primary absolute inset-5"></div>

                <div class="inset-0 absolute bg-gradient-to-r from-0% from-secondary-900 to-70% to-transparent">
                </div>

                <div class="max-w-2xl text-primary p-12 relative text-center">
                    <div class="flex space-x-6 items-center justify-center mb-12">
                        <Logo class="h-24 lg:h-28" />

                    </div>
                    <div class="space-y-6 mt-6 font-houschka text-2xl lg:text-3xl font-normal">
                        <!-- <p>
                            Te esperamos este próximo <br>
                            <b>Viernes 9 de Mayo</b> <br> en nuestro salón
                        </p> -->
                        <h1 class="text-5xl lg:text-7xl font-normal font-agilera uppercase">
                            Mes de las <br>
                            <span class="text-6xl lg:text-8xl">Madres</span>
                        </h1>
                        <p>
                            Disfrutemos juntas de una copa 
                            <!-- <br class="hidden lg:block">
                            en ocasión de las madres -->
                        </p>

                        <!-- <div class="flex items-center justify-center">
                            <img class="h-20"
                                src="https://www.thenailbarbeauty.com/cdn/shop/files/TNB_Main_Logo_-_Color_a95bfdae-7f5c-45ab-8609-5905ed12ce03_1200x@2x.svg?v=1686856720"
                                alt="">
                        </div> -->
                    </div>
                    <div
                        class="space-x-0 md:space-x-6 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-center w-full mt-12">
                        <button type="button" @click.prevent="openModal('salones')"
                            class="bg-primary w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Nuestros salones</button>

                        <button type="button" @click.prevent="openModal('seleccion')"
                            class="bg-[#d77935] w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Selección Especial
                        </button>

                        <a href="https://wa.me/18294232486" target="_blank" type="button"
                            class="bg-[#302f2f] w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Reserva ahora
                        </a>

                    </div>
                </div>
            </div>
            <Flower1 class="absolute hidden lg:block lg:h-full -top-20 -right-20" />
            <Flower2 class="absolute hidden lg:block lg:h-full -bottom-32 -left-20" />
        </section>

        <div v-if="!!modalType" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on modal state. -->
            <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-active-class="ease-in duration-200" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <div class="fixed inset-0 bg-primary-900/90 transition-opacity" aria-hidden="true"></div>
            </Transition>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <!-- Modal panel, show/hide based on modal state. -->
                    <Transition enter-active-class="ease-out duration-300"
                        enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-active-class="ease-in duration-200"
                        leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div v-if="!!modalType"
                            class="relative transform transition-all sm:my-8 sm:w-full sm:max-w-7xl w-full px-5">
                            <div>
                                <button class="absolute -bottom-16 -rigth-5 text-white text-4xl z-50"
                                    @click.prevent="modalType = null">X</button>
                                <Gallery v-if="modalType === 'salones'" />
                                <div v-if="modalType === 'seleccion'" class="flex items-center justify-center">
                                    <img class="h-[80vh] object-contain object-center" src="/canva-especial.webp" alt="">
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Gallery from '~/components/Gallery.vue';

const modalType = ref(null)
const openModal = (type) => {
    modalType.value = (!!modalType.value) ? null : type;
} 
</script>
