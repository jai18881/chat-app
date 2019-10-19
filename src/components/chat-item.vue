<template>
    <li class="chat-item">
        <p class="message" :class="{ 'user-style' : isLoggedInUser }">{{ item.message }}</p>
        <p class="name" v-if="!isLoggedInUser">{{ item.name }}</p>
    </li>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'chat-item',
		props: {
			item: {
				type: Object,
				default: () => {},
			},
		},
		computed: {
          ...mapGetters(['user']),
			isLoggedInUser() {
				return this.item.name === this.user.name;
            },
		},
	}
</script>
<style>
    .chat-item {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
    }

    .message {
        border-radius: 25px;
        padding: 15px 30px;
        width: auto;
        height: auto;
        margin-bottom: 0;
        background-color: #ffffff;
        align-self: flex-start;
        box-sizing: border-box;
    }
    .name {
        margin-top: 5px;
    }
    .user-style {
        background-color: #FB0032;
        color: antiquewhite;
        align-self: flex-end;
    }
</style>