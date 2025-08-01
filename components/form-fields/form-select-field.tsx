import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CustomSelectItemType = {
  label: string;
  value: string;
};

interface CustomSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  items: CustomSelectItemType[];
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
}

function FormSelectField<T extends FieldValues>({
  control,
  name,
  items,
  label,
  placeholder,
  labelClassName,
  inputClassName,
  disabled,
}: CustomSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          <Select
            defaultValue={field.value}
            value={field.value}
            onValueChange={field.onChange}
          >
            <FormControl>
              <SelectTrigger
                className={cn("w-full", inputClassName)}
                disabled={disabled}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormSelectField;
