<template>
<div>
    <h1>All Chat Room</h1>
    <div class="input-group">
        <div class="input-group-append">
            <span class="input-group-text">Room Name</span>
        </div>
        <input type="text" class="form-control" v-model="title" placeholder="Input New Chat Room Name"> 
    </div>
    <p>
        <button type="button" class="btn btn-primary" v-on:click="createChatRoom">Create</button>
    </p>
    <div v-for="(room, key, index) in rooms" :key="index">
        <router-link :to="{name: 'chatroom', params: {id: room.id}}">{{room.title}}</router-link>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import store from '../../store/store';

const database = store.state.database;

export default {
    data: function() {
        return {
            rooms: [],
            title: "",
        }
    },
    mounted: function() {
        this.getChatRooms();
    },
    methods: {
        getChatRooms: function() {
            const data = database.ref('lunachat');
            data.on("value", (snapshot) => {
                const mastochat = Object.entries(snapshot.val());
                
                this.rooms.length = 0;
                for(var i = 0; i < mastochat.length; i++) {
                    this.rooms.push({id: mastochat[i][0], title: mastochat[i][1].title});
                }
                console.log(this.rooms);
            }, (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            })
        },
        createChatRoom: function() {
            this.rooms.length = 0;
            database.ref('lunachat').push({
                title: this.title,
            });
            this.title = "";
        },
    }
}
</script>
