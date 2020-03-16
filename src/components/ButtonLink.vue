<template>
  <div
    class="flex-shrink-0 hover:bg-blue-700 border-blue-700 text-blue-800
           hover:text-white text-sm border-2 px-3 rounded shadow
          cursor-pointer transition-all duration-100 mr-2"
    @click="jump(href)"
  >
      <slot />
  </div>
</template>

<script>
  export default {
    props: {
      href: String
    },
    methods: {
      jump: function(link) {
        window.location = link;
      }
    }
  };
</script>

<style></style>
