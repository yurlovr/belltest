<template>
  <b-button-group>
    <b-button
      variant="secondary"
      @click="$emit('history-type', { type: HISTORY_TYPES.ALL })"
    >
      All History
    </b-button>
    <b-button
      variant="primary"
      @click="$emit('history-type', { type: HISTORY_TYPES.ADD })"
    >
      History add
    </b-button>
    <b-button
      variant="danger"
      @click="$emit('history-type', { type:HISTORY_TYPES.DEL })"
    >
      History delete
    </b-button>
  </b-button-group>
</template>

<script>
import { HISTORY_TYPES } from '@/const/historyTypes';

export default {
  name: 'ButtonGroup',
  data() {
    return {
      HISTORY_TYPES,
    };
  },
};
</script>
