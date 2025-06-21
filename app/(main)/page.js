import { fetchBanner, fetchData } from "@/appwrite/data";
import CalltoAction from "@/modules/components/CalltoAction";
import FaqAccordians from "@/modules/components/FaqAccordians";
import HeroSection from "@/modules/components/HeroSection";
import Introdcution from "@/modules/components/Introdcution"; 
import VideoSection from "@/modules/components/IntroVideo";
import KeyFeatures from "@/modules/components/KeyFeatures";
import LatestBlogs from "@/modules/components/LatestBlogs";
import StickyElements from "@/modules/components/layout/StickyElements";
import LetsGo from "@/modules/components/LetsGo";
import Loader from "@/modules/components/Loader";
import StackingCards from "@/modules/components/StackingCards";
import WaitList from "@/modules/components/WaitList";
import WhyChooseHead from "@/modules/components/WhyChooseHead";
import WhyChooseus from "@/modules/components/WhyChooseus";
import { cookies } from "next/headers";
import BuySubscription from "@/modules/components/BuySubscription";
import PricingPlans from "@/modules/components/PricingPlans";

export default async function Home({ searchParams }) {
  cookies(); // Required for Next.js server functions

  let data = null;
  let banner = null;

  try {
    data = await fetchData();
    // banner = await fetchBanner(); // Uncomment if using banner
  } catch (error) {
    console.error("Server is down or unresponsive:", error);
  }

  // Show Loader or fallback UI if data is unavailable
  if (!data) {
    return <Loader />;
  }

  const referCode = searchParams?.referCode ?? null;

  return (
    <>
      <HeroSection heroData={data.HeroContent} />
      
      <Introdcution introData={data.IntroductionData} />
     
      <PricingPlans pricingCards={data.PricingCards} />
      <WhyChooseHead WhyHead={data.WhyHead} />
     
      <StackingCards WhyHead={data.WhyHead} whyCards={data.whyCards} />
      <KeyFeatures
        headData={data.keyfeaturesHeadData}
        cardData={data.keyfeaturesCardsData}
      />
      <LatestBlogs BlogCards={data.RecentBlogs} />
      <FaqAccordians faqData={data.faqData} />
      
      {/* <StickyElements linksUrl={data.stickyLinksUrl} /> */}
      
    </>
  );
}

