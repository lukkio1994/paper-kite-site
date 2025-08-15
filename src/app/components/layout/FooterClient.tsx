"use client";

const LinkedInIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.25c.586-.902 1.563-1.5 2.5-1.5 1.933 0 3.5 1.567 3.5 3.5v6.75z" />
  </svg>
);
const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
  </svg>
);

import { useResolvedFooterConfig } from "@/lib/config-resolver";
import { type SocialLinkItem } from "@/lib/footer-config";
import type { SVGProps } from "react";
// Official X (Twitter) icon (brand SVG)
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
    fill="none"
    {...props}
    aria-hidden="true"
  >
    <rect width="120" height="120" rx="24" fill="currentColor" />
    <path
      fill="white"
      d="M73.82 33H82L65.72 53.18 85.51 87H67.77L55.67 67.58 41.16 87H33L50.36 64.99 31 33h18.44l10.26 16.45L73.82 33ZM70.84 82.12h4.2L49.27 37.47h-4.5l26.07 44.65Z"
    />
  </svg>
);

// Discord icon
const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.0371A19.7363 19.7363 0 003.677 4.3698a.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5218 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6601a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1836 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1836 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);
const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
  </svg>
);
// Official Instagram icon (brand SVG)
const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 448 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="448" height="448" rx="100" fill="currentColor" />
    <circle cx="224" cy="224" r="80" fill="#fff" />
    <circle cx="224" cy="224" r="56" fill="currentColor" />
    <circle cx="336" cy="112" r="24" fill="#fff" />
  </svg>
);
const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 00.502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 002.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const TwitchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2.857 0L.286 4.286V21.43h5.143V24h3.429l3.429-2.571h4.286L23.714 16V0H2.857zm18.286 15.429l-2.571 2.571h-4.286l-3.429 2.571v-2.571H5.143V2.571h16v12.858zM17.143 6.857h-1.714v5.143h1.714V6.857zm-4.286 0h-1.714v5.143h1.714V6.857z" />
  </svg>
);

const getIconForPlatform = (platform: string) => {
  // Normalize to lowercase and handle common aliases
  const key = platform.trim().toLowerCase();
  if (key === "x" || key.includes("twitter")) return XIcon;
  if (key.includes("discord")) return DiscordIcon;
  if (key.includes("instagram") || key === "ig") return InstagramIcon;
  if (key.includes("youtube")) return YouTubeIcon;
  if (key.includes("facebook")) return FacebookIcon;
  if (key.includes("twitch")) return TwitchIcon;
  if (key.includes("linkedin")) return LinkedInIcon;
  if (key.includes("github")) return GitHubIcon;
  return XIcon;
};

export default function FooterClient() {
  const config = useResolvedFooterConfig();

  // Transform config social links to include icon components
  const socialLinksWithIcons = config.socialLinks.map(
    (link: SocialLinkItem) => {
      // Relabel for display
      let platform = link.platform.trim();
      if (platform.toLowerCase() === "twitter") platform = "X";
      if (platform.toLowerCase() === "instagram") platform = "IG";
      return {
        platform,
        href: link.href,
        icon: getIconForPlatform(link.platform),
      };
    }
  );

  return (
    <footer className="bg-[var(--color-cstm-foreground)] text-[var(--color-cstm-white)] pt-12 pb-8 px-4">
      {/* Social Row */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-display tracking-wide mb-6">
          MORE PAPER KITE CONTENT IN THESE PLACES
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {socialLinksWithIcons.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <span className="bg-[color-mix(in_srgb,var(--color-cstm-white)_90%,transparent)] rounded-lg p-3 mb-2">
                  <Icon className="w-10 h-10 text-[var(--color-cstm-foreground)] group-hover:text-[var(--color-cstm-primary)] transition-colors" />
                </span>
                <span className="font-bold text-sm tracking-wide group-hover:text-[var(--color-cstm-primary)] transition-colors">
                  {link.platform.toUpperCase()}
                </span>
              </a>
            );
          })}
        </div>
        {/* Mailing List Bar */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSegO00zObW3ucNv4e6S38XenFV5jGBvQBvmQ-C4zQ-47GWaMQ/viewform?usp=header"
          className="block w-full max-w-xl mx-auto bg-[var(--color-cstm-primary)] text-[var(--color-cstm-foreground)] font-bold py-3 rounded-md shadow-lg text-center text-base tracking-wide hover:bg-[var(--color-cstm-primary-light)] transition mb-12"
          target="_blank" rel="noopener noreferrer"
        >
          SUBSCRIBE TO OUR MAILING LIST
        </a>
      </div>

      {/* Logo and Company Name */}
      <div className="flex flex-col items-center justify-center my-10">
        {/* Kite logo SVG (reuse from header) */}
        <span className="mb-2">
          <svg
            width="60"
            height="60"
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="11,2 20,11 11,20 2,11"
              stroke="var(--color-cstm-primary)"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="11"
              y1="2"
              x2="11"
              y2="20"
              stroke="var(--color-cstm-primary)"
              strokeWidth="1.5"
            />
            <line
              x1="2"
              y1="11"
              x2="20"
              y2="11"
              stroke="var(--color-cstm-primary)"
              strokeWidth="1.5"
            />
            {/* Improved tail: smoother, more natural curve */}
            <path
              d="M11 20 Q12 22 10 23 Q8 24 11 25"
              stroke="var(--color-cstm-primary)"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="11" cy="25" r="0.7" fill="var(--color-cstm-primary)" />
          </svg>
        </span>
        <span className="font-display text-2xl font-bold tracking-widest text-[var(--color-cstm-primary)]">
          PAPER KITE GAMES
        </span>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-[var(--color-cstm-muted)] mt-2">
        © 2025 Paper Kite Games. All rights reserved.
      </div>
    </footer>
  );
}
