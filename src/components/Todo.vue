<template>
    <v-card>
        <v-container class="tt-todo__item-container" :class="{'is-deleting':todo.isDeleting}">
            <v-layout @click="initDelete" flex align-center class="tt-todo__item-container__edit">
                <button  color="error" class="text--white tt-todo__item-container__edit__delete-button">
                    <v-icon color="white" p-4>delete</v-icon>
                </button>
            </v-layout>
            <v-layout flex align-center>
                <v-flex xs5 ml-5>
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
    mounted() {
        console.log(this.todo);
    },
    props: {
        todo: {
            type: Object,
            default: {
                name: "No Name"
            }
        },
    },
    methods: {
        initDelete() {
            this.$emit('delete', this.todo._id)
        }
    }
}
</script>
<style lang="scss">
.tt-todo {
    &__item-container {
        position: relative;
        overflow-x: hidden;
        cursor: pointer;
        &:hover {
            .tt-todo__item-container__edit {
                left: 0;
            }
        }
        &__edit {
            position: absolute;
            top: 0;
            left: -28px;
            height: 100%;
            width: 25px;
            background-color: rgb(245, 97, 97);
            transition: left 250ms ease-in-out, background-color 100ms ease;
            &:hover {
                    background-color: rgb(190, 56, 56);
                }
            &__delete-button {      
                &:focus {
                    outline: 0;
                }
            }
        }
        &.is-deleting {
            background-color: rgb(206, 206, 206);
            pointer-events: none;
            color: #ffffff;
        }
    }
}
</style>
