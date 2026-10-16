# Talk to Speech

Push-to-talk dictation for the **DeepSeek Harness (DSH)** Web UI.

Hold a key, speak, release — the transcript is inserted into the composer draft.
No dialog, no microphone button, no mode to enter: the composer stays untouched
until you press the key.

```
hold  🎤  ──────────  speak  ──────────  release  →  text in your draft
```

## Features

- **Hold to record, release to send** — the recording ends the moment you let go.
- **Streams into the draft** — each hold appends its transcript to the same draft,
  separated by a space, so you can dictate in several passes.
- **Invisible while idle** — the composer row appears only during a hold.
- **Keyboard only** — no composer button competing with the send control.
- **Local recognition** — runs against DSH's speech-to-text providers
  (`sensevoice-local` by default); no audio leaves your machine.
- **Bilingual UI** — English and Chinese status strings.

## Requirements

| Requirement | Why |
| --- | --- |
| DSH with the Web UI (`dsh web`) | The plugin is a browser half plus a bundle row. |
| `@deepseek-ai/dsh-experimental-voice-input-bundle` **enabled** | It provides the speech backend this plugin drives: the `speech` Remote, the speech-to-text Host services, and the recognition model download. |
| A prepared recognition model | `sensevoice-local` by default. See [Model setup](#model-setup). |
| A dictation key | Defaults target the Windows **Copilot** key. See [Choosing your key](#choosing-your-key). |

This plugin deliberately ships **no** setup or settings UI. It replaces the
official microphone row so that only push-to-talk remains.

### Model setup

The speech model must exist once before dictation can work. Because this plugin
removes the official microphone row (and with it the model-setup dialog), the
model has to be prepared through the official plugin:

1. Enable `@deepseek-ai/dsh-experimental-voice-input-bundle` and **do not**
   install/enable this plugin yet.
2. Use the microphone button it adds to the composer and complete the model
   setup (a one-time download of roughly 240 MB).
3. Install and enable this plugin. Its patch disables the official microphone
   row and takes over the composer slot.

On Linux and macOS the prepared model lives in
`~/.dsh/speech-to-text/sensevoice/models/`. If those files are already present,
no extra setup is needed.

## Install

Via your DSH agent, which has the `plugin_manager` tool:

```
plugin_manager install_bundle target:github:Arkit003/dsh-talk-to-speech
```

Replace `Arkit003` with the GitHub account that hosts this repository. Other
accepted specs are a git URL, a hosted repository URL
(`https://github.com/Arkit003/dsh-talk-to-speech`), a `.tgz` tarball, an npm
package name, or a local path (`file:/absolute/path/to/dsh-talk-to-speech`).

Then make sure the backend bundle is enabled and refresh the Web UI:

```
plugin_manager set_bundle target:@deepseek-ai/dsh-experimental-voice-input-bundle enabled:true
```

## Usage

| You do | You see |
| --- | --- |
| Nothing | Nothing — the composer is clean. |
| Hold the key | A small row appears: a ✕ button, an activity dot, and a microphone glyph. |
| Keep holding | The microphone glyph becomes a live waveform of your voice. |
| Release | The row switches to transcription, then the text lands in your draft. |
| Hold again | The next transcript is appended to the same draft. |

Press ✕ at any point to abort the hold and discard it.

The row reports real problems as text instead of guessing: `No speech detected
(2.4s)` means audio was captured but nothing was recognized, while `(0.0s)`
means the key was released before the microphone opened — hold it longer.

## Choosing your key

The key is matched on `event.code`, which is layout-independent and therefore
the most portable identifier. To find your key's code, open the browser console
on the DSH page and press it:

```js
addEventListener("keydown", (e) => console.log(e.code, e.key, e.keyCode, e.location), true);
```

Then add the reported `code` to the `PTT_CODES` list near the top of the
push-to-talk component in `client.js`:

```js
const PTT_CODES = ["OSRight", "F23", "LaunchApplication1", "LaunchApplication2"];
```

Out of the box it recognizes the Windows Copilot key (`OSRight`), keyboards that
report it as `F23` or `LaunchApplication1/2`, `LaunchAssistant`, the legacy
virtual-key codes for `F23`/`F24`, and the right-hand Windows key. After editing
`client.js`, refresh the page.

## How it works

- `index.js` — an empty Host marker. It exists only so the Loader has a row to
  mount the browser half onto.
- `client.js` — the browser half. It registers a component into the composer's
  single-seat `conversation.input.activity` slot and talks to the speech backend
  through `ctx.remote.speech` (`catalog()`, `follow()`, `transcribe()`), mounting
  its own copy of the generated speech Remote definitions.
- `cordis.patch.yml` — disables the official `ui-voice-input` row, which owns the
  same single slot, and inserts this bundle's row.

Captured audio is resampled to 16 kHz mono PCM in a WAV container in the browser
before it is handed to the Host, which keeps the Host limit at 120 seconds and
4 MB per hold.

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| Nothing happens on the key at all | The `speech` Remote is unavailable — the backend bundle is not enabled. Enable `@deepseek-ai/dsh-experimental-voice-input-bundle`. |
| Pill says *Preparing recognition model…* | The provider is not ready yet. See [Model setup](#model-setup). |
| Pill says *No speech detected (0.0s)* | The microphone had not opened when you released. Hold the key slightly longer. |
| Pill says *No speech detected (2.4s)* | Audio was captured but nothing was recognized — speak closer to the microphone, or check that the right input device is selected in your OS. |
| Pill says *Microphone permission is disabled* | Allow microphone access for the DSH page in the browser **and** in the OS privacy settings, then refresh. |
| Pill says *Current browser does not support recording* | Use a Chromium-based browser; the recorder needs `MediaRecorder`. |
| Pill says *The input is busy right now* | The composer is locked (a message is being sent). Try again in a moment. |
| Pill says *The recording exceeds the service limit* | The hold exceeded the Host limit (120 s / 4 MB). Use shorter holds. |
| Text never appears though a transcript was recognized | The draft changed while you were speaking. The recognized text is kept — press **Insert recognized text** in the row. |

## Limitations

- Dictation is a **hold** gesture, not a toggle.
- The key is configured in source, not through a settings UI.
- One hold maps to one transcription; there is no continuous streaming mode.
- Requires a browser with `MediaRecorder` and Web Audio (Chromium recommended).
- The composer slot is single-seat, so this plugin and the official microphone
  row cannot both be visible; the patch resolves that in favour of push-to-talk.

## Development

Clone the repository and install it into a DSH profile straight from disk:

```
plugin_manager install_bundle target:file:/absolute/path/to/dsh-talk-to-speech
```

There is no build step: `client.js` ships as-is and is loaded directly by the
browser module loader. A `file:` install hardlinks a snapshot of the package
into the profile, so after editing the source re-run that command — remove and
install again if the change does not appear — then refresh the page. No bundler
and no restart are involved.

## License

[MIT](LICENSE)
