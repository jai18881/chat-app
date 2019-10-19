<template>
    <div class="app">
        <chat-login v-if="showLogin" @login="loginSuccess"></chat-login>
        <chat-room v-if="!showLogin"></chat-room>
    </div>
</template>
<script>
	import ChatLogin from './components/chat-login';
    import ChatRoom from './components/chat-room';

	export default {
		name: 'app',
		components: {
            'chat-room': ChatRoom,
			'chat-login': ChatLogin,
		},
		props: {},
		data() {
			return {
				showLogin: true
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			loginSuccess(val) {
				if (val) {
					this.showLogin = false;
				}
			}
		}
	}
</script>
<style>
    .app {
        width: 100%;
        height: 100%;
        font-family: sans-serif;
        font-size: 14px;
        color: gray;
    }
</style>
