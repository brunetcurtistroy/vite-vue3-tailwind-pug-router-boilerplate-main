<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template lang="pug">
h1.mb-4 {{ msg }}
p.mb-4
  | Recommended IDE setup:
  a(href='https://code.visualstudio.com/' target='_blank')  VSCode
  |  +
  a(href='https://github.com/johnsoncodehk/volar' target='_blank')  Volar
p.mb-4
  a(href='https://vitejs.dev/guide/features.html' target='_blank')
    | Vite Documentation
  |  |
  a(href='https://v3.vuejs.org/' target='_blank')  Vue 3 Documentation
button(type='button' @click='count++') count is: {{ count }}
p.mb-4
  | Edit
  code  components/HelloWorld.vue
  |  to test hot module replacement (HMR).
p.text-blue-500.italic If this text is blue, TailwindCSS is working 
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}
</style>
