import React, { HTMLInputTypeAttribute, useState } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  labelClassName?: string;
  inputClassName?: string;
}

function FormInputField<T extends FieldValues>({
  control,
  name,
  label,
  inputType,
  placeholder,
  labelClassName,
  inputClassName,
}: CustomInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const handleDigitsOnlyInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onChange(value);
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="grid gap-3">
          <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          <div className="flex w-full flex-col relative">
            <FormControl>
              <Input
                className={cn(inputClassName)}
                placeholder={placeholder}
                type={
                  inputType === "password"
                    ? showPassword
                      ? "text"
                      : "password"
                    : inputType || "text"
                }
                {...field}
                onChange={(e) => {
                  if (inputType === "number") {
                    handleDigitsOnlyInput(e, field.onChange);
                  } else {
                    field.onChange(e);
                  }
                }}
              />
            </FormControl>
            <FormMessage />
            {inputType === "password" && (
              <Button
                type="button"
                variant="ghost"
                className="absolute top-0.5 right-0.5 size-8"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </Button>
            )}
          </div>
        </FormItem>
      )}
    />
  );
}

export default FormInputField;
