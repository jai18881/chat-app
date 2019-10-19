<template>
    <div class="container" ref="container">
        <ul ref="messages" class="chat-list">
            <chat-item v-for="(item, i) in list" :item="item" :key="i"></chat-item>
        </ul>
    </div>
</template>
<script>
	import ChatItem from './chat-item';
	import _ from 'lodash';

    export default {
    	name: 'chat-list',
	    components: {
		    'chat-item': ChatItem,
	    },
        props: {
	        list: {
		        type: Array,
		        default: () => [],
	        },
        },
        watch: {
    		list(newVal, oldVal) {
              if(!_.isEqual(newVal, oldVal)) {
	              const messageDiv = this.$refs.container;
	              setTimeout(() => messageDiv.scrollTop = messageDiv.scrollHeight, 100);
              }
            }
        }
    }
</script>
<style>
    .chat-list {
        padding-inline-start: inherit;
        margin: 10px auto;
        flex-grow: 1;
        flex-direction: column;
        list-style-type: none;
        height: auto;
        width: 90%;
    }
    .container {
        overflow: auto;
        border-top: 2px solid gainsboro;
        border-bottom: 2px solid gainsboro;
        border-shadow: 60px -16px teal;
        background-color: #EBEDEF;
        height: 100%;
        width: 100%;
    }
</style>