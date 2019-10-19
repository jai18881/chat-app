<template>
    <div class="chat-pane">
        <header>
            <p class="room-name">{{ this.room.name }}</p>
            <p class="users" v-html="displayUsers"></p>
        </header>
        <chat-list :list="messages"></chat-list>
        <chat-form @post-message="postMessage"></chat-form>
    </div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';
    import ChatList from './chat-list';
    import ChatForm from './chat-form';

	export default {
		name: 'chat-pane',
        components: {
            'chat-form': ChatForm,
            'chat-list': ChatList,
        },
        mounted() {
			const self = this;
	        this.getMessages(this.room.id);
	        setInterval(() => self.getMessages(self.room.id), 500);
        },
        computed: {
            ...mapGetters(['room', 'messages', 'user']),
	        displayUsers() {
		        const arr = this.room.users.slice();
		        const userIndex = arr.indexOf(this.user.name);
		        if (userIndex > -1) {
                    const uName = arr.splice(userIndex, 1);
                    arr.unshift(`<span style="color: crimson">${uName}</span>`);
                }
		        return arr.join(', ');
	        }
        },
        watch: {
			room(val) {
				this.getMessages(this.room.id);
            }
        },
        methods: {
            ...mapActions(['getMessages', 'sendMessage']),
            changeRoom(roomId) {
                this.getRoom(roomId);
            },
            async postMessage(message) {
            	const payload = { id: this.room.id, message};
            	const response = await this.sendMessage(payload)
                this.getMessages(this.room.id);
            },
        }
    }
</script>
<style>
    header {
        text-align: center;
        width: 100%;
    }
    .users {
        margin: 10px;
        font-size: .9rem;
    }
    .room-name {
        font-size: 1.4rem;
        margin: 15px 5px 5px 5px;
    }
    .chat-pane {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>