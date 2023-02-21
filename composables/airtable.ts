import axios from "axios";

const TABLE_ID = `appY3R5HBiFPVfK5n`;

export const useAirtable = () => {
  const client = axios.create({
    baseURL: import.meta.env.PROD
      ? `https://hc-caching-proxy.herokuapp.com/airtable/${TABLE_ID}`
      : `https://api.airtable.com/v0/${TABLE_ID}`,
    headers: import.meta.env.DEV
      ? {
          Authorization: `Bearer patCMqNApPrJE8SXi.143baa8db7f29e133b886a0c24776496d00671e7ac993231593b78a2cfe599a6`,
        }
      : undefined,
  });

  return { client };
};
