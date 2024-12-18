<template>
  <div>
      <h1 style="font-size: 80px;">Welcome to Bee Latte</h1>
      <h2 style="font-size: 20px;">Brew coffee to your likeness</h2>
 
  </div>

</template>

<script>
export default {
  name: 'TheLogin',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1, h2
{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #1d1000;
  animation: fadeInUp 2.5s ease-out forwards;

}
.image-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Optional: adds space between the images */
  }
  .image-container img {
    width: 23%; /* Adjust the width of each image */
    max-width: 100%;
  }
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px); /* Image starts off-screen */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Image moves to its original position */
  }
}
</style>


