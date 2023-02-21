import { reactive } from "vue";
import airtable from "./airtable";

export const testers = reactive<{
  loading: boolean;
  data: Tester[];
}>({
  loading: true,
  data: [],
});

export async function fetchTesters(offset?: string) {
  testers.loading = true;

  try {
    const { data } = await airtable.get("/tblSdwEF6j4RSh2sr", {
      params: {
        view: "App view",
        offset: offset,
      },
    });

    if (data.offset) {
      fetchTesters(data.offset);
    }

    // testers.data = data.records;
    testers.data.push(...data.records);
  } catch (error) {
    console.error(error);
  } finally {
    testers.loading = false;
  }
}
