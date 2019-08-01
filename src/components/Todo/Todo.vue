<template>
    <div class="Todo">
        <input
            :id="id"
            type="checkbox"
            v-model="inputValue"/>
        <label :for="id" :class="getClassName()">{{name}}</label>
    </div>
</template>

<script>
  import {value} from 'vue-function-api';

  export default {
    props: {
      name: String,
    },
    setup(props) {
      const {name} = props;
      const id = `${name}_${Date.now()}`;
      const inputValue = value('');

      const getClassName = () => {
        return `Todo__label${inputValue.value ? '--checked' : ''}`;
      };

      return {
        id,
        name,
        inputValue,
        getClassName,
      };
    },
  };
</script>

<style lang="scss" scoped>
    .Todo {
        display: block;
        width: 250px;
        cursor: auto;

        &__label {

            &--checked {
                text-decoration: line-through;
            }
        }
    }
</style>
