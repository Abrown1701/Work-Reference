/*
  EDIT THIS FILE TO CHANGE ANY WORDS ON THE SITE.
  Keep the quote marks and commas exactly as they are.
  Anything in [square brackets] is a placeholder. Replace it with your real detail.
*/

var SITE = {
  name: "Angela Brown",
  headline: "Executive Operations and Strategic Support",
  chips: [
    "7+ years C-suite support",
    "Bilingual English and Spanish",
    "Healthcare, science, and professional services"
  ],

  throughline:
    "Every role earned more trust and more ownership: from caring for people, to protecting accuracy, to supporting the C-suite, to running operations.",

  /* Contact buttons shown at the top of the page. "note" is small text under or beside the button. */
  contact: [
    { button: "Email me", href: "mailto:angelavictoria1701@gmail.com", note: "" },
    { button: "Let's connect on LinkedIn", href: "https://www.linkedin.com/in/angela-brown-73966a1b4/", note: "" }
  ],

  /* The five roadmap steps, oldest to newest. */
  steps: [
    {
      id: 1,
      role: "Animal Hospital",
      summary: "Staying calm and kind with people",
      skills: [
        "Staying calm and kind",
        "Supporting people on their hardest days",
        "Clear communication with worried pet owners"
      ],
      lessons: [
        "Lead with empathy in high-emotion moments",
        "Read what a person needs before acting",
        "Sometimes being present matters most"
      ],
      proof: "Trusted by clients in emotional moments, and the person my team turned to for calm, clear communication.",
      story: {
        situation: "A client's dog had beaten cancer into remission and they had a couple of good years. Then he declined fast and needed to be put down. It was my first truly hard loss.",
        action: "I sat down with her, held her hands, and told her what an amazing life she gave her pup and that she did everything she could.",
        result: "I could not fix anything, but she left knowing we cared. That moment still shapes how I show up for people."
      }
    },
    {
      id: 2,
      role: "Healthcare Billing",
      summary: "Accuracy where money and compliance meet",
      skills: [
        "Accuracy where money and compliance meet",
        "Attention to detail",
        "Following billing and compliance rules"
      ],
      lessons: [
        "Catch errors before they reach the client",
        "Explain complex problems in plain language",
        "Coordinate with insurers to resolve issues"
      ],
      proof: "Known for accuracy with money and compliance, and for catching problems before they ever reach the client.",
      story: {
        situation: "A client's bill was submitted to her insurance incorrectly, and she was being charged an exorbitant copay.",
        action: "I walked her through the mistake and my plan to fix it, brought her insurance on the line to explain the problem, and got the codes corrected.",
        result: "Her services were covered and she did not have to pay out of pocket."
      }
    },
    {
      id: 3,
      role: "Biopharma Quality Control and Compliance",
      summary: "Built the QC process from the ground up",
      skills: [
        "Documentation",
        "Audit readiness",
        "Process discipline"
      ],
      lessons: [
        "Design processes that run without oversight",
        "Write documentation others can follow",
        "Train and onboard others, including leadership"
      ],
      proof: "Built the QC process still in use today. Wrote over 75% of the department's SOPs.",
      story: {
        situation: "I started as a lab tech with no senior tech to learn from, so I learned hands-on.",
        action: "As the company's first technical quality control technician, I built the QC process from the ground up and wrote over 75% of the department's SOPs. When a new supervisor was hired with no handoff, I trained her on everything specific to our department.",
        result: "The QC team still uses that process today, and I essentially onboarded my own boss."
      }
    },
    {
      id: 4,
      role: "Executive Assistant to the CEO, Precision.co",
      summary: "Judgment and discretion for a CEO",
      skills: [
        "Judgment and discretion",
        "Running a leader's priorities",
        "Calendar, communications, and decision support"
      ],
      lessons: [
        "Earn trust fast in high-stakes roles",
        "Take ownership so leaders can focus on growth",
        "Anticipate needs before they are asked"
      ],
      proof: "Trusted with a CEO's priorities, calendar, and communications during a high-stakes stretch of growth.",
      story: {
        situation: "I stepped into this role while recovering from a serious car accident. The CEO builds while he flies, so the job was high stakes from day one.",
        action: "I took on immediate trust and a fast handoff of control so he could stop carrying the day-to-day.",
        result: "He was able to step away and focus on the work only he could move forward."
      }
    },
    {
      id: 5,
      role: "US Business Operations Lead, SPS",
      summary: "Owning operations and clients end to end",
      current: true,
      skills: [
        "Owning operations and clients",
        "Owning process end to end",
        "Vendor and client coordination"
      ],
      lessons: [
        "Prioritize competing needs across teams",
        "Focus effort on what moves the business forward",
        "Build plans that serve many stakeholders"
      ],
      proof: "Trusted to own operations and client relationships end to end, balancing competing needs across teams.",
      story: {
        situation: "Our business supports hundreds of employees, each with real concerns and competing needs.",
        action: "I sort out which concerns actually drive the business forward and build plans that balance competing requirements across teams.",
        result: "It has sharpened my ability to discern what matters most and prioritize with confidence across teams."
      },
      note: "I was brought on at SPS specifically for my AI expertise. I built that expertise while working under the CEO at Precision.co, and I strengthened it through multiple AI development courses I took while planning my career."
    }
  ],

  /* Strength buttons. "steps" lists which roadmap steps light up (by id). */
  strengths: [
    {
      label: "C-Suite Partnership",
      steps: [4, 5],
      text: "7+ years supporting executives, including EA to the CEO at Precision.co. Calendar, priorities, communications, and decisions handled so leaders can focus."
    },
    {
      label: "Operations Leadership",
      steps: [3, 5],
      text: "US Business Operations Lead at SPS, and the person who built the QC process from scratch in biopharma. Process ownership, prioritization, and systems that cut admin load."
    },
    {
      label: "Compliance and Precision",
      steps: [2, 3],
      text: "Biopharma quality control and compliance, plus healthcare billing. Documentation, audit readiness, and care with every detail."
    },
    {
      label: "Client-Facing Range",
      steps: [1, 2, 5],
      text: "Animal hospital work, healthcare billing, and operations. Calm and clear with people under stress."
    },
    {
      label: "Bilingual",
      steps: [],
      text: "Fluent in English and Spanish, usable with clients, vendors, and teams."
    }
  ]
};
