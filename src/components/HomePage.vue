<template>
  <Suspense>
    <template #default>
      <div v-if="payments" class="hello">
        <PaymentTable title="Due Payments" :payments="payments"></PaymentTable>
        <PaymentTable
          v-if="payments"
          title="Current Payments"
          :payments="payments"
        ></PaymentTable>
        <PaymentTable
          v-if="payments"
          title="Upcoming payments"
          :payments="payments"
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

export default defineComponent({
  name: "HomePage",
  components: {
    PaymentTable
  },
  props: {
    msg: String
  },
  data() {
    return {
     
    };
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
