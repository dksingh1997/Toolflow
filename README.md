# 🧠 Toolflow

**AI-Native Tool Calling Framework** — Build intelligent agents that interact with tools via natural language, with minimal context bloat and full developer control.

---

## ⚠️ The Problem

Modern AI agents rely heavily on **tool calling** to fetch data or perform actions. But in practice:

- 🔥 Tool responses are **too large**, flooding the LLM context window.
- 🤯 Developers have **no control** over what part of the API response is used.
- 🧩 Mapping tools to agents is hard across different APIs and use cases.
- 🐘 Most frameworks assume monoliths — no modularity or control for devs building production systems.

> "Fetching Gmail emails returns hundreds of fields. I just need subject, from, and snippet!"  
> – Every AI dev, ever

---

## ✅ The Solution: Toolflow

Toolflow is an **AI-native middleware layer** to connect APIs and tools to LLM agents, with:

- 🔍 **Minimal context payloads**: Filter what actually goes to the LLM.
- 🛠️ **Composable tool registry**: Define tools + actions as modular objects.
- ⚙️ **Custom modes**:
  - **Light** – Send only minimal fields
  - **Full** – Send entire response
  - **AI Filter** – Auto-trim fields based on relevance
  - **Custom** – Dev chooses fields at runtime
- 📦 Plug-n-play TypeScript packages for runtime, registry, and types.
- ⚡ Works with existing frameworks (Langchain, Flowise, AutoGen, etc.)

---

## 🧱 Architecture

            +---------------------+
            |     AI Agent        |
            +---------------------+
                     |
                     | Tool Name + Action Name (e.g., Gmail.FindEmails)
                     v
            +---------------------+
            |     Toolflow        |   <-- You are here
            | (Registry + Runtime)|
            +---------------------+
                     |
         +-----------+-----------+
         |                       |
  +-------------+       +----------------+
  | Tool Config |       |    Executor    |
  | (Metadata)  |       |  (Calls API)   |
  +-------------+       +----------------+
         |                       |
         +-----------+-----------+
                     v
          +----------------------+
          | External API (Gmail) |
          +----------------------+

---

## 🧪 Example Use Case

### Tool: `Gmail.FindEmails`

Filtered response : 

{
  "data": {
    "messages": [
      {
        "from": "Dheeraj Kumar",
        "subject": "Repo check",
        "snippet": "Hi Dheeraj, Does this repo makes sense ?",
        "date": "Tue, 17 Jun 2025 12:01:00 +0200"
      }
    ],
    "nextPageToken": "16428802254119354251",
    "resultSizeEstimate": 201
  },
  "error": null,
  "successfull": true,
  "successful": true,
  "logId": "log_3XvoX1kpxPM6"
}

-------
git clone https://github.com/dksingh1997/Toolflow.git
cd Toolflow
npm install
npm run dev
  ├── registry/      → Tool definitions
  └── runtime/       → Core execution logic


