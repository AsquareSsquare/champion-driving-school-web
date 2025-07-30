import { cn } from "@/lib/utils";

export const InfoItem = ({
  label,
  info,
  className,
}: {
  label: string;
  info: string | number;
  className?: string;
}) => {
  return (
    <div
      className={cn("text-sm text-gray-500 flex items-start gap-2", className)}
    >
      <span className="shrink-0">{label}:</span>
      <p className="text-foreground text-[15px]">{info}</p>
    </div>
  );
};
