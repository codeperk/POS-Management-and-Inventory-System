<template>
    <div class="auth-layout-wrap">
        <div class="auth-content">
            <div class="banner_high">
                <img src="/images/icons/user.svg" alt="" />
                <img src="/images/icons/password.svg" alt="" />
            </div>

            <h1 class="font-weight-bold text-center">Sahara Mart India</h1>
            <validation-observer class="validation-observer" ref="submit_login">
                <b-form class="b-form" @submit.prevent="Submit_Login">
                    <validation-provider
                        class="validation-provider"
                        name="Email Address"
                        :rules="{ required: true}"
                        v-slot="validationContext"
                    >
                        <b-form-group :label="$t('Email_Address')" class="text-12 b-form-group">
                            <input
                                v-bind:class="{ 'invalid': validationContext.errors[0] }"
                                :state="getValidationState(validationContext)"
                                placeholder="E-mail"
                                class="b-form-input"
                                type="text"
                                v-model="email"
                                email
                            />
                            <img
                                v-if="email.length >= 4"
                                src="/images/ok.svg"
                                alt=""
                            />
                        </b-form-group>
                    </validation-provider>
                    <validation-provider
                        class="validation-provider"
                        name="Password"
                        :rules="{ required: true}"
                        v-slot="validationContext"
                    >
                        <b-form-group :label="$t('password')" class="text-12 b-form-group">
                            <input
                                v-bind:class="{ 'invalid': validationContext.errors[0] }"
                                :state="getValidationState(validationContext)"
                                placeholder="8 caractere minimum"
                                class="b-form-input"
                                type="password"
                                v-model="password"
                            />
                            <img
                                v-if="password.length >= 8"
                                src="/images/ok.svg"
                                alt=""
                            />
                        </b-form-group>
                    </validation-provider>
                    <div class="password_bar">
                        <div :class="{ bar: true, green: password.length > 1 }"></div>
                        <div :class="{ bar: true, green: password.length > 3 }"></div>
                        <div :class="{ bar: true, green: password.length > 5 }"></div>
                        <div :class="{ bar: true, green: password.length > 7 }"></div>
                    </div>

                    <div class="check_bar">
                        <div>
                            <input type="checkbox" name="" id="" />
                            <label for="">Remember me</label>
                        </div>

                        <a href="/password/reset"  class="text-muted">{{$t('Forgot_Password')}}</a>
                    </div>

                    <b-button
                        type="submit"
                        tag="button"
                        class="log"
                        variant="primary mt-2"
                        :disabled="loading"
                    >{{$t('SignIn')}}</b-button>
                    <div v-once class="typo__p" v-if="loading">
                        <div class="spinner sm spinner-primary mt-3"></div>
                    </div>
                </b-form>
            </validation-observer>

            <span>No account yet? <a href="#">{{$t('SignUp')}}</a> </span>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NProgress from "nprogress";

export default {
  metaInfo: {
    title: "SignIn"
  },
  data() {
    return {
      email: "",
      password: "",
      userId: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "error"])
  },

  methods: {
    //------------- Submit Form login
    Submit_Login() {
      this.$refs.submit_login.validate().then(success => {
        if (!success) {
          this.makeToast(
            "danger",
            this.$t("Please_fill_the_form_correctly"),
            this.$t("Failed")
          );
        } else {
          this.Login();
        }
      });
    },

    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },

    Login() {
      let self = this;
      // Start the progress bar.
      NProgress.start();
      NProgress.set(0.1);
      self.loading = true;
      axios
        .post("/login",{
          email: self.email,
          password: self.password
        },
        {
          baseURL: '',
        })
        .then(response => {

            this.makeToast(
              "success",
              this.$t("Successfully_Logged_In"),
              this.$t("Success")
            );

          window.location = '/';

          NProgress.done();
          this.loading = false;
        })
        .catch(error => {
          NProgress.done();
          this.loading = false;
          this.makeToast(
              "danger",
              this.$t("Incorrect_Login"),
              this.$t("Failed")
            );
        });
    },

    //------ Toast
    makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    }
  }
};
</script>
