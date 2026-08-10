
import Index from "../app/components/index";
import { homePageSchema } from "@/lib/schemas/homeSchema";

export default function Home() {
  return (
    <>
      <script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <Index />
    </>
  );
}
