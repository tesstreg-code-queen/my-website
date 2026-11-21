"use server";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PLACEMENTS = new Set(["hero", "footer"]);

const GENERIC_ERROR: SubscribeState = {
  status: "error",
  message: "Something broke on our end. Try again in a sec?",
};

export async function subscribe(
  _prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  // Honeypot: hidden from people, filled in by bots. Pretend it worked.
  if (formData.get("company")) {
    return { status: "success", message: "It's a match! You're on the list." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Hmm, that email looks a little sus." };
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !publicationId) {
    console.error("[subscribe] BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID is not set");
    return GENERIC_ERROR;
  }

  const placement = String(formData.get("placement") ?? "");

  let response: Response;
  try {
    response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          double_opt_override: "off",
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "tesstregellas.com",
          utm_medium: "website",
          utm_content: PLACEMENTS.has(placement) ? placement : undefined,
          referring_site: "https://tesstregellas.com",
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );
  } catch (error) {
    console.error("[subscribe] Beehiiv request failed", error);
    return GENERIC_ERROR;
  }

  if (response.status === 429) {
    return {
      status: "error",
      message: "Whoa, lots of love right now. Try again in a minute.",
    };
  }

  if (!response.ok) {
    console.error(
      "[subscribe] Beehiiv returned",
      response.status,
      await response.text().catch(() => ""),
    );
    return GENERIC_ERROR;
  }

  const { data } = (await response.json()) as { data?: { status?: string } };

  if (data?.status === "invalid") {
    return {
      status: "error",
      message: "That email bounced. Double-check it for me?",
    };
  }

  return { status: "success", message: "It's a match! You're on the list." };
}
