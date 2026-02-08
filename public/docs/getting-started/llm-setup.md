# LLM Setup

Cai works with any OpenAI-compatible local server. AI is optional — system actions like Open URL, Maps, Calendar, Search, and Pretty Print JSON all work without it.

## Supported Providers

| Provider | Default URL | Setup |
|---|---|---|
| **LM Studio** | `http://127.0.0.1:1234/v1` | [Download](https://lmstudio.ai) → Load a model → Start server |
| **Ollama** | `http://127.0.0.1:11434/v1` | [Install](https://ollama.ai) → `ollama pull llama3.2` |
| **Jan AI** | `http://127.0.0.1:1337/v1` | [Download](https://jan.ai) → Load a model → Start server |
| **LocalAI** | `http://127.0.0.1:8080/v1` | [Setup guide](https://localai.io) |
| **Open WebUI** | `http://127.0.0.1:8080/v1` | [Install](https://openwebui.com) → Enable OpenAI API |
| **GPT4All** | `http://127.0.0.1:4891/v1` | [Download](https://gpt4all.io) → Enable API server |
| **Custom** | User-defined | Any OpenAI-compatible endpoint |

## How to Configure

1. Left-click the **Cai menu bar icon** (or click the Cai logo in the action window footer)
2. Select your **Model Provider** from the dropdown
3. If using **Custom**, enter your server's full URL

That's it — Cai will use your local LLM for AI-powered actions like Summarize, Translate, Explain, and Custom Actions.

## Verify Your Server

You can confirm your LLM server is running by opening Terminal and running:

```bash
# LM Studio (default)
curl http://127.0.0.1:1234/v1/models

# Ollama
curl http://127.0.0.1:11434/v1/models
```

If you get a JSON response listing models, your server is ready.

> [!NOTE]
> Cai uses the OpenAI-compatible `/v1/chat/completions` endpoint. Any server that implements this API will work.
