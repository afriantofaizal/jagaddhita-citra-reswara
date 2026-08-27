import type { ContactFormValues } from "@/src/lib/validations/contact"

const FORMSPREE_ENDPOINT =
  "https://formspree.io/f/xgaewlqw"

export async function submitContactForm(
  values: ContactFormValues
) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...values,
      _gotcha: "",
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to send message")
  }

  return response.json()
}