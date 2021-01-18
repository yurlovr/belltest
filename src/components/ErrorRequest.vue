<template>
  <b-card
    class="w-75 m-auto"
    title="Request data error"
  >
    <b-card-text
      class="mb-3 text-danger"
    >
      {{ errorForRender }}
    </b-card-text>
    <change-request-path />
  </b-card>
</template>

<script>
import { mapActions } from 'vuex';
import ChangeRequestPath from '@/components/ChangeRequestPath';

export default {
  name: 'ErrorRequest',
  components: {
    ChangeRequestPath,
  },
  props: {
    error: {
      type: String,
      required: true,
    },
  },
  computed: {
    errorForRender() {
      return this.error;
    },
  },
  mounted() {
    this.setIsShowChangeBlock(false);
  },
  methods: {
    ...mapActions('app', [
      'setRequestType',
      'setIsShowChangeBlock',
    ]),
  },
};
</script>
