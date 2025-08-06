import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditLearner from "@/components/learners/edit-learner";
import EditLicense from "@/components/learners/edit-license";

function UpdateLearnerDetails({
  learnerId,
  setEditLearner,
}: {
  learnerId: number;
  setEditLearner: (value: number | undefined) => void;
}) {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="edit-learner">Edit learner</TabsTrigger>
        <TabsTrigger value="edit-license">Edit license</TabsTrigger>
      </TabsList>
      <TabsContent value="edit-learner" className="py-4">
        <EditLearner learnerId={learnerId} setEditLearner={setEditLearner} />
      </TabsContent>
      <TabsContent value="edit-license" className="py-4">
        <EditLicense learnerId={learnerId} setEditLearner={setEditLearner} />
      </TabsContent>
    </Tabs>
  );
}

export default UpdateLearnerDetails;
