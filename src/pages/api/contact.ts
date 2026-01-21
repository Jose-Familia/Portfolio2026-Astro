/**
 * API Endpoint para el formulario de contacto
 * Utiliza Resend para enviar emails
 */

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Email de destino
const TO_EMAIL = "familiajoserene@gmail.com";

// Mapeo de asuntos
const subjectMap: Record<string, Record<string, string>> = {
  es: {
    proyecto: "Tengo un proyecto",
    colaboracion: "Propuesta de colaboración",
    consulta: "Consulta técnica",
    otro: "Otro",
    default: "Nuevo mensaje de contacto",
  },
  en: {
    project: "I have a project",
    collaboration: "Collaboration proposal",
    consulting: "Technical consulting",
    other: "Other",
    default: "New contact message",
  },
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const lang = formData.get("lang")?.toString() || "es";

    // Validación básica
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            lang === "es"
              ? "Por favor completa todos los campos requeridos"
              : "Please fill in all required fields",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            lang === "es"
              ? "Por favor ingresa un email válido"
              : "Please enter a valid email",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Construir asunto
    const subjectText =
      subjectMap[lang]?.[subject] ||
      subjectMap[lang]?.default ||
      "Contact Form";
    const emailSubject = `[Portfolio] ${subjectText} - ${name}`;

    // Enviar email con Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: emailSubject,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            ${lang === "es" ? "Nuevo mensaje de contacto" : "New Contact Message"}
          </h2>
          
          <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>${lang === "es" ? "Nombre" : "Name"}:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0;"><strong>${lang === "es" ? "Asunto" : "Subject"}:</strong> ${subjectText}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">${lang === "es" ? "Mensaje" : "Message"}:</h3>
            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; white-space: pre-wrap;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>${
              lang === "es"
                ? "Este mensaje fue enviado desde el formulario de contacto de tu portfolio."
                : "This message was sent from your portfolio contact form."
            }</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          error:
            lang === "es"
              ? "Error al enviar el mensaje. Por favor intenta de nuevo."
              : "Error sending message. Please try again.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message:
          lang === "es"
            ? "¡Mensaje enviado correctamente!"
            : "Message sent successfully!",
        id: data?.id,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
