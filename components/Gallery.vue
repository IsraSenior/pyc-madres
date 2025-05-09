<script setup>
const currentSlide = ref(0)

const slideTo = (nextSlide) => (currentSlide.value = nextSlide)

const galleryConfig = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: 'fade',
    mouseDrag: false,
    touchDrag: false,
    height: 320,
}

const thumbnailsConfig = {
    height: 80,
    itemsToShow: 6,
    wrapAround: true,
    touchDrag: false,
    gap: 10,
}

const images = ref([
    'salon-1.webp',
    'salon-2.webp',
    'salon-3.webp',
    'salon-4.webp',
    'salon-5.webp',
    'salon-6.webp',
    'salon-7.webp',
    'salon-8.webp',
    'salon-9.webp',
    'salon-10.webp',
    'salon-11.webp',
    'salon-12.webp',
])

</script>

<template>
    <Carousel id="gallery" class="!h-[75vh]" v-bind="galleryConfig" v-model="currentSlide">
        <Slide v-for="(image, index) in images" :key="index">
            <img :src="`/salones/${image}`" :alt="`Gallery Image ${index}`" class="object-cover object-center" />
        </Slide>
    </Carousel>

    <Carousel id="thumbnails" class="mt-2.5" v-bind="thumbnailsConfig" v-model="currentSlide">
        <Slide v-for="(image, index) in images" :key="index">
            <template #default="{ currentIndex, isActive }">
                <div :class="['h-32 w-full cursor-pointer opacity-50 hover:opacity-100 transform duration-300 ease-in-out', { 'opacity-100': isActive }]" @click="slideTo(currentIndex)">
                    <img :src="`/salones/${image}`" :alt="`Thumbnail Image ${index}`" class="h-full w-full object-cover object-center" />
                </div>
            </template>
        </Slide>

        <!-- <template #addons>
            <Navigation />
        </template> -->
    </Carousel>
</template>
