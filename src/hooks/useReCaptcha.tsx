import { useState } from "react";

export function useReCaptcha() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const [requiredCaptcha, setRequiredCaptcha] = useState<string>("");
  const verifyCaptcha = (value: string | null) => {
    if (value) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };
  const resetReCaptcha = () => {
    setIsCaptchaVerified(false);
  };

  return { isCaptchaVerified, setIsCaptchaVerified, verifyCaptcha, resetReCaptcha, requiredCaptcha, setRequiredCaptcha };
}
