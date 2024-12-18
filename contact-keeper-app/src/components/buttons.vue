<template>
  <Button type="submit" @click="handleClick">
    <slot>Enter the Arena</slot>
  </Button>
</template>

<script>
export default {
  name: 'AppButton',
  methods: {
    handleClick() {
      
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
Button {
  width: 100%;
  padding: 10px;
  background-color: black;
  border: #4AFFFF solid;
  color: #fff;
  font-size: 18px;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.15s;
}
button:hover {
  background-color: #4AFFFF;
  color: black;
  transition: 0.15s;
}
</style>
