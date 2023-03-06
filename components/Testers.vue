<script setup lang="ts">
const { testers, sections } = useTesters();
</script>

<template>
  <p v-if="!testers.data.length">There are currently no active vendors.</p>

  <details v-else v-for="section in sections" :key="section" open>
    <summary>
      {{ section }}
    </summary>

    <template
      v-for="tester in testers.data.filter(
        (v) => v.fields.sectionName === section && v.fields.publish,
      )"
      :key="tester.id"
    >
      <div class="grid">
        <div>
          <strong>{{ tester.fields.companyName }}</strong>
        </div>

        <div>
          <a :href="`tel:${tester.fields.phoneNumber}`">{{
            tester.fields.phoneNumber
          }}</a>

          <span v-if="tester.fields.extension"
            >&nbsp;Ext. {{ tester.fields.extension }}</span
          >
        </div>
      </div>
      <hr />
    </template>
  </details>
</template>
