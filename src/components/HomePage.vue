<template>
  <Suspense>
    <template #default>
      <div v-if="payments" class="hello">
        <PaymentTable
          title="Due Payments"
          :payments="duePayments"
        ></PaymentTable>
        <PaymentTable
          v-if="payments"
          title="Current Payments"
          :payments="currentPayments"
        ></PaymentTable>
        <PaymentTable
          v-if="payments"
          title="Upcoming payments"
          :payments="upcomingPayments"
        ></PaymentTable>
      </div>
    </template>
    <template #fallback>
      <!-- What to show while it's loading -->
      Loading...
    </template>
  </Suspense>
</template>

<script lang="ts">
import PaymentTable from "@/components/PaymentTable.vue";
import { defineComponent } from "vue";
import PaymentService from "@/service/PaymentService";
import { Payment } from '@/models/Payment';

export default defineComponent({
  name: "HomePage",
  components: {
    PaymentTable
  },
  props: {
    msg: String
  },
  data(): {
    payments: Payment[];
  } {
    return {
      // eslint-disable-next-line no-undef
      payments: []
    };
  },
  created() {
    PaymentService.getPayments().then(response => {
      this.payments = response.data;
    });
  },
  computed: {
    // a computed getter
    upcomingPayments: function(): Payment[] {
      // `this` points to the vm instance
      return this.payments.filter(payment => payment.id !== 10);
    },

    currentPayments: function(): Payment[] {
      return this.payments.filter(payment => payment.id === 11);
    },

    duePayments: function(): Payment[] {
      return this.payments.filter(payment => payment.id === 12);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
