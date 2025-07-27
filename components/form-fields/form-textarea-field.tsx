import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface CustomTextareaProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
}

function FormTextareaField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  labelClassName,
  inputClassName,
}: CustomTextareaProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          <FormLabel className={cn(labelClassName)}>{label}</FormLabel>

          <FormControl>
            <Textarea
              className={cn(inputClassName)}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormTextareaField;
