		window.__ModuleLoader__.load({
			id: "dsh-talk-to-speech",
			factory: (require) => {
				var module = { exports: {} };
				var exports = module.exports;
				Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
				let react_jsx_runtime = require("react/jsx-runtime");
				let react = require("react");
				let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
				let _deepseek_ai_dsh_api_gateway_client = require("@deepseek-ai/dsh-api-gateway/client");
				let _deepseek_ai_dsh_client_store = require("@deepseek-ai/dsh-client-store");
				//#region ../../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
				/** @file Zod v4 core types (inlined stub). */
				const _zod_core = {};
				/** @file Zod v4 JSON schema helpers (inlined stub). */
				const _zod_json_schema = {};
				/** @file Zod v4 core utilities (inlined stub). */
				const zod = Object.assign(_zod_core, _zod_json_schema);
				//#endregion
				//#region lib/types/client/typert.js
				const TYPERT_REMOTE = {
					package: "@deepseek-ai/dsh-experimental-api-speech-to-text",
					descriptors: [
						{
							id: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/cancelPreparation",
							service: "speechController",
							namespace: "speech",
							method: "cancelPreparation",
							invocation: { kind: "direct" },
							parameters: [{
								name: "providerId",
								wire: "providerId",
								source: "json",
								codec: {
									mode: "strict",
									typeSymbol: "@deepseek-ai/dsh-experimental-speech-to-text/types#SpeechProviderId",
									create: () => (value) => value
								}
							}],
							result: {
								mode: "strict",
								typeSymbol: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/cancelPreparation:result",
								create: () => (value) => value
							},
							sourceLocation: {
								"file": "packages/experimental/api-speech-to-text/src/index.ts",
								"line": 80,
								"column": 3
							}
						},
						{
							id: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/catalog",
							service: "speechController",
							namespace: "speech",
							method: "catalog",
							invocation: { kind: "direct" },
							parameters: [],
							result: {
								mode: "strict",
								typeSymbol: "@deepseek-ai/dsh-experimental-api-speech-to-text/types#SpeechCatalog",
								create: () => (value) => value
							},
							sourceLocation: {
								"file": "packages/experimental/api-speech-to-text/src/index.ts",
								"line": 44,
								"column": 3
							}
						},
						{
							id: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/configure",
							service: "speechController",
							namespace: "speech",
							method: "configure",
							invocation: { kind: "direct" },
							parameters: [{
								name: "patch",
								wire: "patch",
								source: "json",
								codec: {
									mode: "strict",
									typeSymbol: "@deepseek-ai/dsh-experimental-speech-to-text/types#SpeechSelectionPatch",
									create: () => (value) => value
								}
							}],
							result: {
								mode: "strict",
								typeSymbol: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/configure:result",
								create: () => (value) => value
							},
							sourceLocation: {
								"file": "packages/experimental/api-speech-to-text/src/index.ts",
								"line": 64,
								"column": 3
							}
						},
						{
							id: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/follow",
							service: "speechController",
							namespace: "speech",
							method: "follow",
							mode: "stream",
							invocation: { kind: "direct" },
							parameters: [],
							cancellation: { parameter: "signal" },
							result: {
								mode: "strict",
								typeSymbol: "@deepseek-ai/dsh-experimental-api-speech-to-text/types#SpeechCatalog",
								create: () => (value) => value
							},
							sourceLocation: {
								"file": "packages/experimental/api-speech-to-text/src/index.ts",
								"line": 54,
								"column": 10
							}
						},
						{
							id: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/prepare",
							service: "speechController",
							namespace: "speech",
							method: "prepare",
							invocation: { kind: "direct" },
							parameters: [{
								name: "providerId",
								wire: "providerId",
								source: "json",
								codec: {
									mode: "strict",
									typeSymbol: "@deepseek-ai/dsh-experimental-speech-to-text/types#SpeechProviderId",
									create: () => (value) => value
								}
							}, {
								name: "options",
								wire: "options",
								source: "json",
								acceptsUndefined: true,
								codec: {
									mode: "strict",
									typeSymbol: "@deepseek-ai/dsh-experimental-speech-to-text/types#SpeechPreparationOptions",
									create: () => (value) => value
								}
							}],
							result: {
								mode: "strict",
								typeSymbol: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/prepare:result",
								create: () => (value) => value
							},
							sourceLocation: {
								"file": "packages/experimental/api-speech-to-text/src/index.ts",
								"line": 72,
								"column": 3
							}
						},
						{
							id: "@deepseek-ai/dsh-experimental-api-speech-to-text#speech/transcribe",
							service: "speechController",
							namespace: "speech",
							method: "transcribe",
							invocation: { kind: "direct" },
							parameters: [{
								name: "request",
								wire: "request",
								source: "json",
								codec: {
									mode: "strict",
									typeSymbol: "@deepseek-ai/dsh-experimental-api-speech-to-text/types#TranscriptionRequest",
									create: () => (value) => value
								}
							}],
							cancellation: { parameter: "signal" },
							result: {
								mode: "strict",
								typeSymbol: "@deepseek-ai/dsh-experimental-speech-to-text/types#Transcript",
								create: () => (value) => value
							},
							sourceLocation: {
								"file": "packages/experimental/api-speech-to-text/src/index.ts",
								"line": 89,
								"column": 9
							}
						}
					]
				};
				//#endregion
				//#region lib/types/client/audio.js
				/** Capture failure whose message is localized by the caller. */
				class RecordingError extends Error {
					constructor(kind) {
						super(kind);
						this.kind = kind;
						this.name = "RecordingError";
					}
				}
				/** Encode mono floating-point samples as the canonical PCM16 WAV accepted by the Host. */
				function encodeWave(samples) {
					const bytes = new Uint8Array(44 + samples.length * 2);
					const view = new DataView(bytes.buffer);
					const text = (at, value) => {
						for (let i = 0; i < value.length; i++) bytes[at + i] = value.charCodeAt(i);
					};
					text(0, "RIFF");
					view.setUint32(4, bytes.length - 8, true);
					text(8, "WAVE");
					text(12, "fmt ");
					view.setUint32(16, 16, true);
					view.setUint16(20, 1, true);
					view.setUint16(22, 1, true);
					view.setUint32(24, 16e3, true);
					view.setUint32(28, 32e3, true);
					view.setUint16(32, 2, true);
					view.setUint16(34, 16, true);
					text(36, "data");
					view.setUint32(40, samples.length * 2, true);
					for (const [i, sample] of samples.entries()) {
						const value = Math.max(-1, Math.min(1, sample));
						view.setInt16(44 + i * 2, Math.round(value * (value < 0 ? 32768 : 32767)), true);
					}
					return bytes;
				}
				/** Encode the binary recording for the existing JSON Remote carrier. */
				function audioBase64(bytes) {
					let text = "";
					for (let i = 0; i < bytes.length; i += 8192) text += String.fromCharCode(...bytes.subarray(i, i + 8192));
					return btoa(text);
				}
				/** One microphone acquisition, including a permission prompt that may settle after cancellation. */
				class Recording {
					constructor(onDispose) {
						this.onDispose = onDispose;
						this.samples = new Float32Array(256);
						this.chunks = [];
						this.lifetime = new AbortController();
					}
					/**
					* Acquire the microphone for this recording.
					* @param onError - receives failures during capture.
					* @returns after capture starts.
					*/
					async start(onError) {
						const devices = navigator.mediaDevices;
						if (!devices || typeof MediaRecorder === "undefined") throw new RecordingError("unavailable");
						let stream;
						try {
							stream = await devices.getUserMedia({
								audio: {
									echoCancellation: true,
									noiseSuppression: true
								},
								video: false
							});
						} catch (error) {
							if (error instanceof DOMException && error.name === "NotAllowedError") throw new RecordingError("permission");
							throw error;
						}
						if (this.lifetime.signal.aborted) {
							stream.getTracks().forEach((track) => {
								track.stop();
							});
							throw new RecordingError("cancelled");
						}
						this.stream = stream;
						try {
							this.context = new AudioContext();
							this.analyser = this.context.createAnalyser();
							this.analyser.fftSize = this.samples.length;
							this.context.createMediaStreamSource(stream).connect(this.analyser);
							this.recorder = new MediaRecorder(stream);
							this.recorder.ondataavailable = (event) => {
								if (!this.lifetime.signal.aborted && event.data.size > 0) this.chunks.push(event.data);
							};
							this.recorder.onerror = () => {
								if (this.lifetime.signal.aborted) return;
								this.dispose().catch(() => void 0);
								try {
									onError?.(new RecordingError("interrupted"));
								} catch (error) {
									console.error("Speech recording error handler failed", error);
								}
							};
							this.recorder.start();
						} catch (error) {
							await this.dispose();
							throw error;
						}
					}
					/**
					* Read the live microphone signal.
					* @returns the measured RMS level, or zero outside capture.
					*/
					amplitude() {
						if (!this.analyser) return 0;
						this.analyser.getFloatTimeDomainData(this.samples);
						let sum = 0;
						for (const sample of this.samples) sum += sample * sample;
						return Math.sqrt(sum / this.samples.length);
					}
					/**
					* Finish capture and resample the recording.
					* @param maxDurationSeconds - truncate timer overshoot to the Host limit.
					* @returns one recording after the final MediaRecorder chunk arrives.
					*/
					async stop(maxDurationSeconds) {
						const recorder = this.recorder;
						const context = this.context;
						if (!recorder || !context || recorder.state !== "recording") {
							await this.dispose();
							throw new RecordingError("empty");
						}
						try {
							await new Promise((resolve, reject) => {
								recorder.onstop = () => {
									resolve();
								};
								recorder.onerror = () => {
									reject(new RecordingError("empty"));
								};
								recorder.stop();
							});
							this.stream?.getTracks().forEach((track) => {
								track.stop();
							});
							this.lifetime.signal.throwIfAborted();
							const blob = new Blob(this.chunks, { type: recorder.mimeType });
							if (blob.size === 0) throw new RecordingError("empty");
							const decoded = await context.decodeAudioData(await blob.arrayBuffer());
							this.lifetime.signal.throwIfAborted();
							const offline = new OfflineAudioContext(1, Math.max(1, Math.floor(Math.min(decoded.duration, maxDurationSeconds) * 16e3)), 16e3);
							const source = offline.createBufferSource();
							source.buffer = decoded;
							source.connect(offline.destination);
							source.start();
							const resampled = await offline.startRendering();
							this.lifetime.signal.throwIfAborted();
							return encodeWave(resampled.getChannelData(0));
						} finally {
							await this.dispose();
						}
					}
					/**
					* Release this recording and invalidate pending permission grants.
					* @returns the shared release promise.
					*/
					dispose() {
						if (!this.disposal) {
							const closing = Promise.withResolvers();
							this.disposal = closing.promise;
							this.release().then(closing.resolve, closing.reject);
						}
						return this.disposal;
					}
					async release() {
						this.lifetime.abort(new RecordingError("cancelled"));
						if (this.recorder?.state === "recording") this.recorder.stop();
						this.stream?.getTracks().forEach((track) => {
							track.stop();
						});
						this.stream = void 0;
						const context = this.context;
						this.context = void 0;
						this.analyser = void 0;
						this.chunks = [];
						try {
							if (context && context.state !== "closed") await context.close();
						} finally {
							this.onDispose();
						}
					}
				}
				//#endregion
//#region dsh-css:dsh-talk-to-speech/PushToTalk.module.css
				const css = ".ddpbLW_captureRow{align-items:center;gap:12px;width:100%;min-width:0;min-height:34px;display:flex}.ddpbLW_roundButton{corner-shape:round;background:var(--dsw-specific-selector);border-radius:50%;flex:none;width:32px;height:32px;padding:0}.ddpbLW_roundButton:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-solid)}.ddpbLW_waveform{width:0;min-width:24px;height:24px;color:var(--dsw-alias-label-secondary);flex:1;display:block}.ddpbLW_activityMessage{min-width:0;color:var(--dsw-alias-label-secondary);white-space:nowrap;text-overflow:ellipsis;flex:1;align-items:center;gap:8px;font-size:12px;display:flex;overflow:hidden}.ddpbLW_inlineAction{flex:none}";
				const tagId = "dsh-talk-to-speech/PushToTalk.css";
				if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
					const tag = document.createElement("style");
					tag.dataset.plugin = "dsh-talk-to-speech";
					tag.dataset.pluginCss = tagId;
					tag.textContent = css;
					document.head.appendChild(tag);
				}
				var VoiceInput_module_css_default = {
					activityMessage: "ddpbLW_activityMessage",
					captureRow: "ddpbLW_captureRow",
					inlineAction: "ddpbLW_inlineAction",
					metric: "ddpbLW_metric",
					roundButton: "ddpbLW_roundButton",
					waveform: "ddpbLW_waveform"
				};
				//#endregion
				//#region lib/types/client/Waveform.js
				function Waveform({ recording, label }) {
					const svgRef = react.useRef(null);
					const rafRef = react.useRef(null);
					react.useLayoutEffect(() => {
						if (!recording || !svgRef.current) return;
						const levels = 80;
						for (let i = 0; i < levels; i++) {
							const line = svgRef.current.children[i];
							line.setAttribute("y1", "20");
							line.setAttribute("y2", "20");
						}
						const update = () => {
							const amplitude = recording.amplitude();
							for (let i = 0; i < levels; i++) {
								const level = Math.min(1, amplitude * 5) * (1 - i / levels);
								const height = 1 + level * 17;
								const line = svgRef.current.children[i];
								line.setAttribute("y1", String(20 - height));
								line.setAttribute("y2", String(20 + height));
							}
							rafRef.current = requestAnimationFrame(update);
						};
						rafRef.current = requestAnimationFrame(update);
						return () => {
							if (rafRef.current) cancelAnimationFrame(rafRef.current);
						};
					}, [recording]);
					const bars = Array.from({ length: 80 }, (_, index) => {
						const x = index * 8 + 4;
						return (0, react_jsx_runtime.jsx)("line", {
							x1: x,
							y1: 20,
							x2: x,
							y2: 20,
							strokeWidth: "3",
							opacity: .25 + index / 120,
							className: VoiceInput_module_css_default.waveform
						}, "bar-" + index);
					});
					return (0, react_jsx_runtime.jsx)("svg", {
						ref: svgRef,
						width: "80",
						height: "40",
						viewBox: "0 0 640 40",
						preserveAspectRatio: "none",
						role: "img",
						"aria-label": label,
						children: bars
					});
				}
				//#endregion
				//#region lib/types/client/locales.js
				const zh = {
					dictate: "按 Copilot 键听写",
					"setupPrompt.title": "录音前请先设置语音输入",
					"setupPrompt.body": "已启用语音输入。首次使用需要下载和准备本地识别模型。在开始之前，打开插件详情查看磁盘空间、内存和时间估算。",
					"setupPrompt.later": "稍后",
					"setupPrompt.open": "去设置",
					"setupPrompt.trigger": "打开语音输入设置",
					"setupPrompt.details": "打开语音插件设置",
					"setupPrompt.unavailableTitle": "语音识别尚未就绪",
					"setupPrompt.unavailableBody": "打开语音插件详情以检查识别状态、准备进度或错误。",
					"setup.local": "本地模型将下载到运行 DSH 的机器上。无需 Python 或编译器。",
					"setup.disk": "磁盘空间",
					"setup.diskValue": "为模型、运行时和下载缓存预留约 {gb} GB",
					"setup.memory": "内存",
					"setup.memoryValue": "模型加载时约 {gb} GB；识别过程可能消耗更多",
					"setup.prepare": "准备",
					"start": "开始录音",
					"stop": "停止录音",
					"cancel": "取消",
					"discard": "丢弃",
					"retryRecording": "重试录音",
					"insert": "插入识别文字",
					"loading": "正在准备识别模型...",
					"requesting": "请求音频通道...",
					"recording": "正在录音",
					"interrupted": "录音被中断",
					"empty": "未检测到语音",
					"cancelled": "录音已取消",
					"conflict": "草稿已被修改。识别文字已保留，可在当前光标位置插入。",
					"failed": "语音识别失败：{message}",
					"unavailable": "当前浏览器不支持录音，请使用支持麦克风的浏览器。",
					"permission": "麦克风权限未开启，请在浏览器和系统设置中允许访问。",
					"tooLarge": "录音超过服务限制，请缩短录音后重试。",
					"waking": "启动本地模型...",
					"wakingShort": "启动中...",
					"transcribingShort": "识别中...",
					"lockedHint": "当前输入框正忙，请稍后再试。"
				};
				const en = {
					dictate: "Press Copilot key to dictate",
					"setupPrompt.title": "Set up voice input before recording",
					"setupPrompt.body": "Voice input is enabled. First use requires downloading and preparing local recognition models. Open the plugin details to review disk space, memory and time estimates before starting setup.",
					"setupPrompt.later": "Later",
					"setupPrompt.open": "Go to setup",
					"setupPrompt.trigger": "Open voice input setup",
					"setupPrompt.details": "Open voice plugin settings",
					"setupPrompt.unavailableTitle": "Speech recognition is not ready",
					"setupPrompt.unavailableBody": "Open the voice plugin details to check recognition status, preparation progress, or errors.",
					"setup.local": "Local models will be downloaded to the machine running DSH. No Python or compiler is required.",
					"setup.disk": "Disk space",
					"setup.diskValue": "Allow about {gb} GB for models, runtime, and download caches",
					"setup.memory": "Memory",
					"setup.memoryValue": "About {gb} GB with the model loaded; recognition may use more",
					"setup.prepare": "Prepare",
					"start": "Start recording",
					"stop": "Stop recording",
					"cancel": "Cancel",
					"discard": "Discard",
					"retryRecording": "Retry recording",
					"insert": "Insert recognized text",
					"loading": "Preparing recognition model...",
					"requesting": "Requesting audio channel...",
					"recording": "Recording in progress",
					"interrupted": "Recording interrupted",
					"empty": "No speech detected",
					"cancelled": "Recording cancelled",
					"conflict": "Draft was modified. Recognized text has been preserved and can be inserted at current cursor position.",
					"failed": "Speech recognition failed: {message}",
					"unavailable": "Current browser does not support recording. Please use a browser with microphone support.",
					"permission": "Microphone permission is disabled. Please enable access in your browser and system settings.",
					"tooLarge": "The recording exceeds the service limit. Try a shorter recording.",
					"waking": "Starting local model...",
					"wakingShort": "Starting...",
					"transcribingShort": "Transcribing...",
					"lockedHint": "The input is busy right now. Try again in a moment."
				};
				//#endregion
				//#region lib/types/client/readiness.js
				function observeReadiness(ctx) {
					const state = (0, _deepseek_ai_dsh_client_store.createSnapshotStore)({
						catalog: null,
						connected: false,
						error: null
					});
					let disposed = false;
					const isDisposed = () => disposed;
					const fail = (error) => {
						state.set({
							...state.getSnapshot(),
							connected: false,
							error: error instanceof Error ? error.message : String(error)
						});
					};
					const stream = ctx.remote.$stream({
						name: "Speech readiness",
						open: (signal) => ctx.remote.speech.follow(signal),
						ended: () => new _deepseek_ai_dsh_api_gateway_client.RemoteStreamCarrierError("Speech readiness stream ended"),
						carrierFailed: fail
					});
					const observing = (async () => {
						try {
							for await (const item of stream) {
								state.set({
									catalog: item.value,
									connected: true,
									error: null
								});
								item.accept();
							}
						} catch (error) {
							if (!isDisposed()) fail(error);
						}
					})();
					return {
						state,
						dispose: async () => {
							disposed = true;
							await stream.dispose();
							await observing;
						}
					};
				}
				//#endregion
				//#region lib/types/client/PushToTalk.js
				const NS = "talk-to-speech";
				function PushToTalk({ sessionId, inputActions, locked, onActiveChange, createRecording, transcribe, openSettings, useSpeechReadiness, t }) {
					const readiness = useSpeechReadiness((value) => value);
					const catalog = readiness.catalog;
					const provider = catalog?.providers.find((item) => item.id === catalog.selection.providerId);
					const usable = readiness.connected && (provider?.preparation.phase === "ready" || provider?.preparation.phase === "standby" || provider?.preparation.phase === "waking");
					const [phase, setPhase] = react.useState("idle");
					const [pending, setPending] = react.useState("");
					const [message, setMessage] = react.useState("");
					const current = react.useRef(null);
					const generation = react.useRef(0);
					const expanded = phase !== "idle";
					const live = react.useRef({ usable: usable, locked: locked, catalog: catalog });
					live.current.usable = usable;
					live.current.locked = locked;
					live.current.catalog = catalog;
					const startRef = react.useRef(null);
					const finishRef = react.useRef(null);
					const [, force] = react.useReducer((n) => n + 1, 0);
					react.useLayoutEffect(() => {
						onActiveChange(expanded);
					}, [expanded, onActiveChange]);
					const feedback = (text) => {
						setMessage(text);
						setPhase("feedback");
					};
					const failureText = (failure) => {
						return failure instanceof RecordingError ? t(failure.kind) : t("failed", { message: failure instanceof Error ? failure.message : String(failure) });
					};
					const cancel = () => {
						const active = current.current;
						generation.current++;
						current.current = void 0;
						if (active) {
							active.abort.abort();
							void disposeRecording(active.capture);
						}
						setPhase("idle");
						setMessage("");
						setPending("");
						force();
					};
					const disposeRecording = async (capture) => {
						try {
							await capture.dispose();
						} catch (_error) {}
					};
					/* Push-to-talk keys. `event.code` is layout-independent and is the
					 * reliable identifier for the Copilot key; add your own key's code
					 * here (see "Choosing your key" in README.md). */
					const PTT_CODES = ["OSRight", "F23", "LaunchApplication1", "LaunchApplication2"];
					const PTT_KEYS = ["LaunchAssistant"];
					/* Legacy virtual-key codes: F23/F24 and the right-hand Windows key. */
					const PTT_KEYCODES = [125, 126, 92];
					const isPttKey = (event) => PTT_CODES.includes(event.code) || PTT_KEYS.includes(event.key) || PTT_KEYCODES.includes(event.keyCode) || (event.keyCode === 91 && event.location === 2);
					const startPtt = async () => {
						const snap = live.current;
						const stale = current.current;
						if (stale) {
							if (stale.phase === "requesting" || stale.phase === "recording" || stale.phase === "transcribing") return;
							current.current = void 0;
						}
						if (!snap.catalog || !snap.usable) {
							feedback(t(snap.catalog ? "loading" : "setupPrompt.unavailableTitle"));
							return;
						}
						if (snap.locked) {
							feedback(t("lockedHint"));
							return;
						}
						const run = ++generation.current;
						const active = {
							capture: createRecording(),
							abort: new AbortController(),
							selection: snap.catalog.selection,
							maxDurationSeconds: snap.catalog.maxDurationSeconds,
							maxAudioBytes: snap.catalog.maxAudioBytes,
							phase: "requesting",
							released: false,
							timer: void 0
						};
						current.current = active;
						setMessage("");
						setPending("");
						setPhase("requesting");
						force();
						try {
							await active.capture.start((failure) => {
								if (run !== generation.current || current.current !== active || active.phase === "transcribing") return;
								current.current = void 0;
								clearTimeout(active.timer);
								active.abort.abort();
								feedback(failureText(failure));
							});
							if (run !== generation.current || current.current !== active) return;
							active.phase = "recording";
							setPhase("recording");
							if (active.released) {
								void finishPtt();
								return;
							}
							active.timer = setTimeout(() => {
								finishPtt();
							}, active.maxDurationSeconds * 1e3);
						} catch (failure) {
							await disposeRecording(active.capture);
							if (run === generation.current) {
								current.current = void 0;
								feedback(failureText(failure));
							}
						}
					};
					const finishPtt = async () => {
						const active = current.current;
						if (!active) return;
						if (active.phase === "requesting") {
							active.released = true;
							return;
						}
						if (active.phase !== "recording") return;
						active.phase = "transcribing";
						const run = generation.current;
						clearTimeout(active.timer);
						setPhase("transcribing");
						try {
							const audio = await active.capture.stop(active.maxDurationSeconds);
							if (run !== generation.current) return;
							if (audio.byteLength > active.maxAudioBytes) {
								feedback(t("tooLarge"));
								return;
							}
							const result = await transcribe({
								audioBase64: audioBase64(audio),
								...active.selection
							}, active.abort.signal);
							if (run !== generation.current) return;
							if (!result.ok) {
								feedback(t("failed", { message: result.error.message }));
								return;
							}
							if (result.value.text === "") {
								const seconds = Math.max(0, (audio.byteLength - 44) / 32e3);
								feedback(t("empty") + " (" + seconds.toFixed(1) + "s)");
								return;
							}
							const text = result.value.text;
							let inserted = inputActions.insertText(text, inputActions.captureInsertion());
							if (!inserted) inserted = inputActions.insertText(text, inputActions.captureInsertion());
							if (!inserted) {
								setPending(text);
								feedback(t("conflict"));
								return;
							}
							setPhase("idle");
						} catch (failure) {
							await disposeRecording(active.capture);
							if (run === generation.current) feedback(failureText(failure));
						} finally {
							if (run === generation.current) current.current = void 0;
						}
					};
					const handleKeyDown = (event) => {
						if (event.repeat) return;
						if (!isPttKey(event)) return;
						event.preventDefault();
						void startPtt();
					};
					const handleKeyUp = (event) => {
						if (!isPttKey(event)) return;
						void finishPtt();
					};
					startRef.current = startPtt;
					finishRef.current = finishPtt;
					react.useEffect(() => {
						const down = (event) => {
							if (event.repeat) return;
							if (!isPttKey(event)) return;
							event.preventDefault();
							void startRef.current?.();
						};
						const up = (event) => {
							if (!isPttKey(event)) return;
							void finishRef.current?.();
						};
						window.addEventListener("keydown", down, true);
						window.addEventListener("keyup", up, true);
						return () => {
							window.removeEventListener("keydown", down, true);
							window.removeEventListener("keyup", up, true);
						};
					}, []);
					react.useEffect(() => {
						return () => {
							const active = current.current;
							current.current = void 0;
							generation.current++;
							if (active) {
								active.abort.abort();
								void disposeRecording(active.capture);
							}
						};
					}, [sessionId]);
					const statusText = t(phase === "requesting" ? "requesting" : provider?.preparation.phase === "waking" ? "wakingShort" : "transcribingShort");
					/* Keyboard-only: stay invisible until a hold starts, so the idle composer is untouched. */
					if (!expanded) return null;
					return (0, react_jsx_runtime.jsx)("div", {
						className: VoiceInput_module_css_default.captureRow,
						"data-voice-activity": phase,
						children: [
							(0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								type: "button",
								className: VoiceInput_module_css_default.roundButton,
								size: "sm",
								"aria-label": t("cancel"),
								onClick: cancel,
								children: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconCloseOutlineRegular, { size: 14 })
							}),
							phase === "recording" ? (0, react_jsx_runtime.jsx)(Waveform, {
								recording: current.current?.capture,
								label: t("recording")
							}) : (0, react_jsx_runtime.jsxs)("span", {
								className: VoiceInput_module_css_default.activityMessage,
								role: "status",
								title: pending || (phase === "feedback" ? message : statusText),
								"aria-label": phase === "feedback" ? message : statusText,
								children: [(phase === "requesting" || phase === "transcribing") && (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.StateDot, { state: "ongoing" }), phase === "feedback" ? message : (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconMicrophoneOutlineRegular, { size: 16 })]
							}),
							phase === "recording" && (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								type: "button",
								className: VoiceInput_module_css_default.roundButton,
								size: "sm",
								"aria-label": t("stop"),
								onClick: cancel,
								children: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconStopFillRegular, { size: 14 })
							}),
							phase === "feedback" && (pending ? (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								className: VoiceInput_module_css_default.inlineAction,
								size: "sm",
								type: "button",
								onClick: () => {
									if (inputActions.insertText(pending, inputActions.captureInsertion())) {
										setPending("");
										setPhase("idle");
									}
								},
								children: t("insert")
							}) : (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								className: VoiceInput_module_css_default.roundButton,
								size: "sm",
								type: "button",
								"aria-label": t("retryRecording"),
								disabled: !usable || locked,
								onClick: () => {
									void startRef.current?.();
								},
								children: (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconMicrophoneOutlineRegular, { size: 18 })
							}))
						]
					});
				}
				//#endregion
				//#region lib/types/client/mount.js
				const inject = [
					"remote",
					"slots",
					"locale",
					"pluginNavigation"
				];
				function registerUi(ctx) {
					ctx.effect(() => ctx.locale.register(NS, {
						zh,
						en
					}));
					const recordings = /* @__PURE__ */ new Set();
					const readiness = observeReadiness(ctx);
					ctx.effect(() => readiness.dispose);
					ctx.effect(() => async () => {
						await Promise.all([...recordings].map((recording) => recording.dispose()));
					});
					const actions = {
						openSettings: () => {
							ctx.pluginNavigation.openBundle("@deepseek-ai/dsh-experimental-voice-input-bundle");
						},
						hooks: { speechReadiness: readiness.state },
						createRecording: () => {
							const recording = new Recording(() => {
								recordings.delete(recording);
							});
							recordings.add(recording);
							return recording;
						},
						transcribe: async (request, signal) => await ctx.remote.speech.transcribe(request, signal),
						configure: async (patch) => {
							const result = await ctx.remote.speech.configure(patch);
							if (!result.ok) throw result.error;
						},
						prepare: async (providerId, options) => {
							const result = await ctx.remote.speech.prepare(providerId, options);
							if (!result.ok) throw result.error;
						},
						cancelPreparation: async (providerId) => {
							const result = await ctx.remote.speech.cancelPreparation(providerId);
							if (!result.ok) throw result.error;
						}
					};
					ctx.slots.inject("conversation.input.activity", () => ctx.slots.register({
						name: "conversation.input.activity",
						locale: NS,
						inject: () => actions
					}, PushToTalk));
				}
				async function mountVoiceInput(ctx, contribution) {
					const disposeRemote = await ctx.remote.$mount(contribution);
					const ui = ctx.inject([
						"remote.speech",
						"slots",
						"locale",
						"pluginNavigation"
					], registerUi);
					try {
						await ui;
					} catch (error) {
						await ui.dispose();
						await disposeRemote();
						throw error;
					}
					return async () => {
						await ui.dispose();
						await disposeRemote();
					};
				}
				//#endregion
				//#region lib/types/client/index.js
				async function apply(ctx) {
					return await mountVoiceInput(ctx, TYPERT_REMOTE);
				}
				//#endregion
				exports.apply = apply;
				exports.inject = inject;
				return module.exports;
			}
		});

