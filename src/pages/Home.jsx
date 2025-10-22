import { GroupCompaniesSection } from "../components/Section/GroupCompanies";
import { SupportDepartments } from "../components/Section/CustomerSupport";
import { BranchManagersSection } from "../components/Section/BranchManager";
import { HeroSection } from "../components/Section/HeroSection";

export function Home() {
  return (
    <>
      <HeroSection/>
      <SupportDepartments />
      <BranchManagersSection />
      <GroupCompaniesSection />
    </>
  );
}
