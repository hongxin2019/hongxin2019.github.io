<template>
  <div class="text-sm" style="line-height: normal;">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.link {
  transition-property: background-color, color;
  transition-duration: 200ms;
  color: #4299E1;
  background: linear-gradient(90deg, #4299E1 66%, transparent 0) repeat-x;
  background-size: 0.15em 1px;
  background-position: 0 1em;
  text-shadow: 0.05em 0 white, -0.05em 0 white;
}
.link:hover {
  color: #2B6CB0;
  background: linear-gradient(90deg, #2B6CB0 66%, transparent 0) repeat-x;
  background-size: 0.15em 1px;
  background-position: 0 1em;
  text-shadow: 0.05em 0 white, -0.05em 0 white;
}
</style>
