<template>
    <form @submit="handleSubmit">
        <input
                class="Input"
                v-model="inputValue"
        />
    </form>
</template>

<script>
    import {value} from 'vue-function-api';

    export default {
        setup(props, ctx) {
            const inputValue = value('');

            const handleSubmit = (e) => {
                e.preventDefault();
                if (!inputValue.value) return;
                ctx.emit('newTodo', inputValue.value);
                inputValue.value = '';
            };

            return {
                handleSubmit,
                inputValue
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    .Input {
        width: 100%;
        height: 32px;
        padding: 0 16px;
        border-radius: 4px;
        border: 1px solid $color__border;
        color: $color__title-active;
        background: $color__background;
        box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.32);

        font-size: 12px;
        line-height: normal;
        transition: border-color 0.3s, opacity 0.3s, box-shadow 0.3s;

        &:focus {
            border-color: $color__focus-links;
        }
    }
</style>