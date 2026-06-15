import { useState, useCallback } from "react";
import { site } from "@/config/data";

interface CopyEmailProps {
  label?: string;
  className?: string;
}

export function CopyEmail({ label = site.email, className = "" }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, []);

  return (
    <button onClick={handleCopy} className={`a-dotted cursor-pointer ${className}`}>
      {copied ? "已复制 ✓" : label}
    </button>
  );
}
