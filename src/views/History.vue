<template>
  <div>
    <no-history
      v-if="!history.length || !historyForRender.renderDataHistory.length"
      :history-type="historyType"
    />
    <b-container
      v-else
    >
      <b-row class="main p-2">
        <b-col>
          <h3 class="mb-3">
            {{ historyForRender.header }}
          </h3>
          <buttons-group
            @history-type="showCurrentHistory"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="mt-4 table-history pr-1">
            <b-table
              hover
              outlined
              bordered
              :fields="fields"
              :items="historyForRender.renderDataHistory"
            >
            </b-table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import NoHistory from '@/components/NoHistory';
import ButtonsGroup from '@/components/ButtonsGroup';
import { HISTORY_TYPES } from '@/const/historyTypes';

export default {
  name: 'History',
  components: {
    ButtonsGroup,
    NoHistory,
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'id',
          sortable: false,
        },
        {
          key: 'action',
          sortable: true,
        },
        {
          key: 'date',
          label: 'Date change',
          sortable: true,
        },
      ],
      HISTORY_TYPES,
    };
  },
  computed: {
    ...mapGetters('app', {
      history: 'getHistory',
      historyType: 'getHistoryType',
    }),
    historyForRender() {
      switch (this.type) {
        case HISTORY_TYPES.DEL:
          return {
            renderDataHistory: this.history.filter((item) => item.action === HISTORY_TYPES.DEL),
            header: 'History delete',
          };
        case HISTORY_TYPES.ADD:
          return {
            renderDataHistory: this.history.filter((item) => item.action === HISTORY_TYPES.ADD),
            header: 'History add',
          };
        default: return {
          renderDataHistory: this.history,
          header: 'All History',
        };
      }
    },
    type() {
      return this.historyType;
    },
  },
  methods: {
    ...mapActions('app', [
      'setHistoryType',
    ]),
    showCurrentHistory({ type }) {
      this.setHistoryType(type);
    },
  },
};
</script>
<style lang="scss" scoped>
.table-history{
  height: 60vh;
  overflow-y: scroll;
}
</style>
