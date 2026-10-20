// PUBLIC RELEASE GATE: Only curated material from released Locked Canon.
// Never import private archive files automatically.
import { narrationsArcZero } from './narrations/arc-zero';
import { narrationsArcOne } from './narrations/arc-one';
import { narrationsArcTwo } from './narrations/arc-two';
import { narrationsArcThree } from './narrations/arc-three';
import { narrationsArcFour } from './narrations/arc-four';
import { narrationsChronicleMeridian } from './narrations/chronicle-meridian';

export type CodexKind = 'character' | 'location' | 'phenomenon' | 'narration';
export interface CodexReference { slug:string; kind:Exclude<CodexKind,'narration'>; title:string; summary:string; body:string[]; albumSlug:string; albumTitle:string; related:string[] }
export interface CodexNarration { slug:string; kind:'narration'; title:string; albumSlug:string; albumTitle:string; albumArc:string; archiveNumber:number; body:string }
export type CodexRecord = CodexReference | CodexNarration;

export const referenceRecords: CodexReference[] = [
  {
    "slug": "aurex-valen",
    "kind": "character",
    "title": "Aurex Valen",
    "summary": "The last surviving citizen of the Luminar Ascendancy, remembered as the Last Architect.",
    "body": [
      "Before the Great Silence, Aurex Valen served as the Luminar Ascendancy's Chief Stellar Engineer. He had a wife and young daughter, and a life he never expected to surrender.",
      "When the Celestial Engine required a living consciousness, Aurex volunteered. Across more than twelve million years, the mind inside the Engine endured isolation, fractured memory and the burden of preserving existence.",
      "An artificial transmission, followed by the arrival of the vessel Aureon, finally broke his silence. What follows belongs to an immense stretch of history not fully documented by the current Archives."
    ],
    "albumSlug": "the-last-architect",
    "albumTitle": "The Last Architect",
    "related": [
      "celestial-engine",
      "the-great-silence",
      "aureon",
      "the-last-architect-archive-07"
    ]
  },
  {
    "slug": "the-seeker",
    "kind": "character",
    "title": "The Seeker",
    "summary": "A traveller whose search for answers becomes a responsibility to a world without easy certainty.",
    "body": [
      "The Seeker begins Arc I by following a call beyond the familiar. The road, the Mountain and the Silent Peak lead towards the Hall of Architects and a meeting with the First Architect.",
      "The Seeker crosses the Meridian in a journey that grows beyond personal discovery. By Arc III the Seeker must confront contradictory realities; in Arc IV, protecting lives matters more than restoring a single version of history.",
      "No personal name or confirmed earlier identity has been established for the Seeker. That absence is part of the current record, not an invitation to invent one."
    ],
    "albumSlug": "the-path-within",
    "albumTitle": "The Path Within",
    "related": [
      "the-seekers-road",
      "the-first-architect",
      "the-meridian",
      "the-path-within-archive-01"
    ]
  },
  {
    "slug": "meridian-asteris",
    "kind": "character",
    "title": "Meridian / Asteris",
    "summary": "A scientist known as Asteris in an earlier Chronicle, later central to the Court's difficult choices.",
    "body": [
      "In All That Might Have Been, Asteris studies an anomalous residual pattern that persists when the models say it should disappear. Her work becomes inseparable from loss, responsibility and the question of whose life may be changed by another person's choice.",
      "In the later Court era she is known as Meridian Asteris. The Archive does not establish when or why Meridian became her primary name, or supply a continuous account of the history between the Chronicle and the Seeker era.",
      "Across the released story, her responsibility is not to own the future. It is to protect the possibility of choices without denying their consequences."
    ],
    "albumSlug": "all-that-might-have-been",
    "albumTitle": "All That Might Have Been",
    "related": [
      "asteris-home-world",
      "the-boundary",
      "celestial-engine",
      "all-that-might-have-been-archive-01"
    ]
  },
  {
    "slug": "the-first-architect",
    "kind": "character",
    "title": "The First Architect",
    "summary": "A mysterious guide who meets the Seeker in the Hall of Architects.",
    "body": [
      "The First Architect meets the Seeker during Arc I, offering questions rather than simple explanations.",
      "The encounter leads towards the Celestial Engine, the Mirror and a deeply personal question about identity. The First Architect's complete origin, nature, age and history remain unresolved.",
      "Despite the similarity of their titles, the First Architect must not be assumed to be Aurex Valen, the Last Architect."
    ],
    "albumSlug": "the-path-within",
    "albumTitle": "The Path Within",
    "related": [
      "the-seeker",
      "hall-of-architects",
      "the-path-within-archive-03"
    ]
  },
  {
    "slug": "maria-veyr",
    "kind": "character",
    "title": "Maria ‘Mara’ Veyr",
    "summary": "A young woman remembered in one history and absent from another after the Fracture.",
    "body": [
      "Maria Veyr, called Mara by those close to her, lived for twenty-seven years in one history. She was the daughter of Amara and Corin Veyr and was engaged to Jonas Venn.",
      "After the Fracture, the surviving present no longer contains a single consistent account of her life. Amara remembers her daughter, while Corin and Jonas do not share those conscious memories.",
      "The first Witness Record recognises Maria's lived history. It does not restore her or force the surviving world into one version of the past."
    ],
    "albumSlug": "the-unwritten-dawn",
    "albumTitle": "The Unwritten Dawn",
    "related": [
      "amara-veyr",
      "corin-veyr",
      "jonas-venn",
      "the-unwritten-dawn-archive-02"
    ]
  },
  {
    "slug": "amara-veyr",
    "kind": "character",
    "title": "Amara Veyr",
    "summary": "A mother whose memories refuse to accept that her daughter never existed.",
    "body": [
      "Amara Veyr is married to Corin Veyr. She remembers raising their daughter Maria, even though the surviving historical account does not preserve that life consistently.",
      "Her testimony confronts the Court with something no technical correction can easily settle: a remembered person and the relationships left behind.",
      "Through the first Continuance, the Court acknowledges Maria within a Witness Record. The acknowledgement is not the same as bringing her back."
    ],
    "albumSlug": "the-unwritten-dawn",
    "albumTitle": "The Unwritten Dawn",
    "related": [
      "maria-veyr",
      "corin-veyr",
      "jonas-venn",
      "the-unwritten-dawn-archive-05"
    ]
  },
  {
    "slug": "corin-veyr",
    "kind": "character",
    "title": "Corin Veyr",
    "summary": "Amara's husband, living with a history that no longer agrees with hers.",
    "body": [
      "Corin Veyr is Amara Veyr's husband. In one of the histories involved in the post-Fracture contradiction, they raised Maria together.",
      "After the Fracture, Corin does not consciously remember that daughter. The difference between his experience and Amara's becomes part of the personal cost of contradictory histories.",
      "His missing memories do not prove that the history Amara remembers was unreal."
    ],
    "albumSlug": "the-unwritten-dawn",
    "albumTitle": "The Unwritten Dawn",
    "related": [
      "amara-veyr",
      "maria-veyr",
      "jonas-venn"
    ]
  },
  {
    "slug": "jonas-venn",
    "kind": "character",
    "title": "Jonas Venn",
    "summary": "A communications engineer whose surviving memories cannot explain an engagement ring.",
    "body": [
      "Jonas Venn is a civilian communications systems engineer. In one history he was engaged to Maria Veyr.",
      "The surviving present does not give him conscious memories of that relationship, even though his ring and everyday habits preserve evidence of it.",
      "The first Witness Record publicly recognises the relationship without treating it as a restored memory or a reunion."
    ],
    "albumSlug": "the-unwritten-dawn",
    "albumTitle": "The Unwritten Dawn",
    "related": [
      "maria-veyr",
      "amara-veyr",
      "corin-veyr"
    ]
  },
  {
    "slug": "the-celestial-engine",
    "kind": "location",
    "title": "The Celestial Engine",
    "summary": "An immense machine built to resist the collapse of reality.",
    "body": [
      "The Luminar Ascendancy constructed the Celestial Engine to stabilise space, time and causality as reality began to collapse.",
      "Aurex Valen entered its Core Chamber through the Ascension Protocol and became the Engine's living consciousness. It endured through many ages and remained significant into Asteris's era and the later Court's crisis.",
      "The precise extent of the Engine and its complete internal architecture are not established."
    ],
    "albumSlug": "the-last-architect",
    "albumTitle": "The Last Architect",
    "related": [
      "aurex-valen",
      "the-great-silence",
      "the-last-architect-archive-02"
    ]
  },
  {
    "slug": "aureon",
    "kind": "location",
    "title": "Aureon",
    "summary": "The vessel whose arrival ends the Last Architect's long isolation.",
    "body": [
      "Aureon is the approaching vessel identified in the recovered first-contact Archive.",
      "Its crew believed they had found the ruins of an extinct civilisation. Instead, they encountered a still-operational consciousness within the Celestial Engine.",
      "The arrival opens a new chapter, but the full history that follows remains outside the current recorded sequence."
    ],
    "albumSlug": "the-last-architect",
    "albumTitle": "The Last Architect",
    "related": [
      "aurex-valen",
      "the-celestial-engine",
      "the-last-architect-archive-06"
    ]
  },
  {
    "slug": "asteris-home-world",
    "kind": "location",
    "title": "Asteris's Home World",
    "summary": "A home beneath a ringed sky, its proper name still unrecorded.",
    "body": [
      "Asteris comes from an inhabited world with a visible ring system. Its ordinary life includes homes, streets, gardens and a culture of observation and enquiry.",
      "The ringed sky becomes inseparable from Asteris's memories of family, belonging and loss.",
      "The world's canonical proper name has not been established. Its history must not be silently merged with the later Meridian or other locations."
    ],
    "albumSlug": "all-that-might-have-been",
    "albumTitle": "All That Might Have Been",
    "related": [
      "meridian-asteris",
      "the-boundary"
    ]
  },
  {
    "slug": "the-boundary",
    "kind": "location",
    "title": "The Boundary",
    "summary": "An unexplained threshold crossed through the anomalous Path in Asteris's Chronicle.",
    "body": [
      "The anomalous Path gives Asteris access to a Boundary she deliberately crosses. A second survivor later crosses as the activity around the breach escalates.",
      "Beyond it Asteris finds familiar landscapes with different stars. The destination's physical or cosmological nature remains unresolved.",
      "The Boundary has not been established as the Meridian, the Veil, a later Fracture or a confirmed precursor to any of them."
    ],
    "albumSlug": "all-that-might-have-been",
    "albumTitle": "All That Might Have Been",
    "related": [
      "meridian-asteris",
      "asteris-home-world",
      "the-meridian",
      "all-that-might-have-been-archive-04"
    ]
  },
  {
    "slug": "the-seekers-road",
    "kind": "location",
    "title": "The Seeker's Road",
    "summary": "A route that leads both out into the world and inward towards self-discovery.",
    "body": [
      "The road is the Seeker's first recognised route in Arc I, carrying both a physical journey and an internal search.",
      "Its conventional geographical starting point and destination are not given. Its significance lies in the choice to begin."
    ],
    "albumSlug": "the-path-within",
    "albumTitle": "The Path Within",
    "related": [
      "the-seeker",
      "the-silent-peak",
      "the-path-within-archive-01"
    ]
  },
  {
    "slug": "the-silent-peak",
    "kind": "location",
    "title": "The Silent Peak",
    "summary": "The threshold of stillness and revelation reached during the Seeker's ascent.",
    "body": [
      "The Seeker's journey up the Mountain leads to the Silent Peak, a setting linked to stillness, uncertainty and revelation.",
      "The Archive does not establish whether the Silent Peak is a different mountain or precisely locate it on a world or continent."
    ],
    "albumSlug": "the-path-within",
    "albumTitle": "The Path Within",
    "related": [
      "the-seeker",
      "the-seekers-road",
      "hall-of-architects",
      "the-path-within-archive-02"
    ]
  },
  {
    "slug": "hall-of-architects",
    "kind": "location",
    "title": "The Hall of Architects",
    "summary": "An ancient place of remembrance whose own origins are not settled.",
    "body": [
      "The Hall is encountered by the Seeker and is connected to stone, pillars, doors, memory, choices and the preservation of hope.",
      "The First Architect appears there. Arc II deepens the Hall's meaning as a place where civilisations are remembered through the choices that shaped what followed.",
      "Some believe the Hall was built; others believe it has always existed. Neither account is confirmed. The Hall is not established to be the same structure as the Celestial Engine."
    ],
    "albumSlug": "the-path-within",
    "albumTitle": "The Path Within",
    "related": [
      "the-first-architect",
      "the-seeker",
      "the-celestial-engine",
      "beyond-the-veil-archive-02"
    ]
  },
  {
    "slug": "the-meridian",
    "kind": "location",
    "title": "The Meridian",
    "summary": "A threshold designed to prepare those who approach what lies beyond.",
    "body": [
      "The Seeker approaches and crosses the Meridian during Arc I. Arc II establishes that the boundary was built not to exclude the worthy but to prepare the unready.",
      "Its mechanism, builders, age and precise spatial extent remain unknown.",
      "The Archive does not confirm that the earlier Boundary crossed by Asteris is the Meridian."
    ],
    "albumSlug": "the-path-within",
    "albumTitle": "The Path Within",
    "related": [
      "the-seeker",
      "the-boundary",
      "beyond-the-veil-archive-01"
    ]
  },
  {
    "slug": "the-city",
    "kind": "location",
    "title": "The City",
    "summary": "An unnamed city struggling to support two contradictory histories at once.",
    "body": [
      "In Arc IV, an inhabited urban environment contains physically present structures from incompatible histories. Transit routes, foundations and repairs no longer have a consistent shared origin.",
      "Evacuation begins as contradictory infrastructure threatens the people who live there. The city's danger makes the Court's argument about correction immediate and practical.",
      "The Archive does not establish a canonical proper name for the city."
    ],
    "albumSlug": "the-unwritten-dawn",
    "albumTitle": "The Unwritten Dawn",
    "related": [
      "the-unwritten-dawn-archive-03",
      "the-fractures"
    ]
  },
  {
    "slug": "the-great-silence",
    "kind": "phenomenon",
    "title": "The Great Silence",
    "summary": "The spreading disappearance of star systems that precipitated the ancient Luminar crisis.",
    "body": [
      "The Luminar Ascendancy observed whole stellar systems vanishing without debris, radiation or any known explanation.",
      "The spreading phenomenon became known as the Great Silence and drove the civilisation's response through the Celestial Engine.",
      "The underlying cause is not simply resolved by the records describing its first appearance."
    ],
    "albumSlug": "the-last-architect",
    "albumTitle": "The Last Architect",
    "related": [
      "aurex-valen",
      "the-celestial-engine",
      "the-last-architect-archive-01"
    ]
  },
  {
    "slug": "the-fractures",
    "kind": "phenomenon",
    "title": "The Fractures",
    "summary": "Contradictions in history, memory and reality emerging during the Meridian Crisis.",
    "body": [
      "During Arc III, reality begins to present incompatible observations and impossible worlds. The Fractures undermine assumptions about a single consistent account of existence.",
      "Arc IV shows how the consequences reach ordinary lives, records and physical infrastructure, without granting the Court a simple method for restoring certainty.",
      "The complete origin and ultimate meaning of the Fractures are not established by the released public story."
    ],
    "albumSlug": "the-shattered-horizon",
    "albumTitle": "The Shattered Horizon",
    "related": [
      "the-city",
      "the-seeker",
      "the-shattered-horizon-archive-01"
    ]
  }
];
export const narrationRecords: CodexNarration[] = [
  ...narrationsArcZero,
  ...narrationsArcOne,
  ...narrationsArcTwo,
  ...narrationsArcThree,
  ...narrationsArcFour,
  ...narrationsChronicleMeridian
];
export const codexRecords: CodexRecord[] = [...referenceRecords, ...narrationRecords];
export const codexBySlug = new Map(codexRecords.map(entry=>[entry.slug,entry] as const));
