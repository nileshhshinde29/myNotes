<template>
  <div class="main-div">
    <form @submit.prevent="submit" class="form">
      <div>
        <span>Name: </span>
        <input v-model="name" placeholder="Name" @input="CheckName" />
      </div>
      <p class="errorMessage" v-if="nameError">Please add valid name</p>

      <div>
        <span>Email: </span>
        <input v-model="email" placeholder="Email" />
      </div>
      <!-- <p class="errorMessage" v-if="nameError">Please add valid name</p> -->

      <div>
        <span>Mobile: </span>
        <input
          v-model="mobile"
          placeholder="Mobile Number"
          @input="CheckMobile"
        />
      </div>
      <p class="errorMessage" v-if="mobileError">
        Please add valid Mobile number
      </p>

      <!-- Dropdown Select -->
      <div>
        <span>State: </span>
        <select v-model="state" @change="CheckState">
          <option value="">--Select--</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="USA">USA</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
      </div>
      <p class="errorMessage" v-if="stateError">Please add valid name</p>

      <!-- Radio -->
      <div>
        <span>Gender</span>
        <label
          ><input
            type="radio"
            value="Male"
            v-model="gender"
            @change="CheckGender"
          />Male</label
        >
        <label
          ><input
            type="radio"
            value="Female"
            v-model="gender"
            @change="CheckGender"
          />Female</label
        >
      </div>
      <p class="errorMessage" v-if="genderError">Please add valid name</p>
      <br />

      <!-- Checkbox -->

      <div>
        <span>Interest: </span>
        <label>
          <input
            type="checkbox"
            v-model="interestedIn"
            @change="checkInterest"
            id="1"
            value="art"
          />Art
        </label>
        <label>
          <input
            type="checkbox"
            v-model="interestedIn"
            @change="checkInterest"
            id="2"
            value="politics"
          />Politics
        </label>
        <label>
          <input
            type="checkbox"
            v-model="interestedIn"
            @change="checkInterest"
            id="3"
            value="sports"
          />Sports
        </label>
        <p class="errorMessage" v-if="interestError">
          Please add valid interest
        </p>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "",
      email: "",
      mobile: "",
      state: "",
      gender: "",
      interestedIn: [],

      nameError: false,
      mobileError: false,
      stateError: false,
      genderError: false,
      interestError: false,
    };
  },

  methods: {
    CheckName() {
      this.nameError = !this.name.length > 0;
    },
    CheckMobile() {
      this.mobileError =
        !this.mobile || !this.mobile.split("").every((no) => /[0-9]/.test(no));
    },
    CheckState() {
      this.stateError = !this.state ? true : false;
    },
    CheckGender() {
      this.genderError = !this.gender ? true : false;
    },
    checkInterest() {
      this.interestError = !this.interestedIn.length > 0;
    },

    submit() {
      this.CheckName();
      this.CheckMobile();
      this.CheckState();
      this.CheckGender();
      this.checkInterest();

      if (
        this.nameError == false &&
        this.mobileError == false &&
        this.stateError == false &&
        this.genderError == false &&
        this.interestError == false
      ) {
        console.log("submitted");
      }
    },
  },
});
</script>

<style scoped>
.errorMessage {
  color: red;
  font-size: 10px;
  margin-top: 3px;
}
.form {
  display: block;
  /* justify-self: start; */
  /* text-align: left; */
}
.main-div {
  width: 400px;
  background-color: gainsboro;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}
.form > div {
  margin-bottom: 10px;
}
</style>
