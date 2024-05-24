
import Development from "@/components/ui/development/Development";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development",
  description: "In this page we tell you how to develop and integrate",
};

const DevelopmentPage = () => {
  return (
    <>
      <Development />
    </>
  );
};

export default DevelopmentPage;
