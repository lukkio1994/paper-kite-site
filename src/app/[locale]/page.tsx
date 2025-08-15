"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";

/* =========================================================
   CTA PANEL (unchanged)
========================================================= */
function PanelContent() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-3 px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSegO00zObW3ucNv4e6S38XenFV5jGBvQBvmQ-C4zQ-47GWaMQ/viewform?usp=header"
        className="font-semibold py-3 px-6 rounded-xl shadow-md text-center text-lg transition w-full sm:w-auto
          bg-[var(--color-tinad-primary)] text-[var(--color-tinad-white)]
          hover:bg-[var(--color-tinad-primary-light)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-tinad-primary)]"
        target="_blank" rel="noopener noreferrer"
      >
        Get Dev Updates
      </a>

      <Link
        href="/contentcreators"
        className="font-semibold py-3 px-6 rounded-xl shadow-md text-center text-lg transition w-full sm:w-auto
          bg-[var(--color-tinad-primary)] text-[var(--color-tinad-white)]
          hover:bg-[var(--color-tinad-primary-light)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-tinad-primary)]"
      >
        For Content Creators
      </Link>

      <a href="https://store.steampowered.com/app/3932170/This_Is_Not_A_Dungeon/" className="block w-full sm:w-auto" aria-label="Wishlist on Steam" target="_blank" rel="noopener noreferrer">
        <div className="h-[52px] px-6 bg-black rounded-xl flex items-center justify-center transition hover:opacity-90 mx-auto">
          <Image
            src="/images/icons/steam-wishlist.png"
            alt="Wishlist on Steam"
            width={130}
            height={40}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </a>
    </div>
  );
}

/* =========================================================
   SMALL ICON TOKEN
========================================================= */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--color-tinad-border)] 
                 bg-[var(--color-tinad-surface)]"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

