import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { markAttendanceSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormCalenderField from "@/components/form-fields/form-calender-field";
import FormSelectField from "@/components/form-fields/form-select-field";
import { attendanceStatus } from "@/constants/data";
import FormInputField from "@/components/form-fields/form-input-field";
import FormTextareaField from "@/components/form-fields/form-textarea-field";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { markAttendance } from "@/services/client-actions/attendanceActions";
import { toast } from "sonner";
import { reFetchLearners } from "@/services/server-actions/refetchActions";

export interface MarkAttendanceData {
  learnerId: number;
  classes: number;
}

function MarkAttendanceForm({
  attendanceData,
  setMarkAttendanceModal,
}: {
  attendanceData: MarkAttendanceData;
  setMarkAttendanceModal: (value: MarkAttendanceData | undefined) => void;
}) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof markAttendanceSchema>>({
    resolver: zodResolver(markAttendanceSchema),
    defaultValues: {
      date: new Date(),
      status: "present",
      class_number: String(attendanceData.classes + 1),
      notes: "",
    },
  });

  const submitHandler = async (data: z.infer<typeof markAttendanceSchema>) => {
    try {
      const result = await markAttendance(
        data,
        attendanceData.learnerId,
        setLoading,
      );
      if (!result.success) {
        toast.error(result.message);
        return;
      }
      await reFetchLearners();
      toast.success(result.message);
      form.reset();
      setMarkAttendanceModal(undefined);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <FormCalenderField
              control={form.control}
              name="date"
              label="Date"
            />
            <FormSelectField
              control={form.control}
              name="status"
              items={attendanceStatus}
              label="Status"
            />
          </div>
          <FormInputField
            control={form.control}
            name="class_number"
            label="Class number"
            placeholder="Enter class number"
            inputType="number"
          />
          <FormTextareaField
            control={form.control}
            name="notes"
            label="Notes"
            placeholder="Messages (optional)"
          />

          <div className="flex items-center gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => setMarkAttendanceModal(undefined)}
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

export default MarkAttendanceForm;
