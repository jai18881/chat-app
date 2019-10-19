<template>
    <div class="room-list">
        <div class="user-info">
            <h3>{{ user.name }}</h3>
            <p class="time">{{ formattedTime }}</p>
        </div>
        <room-item v-for="(item, i) in list" :item="item" @room-selected="selectionChanged" :selected="item.id === currentRoomId" :key="i"></room-item>
    </div>
</template>
<script>
	import RoomItem from './room-item';
    import { mapGetters, mapActions } from 'vuex';
    import { formatDistance } from 'date-fns';

    export default {
		name: 'room-list',
		components: {
			'room-item': RoomItem
		},
        data() {
			return {
              formattedTime: '',
              currentRoomId: -9999
            }
        },
        props: {
            list: {
                type: Array,
                default: () => [],
            },
        },
        mounted() {
			const self = this;
			this.updateLoginTimer();
	        setInterval(self.updateLoginTimer.bind(self), 1000);
        },
        computed: {
            ...mapGetters(['user']),
        },
        methods: {
			selectionChanged(roomId) {
              this.currentRoomId = roomId;
              this.$emit('selection-changed', roomId);
            },
            updateLoginTimer() {
	            this.formattedTime = 'Online for ' + formatDistance(new Date(), this.user.loginTime);
            }
        }
    }
</script>
<style scoped>
    .room-list {
        display: flex;
        flex-direction: column;
        width: 30%;
        min-width: 300px;
        background-color: #FB0032;
        color: antiquewhite;
    }
    .user-info {
        padding: 10px 25px;
        width: 100%;
        box-sizing: border-box;
    }
    .time {
        font-size: 12px;
        margin-top: 5px;
    }
    h3 {
        margin-bottom: 5px;
    }
</style>