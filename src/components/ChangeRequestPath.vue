<template>
  <b-form-group
    label="Request path"
    label-for="type"
    label-align="left"
    label-class="input-label w-50 ml-auto mr-auto mb-0"
  >
    <div class="position-relative">
      <b-form-input
        id="type"
        placeholder="https://testbellserv.herokuapp.com/api/data"
        class="w-50 ml-auto mr-auto mb-3"
        :value="host"
        @input="setNewHost($event)"
      />

      <span
        v-if="isError"
        class="error position-absolute text-danger"
      >
        Invalid url
      </span>
    </div>

    <b-form-radio-group
      class="d-flex justify-content-center mb-3"
      v-model="selected"
      :options="options"
      value-field="name"
      text-field="name"
    />

    <b-button
      v-if="isModal"
      class="mr-3"
      variant="outline-secondary"
      @click="$root.$emit('bv::hide::modal', 'b-modal')"
    >
      Close
    </b-button>
    <b-button
      variant="primary"
      :disabled="!host || isError"
      @click="getNewData"
    >
      Get data
    </b-button>
  </b-form-group>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { REQUEST_METHODS } from '@/const/requestMethods';

export default {
  name: 'ChangeRequestPath',
  props: {
    isModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: REQUEST_METHODS.GET,
      options: [
        { name: REQUEST_METHODS.GET },
        { name: REQUEST_METHODS.POST },
      ],
      isError: false,
    };
  },
  watch: {
    selected(value) {
      this.setRequestType(value);
    },
  },
  computed: {
    ...mapGetters('app', {
      host: 'getHost',
    }),
  },
  methods: {
    ...mapActions('app', [
      'setHost',
      'setDataFromApi',
      'setRequestType',
    ]),
    checkValidHost(value) {
      if (!value) return false;
      return !((/^https?:\/\//).test(value)
        && value.includes('.')
        && value.split('.').length > 1);
    },
    setNewHost(value) {
      this.isError = this.checkValidHost(value);
      this.setHost(value);
    },
    getNewData() {
      if (this.isModal) {
        this.$root.$emit('bv::hide::modal', 'b-modal');
      }
      this.setDataFromApi('data');
    },
  },
};
</script>
<style lang="scss">
.input-label {
  font-size: 14px;
}
.error {
  bottom: -45%;
  left: 25%;
  font-size: 12px;
}
</style>
