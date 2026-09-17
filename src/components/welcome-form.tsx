"use client";

import React, { useState } from "react";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default function WelcomeForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = name.trim();
    setSubmittedName(trimmed ? trimmed : null);
  };

  return (
    <div dir="rtl" className="max-w-md mx-auto p-6">
      <TypographyH1 className="mb-4 text-right">خوش آمدید</TypographyH1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="نام"
          placeholder="اسم خود را وارد کنید"
          value={name}
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
        />

        <Button type="submit" fullWidth>
          ارسال
        </Button>
      </form>

      {submittedName !== null && (
        <TypographyP className="mt-4 text-right">{`سلام، ${submittedName}!`}</TypographyP>
      )}
    </div>
  );
}
