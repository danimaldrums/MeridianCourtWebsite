// Archive designations grounded in the recorded words or Locked Canon heading.
// "spoken": exact number announced in narration. "source": original source heading,
// but NOT spoken in the saved narration. "sequence": fallback only when no ID is given.
// Keep leading zeros and punctuation where established. This is display data, not new lore.
export type IdentifierSource = 'spoken' | 'source' | 'sequence';
export interface ArchiveDesignation { label:string; identifier:string; source:IdentifierSource }
const designated: Record<string, ArchiveDesignation> = {
  "the-last-architect-archive-01": {
    "label": "ARCHIVE ENTRY 001",
    "identifier": "001",
    "source": "source"
  },
  "the-last-architect-archive-02": {
    "label": "ARCHIVE ENTRY 014",
    "identifier": "014",
    "source": "source"
  },
  "the-last-architect-archive-03": {
    "label": "ARCHIVE ENTRY 274,119",
    "identifier": "274,119",
    "source": "source"
  },
  "the-last-architect-archive-04": {
    "label": "ARCHIVE ENTRY 618,442",
    "identifier": "618,442",
    "source": "source"
  },
  "the-last-architect-archive-05": {
    "label": "ARCHIVE ENTRY 1,482,903",
    "identifier": "1,482,903",
    "source": "source"
  },
  "the-last-architect-archive-06": {
    "label": "ARCHIVE ENTRY 1,482,904",
    "identifier": "1,482,904",
    "source": "source"
  },
  "the-last-architect-archive-07": {
    "label": "RECOVERED ARCHIVE",
    "identifier": "VII",
    "source": "sequence"
  },
  "the-path-within-archive-01": {
    "label": "ARCHIVE I",
    "identifier": "I",
    "source": "sequence"
  },
  "the-path-within-archive-02": {
    "label": "ARCHIVE II",
    "identifier": "II",
    "source": "sequence"
  },
  "the-path-within-archive-03": {
    "label": "ARCHIVE III",
    "identifier": "III",
    "source": "sequence"
  },
  "the-path-within-archive-04": {
    "label": "ARCHIVE IV",
    "identifier": "IV",
    "source": "sequence"
  },
  "the-path-within-archive-05": {
    "label": "ARCHIVE V",
    "identifier": "V",
    "source": "sequence"
  },
  "the-path-within-archive-06": {
    "label": "ARCHIVE VI",
    "identifier": "VI",
    "source": "sequence"
  },
  "beyond-the-veil-archive-01": {
    "label": "ARCHIVE ENTRY 11903",
    "identifier": "11903",
    "source": "spoken"
  },
  "beyond-the-veil-archive-02": {
    "label": "ARCHIVE ENTRY 11904",
    "identifier": "11904",
    "source": "spoken"
  },
  "beyond-the-veil-archive-03": {
    "label": "ARCHIVE ENTRY 11905",
    "identifier": "11905",
    "source": "spoken"
  },
  "beyond-the-veil-archive-04": {
    "label": "ARCHIVE ENTRY 11906",
    "identifier": "11906",
    "source": "spoken"
  },
  "beyond-the-veil-archive-05": {
    "label": "ARCHIVE ENTRY 11907",
    "identifier": "11907",
    "source": "spoken"
  },
  "beyond-the-veil-archive-06": {
    "label": "ARCHIVE ENTRY 11908",
    "identifier": "11908",
    "source": "spoken"
  },
  "the-shattered-horizon-archive-01": {
    "label": "ARCHIVE ENTRY 8174",
    "identifier": "8174",
    "source": "spoken"
  },
  "the-shattered-horizon-archive-02": {
    "label": "ARCHIVE ENTRY 11902",
    "identifier": "11902",
    "source": "spoken"
  },
  "the-shattered-horizon-archive-03": {
    "label": "ARCHIVE ENTRY 431",
    "identifier": "431",
    "source": "spoken"
  },
  "the-shattered-horizon-archive-04": {
    "label": "ARCHIVE ENTRY 9201",
    "identifier": "9201",
    "source": "spoken"
  },
  "the-shattered-horizon-archive-05": {
    "label": "ARCHIVE ENTRY 0900",
    "identifier": "0900",
    "source": "spoken"
  },
  "the-shattered-horizon-archive-06": {
    "label": "ARCHIVE ENTRY 0001",
    "identifier": "0001",
    "source": "spoken"
  },
  "the-unwritten-dawn-archive-01": {
    "label": "ARCHIVE ENTRY 1",
    "identifier": "1",
    "source": "spoken"
  },
  "the-unwritten-dawn-archive-02": {
    "label": "ARCHIVE ENTRY 2",
    "identifier": "2",
    "source": "spoken"
  },
  "the-unwritten-dawn-archive-03": {
    "label": "ARCHIVE ENTRY 3",
    "identifier": "3",
    "source": "spoken"
  },
  "the-unwritten-dawn-archive-04": {
    "label": "ARCHIVE ENTRY 4",
    "identifier": "4",
    "source": "spoken"
  },
  "the-unwritten-dawn-archive-05": {
    "label": "ARCHIVE ENTRY 5",
    "identifier": "5",
    "source": "spoken"
  },
  "all-that-might-have-been-archive-01": {
    "label": "ARCHIVE I",
    "identifier": "I",
    "source": "sequence"
  },
  "all-that-might-have-been-archive-02": {
    "label": "ARCHIVE II",
    "identifier": "II",
    "source": "sequence"
  },
  "all-that-might-have-been-archive-03": {
    "label": "ARCHIVE III",
    "identifier": "III",
    "source": "sequence"
  },
  "all-that-might-have-been-archive-04": {
    "label": "ARCHIVE IV",
    "identifier": "IV",
    "source": "sequence"
  },
  "all-that-might-have-been-archive-05": {
    "label": "ARCHIVE V",
    "identifier": "V",
    "source": "sequence"
  }
};
export function archiveDesignation(slug:string): ArchiveDesignation | undefined { return designated[slug]; }
