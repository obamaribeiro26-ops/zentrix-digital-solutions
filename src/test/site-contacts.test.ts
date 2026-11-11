import { describe, expect, it } from "vitest";
import { team, telHref, waHref, mailtoHref } from "@/lib/site-config";

describe("authoritative team contacts", () => {
  const contacts = [
    ["Lulénio", "+244 933 745 645", "lulenioa@gmail.com", "244933745645"],
    ["Príncipe", "+244 935 496 242", "Principefrederico@hotmail.com", "244935496242"],
    ["Antonela", "+244 928 344 129", "antonellatucayana@gmail.com", "244928344129"],
    ["Obama", "+244 933 623 141", "obamaribeiro26@gmail.com", "244933623141"],
  ];
  for (const [name, phone, email, digits] of contacts) {
    it(`preserves ${name}'s supplied contact values and destinations`, () => {
      const member = team.find(m => m.name === name);
      expect(member).toEqual({ name, phone, email });
      if (!member) throw new Error("Missing team member");
      expect(telHref(member.phone)).toBe(`tel:+${digits}`);
      expect(waHref(member.phone)).toBe(`https://wa.me/${digits}`);
      expect(mailtoHref(member.email)).toBe(`mailto:${email}`);
    });
  }
});