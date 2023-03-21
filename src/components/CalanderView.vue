<template>
    <v-container>
        <v-calendar v-model="selectedDate" @change="loadJournalEntry"></v-calendar>
        <v-card v-if="journalEntry">
        <v-card-title>
            {{ selectedDate }}
        </v-card-title>
        <v-card-text>
            {{ journalEntry }}
        </v-card-text>
        </v-card>
        <v-card v-else>
        <v-card-title>
            {{ selectedDate }}
        </v-card-title>
        <v-card-text>
            You did not journal on this day.
        </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import axios from 'axios'
import cookies from "vue-cookies";

export default {
    data() {
        return {
        selectedDate: null,
        journalEntry: null
        }
    },
    methods: {
        loadJournalEntry() {
            if (!this.selectedDate) {
                return;
            }
            const date = this.selectedDate;
            const token = cookies.get('token');
            axios.get(`http://127.0.0.1:5000/api/journal?${date}`, {
                headers: { token }
            })
            .then(response => {
                this.journalEntry = response.data[0];
            })
            .catch(error => {
                console.error(error);
            });
        }

    }
}
</script>
