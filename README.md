# Next.js Whisper TTS App

This is a Next.js + TypeScript web app that records microphone input, transcribes speech locally using Whisper WASM in a Web Worker, sends the transcript to OpenAI Chat Completion API, synthesizes the reply locally with a cached TTS engine, and plays back the audio. The app works offline except for the OpenAI API call.

## Features

- Next.js + TypeScript
- Web App Manifest and Service Worker for offline caching
- Local speech-to-text (STT) with Whisper WASM in a Web Worker
- OpenAI Chat Completion integration
- Local text-to-speech (TTS) with Coqui-style TTS model in a Web Worker
- Interaction flow with latency logging and audio playback

## Setup

1. Clone the repository

2. Install dependencies

```bash
npm install
```

3. Create a `.env.local` file in the root with your OpenAI API key:

```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build

```bash
npm run build
npm start
```

## Performance Report

| Stage          | Latency (ms) |
| -------------- | ------------ |
| STT            | (measured)   |
| OpenAI API     | (measured)   |
| TTS            | (measured)   |
| Playback Start | (measured)   |


## Notes

- Whisper WASM and TTS model files should be placed in the `public` directory as `whisper.wasm` and `tts-model/` folder respectively.
- Service Worker precaches these files for offline use.
- The app requires microphone access.

- ## Screenshot
-
- <img width="1923" height="1020" alt="Screenshot 2025-08-04 001701" src="https://github.com/user-attachments/assets/5483a4af-9b31-466e-a66e-844858d3a543" />

- <img width="1923" height="1019" alt="Screenshot 2025-08-04 001711" src="https://github.com/user-attachments/assets/c1244f2f-ea13-4651-8c0c-e8f5f6e64242" />

- <img width="613" height="377" alt="Screenshot 2025-08-04 001720" src="https://github.com/user-attachments/assets/42aed6c0-fb43-4133-b747-90201fa83989" />

- <img width="1923" height="1014" alt="Screenshot 2025-08-04 001727" src="https://github.com/user-attachments/assets/4ef9c157-5f95-468b-8b8b-bb22eb516fd7" />
