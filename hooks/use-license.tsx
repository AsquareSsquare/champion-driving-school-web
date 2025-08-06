import React, { useEffect } from "react";
import { License } from "@/types/root-types";
import { getLicenseDetails } from "@/services/client-actions/licenseActions";

function useLicense(learnerId: number) {
  const [loading, setLoading] = React.useState(false);
  const [license, setLicense] = React.useState<License | null>(null);

  const fetchLicense = async () => {
    try {
      const result = await getLicenseDetails(learnerId, setLoading);
      setLicense(result.license);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLicense();
  }, [learnerId]);

  return { loading, license };
}

export default useLicense;
