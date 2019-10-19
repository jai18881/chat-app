import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	currentUser: {
  		name: '',
		  loginTime: ''
	  },
	  room: {},
  	rooms: [],
	  messages: []
  },
	getters: {
  	user(state) {
		  return state.currentUser;
	  },
  	room(state) {
  		return state.room;
	  },
		rooms(state) {
			return state.rooms;
		},
		messages(state) {
			return state.messages;
		},
	},
  mutations: {
		SET_CURRENT_USER(state, userName) {
			state.currentUser = {
				'name': userName,
				'loginTime': new Date(),
			};
		},
	  SET_ROOMS(state, rooms) {
			state.rooms = rooms;
	  },
	  SET_ROOM(state, room) {
		  state.room = room;
	  },
	  SET_MESSAGES(state, messages) {
		  state.messages = messages;
	  }
  },
  actions: {
  	setUser({ commit }, userName) {
  		commit('SET_CURRENT_USER', userName);
	  },
  	async getRooms({ commit }) {
  		try {
			  const response = await fetch('http://localhost:8080/api/rooms');
			  const myJson = await response.json();

			  commit('SET_ROOMS', myJson);
		  } catch(e) {
  			console.error(e);
		  }
	  },

	  async getRoom({ commit }, id) {
		  try {
			  const response = await fetch(`http://localhost:8080/api/rooms/${id}`);
			  const myJson = await response.json();
			  commit('SET_ROOM', myJson);
		  } catch(e) {
			  console.error(e);
		  }
	  },

	  async getMessages({ commit }, id) {
		  try {
			  const response = await fetch(`http://localhost:8080/api/rooms/${id}/messages`);
			  const myJson = await response.json();
			  commit('SET_MESSAGES', myJson);
		  } catch(e) {
			  console.error(e);
		  }
	  },

	  async sendMessage({ commit, getters }, { id, message }) {
		  try {
		  	const data = { 'name': getters.user.name, message}
			  const response = await fetch(`http://localhost:8080/api/rooms/${id}/messages`, {
			  	method: 'POST',
				  headers: {
					  'Content-Type': 'application/json'
				  },
				  body: JSON.stringify(data) });
			  const myJson = await response.json();
		  } catch(e) {
			  console.error(e);
		  }
	  }
	  // getRooms
	  // getRoom
	 //  sendMessage
	  //get Message
  },
  modules: {
  }
})
