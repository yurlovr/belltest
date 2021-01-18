<template>
  <b-list-group
    class="list pr-1"
  >
    <b-list-group-item
      v-for="item in data"
      :key="item.id"
      button
      class="d-flex justify-content-between"
      @click="$emit('item-click', { action, item })"
    >
      {{ item.name }}
      <b-badge
        :variant="isAdd ? 'primary' : 'danger'"
        pill
        class="align-self-center"
      >
        {{ isAdd ? 'add' : 'delete'}}
      </b-badge>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { ACTION_TYPES } from '@/const/actionTypes';

export default {
  name: 'List',
  props: {
    data: {
      type: Array,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  computed: {
    isAdd() {
      return this.action === ACTION_TYPES.ADD;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  height: 50vh;
  overflow-y: scroll;
}
</style>>
