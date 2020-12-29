<template>
  <form @submit.prevent="onSubmit">
    <div class="row justify-content-center title">
      <h3>Присоединяйся к нам - заполни форму</h3>
    </div>
    <div class="row justify-content-center input">
      <div role="group">
        <b-form-input
          v-model="newUser.name"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Введи своё имя"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Минимум три символа
        </b-form-invalid-feedback>
      </div>
      <div role="group">
        <b-form-input
          v-model="newUser.age"
          type="number"
          :state="numberState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Введи свой возраст"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Поле не должно быть пустым
        </b-form-invalid-feedback>
      </div>
    </div>

    <div class="row justify-content-center input">
      <div role="group">
        <b-form-input
          v-model="newUser.email"
          :state="emailState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Введи свой электронный адрес"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          Введите достоверный адрес, чтобы мы могли связаться с Вами
        </b-form-invalid-feedback>
      </div>
    </div>

    <div class="row justify-content-center" @click.prevent="check = !check">
      <div class="checkbox">
        <div v-if="check">
          <fa :icon="['fas', 'star']" />
        </div>
        <div v-else>
          <div class="checkbox_on-off"></div>
        </div>
      </div>
      <div>
        <p class="checkbox_title">Я хочу стать частью команды</p>
      </div>
    </div>

    <div class="submit row justify-content-center">
      <b-button variant="secondary" type="submit"> Присоединиться </b-button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheFields",
  data() {
    return {
      check: true,
      isSubmit: false,
      newUser: {
        name: "",
        age: "",
        email: "",
      },
    };
  },
  computed: {
    nameState() {
      return this.newUser.name.length > 2 ? true : false;
    },
    numberState() {
      return this.newUser.age.length != 0 ? true : false;
    },
    emailState() {
      let re = /\S+@\S+\.\S+/;
      let reMail = re.test(this.newUser.email.toLowerCase());
      return reMail ? true : false;
    },
  },
  methods: {
    ...mapActions({
      ADD_USER: "users/ADD_USER",
    }),
    async onSubmit() {
      if (
        (this.newUser.name != "",
        this.newUser.age != "",
        this.newUser.email != "")
      ) {
        try {
          await this.ADD_USER(this.newUser);
          this.$bvToast.toast(
            "Мы получили Вашу заявку. В ближайшее время наш менеджер свяжется с Вами.",
            {
              title: "Заявка успешно отправлена",
              solid: true,
            }
          );
          this.newUser.name = "";
          this.newUser.age = "";
          this.newUser.email = "";
        } catch (e) {
          console.log(e);
        }
      } else {
        this.$bvToast.toast("Необходимо заполнить все поля", {
          title: "Ошибка",
          solid: true,
        });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.input {
  margin-top: 20px;
}
.checkbox {
  width: 25px;
  height: 25px;
  background: #b1b1b1;
  border-radius: 8px;
  margin-top: 10px;
  margin-left: -2%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkbox_on-off {
  width: 19px;
  height: 19px;
  display: block;
  margin: 0;
}
.checkbox_title {
  font-size: 12px;
  line-height: 14px;
  color: #6d6d6d;
  margin-left: 10px;
  margin-top: 17px;
  cursor: pointer;
}
</style>