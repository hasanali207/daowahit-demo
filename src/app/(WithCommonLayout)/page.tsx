import Banner from "@/components/homePage/Banner";
import BenefitsSection from "@/components/homePage/BenefitsSection";
import FbPageSection from "@/components/homePage/FbPageSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "মা'হাদুদ দাওয়াহ আল ইসলামিয়া | ইসলামিয়া বাগানবাড়ী দাওয়াহ মাদ্রাসা",
  description:
    "মা'হাদুদ দাওয়াহ আল ইসলামিয়া (ইসলামিয়া বাগানবাড়ী দাওয়াহ মাদ্রাসা), বড়গাছা ঘোনপাড়া, সোনারায়, ডোমার, নীলফামারী। ২০১৮ ইংরেজিতে প্রতিষ্ঠিত একটি দ্বীনি শিক্ষা প্রতিষ্ঠান। যোগাযোগ: অফিস 01335-136999, জিম্মাদার 01321090043।",
};

export default function HomePage() {
  return (
    <div className="">
      <Banner />
      <BenefitsSection />
      <FbPageSection />
      {/* <FounderSection /> */}
      {/* <ActionBanner/>
      <Partnerships/> */}
    </div>
  );
}
