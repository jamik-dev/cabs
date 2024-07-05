<template>
  <div>
    <TheHeader :translations="data" />
    <slot></slot>
    <TheFooter :translations="data" />
  </div>
</template>
<script setup>
import { useAxios } from '~/api/index';

const { data } = await useAsyncData('layout', () => useAxios().getRequest('/api/translations'));
</script>