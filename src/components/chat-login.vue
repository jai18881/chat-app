<template>
    <div class="chat-login">
        <input ref="userName" type="text" v-model="inputValue" placeholder="Type your username...." @keyup.enter.exact="submit">
        <button @click="submit">Join the Doordash Chat!</button>
    </div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
      name: 'chat-room',
      data() {
      	return {
      		inputValue: '',
        }
      },
      mounted() {
        this.$refs.userName.focus();
      },
      methods: {
	      ...mapActions(['setUser']),
      	submit() {
      		if(this.inputValue) {
                this.setUser(this.inputValue);
                this.$emit('login', this.inputValue);
            } else {
      			alert('please enter username....');
            }
        }
      }
	}
</script>
<style scoped>
    .chat-login {
        width: 40%;
        height: 20%;
        min-height: 150px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    input,button {
        padding: 8px;
        margin: 10px;
        font-size: 13px;
        border: solid 1px lightgray;
        border-radius: 2px;
    }
    button {
        background-color: #FB0032;
        color: #ffffff;
    }
</style>