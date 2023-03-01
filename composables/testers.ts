export const testers = reactive<{
  loading: boolean;
  data: Tester[];
}>({
  loading: true,
  data: [],
});

export const useTesters = () => {
  async function fetchTesters(offset?: string) {
    testers.loading = true;

    try {
      const { client } = useAirtable();

      const { data } = await client.get("/tblSdwEF6j4RSh2sr", {
        params: {
          view: "App view",
          offset: offset,
        },
      });

      if (data.offset) {
        fetchTesters(data.offset);
      }

      testers.data.push(...data.records);
    } catch (error) {
      console.error(error);
    } finally {
      testers.loading = false;
    }
  }

  const sections = computed(() =>
    [...new Set(testers.data.flatMap((t) => t.fields.sectionName))].sort(),
  );

  return { fetchTesters, testers, sections };
};
