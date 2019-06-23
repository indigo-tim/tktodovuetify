<template>
    <v-card>
        <v-container>
            <v-layout  flex align-center>
                <v-flex xs6>
                    <v-layout>
                    <h3> {{ todo.name }} </h3>
                    </v-layout>
                </v-flex>
                <v-flex xs6>
                    <v-layout flex justify-end>
                        <v-btn outline small fab color="success" :grow="false">
                            <v-icon>check</v-icon>
                        </v-btn>
                    </v-layout>
                </v-flex>
                
            </v-layout>
        </v-container>
    </v-card>
</template>
<script>
export default {
    props: {
        todo: {
            type: Object,
            default: {
                name: "No Name"
            }
        }
    }
}
</script>
<style lang="scss">

</style>
