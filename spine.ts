import { StatBlockData } from './types';

/**
 * SUBJECT 003 — "The Failing Warden Hunt"
 * The prologue translated into the app as a working SPINE.
 *
 * Source: AEC_Handoff_Subject003_Prologue_Failing_Warden.
 * Built outside-in via the Spell Sentence + the Stormpeak alloy filter,
 * priced by the After-Action Report. 9 parts + the connective seam,
 * hung under one Adventure-scope container (S4).
 *
 * Field conventions used here:
 *  - truth        → legibility taxonomy (how the beat READS), per the form dropdown.
 *  - truthNotes   → the authored token-truth (Genuine / Null / Forged) + the secret(s) it carries.
 *  - signal       → origin→dest · payload · latency  (the linking contract: Beat 1 prices Beat N).
 *  - clock        → which of the 5 clocks this beat plants along / radiates from.
 *  - charge       → 4C shift (Upbeat / Downbeat / Lateral).
 *  - effect/subtype → FIRST-PASS notation only. The native option-draw (the randomizer)
 *                     is what properly populates each beat's live option space.
 */

// Stormpeak / Position 12 alloy — read as ONE machine, not three flavours.
const GOV = 'Stratocracy (G-02)';
const ECO = 'Syndicalism (EC-11)';
const ETHOS = 'Agonism (ET-13)';
const PARENT = 's003-prologue';

