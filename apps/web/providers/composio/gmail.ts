// export const gmail = {
//   searchEmails: async (input: any, config: any) => {
//     // Simulated response from Composio Gmail API
//     const fakeResponse = [
//       { subject: "Welcome", snippet: "Thanks for signing up", from: "team@example.com", date: "2024-01-01" },
//       { subject: "Your invoice", snippet: "Here's your bill", from: "billing@example.com", date: "2024-01-05" }
//     ];
//     return fakeResponse;
//   }
// };

// // import React from 'react';

// // export const gmail = {
// //   searchEmails: async (input: any, config: any) => {
// //     // Simulated response from Composio Gmail API
// //     const fakeResponse = [
// //       { subject: "Welcome", snippet: "Thanks for signing up", from: "team@example.com", date: "2024-01-01" },
// //       { subject: "Your invoice", snippet: "Here's your bill", from: "billing@example.com", date: "2024-01-05" }
// //     ];
// //     return fakeResponse;
// //   }
// // };





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
