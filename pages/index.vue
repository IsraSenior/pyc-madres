<template>
    <div class="bg-[#fef9f3] relative isolate">
        <img src="/texture.webp" class="bg-cover bg-center absolute inset-0 h-full w-full" alt="">

        <section class="relative lg:py-8 h-screen flex items-center justify-center overflow-hidden">
            <div
                class="container isolate h-full flex items-center justify-center transform overflow-hidden  glass relative lg:rounded-xl">
                <div class="border border-primary absolute inset-5 rounded-lg"></div>

                <div class="inset-0 absolute bg-gradient-to-r from-0% from-secondary-900 to-70% to-transparent">
                </div>

                <div class="max-w-4xl text-primary p-12 relative text-center">
                    <div class="flex space-x-6 items-center justify-center mb-12">
                        <Logo class="h-20 md:h-24 lg:h-28" />

                    </div>
                    <div class="space-y-6 mt-6 font-houschka text-2xl lg:text-3xl font-normal">
                        <!-- <p>
                            Te esperamos este próximo <br>
                            <b>Viernes 9 de Mayo</b> <br> en nuestro salón
                        </p> -->
                        <!-- <h1 class="text-5xl lg:text-7xl font-normal font-agilera uppercase">
                            Mes de los <br>
                            <span class="text-6xl lg:text-8xl">Padres</span>
                        </h1>
                        <p>
                            ¡Disfrutemos juntos de una copa!
                        </p> -->
                    </div>
                    <div
                        class="space-x-0 md:space-x-6 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-center w-full mt-12">

                        <a href="https://www.instagram.com/puntoycorchord" target="_blank"
                            class="bg-primary w-full lg:w-auto px-4 py-2.5 text-base cursor-pointer font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Síguenos en Instagram
                        </a>

                        <button type="button" @click.prevent="openModal('salones')"
                            class="bg-[#302f2f] w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Eventos Privados</button>

                        <!-- <button type="button" @click.prevent="openModal('seleccion')"
                            class="bg-[#d77935] w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Selección Especial
                        </button> -->

                        <a href="/carta-vinos-pyc-.pdf" download="Carta de vinos y destilados del Winebar"
                            target="_blank"
                            class="bg-white w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-[#302f2f] shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Carta de Vinos y Destilados Wine Bar 
                        </a>

                        <!-- <a href="https://wa.me/18294232486" target="_blank"
                            class="bg-[#302f2f] w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Reserva ahora
                        </a> -->

                    </div>

                    <div
                        class="space-x-0 md:space-x-6 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-center w-full mt-12 border-t border-primary pt-12">

                        

                        <a href="https://wa.me/18294232486" target="_blank"
                            class="bg-[#302f2f] w-full lg:w-auto px-4 py-2.5 text-base font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Reservas en el Wine Bar
                        </a>

                        <a href="https://wa.me/18294232486" target="_blank"
                            class="bg-primary w-full lg:w-auto px-4 py-2.5 text-base cursor-pointer font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                            Pedidos en  la Tienda
                        </a>

                    </div>
                </div>
            </div>
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
                                    <img class="h-[80vh] object-contain object-center" src="/canva-especial.webp"
                                        alt="">
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
