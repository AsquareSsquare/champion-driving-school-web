import { useEffect, useState } from "react";
import { Learner } from "@/types/server-types";
import { getLearnerDetails } from "@/services/client-actions/learnerActions";

function useLearner(learnerId: number) {
  const [loading, setLoading] = useState(true);
  const [learner, setLearner] = useState<Learner | null>(null);

  const handleFetchLearner = async () => {
    try {
      const result = await getLearnerDetails(learnerId, setLoading);
      setLearner(result.learner);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchLearner();
  }, [learnerId]);

  return { loading, learner };
}

export default useLearner;
