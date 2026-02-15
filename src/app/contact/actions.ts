"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  phone: z.string().optional(),
  serviceType: z.enum(
    ["couverture-neuve", "renovation", "demoussage", "zinguerie", "isolation", "depannage", "autre"],
    { error: "Veuillez sélectionner un type de prestation." }
  ),
  surface: z.string().optional(),
  message: z.string().min(20, { message: "Le message doit contenir au moins 20 caractères." }),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceType: formData.get("serviceType"),
    surface: formData.get("surface"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [key, errors] of Object.entries(result.error.flatten().fieldErrors)) {
      if (errors) fieldErrors[key] = errors;
    }
    return { success: false, error: "Veuillez corriger les erreurs ci-dessous.", fieldErrors };
  }

  // Simulate sending email (replace with Resend/Nodemailer in production)
  await new Promise((resolve) => setTimeout(resolve, 800));

  console.log("[Contact Form] New submission:", result.data);

  return { success: true };
}
