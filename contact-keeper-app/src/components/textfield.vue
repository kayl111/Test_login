<template>
    <form>
      <div class="form">
        <h1>Gamers Republic</h1>
        <pre>Unite and Conquer</pre>
        <div>
          <label for="Email">Email</label>
          <input type="text" id="Email" name="Email">

          <label for="Pass">Password</label>
          <input type="password" id="Pass" name="Password">

          <p class="forgot">Forgot Password?</p>


          <AppButton @click="handleLogin">Enter the Arena</AppButton>

          <div class="new">
            <p>New to Republic?</p>
            <p>
              <a href="#" style="color: #e200f6a1; text-decoration: none;">Join the Brotherhood</a>
            </p>
          </div>
        </div>
      </div>
    </form>
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
