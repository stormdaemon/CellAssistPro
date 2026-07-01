"use client";

import { useState } from "react";
import { CheckCircle2, TriangleAlert } from "lucide-react";
import { SITE } from "@/lib/site-data";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const formData = new FormData(form);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error(`Envoi refusé (${response.status})`);
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="contact-form__status contact-form__status--success" role="status">
        <CheckCircle2 aria-hidden="true" />
        <p>
          <strong>Message bien reçu.</strong> Je vous réponds sous 24 h ouvrées — surveillez votre
          boîte mail (et vos indésirables, on ne sait jamais).
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" name="contact" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="sr-only" aria-hidden="true">
        <label>
          Ne pas remplir ce champ : <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="field-row">
        <label>
          Prénom et nom
          <input name="nom" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Téléphone
        <input
          name="telephone"
          type="tel"
          autoComplete="tel"
          placeholder="si vous préférez que je vous rappelle"
        />
      </label>
      <label>
        Votre métier / secteur
        <select name="secteur" defaultValue="">
          <option value="" disabled>
            Choisir
          </option>
          <option>Artisanat</option>
          <option>Tech & web</option>
          <option>Bien-être</option>
          <option>Services</option>
          <option>Autre</option>
        </select>
      </label>
      <label>
        Votre entreprise a…
        <select name="anciennete" defaultValue="">
          <option value="" disabled>
            Choisir
          </option>
          <option>moins de 2 ans — en création ou jeune</option>
          <option>plus de 2 ans</option>
        </select>
      </label>
      <label>
        Vous cherchez plutôt…
        <select name="besoin" defaultValue="">
          <option value="" disabled>
            Choisir
          </option>
          <option>une mission ponctuelle, même très courte</option>
          <option>un accompagnement régulier</option>
          <option>je ne sais pas encore — aidez-moi à y voir clair</option>
        </select>
      </label>
      <label>
        Qu'est-ce qui vous prend le plus de temps aujourd'hui ?
        <textarea name="message" rows={5} required />
      </label>
      <label>
        Comment m'avez-vous connue ?
        <select name="origine" defaultValue="">
          <option value="" disabled>
            Choisir
          </option>
          <option>LinkedIn</option>
          <option>CPME</option>
          <option>BNI</option>
          <option>Bouche-à-oreille</option>
          <option>Recherche Google</option>
          <option>Autre</option>
        </select>
      </label>
      <button className="button button--gold" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Envoi en cours…" : "Envoyer — réponse sous 24 h ouvrées"}
      </button>
      {status === "error" ? (
        <p className="contact-form__status contact-form__status--error" role="alert">
          <TriangleAlert aria-hidden="true" /> L'envoi a échoué. Réessayez, ou écrivez-moi
          directement à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      ) : null}
      <small>Vos informations servent uniquement à vous répondre. Jamais cédées, jamais de spam.</small>
    </form>
  );
}
