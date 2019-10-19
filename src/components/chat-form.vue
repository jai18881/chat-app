<template>
    <div class="chat-form">
        <input class="" type="text" v-model="inputValue" placeholder="Type a message..." @keyup.enter.exact="submit">
        <input type="button" @click="submit" value="Send">
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
		methods: {
			submit() {
				if(this.inputValue) {
					this.$emit('post-message', this.inputValue);
					this.inputValue = '';
				} else {
					alert('please enter text....');
				}
			}
		}
	}
</script>
<style scoped>
    .chat-form {
        text-align: center;
        display: flex;
        flex-grow: 0;
        margin: 20px;
        min-height: 50px;
    }

    input {
        padding: 8px;
        font-size: 13px;
        flex-grow: 1;
    }
    input[type="button"] {
        padding: 8px;
        font-size: 18px;
        font-weight:bold;
        flex-grow: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        color: dodgerblue;
        border: none;
        background-color: transparent;
    }
</style>