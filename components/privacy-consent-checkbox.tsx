"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface PrivacyConsentCheckboxProps {
  id?: string
  required?: boolean
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function PrivacyConsentCheckbox({
  id = "privacy-consent",
  required = true,
  checked,
  onCheckedChange,
  className,
}: PrivacyConsentCheckboxProps) {
  return (
    <div className={`flex items-start space-x-2 ${className}`}>
      <Checkbox
        id={id}
        required={required}
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange?.(checked as boolean)}
      />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          He leído y acepto la{" "}
          <Link href="/privacidad" className="text-primary hover:underline" target="_blank">
            Política de Privacidad
          </Link>{" "}
          y autorizo el uso de mis datos conforme a la Ley 19.628.
        </Label>
      </div>
    </div>
  )
}
