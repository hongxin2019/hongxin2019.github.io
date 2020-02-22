<template>
  <div>
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
body {
  background-color: #fffff0;
}
.divider {
  box-shadow: 0 1em 1em -1em rgba(0, 0, 0, 0.15);
}
a {
  transition-property: background-color, color;
  transition-duration: 200ms;
  font-weight: 600;
  color: #ed8936;
  background: linear-gradient(90deg, #ed8936 66%, transparent 0) repeat-x;
  background-size: 0.15em 1px;
  background-position: 0 1em;
  text-shadow: 0.05em 0 white, -0.05em 0 white; /* avoid parts below the baseline*/
}
a:hover {
  color: #7b341e;
  background: linear-gradient(90deg, #7b341e 66%, transparent 0) repeat-x;
  background-size: 0.15em 1px;
  background-position: 0 1em;
  text-shadow: 0.05em 0 white, -0.05em 0 white; /* avoid parts below the baseline*/
}
</style>
