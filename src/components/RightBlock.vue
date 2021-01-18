<template>
  <div>
    <h3 class="mb-2">
      Selected items
    </h3>
    <buttons-group
      class="mb-5"
      @history-type="setNewHistoryType"
    />
    <list
      v-if="dataList"
      :data="dataList"
      :action="actionType"
      @item-click="clickToItem"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ACTION_TYPES } from '@/const/actionTypes';
import { clickToItem } from '@/mixins/clickToItem';
import ButtonsGroup from '@/components/ButtonsGroup';
import List from '@/components/List';
import { ROUTERS } from '@/const/routers';

export default {
  name: 'RightBlock',
  components: {
    List,
    ButtonsGroup,
  },
  mixins: [clickToItem],
  data() {
    return {
      actionType: ACTION_TYPES.DEL,
    };
  },
  computed: {
    ...mapGetters('app', {
      dataList: 'getSelectedData',
    }),
  },
  methods: {
    ...mapActions('app', [
      'setActionData',
      'setHistoryType',
    ]),
    setNewHistoryType({ type }) {
      this.setHistoryType(type);
      this.$router.push(ROUTERS.HISTORY);
    },
  },
};
</script>

<style lang="scss" scoped>
.marginb {
  margin-bottom: 108px;
}
</style>
