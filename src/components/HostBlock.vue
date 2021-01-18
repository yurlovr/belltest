<template>
  <b-card
    no-body
    class="text-center mb-3"
  >
    <div class="bg-info text-light">
      Сurrent data request path
      {{ hostForRender }}
    </div>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { DEFAULT_HOST } from '@/const/defaultHost';

export default {
  name: 'HostBlock',
  data() {
    return {
      hostForRender: DEFAULT_HOST,
    };
  },
  watch: {
    loading(value) {
      if (value) {
        this.hostForRender = this.host || DEFAULT_HOST;
      }
    },
  },
  computed: {
    ...mapGetters('app', {
      host: 'getHost',
      loading: 'getIsLoading',
    }),
  },
};
</script>
