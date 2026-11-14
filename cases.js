// Finished cases only. To publish a new case, add one entry to this list.
// The Labs page and the Blog page both read from it.
window.CASES = [
  {
    number: 1,
    title: "Turnabout Memories",
    kind: "Memory forensics",
    details: "MemLabs Lab 1 · Windows 7 memory image · Volatility 3, Volatility 2.6",
    summary: "A computer crashed while its owner was working. I went through the memory dump to see what was running and recovered 2 of 3 hidden flags.",
    report: "https://github.com/ftj258/dfir-home-labs/tree/main/01-memory-forensics/turnabout-memories",
    post: { page: "turnabout-memories.html", date: "November 2026", teaser: "My first case with memory forensics, Ace Attorney style." }
  },
  {
    number: 2,
    title: "Turnabout Spreadsheet",
    kind: "Disk forensics",
    details: "M57-Jean · Windows XP disk image · Autopsy",
    summary: "A spreadsheet with employee names, SSNs and salaries ended up online. I traced it back to a spoofed email posing as the boss.",
    report: "https://github.com/ftj258/dfir-home-labs/tree/main/02-disk-timeline-analysis/turnabout-spreadsheet",
    post: { page: "turnabout-spreadsheet.html", date: "November 2026", teaser: "Was Jean guilty, or just tricked? A disk forensics case, Ace Attorney style." }
  },
  {
    number: 3,
    title: "Turnabout Sauce",
    kind: "Incident response",
    details: "DFIR Madness · Windows DC + desktop · Autopsy, Volatility 3, Wireshark, impacket",
    summary: "An internet-exposed domain controller was brute-forced over RDP, then hit with malware, a C2 channel and lateral movement. I traced the full intrusion and rebuilt a deleted loot.zip from the metadata it left behind.",
    report: "https://github.com/ftj258/dfir-home-labs/tree/main/06-incident-response/turnabout-sauce",
    post: { page: "turnabout-sauce.html", date: "November 2026", teaser: "A domain controller breached over open RDP, a stolen recipe, and a deleted bag of loot. A full intrusion, Ace Attorney style." }
  }
];
