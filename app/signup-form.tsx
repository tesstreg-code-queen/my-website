"use client";

import { useActionState, useId } from "react";
import { subscribe, type SubscribeState } from "./actions";

const initialState: SubscribeState = { status: "idle", message: "" };

export function SignupForm({
  cta = "Slide in",
  placement,
}: {
  cta?: string;
  placement: "hero" | "footer";
}) {
  const [state, formAction, pending] = useActionState(subscribe, initialState);
  const inputId = useId();

  if (state.status === "success") {
    return (
      <p className="font-display rounded-full border-2 border-ink bg-butter px-6 py-3 text-xl italic shadow-pop-sm">
        {state.message} ♥
      </p>
    );
  }

  return (
    <form action={formAction} className="w-full">
      <input type="hidden" name="placement" value={placement} />
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          autoComplete="email"
          className="min-w-0 flex-1 rounded-full border-2 border-ink bg-white px-5 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-hotpink/30"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-full border-2 border-ink bg-hotpink px-7 py-3 font-bold text-white shadow-pop-sm transition hover:-translate-y-0.5 hover:rotate-[-2deg] hover:shadow-pop active:translate-y-0 active:shadow-none disabled:opacity-60"
        >
          {pending ? "Swiping…" : cta}
        </button>
      </div>
      <p aria-live="polite" className="font-script mt-2 min-h-6 text-xl text-cherry">
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  );
}
