<template>
    <div class="chat-room">
        <room-list :list="rooms" @selection-changed="changeRoom"></room-list>
        <chat-pane :room="room" v-if="roomSelected"></chat-pane>
    </div>
</template>
<script>
    import RoomList from './room-list';
    import ChatPane from './chat-pane';
    import { mapGetters, mapActions } from 'vuex';

    export default {
    	name: 'chat-room',
      components: {
    		'room-list': RoomList,
	      'chat-pane': ChatPane,
      },
      data() {
    	return {
    	roomSelected: false
        };
      },
      mounted() {
        this.getRooms();
      },
      computed: {
        ...mapGetters(['rooms','room'])
      },
      methods: {
        ...mapActions(['getRooms', 'getRoom']),
        changeRoom(roomId) {
        	const self = this;
            this.getRoom(roomId).then(() => self.roomSelected = true);
        }
      }
    }
</script>
<style scoped>
    .chat-room {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
    }
</style>