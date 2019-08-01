<template>
    <div id="app">
        <TodoList/>
    </div>
</template>

<script>
  import TodoList from '@/components/TodoList/TodoList';

  export default {
    components: {TodoList},
    setup() {
    },
  };
</script>

<style lang="scss">
    @import './styles/index.scss';

    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
