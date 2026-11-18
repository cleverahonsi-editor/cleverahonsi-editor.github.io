// The catalogue. One entry per piece. Edit tools / blurbs here only.
// media/<id>.mp4 (full), media/<id>-loop.mp4 (short preview), media/<id>.jpg (poster).
// NOTE: the `tools` lists were drafted from the footage and from the editor's toolkit
// (After Effects, CapCut, Filmora, Premiere Pro, DaVinci Resolve). Confirm each before publishing.
window.FILTERS = [
  { id: "all", name: "All work" },
  { id: "short", name: "Short-form" },
  { id: "long", name: "Long-form" },
  { id: "trailer", name: "Trailers" },
  { id: "brand", name: "Brand & motion" },
  { id: "gaming", name: "Gaming channel" }
];

window.WORKS = [
  {
    id: "trailer-meska", title: "Who killed Meska Opo?", client: "Nsibidi Fables",
    tags: ["short", "trailer"], format: "16:9 · 24 fps", dur: 38.8, vertical: false,
    role: "Edit, titles, colour",
    blurb: "A night-time murder-mystery trailer built around one question. Cold blue grade, slow push-ins, and title cards that land on the beat, ending on a lens-flare title reveal.",
    tools: [
      ["Premiere Pro", "Assembly, pacing and sound sync"],
      ["DaVinci Resolve", "Moonlit teal-and-blue grade"],
      ["After Effects", "Kinetic title cards and lens-flare reveal"]
    ]
  },
  {
    id: "trailer-ep2", title: "Amanirenas, episode 2 trailer", client: "Nsibidi Fables",
    tags: ["short", "trailer"], format: "16:9 · 30 fps", dur: 38.8, vertical: false,
    role: "Edit, title reveal",
    blurb: "Court intrigue, a torch-lit temple and a desert battle cut into one fast montage, resolving on the series logo. Warm palette kept consistent from shot to shot.",
    tools: [
      ["Premiere Pro", "Montage edit, pacing and audio mix"],
      ["After Effects", "Logo reveal and light treatment"]
    ]
  },
  {
    id: "trailer-3", title: "Desert army teaser", client: "Nsibidi Fables",
    tags: ["short", "trailer"], format: "9:16 · 25 fps", dur: 40.7, vertical: true,
    role: "Vertical edit, captions",
    blurb: "A vertical teaser for Shorts and Reels: wrecked carts, close-ups and a marching army, cut on impact, with a glowing \"Coming this week\" card for the release hook.",
    tools: [
      ["CapCut", "Vertical cut, speed ramps and release card"],
      ["After Effects", "Glow on the title card"]
    ]
  },
  {
    id: "welcome", title: "Channel welcome film", client: "Nsibidi Fables",
    tags: ["short", "brand"], format: "1366×720 · 25 fps", dur: 57.9, vertical: false,
    role: "Edit, motion graphics",
    blurb: "A one-minute channel intro that moves through Animation, Documentaries, Education and Tech, with warm light leaks, soft-edge reveals and glowing type tying very different footage together.",
    tools: [
      ["After Effects", "Light leaks, glow text, soft-mask reveals"],
      ["Filmora", "Assembly, music and voice sync"]
    ]
  },
  {
    id: "beteye", title: "BetEye product film", client: "",
    tags: ["long", "brand"], format: "16:9 · 24 fps", dur: 73.9, vertical: false,
    role: "Edit, motion design, grade",
    blurb: "A dark-mode product film for a live football signal app: logo reveal, a 3D camera move through the landing page, stacked alert cards and animated counters, paced to explain the product in about a minute.",
    tools: [
      ["After Effects", "UI animation, 3D camera and counters"],
      ["Premiere Pro", "Edit, pacing and sound design"],
      ["DaVinci Resolve", "Final grade and delivery"]
    ]
  },

  /* ---------- Gaming channel: shorts (9:16) ---------- */
  {
    id: "short-quit", title: "They Tried to QUIT Three Times", client: "",
    tags: ["short", "gaming"], format: "9:16 · 1080p", dur: 56, vertical: true,
    role: "Short-form edit, captions",
    blurb: "A 56-second Among Us story built on a hook line and word-by-word captions that land on the beat. A mascot reacts, meme and game cutaways keep every second moving, and the loop ends on a clear call to action.",
    tools: [
      ["CapCut", "Word-level captions, hook text and meme cutaways"],
      ["Premiere Pro", "Pacing, audio mix and final export"]
    ]
  },
  {
    id: "short-flappy", title: "Why He DELETED His Hit Game", client: "",
    tags: ["short", "gaming"], format: "9:16 · 1080p", dur: 54, vertical: true,
    role: "Short-form edit, captions",
    blurb: "The Flappy Bird story in under a minute. The \"he gave up $50k a day\" hook stays on screen while gameplay and a perfectly timed meme insert carry the pace.",
    tools: [
      ["CapCut", "Captions, hook text and meme timing"],
      ["After Effects", "Highlighted keywords and transitions"]
    ]
  },
  {
    id: "short-gandhi", title: "The truth about NUCLEAR Gandhi", client: "",
    tags: ["short", "gaming"], format: "9:16 · 1080p", dur: 51, vertical: true,
    role: "Short-form edit, captions",
    blurb: "A myth-busting short that opens with \"The internet got this wrong\" and keeps proof on screen: game footage, atmospheric cutaways and highlighted keywords that guide the eye.",
    tools: [
      ["CapCut", "Captions, hook text and punch-ins"],
      ["DaVinci Resolve", "Colour matching across mixed footage"]
    ]
  },
  {
    id: "short-ps5", title: "The PS5 Hack With a HUGE Catch", client: "",
    tags: ["short", "gaming"], format: "9:16 · 1080p", dur: 51, vertical: true,
    role: "Short-form edit, captions",
    blurb: "A news-style short with a decision hook (\"Keep the hack or play GTA 6?\"), split-screen gameplay and a fast cut rhythm that never lets the caption line go stale.",
    tools: [
      ["CapCut", "Captions, split-screen layouts and cuts"],
      ["Premiere Pro", "Audio mix and export"]
    ]
  },
  {
    id: "short-atari", title: "They Buried It in the DESERT", client: "",
    tags: ["short", "gaming"], format: "9:16 · 1080p", dur: 51, vertical: true,
    role: "Short-form edit, captions",
    blurb: "The Atari E.T. landfill story as a 51-second short, mixing archive news footage, a Spielberg cutaway and a Futurama meme, all under bold highlighted captions.",
    tools: [
      ["CapCut", "Captions, hook text and meme cutaways"],
      ["After Effects", "Caption highlights and transitions"]
    ]
  },

  /* ---------- Gaming channel: long-form (16:9) ---------- */
  {
    id: "long-atari", title: "The Atari E.T. Game Buried in the Desert Was REAL", client: "",
    tags: ["long", "gaming"], format: "16:9 · 1080p", dur: 338, vertical: false,
    role: "Long-form edit, motion graphics",
    blurb: "A five-and-a-half-minute documentary on the landfill dig. It uses chapter title cards, archive footage, on-screen document and inventory overlays, and clean subtitles so the story stays easy to follow from start to finish.",
    tools: [
      ["Premiere Pro", "Documentary edit, archive footage and subtitles"],
      ["After Effects", "Chapter cards and on-screen document overlays"],
      ["DaVinci Resolve", "Colour balance across mixed sources"]
    ]
  },
  {
    id: "long-pacman", title: "Pac-Man's Ghosts Were NEVER Just Chasing You", client: "",
    tags: ["long", "gaming"], format: "16:9 · 1080p", dur: 323, vertical: false,
    role: "Long-form edit, motion graphics",
    blurb: "A deep dive into ghost behaviour, with gameplay recorded and cropped to show each ghost's path, an interview with the creator, a chapter card for \"the level nobody was supposed to reach\" and an animated stat for the 3,333,360-point perfect game.",
    tools: [
      ["Premiere Pro", "Edit, interview cuts and subtitles"],
      ["After Effects", "Chapter cards and the perfect-score stat card"]
    ]
  },
  {
    id: "long-bioware", title: "Did Wokeness Kill BioWare From KOTOR to Shutdown", client: "",
    tags: ["long", "gaming"], format: "16:9 · 1080p", dur: 373, vertical: false,
    role: "Long-form edit, graphics",
    blurb: "A six-minute retrospective that opens on a \"BioWare 1995–2026\" title, then moves through game footage, news clips, interviews and awards graphics, with subtitles and a mascot that keeps a long script lively.",
    tools: [
      ["Premiere Pro", "Edit, news and interview sequences, subtitles"],
      ["After Effects", "Title card, awards graphics and lower thirds"],
      ["DaVinci Resolve", "Grade for a consistent cinematic look"]
    ]
  }
];
