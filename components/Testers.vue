<script setup lang="ts">
const { testers, sections } = useTesters();
</script>

<template>
  <p v-if="!testers.data.length">There are currently no active vendors.</p>

  <details v-else v-for="section in sections" :key="section" open>
    <summary>
      {{ section }}
    </summary>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th style="white-space: nowrap; text-align: right">Phone Number</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="tester in testers.data.filter(
              (v) => v.fields.sectionName === section && v.fields.publish,
            )"
            :key="tester.id"
          >
            <td>{{ tester.fields.companyName }}</td>

            <td style="white-space: nowrap; text-align: right">
              {{ tester.fields.phoneNumber }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
</template>
