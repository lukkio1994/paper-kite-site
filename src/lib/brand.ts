/**
 * Brand Messaging and Content
 * 
 * Centralized configuration for Paper Kite Games brand messaging.
 * Update these constants to change brand content across the entire site.
 */

/**
 * Official Paper Kite Games Mission Statement
 */
export const MISSION_STATEMENT = "At Paper Kite Games, we believe that games don't need fancy graphics or complex systems to be meaningful. Like flying a simple paper kite with my dad in the park, the best experiences come from putting your soul into something simple and joyful. We create games that capture that spirit—fun, heartfelt, and built with care, so players can find moments of wonder in simplicity.";

/**
 * Official Paper Kite Games Tagline
 */
export const BRAND_TAGLINE = "Everyone can build a paper kite.";

/**
 * Supporting Brand Subline
 */
export const BRAND_SUBLINE = "We build simple, joyful games with care, so players can find moments of wonder in simplicity.";

/**
 * "This Is Not A Dungeon" Game Content
 */
export const TINIAD_DESCRIPTION_PART1 = "This Is Not A Dungeon is a comedic base-defense strategy game for PC (Steam, itch.io) where you play as a grumpy wizard who just wants to be left alone. Unfortunately, your lair has become way too popular with overeager heroes looking for glory (and your stuff). You never asked for this—so it's time to set traps, rearrange rooms, and spend precious mana to send them packing.";

export const TINIAD_DESCRIPTION_PART2 = "Forget commanding vast armies. In this single-player strategy game, you'll outsmart hero parties with clever tricks, improvisation, and a touch of dark humor as you turn their epic quests into slapstick disasters. Build your lair, bait the heroes, and watch their plans fall apart in glorious chaos. You might be outpowered, but you're never outwitted. Again, get out—this is not a dungeon.";

export const TINIAD_MICRO_TAGLINE = "Build. Defend. Survive.";

/**
 * Official Launch Key Features for "This Is Not A Dungeon"
 * 
 * These are the finalized, launch-ready Key Features for marketing, store pages, and press kit.
 * Used across the website, Steam store page, and all promotional materials.
 */
export const TINIAD_KEY_FEATURES = [
  {
    emoji: "🪄",
    title: "Be the Grumpy Wizard",
    description: "Outpowered but never outwitted, defend your lair your way as a wizard who just wants to be left alone."
  },
  {
    emoji: "🪤", 
    title: "Build Traps & Rearrange Rooms",
    description: "Turn your lair into a chaotic playground with shifting rooms, sneaky traps, and surprise combos."
  },
  {
    emoji: "🧠",
    title: "Outsmart the Heroes", 
    description: "Bait, trick, and improvise to ruin the day of heroes expecting an easy dungeon crawl."
  },
  {
    emoji: "😂",
    title: "Comedy, Chaos & Quirky Cast",
    description: "Watch epic quests become slapstick disasters as a quirky cast of overeager heroes and oddball minions collide with your plans."
  },
  {
    emoji: "🏰", 
    title: "Build. Defend. Survive.",
    description: "A single-player, comedic base-defense strategy game for PC (Steam, itch.io)."
  },
  {
    emoji: "🎵",
    title: "Low-Stress, High-Fun",
    description: "Enjoy playful strategy and creativity without overwhelming complexity."
  }
] as const;

/**
 * Brand messaging and content objects
 */
export const BRAND_CONTENT = {
  tagline: BRAND_TAGLINE,
  subline: BRAND_SUBLINE,
  missionStatement: MISSION_STATEMENT,
} as const;

export const TINIAD_CONTENT = {
  descriptionPart1: TINIAD_DESCRIPTION_PART1,
  descriptionPart2: TINIAD_DESCRIPTION_PART2,
  microTagline: TINIAD_MICRO_TAGLINE,
  keyFeatures: TINIAD_KEY_FEATURES,
  fullDescription: `${TINIAD_DESCRIPTION_PART1}\n\n${TINIAD_DESCRIPTION_PART2}`,
} as const;
