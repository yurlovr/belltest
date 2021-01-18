<template>
  <b-container>
    <b-overlay
      :show="isLoading"
      rounded="sm"
    >
      <b-row>
        <b-col>
          <host-block />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <change-host />
        </b-col>
      </b-row>
      <b-row
        v-if="error"
      >
        <b-col>
          <error-request
            :error="error"
          />
        </b-col>
      </b-row>
      <b-row
        v-if="!error"
        class="main p-2"
      >
        <b-col class="border-right">
          <left-block />
        </b-col>
        <b-col class="border-left">
          <right-block />
        </b-col>
      </b-row>
    </b-overlay>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import ErrorRequest from './ErrorRequest';
import HostBlock from './HostBlock';
import ChangeHost from './ChangeHost';

export default {
  name: 'Main',
  components: {
    LeftBlock,
    RightBlock,
    ErrorRequest,
    HostBlock,
    ChangeHost,
  },
  computed: {
    ...mapGetters('app', {
      isLoading: 'getIsLoading',
      error: 'getError',
    }),
  },
};
</script>
<style lang="scss" scoped>
.main {
  min-height: 70vh;
}
</style>
