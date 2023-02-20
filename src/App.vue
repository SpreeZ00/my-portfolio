<template>
      <nav class="sticky top-0 z-50 border-b border-slate-900 dark:border-gray-100">
        <ul class="nav">
          <li><RouterLink class="navItem" to="/">Start</RouterLink></li>
          <li><a class="navItem" href="#about">Über mich</a></li>
          <li><a class="navItem" href="#contact">Kontakt</a></li>
          <button class="absolute right-4 top-4 navItem" @click="toggleDarkmode">Toggle Darkmode</button>
        </ul>
      </nav>

  <RouterView />

  <footer class="bg-gray-400 dark:bg-slate-600 p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center">
      <div>
        <h4 class="text-xl underline underline-offset-2">Socials</h4>
        <div class="flex flex-col font-thin justify-center">
          <p><a class="navItem" href="https://github.com/SpreeZ00" target="_blank" rel="noreferrer noopener">GitHub</a></p>
          <p><a class="navItem" href="https://linkedin.com/in/lars-niklas-rose-0ba195188" target="_blank" rel="noreferrer noopener">LinkedIn</a></p>
        </div>
      </div>
      <div>
        <h4 class="text-xl underline underline-offset-2">Navigation</h4>
        <div class="flex flex-col justify-center font-thin">
          <p><a class="navItem" href="/">Start</a></p>
          <p><a class="navItem" href="/about">Über mich</a></p>
        </div>
      </div>
      <div>
        <h4 class="text-xl">© 2023 Lars-Niklas Rose</h4>
      </div>
      
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
  if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

function toggleDarkmode() {
  if(document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
}
</script>
