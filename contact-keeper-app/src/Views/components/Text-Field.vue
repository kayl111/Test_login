<template>
  <div class="textfield">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :name="name"
      :value="inputValue"  
      @input="updateValue"  
      @blur="handleBlur"
      :class="{'error': touched && !inputValue}"
    />
    <p v-if="touched && !inputValue && errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {  
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.value,  
      touched: false,
      errorMessage: "",
    };
  },
  methods: {
    handleBlur() {
      this.touched = true;
      if (!this.inputValue) {
        this.errorMessage = `${this.label} is required`;  
      } else {
        this.errorMessage = "";  
      }
    },
    updateValue(event) {
      this.inputValue = event.target.value;  
      this.$emit('input', this.inputValue);  
    },
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;  
    },
  },
  computed: {
    isValid() {
      return this.inputValue.trim() !== "";  
    },
  },
};
</script>


<style scoped>
.textfield {
  margin-bottom: 20px;
  width: 95%;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 8px;
  color: #1d0f02;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input:focus {
  border-color: #1d0f02;
  outline: none;
}

input.error {
  border-color: red;  
}
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
