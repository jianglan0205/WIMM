<template>
  <svg class="icon">
    <use v-bind:xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">

// eslint-disable-next-line no-undef
let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
}catch(error){
  console.log(error);
}
//将svg统一全部引入

export default {
  props:['name'],
  name: 'Icon'
};
</script>

<style lang="scss" scoped>
.icon{
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>