self.onmessage = async (event) => {
  const { command, audioChunk } = event.data;

  if (command === 'init') {
    // Load whisper.wasm here
    // Placeholder: simulate loading
    self.postMessage({ type: 'init', status: 'loaded' });
  } else if (command === 'process') {
    // Process audioChunk with whisper WASM
    // Placeholder: simulate transcription
    const transcript = 'simulated transcript';
    self.postMessage({ type: 'transcript', transcript });
  }
};
