<template>
    <li class="room-item" :class="{ 'selected': selected }" @click="setChatRoom">
        {{ item.name }}
    </li>
</template>
<script>
	export default {
		name: 'room-item',
		props: {
			item: {
				type: Object,
				default: () => {},
			},
            selected: {
                type: Boolean,
                default: false,
            },
		},
      methods: {
		setChatRoom() {
          this.$emit('room-selected', this.item.id);
        }
      },
	}
</script>
<style>
    .room-item {
        padding: 15px 25px;
        list-style-type: none;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
    }
    .room-item:hover {
        background-color: deeppink;
    }
    .selected {
        background-color: darkred;
    }
</style>