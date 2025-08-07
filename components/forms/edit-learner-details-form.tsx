import React, { useState } from "react";
import { Branch, Learner } from "@/types/server-types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { editLearnerSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import { Button } from "@/components/ui/button";
import { CheckIcon, Loader } from "lucide-react";
import { updateLearnerDetails } from "@/services/client-actions/learnerActions";
import { toast } from "sonner";
import { reFetchLearners } from "@/services/server-actions/refetchActions";
import { getBranchSelectItems } from "@/lib/utils";
import FormSelectField from "@/components/form-fields/form-select-field";
import { courseSelectItems, genders } from "@/constants/data";
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

function EditLearnerDetailsForm({
  learner,
  branches,
  setEditLearner,
}: {
  learner: Learner;
  branches: Branch[];
  setEditLearner: (value: number | undefined) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState<string[]>(learner.license_types);
  const form = useForm<z.infer<typeof editLearnerSchema>>({
    resolver: zodResolver(editLearnerSchema),
    defaultValues: {
      branchId: String(learner.branch_id),
      name: learner.name,
      email: learner.email,
      address: learner.address,
      blood_group: learner.blood_group,
      dateOfBirth: new Date(learner.date_of_birth),
      phone: learner.phone,
      id_card: learner.id_card,
      gender: learner.gender,
      total_fees: String(learner.total_fees),
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

  const submitHandler = async (data: z.infer<typeof editLearnerSchema>) => {
    try {
      const result = await updateLearnerDetails(
        learner.id,
        data,
        courses,
        setLoading,
      );
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      await reFetchLearners();
      toast.success(result.message);
      setEditLearner(undefined);
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
          <FormInputField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter learner email"
            inputType="email"
          />
          <FormInputField
            control={form.control}
            name="phone"
            label="Phone"
            placeholder="Enter your phone number"
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
          <div className="flex items-center gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => setEditLearner(undefined)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader className="animate-spin" /> Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default EditLearnerDetailsForm;
