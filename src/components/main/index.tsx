import { Box } from "@chakra-ui/react";
import { ContactForm } from "./sections/contactForm";
import { Industrie40 } from "./sections/industrie40";
import { SmartIndustries } from "./sections/smartIndustries";
import { SoftwareHardwareUnion } from "./sections/softwareHardwareUnion";
import { SuccessCase } from "./sections/successCase";

export const Main = () => {
  return (
    <Box as="main" fontWeight={400} fontSize="xl">
      <SmartIndustries />
      <SuccessCase />
      <SoftwareHardwareUnion />
      <Industrie40 />
      <ContactForm />
    </Box>
  );
};
