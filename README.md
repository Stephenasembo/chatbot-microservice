# 🤖 Chatbot Microservice

> Lightweight AI microservice 🔌 built for backend-to-backend integration.

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Authentication](#authentication)
- [Api Endpoint](#api-endpoint)
- [Getting Started](#getting-started)
- [Use Cases](#use-cases)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [License](#license)

## Overview

**Status:** Live on [Render](https://chatbot-microservice.onrender.com)

A modular and lightweight AI chatbot microservice built with **Express.js** and powered by [**Huggingface**](https://huggingface.co/meta-llama) AI models. Designed to be plugged into any backend system with minimal setup and robust security.

This is part of an ongoing modular ecosystem project to enable scalable microservice-based architectures.

## 🚀 Features

- **Secure Microservice** – Backend-only access via token-based header auth.

- **Huggingface AI Integration** – Intelligent replies powered by [meta llama ai](https://huggingface.co/meta-llama) models.

- **Plug-and-Play Architecture** – Drop-in AI messaging for any app.

- **Backend-to-Backend Design** – Promotes secure communication between clients and this microservice.

- **Ready for Expansion** – Future-ready for use in bots, assistants, chat apps, and even internal tools.

## 🛠️ Tech Stack

| Tech        | Description                           |
| ----------- | ------------------------------------- |
| Node.js     | Express server for routing and logic. |
| Huggingface | LLM API for AI replies.               |
| Render      | Deployment hosting platform.          |
| dotenv      | Secure environment variable handling. |

## 🔐 Authentication

This microservice uses a simple but effective token-based headers to authenticate requests.

```http
Authorization: Bearer <MICROSERVICE_API_TOKEN>
```

> ⚠️ Store MICROSERVICE_API_TOKEN in your .env file. Do not expose it to the frontend.

Only requests from verified backend clients (with a valid token stored securely in .env) are allowed access.

## 📨 API Endpoint

`POST /ai`

Send a message and receive a smart AI response.

### Request

**Request Headers:**

```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "input": "What is the world's current population ?"
}
```

### Response

**✅ Successful Response(200)**

```json
{
  "success": true,
  "data": "The world's population is approximately 8 billion.."
}
```

**❌ Unsuccessful Response(500)**

```json
{
  "success": false,
  "error": "An internal error occurred."
}
```

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Stephenasembo/chatbot-microservice.git

cd chatbot-microservice
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables.
   Create a .env file in the root of the project.

```bash
touch .env
```

Provide environment variables for:

```
- PORT                  # Port for the server to run on.
- HF_TOKEN              # Huggingface API access token.
- MICROSERVICE_API      # API token for backend to backend communication.
```

4. Start the development server

```bash
node app.js
```

## Use Cases

This service is ideal for:

- Messaging apps with AI assistants.

- Customer support bots.

- Learning tools.

- Developer-focused assistants.

- Backend systems needing automated replies.

## Future Enhancements

- Rate limiting and abuse protection.

- Conversation context memory.

- Admin dashboard for monitoring usage.

- Multi-AI support (Claude, Gemini, etc.).

## Author

**Stephen Asembo**

Full-stack Dev

## License

This project is licensed under the MIT License.
