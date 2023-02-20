<template>
    <div class="portfolioItem">
        <div class="portfolioItem__image">
        <img :src="image" alt="Portfolio Item Image" />
        </div>
        <div class="portfolioItem__content">
        <h3 class="portfolioItem__title">{{ title }}</h3>
        <p class="portfolioItem__description">{{ description }}</p>
        <div class="portfolioItem__links">
            <a :href="link" target="_blank" rel="noreferrer noopener" class="portfolioItem__link">Live Demo</a>
            <a :href="github" target="_blank" rel="noreferrer noopener" class="portfolioItem__link">GitHub</a>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
});
</script>