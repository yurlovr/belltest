<template>
  <div>
    <h3>
      Current items
    </h3>
    <b-form-input
      placeholder="Search"
      class="mb-5"
      :value="searchString"
      @input="searchItem"
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
import { DELAY } from '@/const/delay';
import List from './List';

export default {
  name: 'LeftBlock',
  components: {
    List,
  },

  data() {
    return {
      actionType: ACTION_TYPES.ADD,
      timerId: null,
    };
  },
  mixins: [clickToItem],
  computed: {
    ...mapGetters('app', {
      dataList: 'getData',
      searchString: 'getSearchString',
    }),
  },
  beforeDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  },
  methods: {
    ...mapActions('app', [
      'setActionData',
      'setSearchString',
    ]),
    searchItem(value) {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      this.timerId = setTimeout(() => {
        this.setSearchString(value);
      }, DELAY);
    },
  },
};
</script>
