<template>
  <b-card
    :title="title"
    class="w-75 m-auto"
  >
    <router-link
      to="/"
      class="card-link"
    >
      Click to go home
    </router-link>
  </b-card>
</template>

<script>
import { HISTORY_TYPES } from '@/const/historyTypes';

export default {
  name: 'NoHistory',
  props: {
    historyType: {
      type: String,
      required: true,
    },
  },
  computed: {
    title() {
      switch (this.historyType) {
        case HISTORY_TYPES.ADD:
          return 'You have no history add of data changes';
        case HISTORY_TYPES.DEL:
          return 'You have no history delete of data changes';
        default:
          return 'You have no history of data changes';
      }
    },
  },
};
</script>
