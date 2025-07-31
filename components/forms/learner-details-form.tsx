"use client";
import { useState } from "react";
import { courseSelectItems, genders } from "@/constants/data";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { learnerDetailsSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import { Button } from "@/components/ui/button";
import { Branch } from "@/types/server-types";
import FormSelectField from "@/components/form-fields/form-select-field";
import { getBranchSelectItems } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "@/components/ui/kibo-ui/tags";
import { CheckIcon, Loader } from "lucide-react";
import { submitLearnerDetails } from "@/services/client-actions/learnerActions";
import { toast } from "sonner";

function LearnerDetailsForm({
  branches,
  setStep,
  setLearnerId,
}: {
  branches: Branch[];
  setStep: (step: number) => void;
  setLearnerId: (learnerId: number) => void;
}) {
  const [courses, setCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof learnerDetailsSchema>>({
    resolver: zodResolver(learnerDetailsSchema),
    defaultValues: {
      branchId: "",
      name: "",
      address: "",
      dateOfBirth: undefined,
      blood_group: "",
      gender: "male",
      phone: "",
      id_card: "",
      total_fees: "",
    },
  });

  const handleRemove = (value: string) => {
    if (!courses.includes(value)) {
      return;
    }
    setCourses((prev) => prev.filter((v) => v !== value));
  };

  const handleSelect = (value: string) => {
    if (courses.includes(value)) {
      handleRemove(value);
      return;
    }
    setCourses((prev) => [...prev, value]);
  };

  const submitHandler = async (data: z.infer<typeof learnerDetailsSchema>) => {
    try {
      const result = await submitLearnerDetails(data, courses, setLoading);
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      toast.success(result.message);
      setLearnerId(result.learnerId);
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-6">
          <FormSelectField
            control={form.control}
            name="branchId"
            items={getBranchSelectItems(branches)}
            placeholder="Select a branch"
            label="Select branch"
          />
          <FormInputField
            control={form.control}
            name="name"
            label="Full name"
            placeholder="Enter your full name"
            inputType="text"
          />
          <FormSelectField
            control={form.control}
            name="gender"
            items={genders}
            placeholder="Select learner gender"
            label="Select gender"
          />
          <FormTextareaField
            control={form.control}
            name="address"
            label="Permanent address"
            placeholder="Enter your address"
            inputClassName="field-sizing-content resize-none max-h-29.5 min-h-0 py-1.75"
          />
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 xs:gap-8">
            <FormCalenderField
              control={form.control}
              name="dateOfBirth"
              label="Date of Birth"
            />
            <FormInputField
              control={form.control}
              name="blood_group"
              label="Blood group"
              placeholder="Enter your Blood group"
            />
          </div>
          <FormInputField
            control={form.control}
            name="phone"
            label="Phone"
            placeholder="Enter your phone number"
          />
          <FormInputField
            control={form.control}
            name="id_card"
            label="Learner aadhar card number"
            placeholder="Enter learner aadhar number"
          />

          <div className="space-y-3">
            <Label>Select courses</Label>
            <Tags className="">
              <TagsTrigger>
                {courses.map((tag) => (
                  <TagsValue key={tag} onRemove={() => handleRemove(tag)}>
                    {courseSelectItems.find((t) => t.id === tag)?.label}
                  </TagsValue>
                ))}
              </TagsTrigger>
              <TagsContent>
                <TagsInput placeholder="Search tag..." />
                <TagsList>
                  <TagsEmpty />
                  <TagsGroup>
                    {courseSelectItems.map((tag) => (
                      <TagsItem
                        key={tag.id}
                        onSelect={handleSelect}
                        value={tag.id}
                      >
                        {tag.label}
                        {courses.includes(tag.id) && (
                          <CheckIcon
                            className="text-muted-foreground"
                            size={14}
                          />
                        )}
                      </TagsItem>
                    ))}
                  </TagsGroup>
                </TagsList>
              </TagsContent>
            </Tags>
          </div>
          <FormInputField
            control={form.control}
            name="total_fees"
            label="Total fees"
            placeholder="Enter total fees"
            inputType="number"
          />

          <Button type="submit" disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default LearnerDetailsForm;
