<template>
  <b-modal
    :active.sync="isactive"
    has-modal-card
    trap-focus
    aria-role="dialog"
    aria-modal
  >
    <form @submit.prevent="Login">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login with Kitsu</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Email">
            <b-input
              type="text"
              placeholder="Your email"
              v-model="email"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              password-reveal
              placeholder="Your password"
              v-model="password"
              required
            >
            </b-input>
          </b-field>
          <b-message v-if="IncorrectLogin" size="is-small" type="is-danger">
            Email or password invalid
          </b-message>
          <p>We do NOT store any of your credentials.</p>
        </section>
        <footer class="modal-card-foot">
          <b-button v-if="IsLogging" class="button is-primary" loading>
            Login
          </b-button>
          <button v-else class="button is-primary">Login</button>
        </footer>
      </div>
    </form>
  </b-modal>
</template>
<script>
const axios = require("axios").default;
export default {
  props: ["isComponentModalActive"],
  data() {
    return {
      email: "",
      password: "",
      IsLogging: false,
      IncorrectLogin: "",
    };
  },
  computed: {
    isactive: {
      get() {
        return this.isComponentModalActive;
      },
      set() {
        this.$emit("modal");
        return false;
      },
    },
  },
  methods: {
    Login() {
      this.IsLogging = true;
      axios({
        method: "post",
        url: "https://kitsu.io/api/oauth/token",
        data: {
          grant_type: "password",
          username: this.email,
          password: this.password,
        },
      })
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          this.IncorrectLogin = '';
          this.IsLogging = false;
          this.$emit("modal");
          this.$emit("token");
        })
        .catch((error) => {
          this.IsLogging = false;
          if (error.error == "invalid_grant") {
            this.IncorrectLogin = "Incorrect username or password";
          } else {
            this.IncorrectLogin = "Something went wrong...";
          }
        });
    },
  }
};
</script>