/* =========================================================
   NEW: SPIKY DIVIDER (banner teeth / mask spikes)
   - Renders a colored band with triangular teeth on one edge
   - place it between sections
========================================================= */
function SpikeDivider({
  height = 90,            // total divider height
  amplitude = 28,         // spike tooth height
  spikes = 16,            // number of teeth across width
  colorVar = "--color-tinad-surface", // fill color
  edge = "bottom",        // "bottom" or "top"
  className = "",
}: {
  height?: number;
  amplitude?: number;
  spikes?: number;
  colorVar?: string;
  edge?: "bottom" | "top";
  className?: string;
}) {
  // Build points for a zig‑zag polygon in [0..100] space
  const points = useMemo(() => {
    const step = 100 / spikes;
    const topY = edge === "bottom" ? 0 : (amplitude / height) * 100;
    const baseY = edge === "bottom" ? (amplitude / height) * 100 : 0;

    const pts: string[] = [];
    // left top corner
    pts.push(`0,${topY}`);
    // top edge to the right
    pts.push(`100,${topY}`);
    // right vertical down/up to start zigzag base
    pts.push(`100,${baseY}`);

    // zigzag back to the left
    for (let i = spikes; i >= 0; i--) {
      const x = i * step;
      const isPeak = (spikes - i) % 2 === 0;
      const y = isPeak ? baseY : edge === "bottom" ? 0 : (amplitude / height) * 100 * 2;
      // clamp y between 0..100 just in case
      const clampedY = Math.max(0, Math.min(100, y));
      pts.push(`${x},${clampedY}`);
    }

    // close polygon to starting top edge
    pts.push(`0,${baseY}`);
    pts.push(`0,${topY}`);

    return pts.join(" ");
  }, [spikes, amplitude, height, edge]);

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill={`var(${colorVar})`} points={points} />
      </svg>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */
export default function HomePage() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    const current = sentinelRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <main className="w-full bg-[var(--color-tinad-background)] text-[var(--color-tinad-foreground)] overflow-x-hidden font-body">
      {/* 🎮 HERO SECTION */}
      <section
        className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-[var(--color-tinad-background)] to-[var(--color-tinad-primary-dark)] text-[var(--color-tinad-surface)]"
        aria-label="Game key art section"
      >
        <div className="relative w-full max-w-screen-xl aspect-[1232/706] z-10">
          <Image
            src="/images/games/tinad/store_capsule_main.png"
            alt="Key art from This Is Not A Dungeon"
            fill
            className="object-contain object-center"
            priority
          />

          {!isSticky && (
            <div className="absolute bottom-6 left-0 z-40 w-full flex justify-center transition-all duration-300">
              <PanelContent />
            </div>
          )}

          <div ref={sentinelRef} className="absolute bottom-0 left-0 w-full h-[1px] pointer-events-none" />
        </div>
      </section>

      {/* sticky panel */}
      <div
        className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ${
          isSticky
            ? "bg-[color:var(--color-tinad-background)/90] backdrop-blur-md shadow-md border-b border-[var(--color-tinad-border)] opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ willChange: "opacity, transform" }}
      >
        <PanelContent />
      </div>

      {/* 💬 SUMMARY */}
      <section className="w-full bg-[var(--color-tinad-surface)] text-[var(--color-tinad-foreground)] py-24 px-4 border-t border-[var(--color-tinad-border)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-[var(--color-tinad-primary)]">
            The dungeon’s closed. The heroes didn’t get the memo.
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-tinad-muted)]">
            You’re a worn-out mage just trying to enjoy your retirement. Unfortunately, idiots with swords keep
            breaking in. Lay traps, place rooms, and make sure they regret the trip.
          </p>
        </div>
      </section>

      {/* SPIKES: surface → background (teeth pointing down) */}
      <SpikeDivider
        height={100}
        amplitude={32}
        spikes={18}
        colorVar="--color-tinad-surface"
        edge="bottom"
      />

      {/* 🔁 CORE LOOP */}
      <section
        id="core-loop"
        className="w-full bg-[var(--color-tinad-background)] text-[var(--color-tinad-foreground)] py-20 px-4 border-t border-[var(--color-tinad-border)]"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-display font-extrabold mb-10 text-[var(--color-tinad-primary)] text-center">
            Your three‑step plan for peace and quiet
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-[var(--color-tinad-surface)] border border-[var(--color-tinad-border)]">
              <div className="mb-4"><Icon>🧱</Icon></div>
              <h4 className="font-bold text-xl mb-2">Build badly on purpose</h4>
              <p className="text-[var(--color-tinad-muted)]">
                Place rooms, twist hallways, and force detours. Efficiency is for people who care.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[var(--color-tinad-surface)] border border-[var(--color-tinad-border)]">
              <div className="mb-4"><Icon>🪤</Icon></div>
              <h4 className="font-bold text-xl mb-2">Arm traps & hire weird help</h4>
              <p className="text-[var(--color-tinad-muted)]">
                Mimics in treasure rooms, collapsing floors, and “reliable” minotaur security. What could go wrong?
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-[var(--color-tinad-surface)] border border-[var(--color-tinad-border)]">
              <div className="mb-4"><Icon>😈</Icon></div>
              <h4 className="font-bold text-xl mb-2">Watch the heroes suffer</h4>
              <p className="text-[var(--color-tinad-muted)]">
                They came for loot. They leave with regrets—if they leave at all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPIKES: background → surface (teeth pointing down, colored as background) */}
      <SpikeDivider
        height={100}
        amplitude={30}
        spikes={16}
        colorVar="--color-tinad-background"
        edge="bottom"
      />

      {/* ✨ FEATURES */}
      <section
        id="features"
        className="w-full bg-[var(--color-tinad-surface)] text-[var(--color-tinad-foreground)] py-20 px-4 border-t border-[var(--color-tinad-border)]"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-display font-extrabold mb-10 text-[var(--color-tinad-primary)] text-center">
            Why defend when you can <em>mess with</em> them?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--color-tinad-border)] bg-[var(--color-tinad-background)]">
              <Icon>🏚️</Icon>
              <div>
                <h4 className="font-bold">Room Variety</h4>
                <p className="text-[var(--color-tinad-muted)]">
                  Barracks, treasure rooms, elevators, and more—blend rooms to make glorious, confusing spaces.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--color-tinad-border)] bg-[var(--color-tinad-background)]">
              <Icon>🪤</Icon>
              <div>
                <h4 className="font-bold">Trap Shenanigans</h4>
                <p className="text-[var(--color-tinad-muted)]">
                  Mimics, fake exits, open floors, and re‑arming rules that keep heroes guessing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--color-tinad-border)] bg-[var(--color-tinad-background)]">
              <Icon>🧠</Icon>
              <div>
                <h4 className="font-bold">Dumb (but Determined) Hero AI</h4>
                <p className="text-[var(--color-tinad-muted)]">
                  They think they’re clever. They’re not. Complex layouts waste their time beautifully.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--color-tinad-border)] bg-[var(--color-tinad-background)]">
              <Icon>🔁</Icon>
              <div>
                <h4 className="font-bold">Endless Combos</h4>
                <p className="text-[var(--color-tinad-muted)]">
                  Every layout is a new headache… for them. You? You sip tea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPIKES: surface → background (teeth pointing down) */}
      <SpikeDivider
        height={100}
        amplitude={28}
        spikes={20}
        colorVar="--color-tinad-surface"
        edge="bottom"
      />



      {/* SPIKES: background → primary-dark (teeth pointing down) */}
      <SpikeDivider
        height={100}
        amplitude={26}
        spikes={18}
        colorVar="--color-tinad-background"
        edge="bottom"
      />

      {/* 💜 WISHLIST */}
      <section
        id="wishlist"
        className="w-full bg-[var(--color-tinad-primary-dark)] text-[var(--color-tinad-white)] py-14 px-4 border-t border-[var(--color-tinad-border)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-4">
            Save your spot in line to torment heroes.
          </h3>
          <p className="opacity-90 mb-6">
            Wishlist now and I’ll send you a thank‑you curse. (It’s mostly glitter.)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://store.steampowered.com/app/3932170/This_Is_Not_A_Dungeon/" className="block w-full sm:w-auto" aria-label="Wishlist on Steam" target="_blank" rel="noopener noreferrer">
              <div className="h-[52px] px-6 bg-black rounded-xl flex items-center justify-center transition hover:opacity-90 mx-auto">
                <Image
                  src="/images/icons/steam-wishlist.png"
                  alt="Wishlist on Steam"
                  width={130}
                  height={40}
                  className="h-full w-auto object-contain"
                />
              </div>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSegO00zObW3ucNv4e6S38XenFV5jGBvQBvmQ-C4zQ-47GWaMQ/viewform?usp=header"
              className="font-semibold py-3 px-6 rounded-xl text-lg transition w-full sm:w-auto
                        bg-[var(--color-tinad-white)] text-[var(--color-tinad-primary-dark)]
                        hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-tinad-white)]"
              target="_blank" rel="noopener noreferrer"
            >
              Get Dev Updates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
