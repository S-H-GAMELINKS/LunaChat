<template>
<div>
    <h1>{{title}}</h1>
    <div class="input-group">
        <div class="input-group-append">
            <span class="input-group-text">Input talk</span>
        </div>
        <input type="text" class="form-control" v-model="content"> 
    </div>
    <p>
        <button type="button" class="btn btn-primary" v-on:click="createTalk">Submit</button>
    </p>
    <p v-for="(talk, key, index) in talks" :key="index">
        {{talk.content}}
    </p>
</div>
</template>

<script>
import axios from 'axios';
import store from '../../store/store';

const database = store.state.database;

export default {
    data: function() {
        return {
            title: "",
            talks: [],
            content: "",
        }
    },
    mounted: function() {
        this.getTalks();
    },
    methods: {
        getTalks: function() {
            const data = database.ref('lunachat' + String(this.$route.path).replace(/\/chats\/rooms/, ''));
            data.on("value", (snapshot) => {
                const lunachat = Object.entries(snapshot.val());
                console.log(lunachat);
                this.title = lunachat[lunachat.length - 1][1];
                this.talks.length = 0;
                for(var i = 0; i < lunachat.length; i++) {
                    this.talks.push({id: lunachat[i][0], content: lunachat[i][1].content});
                }
                this.talks.reverse();
            }, (errorObject) => {
                console.log("The read failed: " + errorObject.code);
            })
        },
        createTalk: function() {
            this.talks.length = 0;
            database.ref('lunachat' + String(this.$route.path).replace(/\/chats\/rooms/, '')).push({
                content: this.content,
            });
            this.content = "";
        },
    }
}
</script>