export const SUBJECT_003_SPINE: StatBlockData[] = [
  // ──────────────────────────────────────────────────────────────
  // CONTAINER (S4) — the Adventure the 9 parts compose upward into
  // ──────────────────────────────────────────────────────────────
  {
    id: PARENT,
    scopeId: 'S4',
    linkedToId: '',
    timeValue: 1,
    timeUnit: '6 hours',
    scene: 'PROLOGUE — The Failing Warden Hunt',
    vantage: 'Subject 003 (soldier · officer-track)',
    charge: '— (frame holds)',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Containment (the soldier-frame itself)',
    subtype: 'prologue / codification run',
    construction: 'outside-in via Spell Sentence + alloy filter; every beat priced by AAR-survival',
    truth: 'Legible',
    truthNotes:
      'CONTAINER. AAR-survival is the alloy scoring function and it is identical to narrative legibility — one instrument, two audiences (003\u2019s chain of command + the author\u2019s reader). The cull is the one activity the alloy commands but cannot account for; 003\u2019s deferred-Consequence wound is the exact shape of that hole in the ledger.',
    formation: 'Adventure scope (S4 \u2248 novella)',
    signal: 'spawns the 5-clock set; the prologue reads their RADIATION, not their ticks',
    clock: 'Adventure container (holds Clocks 1\u20135)',
    medium: 'prose',
    pointers:
      'Dangling \u2192 Apex (off-page, later book)\nForward \u2192 the Export Pull (Book N)',
    knowledge:
      'audience: assembles the doubled thesis by the close\n003: survives the form, learns what it could not hold',
  },

  // ── PART 0 — THE DISPOSAL (cold open) ─────────────────────────
  {
    id: 's003-p0',
    scopeId: 'S1',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: 'PART 0 — The Disposal (cold open)',
    vantage: 'Subject 003 (+ green junior)',
    charge: 'Lateral (quiet)',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Protection (member-protection intervention)',
    subtype: 'cull / salvage — the kill is maintenance',
    construction: 'identify \u2192 delegate \u2192 kill-as-salvage \u2192 file \u2192 move on (the soldier\u2019s whole world in miniature)',
    truth: 'Mute',
    truthNotes:
      'Secret #5 (NULL, declared at prep): the vaguely-humanoid creature was never a person \u2014 coincidence of growth. Honesty anchor; protects the prologue from apophenia so the real Warden isn\u2019t cheap. 003 sees the silhouette and files a report that omits it.',
    formation: '\u2014',
    signal: 'emits \u2192 PART 6 \u00b7 payload "humanoid silhouette (omitted from AAR)" \u00b7 latency long',
    clock: 'Clock 1 \u00b7 Contamination Floor (the routine cull)',
    medium: 'prose',
    latency: 'long (retro-resolves at Part 6)',
    halfLife: '\u2014',
    pointers:
      'False \u2192 "a contaminated animal" (decoy reading)\nPriming \u2192 \u00a76: the silhouette retro-connects\nDangling \u2192 the thread to the siege\u2019s real cause (nobody pulls it)',
    knowledge: 'audience knows? no\nactors know? no \u2192 the omission is the secret 003 keeps',
  },

  // ── THE CONNECTION (cold open \u2192 siege) — the dropped joint ──
  {
    id: 's003-seam',
    scopeId: 'S1',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: '\u27f6 SEAM — Disposal \u2192 Siege (the joint that kept getting dropped)',
    vantage: 'Subject 003',
    charge: 'Lateral',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Senses (frame transfer)',
    subtype: 'connective tissue',
    construction: 'Part 0 shows the soldier-frame working perfectly; the siege is the first thing it ALMOST fits \u2014 which is why the mislabel takes',
    truth: 'Invisible',
    truthNotes:
      'Secret #1 (board-Null hearsay): soldiers on the Line say the contaminated things look too upright, too humanoid lately. The men spook each other \u2014 the trend is NOT the mechanism (Wardens don\u2019t breed). The unpulled thread between the Part 0 silhouette and the siege cause. That gap IS what the prologue opens.',
    formation: '\u2014',
    signal: 'carries #1 hearsay forward as background accumulation',
    clock: 'Clock 1 radiation (the hearsay trend)',
    medium: 'prose',
    pointers: 'Dangling \u2192 the unpulled thread (the gap the prologue opens)',
    knowledge: 'audience knows? not yet\nactors know? no',
  },

  // ── PART 1 — THE SIEGE ────────────────────────────────────────
  {
    id: 's003-p1',
    scopeId: 'S2',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '1 hour',
    scene: 'PART 1 — The Siege',
    vantage: 'Subject 003',
    charge: 'Downbeat',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Movement (the Warden displaces / plays the Raiders)',
    subtype: 'incursion (mislabeled)',
    construction: '003 reads it as a soldier reads an incursion \u2014 a known, classifiable tier; nothing in SOP says "check what pushed these men here"',
    truth: 'Mislegible',
    truthNotes:
      'Secret #12 (FORGED \u2014 the board\u2019s one lie): the breach is logged under the wrong threat category; the stale Raider-tier stamp is what lets it reach 003\u2019s sector. The failing Warden displaced the Raiders (he does NOT assault the compound \u2014 that would be tactically blind). Symptom visible; cause invisible. WHY mislabeled = deferred-placement.',
    formation: '\u2014',
    signal: 'emits \u2192 PART 2 \u00b7 payload "anomaly in Raider behavior" \u00b7 latency short \u2014 opens the hunt',
    clock: 'Clock 2 \u00b7 Seg 3 (the siege points back to the Warden)',
    medium: 'prose',
    pointers:
      'False \u2192 "Raider incursion" (the mislabel)\nForward \u2192 \u00a72: the seam the site-exploit reads',
    knowledge: 'audience knows? no\nactors know? no \u2192 nobody connects symptom to predator',
  },

  // ── PART 2 — SITE EXPLOITATION ────────────────────────────────
  {
    id: 's003-p2',
    scopeId: 'S2',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: 'PART 2 — Site Exploitation',
    vantage: 'Subject 003 (+ Lacuna, the lens)',
    charge: 'Lateral',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Senses (battle-damage assessment)',
    subtype: 'site exploitation / read the seam',
    construction: 'the Raiders did not choose this \u2014 something moved them; Lacuna recognises Warden work where 003 sees only an anomaly (the soldier\u2019s frame extended one rung up)',
    truth: 'Read-through',
    truthNotes:
      'Secret #4 (GENUINE, placement-deferred / future reveal): a covert Praxis operative is present and has quietly assessed someone 003 trusts \u2014 Feature-residue, not yet called out (Praxis continuity rule). Secret #2 (GENUINE) surfaces if pulled: contaminated wildlife and dissolved Wardens share a threat code; only Apex names cognizance.',
    formation: '\u2014',
    signal: 'emits \u2192 PART 3 \u00b7 payload "Warden signature under the Raider noise" \u00b7 latency short',
    clock: 'Clock 2 (cause identified) + Clock 4 Feature seeds (Praxis residue)',
    medium: 'prose',
    pointers:
      'Priming \u2192 \u00a7later: Praxis (#4, future reveal)\nForward \u2192 \u00a73: the hunt',
    knowledge: 'audience knows? begins to\nactors: Lacuna reads it; 003 sees an anomaly',
  },

  // ── PART 3 — THE HUNT ─────────────────────────────────────────
  {
    id: 's003-p3',
    scopeId: 'S3',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '1 hour',
    scene: 'PART 3 — The Hunt',
    vantage: 'Subject 003 (+ Lacuna)',
    charge: 'Downbeat',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Movement (track)',
    subtype: 'pursuit / geography teaches taxonomy',
    construction: 'they move through dead-Warden contamination territory (the routine kind 003 culls) toward a failing-Warden predator; 003\u2019s body registers the difference before his mind does',
    truth: 'Legible',
    truthNotes:
      'Secret #3 (GENUINE): the contaminated tissue the squad ships out is the mine\u2019s export stock \u2014 suppression and extraction are one supply chain. Clock 1 territory (environmental) is a SEPARATE phenomenon from Clock 2 (the predator); the hunt\u2019s geography teaches the difference.',
    formation: '\u2014',
    signal: 'emits \u2192 PART 4 \u00b7 payload "proximity to a cogent predator" \u00b7 latency short',
    clock: 'Clock 1 territory (passed through) \u2192 Clock 2 \u00b7 Seg 4 (the hunt, still racing)',
    medium: 'prose',
    pointers: 'Forward \u2192 \u00a74: the meeting',
    knowledge: 'audience knows? yes\n003: body knows before mind does',
  },

  // ── PART 4 — THE MEETING (the heart) ──────────────────────────
  {
    id: 's003-p4',
    scopeId: 'S0',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: 'PART 4 — The Meeting (the heart)',
    vantage: 'Subject 003',
    charge: 'Downbeat',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Communication (a conversation, not a plea)',
    subtype: 'encounter across a crossed line',
    construction: 'they meet as people, not labels; he is intelligent, WAS a person, became anathema to the social fabric. 003 sees the person inside the invasive species \u2014 the cull-with-a-face he has never had, arriving as dialogue instead of a silhouette',
    truth: 'Legible',
    truthNotes:
      'Secret #6 (GENUINE \u2014 the centerpiece): a Warden on the Corridor is failing toward Apex; left alone it crosses into active societal threat. Failure is mind/social, not body. This beat indicts 003\u2019s taxonomy in real time \u2014 the sharpest pressure on his deferred-Consequence wound (you cannot file a conversation in the AAR the way you file a kill).',
    formation: '\u2014',
    signal: 'emits \u2192 CLOCK 5 (Aftershock) \u00b7 payload "the cull he cannot file" \u00b7 latency long (re-excites when no task is left to defer into)',
    clock: 'Clock 2 (the predator, met) \u2014 pressure transfers to Clock 5 (hidden, S0)',
    medium: 'prose',
    pointers: 'Back \u2192 \u00a70: the omitted silhouette, now wearing a face',
    knowledge: 'audience knows? yes\n003: the taxonomy breaks \u2014 the test is the Consequence read, not the combat',
  },

  // ── PART 5 — THE CAPTURE ──────────────────────────────────────
  {
    id: 's003-p5',
    scopeId: 'S1',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: 'PART 5 — The Capture',
    vantage: 'Subject 003',
    charge: 'Upbeat (false summit)',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Protection (containment \u2014 crystal)',
    subtype: 'second containment / apparent closure',
    construction: '003 the soldier reads mission-complete \u2014 contained, ship him off, write the AAR',
    truth: 'Mislegible',
    truthNotes:
      'Apparent closure in the soldier\u2019s frame. The crystal is the system "thought infallible" that the terminal (Part 7) will violate. The 4C Upbeat marks this as the FALSE summit.',
    formation: '\u2014',
    signal: 'emits \u2192 PART 7 \u00b7 payload "contained (will be unmade)" \u00b7 latency short \u2014 priming the second escape',
    clock: 'Clock 2 \u00b7 Seg 4 (apparently resolved)',
    medium: 'prose',
    pointers:
      'Priming \u2192 \u00a77: the containment crystal, to be unmade by transmutation\nFalse \u2192 "mission complete"',
    knowledge: 'audience knows? suspects the summit is false\n003: reads closure',
  },

  // ── PART 6 — THE NEST / DELAYED IRONY ─────────────────────────
  {
    id: 's003-p6',
    scopeId: 'S2',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: 'PART 6 — The Nest / Delayed Irony',
    vantage: 'Subject 003 (+ Lacuna)',
    charge: 'Downbeat',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Senses (magical security footage)',
    subtype: 'after-action site work / why-he-fell-through',
    construction: 'they exploit his nest and the site of his FIRST escape; footage shows transmutation on containment \u2014 the original "botched extraction." The dramatic irony is delivered through in-setting technology, not narration',
    truth: 'Retro-legible',
    truthNotes:
      'Resolves Secret #1 (hearsay gains weight) and Secret #6; the Part 0 silhouette retro-connects. The audience assembles the irony 003 is only now piecing together \u2014 he escaped before, the same way, and nobody connected it.',
    formation: '\u2014',
    signal: 'emits \u2192 PART 7 \u00b7 payload "first-escape footage (the pattern)" \u00b7 latency short \u2014 twins with the second-escape recording',
    clock: 'Clock 2 \u00b7 Seg 1 (first escape) read in the present',
    medium: 'prose (in-setting footage)',
    pointers:
      'Back \u2192 \u00a70: silhouette retro-connects\nPriming \u2192 \u00a77: twinned footage',
    knowledge: 'audience knows? assembles the irony\n003: piecing it together now \u2014 too late',
  },

  // ── PART 7 — THE SECOND ESCAPE, TOO LATE (terminal) ───────────
  {
    id: 's003-p7',
    scopeId: 'S2',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: 'PART 7 — The Second Escape, Too Late (TERMINAL)',
    vantage: 'Subject 003 (+ Lacuna)',
    charge: 'Downbeat (terminal)',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Transform (transmutation \u2014 the Warden\u2019s native grammar)',
    subtype: 'escape / point of no return',
    construction: 'he has transmuted out of the second crystal; they reach the site after it is done (or hear it). Twinned footage mirrors Part 6. Apex is implied, never declared',
    truth: 'Read-through',
    truthNotes:
      'TERMINAL of Clock 2 \u2014 the clock stops advancing and starts radiating. Thesis lands doubled: systems thought infallible are fallible \u2014 the containment crystal unmade by the Warden\u2019s own native grammar; the coast-guard\u2019s escape-anything turned against the system, caught only on a recording, after. He is free, twice-proven against containment, on the road to Apex OFF-PAGE.',
    formation: '\u2014',
    signal: 'emits \u2192 Book N \u00b7 payload "Apex armed" \u00b7 latency very long \u00b7 half-life long (re-excited by the villain\u2019s return)',
    clock: 'Clock 2 \u00b7 Seg 5 = TERMINAL',
    medium: 'prose (twinned footage)',
    latency: 'fired \u2014 now radiating',
    halfLife: 'long (the recurring villain re-excites it)',
    pointers:
      'Dangling \u2192 Apex (off-page, later book)\nBack \u2192 \u00a76: the pattern completes',
    knowledge: 'audience knows? understands what is loosed\n003 + Lacuna: in the empty cell, understanding \u2014 after',
  },

  // ── PART 8 — THE AFTER-ACTION DEBRIEF (the close) ─────────────
  {
    id: 's003-p8',
    scopeId: 'S3',
    linkedToId: PARENT,
    timeValue: 1,
    timeUnit: '6 minutes',
    scene: 'PART 8 — The After-Action Debrief (the close)',
    vantage: 'Subject 003 (+ CO)',
    charge: 'Lateral \u2192 Downbeat',
    gov: GOV,
    eco: ECO,
    ethos: ETHOS,
    effect: 'Communication (the AAR, finally cashed)',
    subtype: 'debrief / the form\u2019s punctuation',
    construction: 'four jobs at once \u2014 audience signal (the scene ends) \u00b7 the AAR as the alloy\u2019s scoring function cashed (what he CAN and CANNOT write) \u00b7 the export pull revealed \u00b7 the half-life seeds planted',
    truth: 'Retro-legible',
    truthNotes:
      'Secret #10 (GENUINE): the CO\u2019s Academy recommendation was filed BEFORE the breach \u2014 settled-dressed-as-earned (Clock 4, already terminal, radiates in). 003 reads it as reward; the audience, retro-legible, sees the paperwork was always dated earlier. What the debrief OMITS (the conversation, the silhouette) is the secret it keeps \u2014 and that gap is the diagnostic.',
    formation: '\u2014',
    signal: 'emits \u2192 later books \u00b7 payloads: Praxis referral (#4) + Apex trajectory \u00b7 latency long \u00b7 LOW half-life (present-but-dormant, fades unless re-excited)',
    clock: 'Clock 4 \u00b7 Export Pull (surfaces here) + low-half-life seeds \u2192 Clock 5',
    medium: 'prose',
    pointers:
      'Forward \u2192 Book N: the export (he\u2019s going)\nDangling \u2192 the Praxis referral (low half-life)\nForward \u2192 \u00a7later: the loose Warden\u2019s trajectory toward Apex',
    knowledge: 'audience knows? sees the dated-earlier paperwork (retro-legible)\n003: reads it as earned consequence',
  },
];

/** Stable order for the spine (container first, then narrative order). */
export const SPINE_ORDER: string[] = [
  's003-prologue',
  's003-p0',
  's003-seam',
  's003-p1',
  's003-p2',
  's003-p3',
  's003-p4',
  's003-p5',
  's003-p6',
  's003-p7',
  's003-p8',
];
