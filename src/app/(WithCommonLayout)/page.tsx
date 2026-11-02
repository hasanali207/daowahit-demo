import Banner from "@/components/homePage/Banner";
import BenefitsSection from "@/components/homePage/BenefitsSection";
import FbPageSection from "@/components/homePage/FbPageSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "দাওয়াহ আইটি | Dawah IT",
  description:
    "দাওয়াহ আইটি একটি আধুনিক প্রযুক্তি ও সফটওয়্যার সেবা প্রতিষ্ঠান। ওয়েবসাইট ডেভেলপমেন্ট, সফটওয়্যার সলিউশন, ডিজিটাল প্রযুক্তি এবং আইটি সেবা নিয়ে আমরা কাজ করি।",
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
