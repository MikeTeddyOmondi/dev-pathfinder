import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle='DevPathFinder' title='Learn visually'>
        DevPathFinder is a site for finding learning resources in one place and
        also get motivations from other peers through help in debugging and also
        get mentorship through incubation of ideas and projects.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos='right' data={benefitTwo} />

      <SectionTitle
        preTitle='Watch a video'
        title='Learn how to fullfil your needs'
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId='fZ0D0cnR88E' />

      <SectionTitle
        preTitle='Testimonials'
        title="Here's what our beneficiaries said"
      >
        These are some of the testimonials from our esteemed beneficiaries of our platform.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle='FAQ' title='Frequently Asked Questions'>
        Let's answer your doubts here...
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
