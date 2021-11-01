<template>
  <div>{{ error.message }} {{ error.statusCode }}</div>
</template>

<script>
export default {
  head() {
    return {
      title: "BIG PROBLEMS",
    };
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
