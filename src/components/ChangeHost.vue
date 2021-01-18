<template>
  <div
    v-if="show"
    class="mb-3"
  >
    <b-link
      href="#"
      @click.prevent="$bvModal.show('b-modal')"
    >
      Click to change request path
    </b-link>
    <modal />
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import { mapGetters } from 'vuex';

export default {
  name: 'ChangeHost',
  components: {
    Modal,
  },
  computed: {
    ...mapGetters('app', {
      show: 'getIsShowChangeBlock',
    }),
  },
};
</script>
