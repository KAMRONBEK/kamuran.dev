"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Hydration-safe `prefers-reduced-motion`. Returns `false` on the server and on
 * the first client render (so SSR and hydrated markup agree), then the real
 * preference after hydration. Unlike framer's `useReducedMotion`, which reads
 * the media query synchronously during the first client render, this avoids
 * hydration mismatches for reduced-motion visitors.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
