import { ComposioToolSet } from "composio-core";

const composio = new ComposioToolSet({ apiKey: "yo9wd8sk2hlyb7ar1kg2k" });

export const gmail = {
  searchEmails: async (input: any) => {
    const result = await composio.executeAction({
      action: "GMAIL_FETCH_EMAILS",
      params: {
        query: input.query,
        maxResults: input.maxResults ?? 5,
        from: input.from,
        to: input.to,
        startDate: input.startDate,
        endDate: input.endDate
      }
    });
    return result;
  }
};
