<script setup lang="ts">
import { testers } from "../lib/testers";
</script>

<template>
  <p v-if="!testers.data.length">There are currently no active vendors.</p>

  <!-- <pre>{{ testers }}</pre> -->

  <div v-else class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(tester, i) in testers.data" :key="i">
          <td>{{ tester.fields.companyName }}</td>

          <td>{{ tester.fields.phoneNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
