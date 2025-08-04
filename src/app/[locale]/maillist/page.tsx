'use client';

export default function JoinMailingListPage() {
  return (
    <main className="w-full bg-background text-foreground overflow-x-hidden">
      {/* 💌 HERO SECTION */}
      <section
        className="w-full py-10 px-4 sm:px-6 lg:px-12 bg-background"
        aria-label="Join the TINAD Mailing List"
      >
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg bg-surface flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Follow the Journey 🧙‍♂️
            </h1>
            <p className="text-lg text-muted mb-4">
              This Is Not A Dungeon is our debut game — a chaotic reverse-dungeon strategy game where you&apos;re the one defending your evil lair.
            </p>
            <p className="text-lg text-muted">
              Sign up to get dev updates, demo invites, and early access before the game hits Steam.
            </p>
          </div>
        </div>
      </section>

      {/* 📬 SIGN-UP FORM SECTION */}
      <section className="w-full bg-surface text-foreground py-20 px-4 border-t border-border">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join the Mailing List
          </h2>
          <p className="text-lg text-muted mb-8">
            We’ll send you the good stuff: behind-the-scenes devlogs, trailer drops, and an invite to play the demo early.
          </p>

          {/* 👇 Replace this form with your real embed */}
          <form
            action="https://your-mailing-service.com/subscribe"
            method="POST"
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full sm:w-auto px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-onAccent font-bold py-3 px-6 rounded-xl shadow text-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              ✅ Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* 📩 CONTACT FALLBACK */}
      <section className="w-full bg-surface text-foreground py-12 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted mb-4">
            Have a question or want to collaborate?
          </p>
          <a
            href="mailto:paperkitegames@gmail.com"
            className="text-primary underline hover:text-primary-light font-medium"
          >
            📧 paperkitegames@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
