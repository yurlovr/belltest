<template>
  <b-modal
    id="b-modal"
    hide-footer
    centered
    title="Change request data path"
  >
    <div class="d-block text-center">
      <change-request-path
      :is-modal="true"
      />
    </div>
  </b-modal>
</template>

<script>
import ChangeRequestPath from '@/components/ChangeRequestPath';

export default {
  name: 'Modal',
  components: {
    ChangeRequestPath,
  },
};
</script>
