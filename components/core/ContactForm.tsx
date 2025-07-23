import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/constants/data";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function ContactForm() {
  return (
    <form className="space-y-6">
      <h2 className="text-xl font-bold text-white">Book your lesson</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="text-white">First Name</Label>
          <Input
            placeholder="Enter your first name"
            className="text-white bg-slate-700/50 border border-slate-600/50"
          ></Input>
        </div>
        <div className="space-y-3">
          <Label className="text-white">Last Name</Label>
          <Input
            placeholder="Enter your last name"
            className="text-white bg-slate-700/50 border border-slate-600/50"
          ></Input>
        </div>
      </div>
      <div className="space-y-3">
        <Label className="text-white">Email</Label>
        <Input
          placeholder="Enter your email"
          className="text-white bg-slate-700/50 border border-slate-600/50"
        ></Input>
      </div>
      <div className="space-y-3">
        <Label className="text-white">Phone</Label>
        <Input
          placeholder="Enter your phone number"
          className="text-white bg-slate-700/50 border border-slate-600/50"
        ></Input>
      </div>
      <div className="space-y-3">
        <Label className="text-white">Select course</Label>
        <Select>
          <SelectTrigger className="w-full bg-slate-700/50 border border-slate-600/50 text-white">
            <SelectValue placeholder="Select course"></SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-slate-700 border border-slate-600/50">
            {courses.map((course, index) => (
              <SelectItem
                key={index}
                value={course.title}
                className="text-white focus:bg-accent focus:text-accent-foreground"
              >
                {course.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-3">
        <Label className="text-white">Message</Label>
        <Textarea
          placeholder="Enter your Message (Optional)"
          className="bg-slate-700/50 border border-slate-600/50 field-sizing-content resize-none max-h-29.5 min-h-0 py-1.75 text-white"
        ></Textarea>
      </div>

      <Button className="w-full">Book your lesson</Button>
    </form>
  );
}

export default ContactForm;
