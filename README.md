# 🧠 Toolflow

**AI-Native Tool Calling Framework** — Build intelligent agents that interact with tools via natural language, with minimal context bloat and full developer control.

![Toolflow Banner](https://raw.githubusercontent.com/dksingh1997/Toolflow/main/assets/toolflow-banner.png) <!-- optional if you design a logo later -->

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

