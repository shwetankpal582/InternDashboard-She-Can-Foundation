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

## Demo Video

Please record a video showing initial caching and offline response as per the project requirements.

## Email Submission

Email the demo video and GitHub repository link to:

vikas@codingjr.online

Include your full name and phone number in the email.

---

## Notes

- Whisper WASM and TTS model files should be placed in the `public` directory as `whisper.wasm` and `tts-model/` folder respectively.
- Service Worker precaches these files for offline use.
- The app requires microphone access.
