<template>
  <div class="home">
    <Main />
  </div>
</template>

<script>
import Main from '@/components/Main';
import { mapGetters, mapActions } from 'vuex';
import { HISTORY_TYPES } from '@/const/historyTypes';

export default {
  name: 'Home',
  components: {
    Main,
  },
  computed: {
    ...mapGetters('app', {
      data: 'getData',
    }),
  },
  mounted() {
    if (!this.data.length) {
      this.setData();
    }
    this.historyType(HISTORY_TYPES.ALL);
  },
  methods: {
    ...mapActions('app', {
      setData: 'setDataFromApi',
      historyType: 'setHistoryType',
    }),
  },
};
</script>
