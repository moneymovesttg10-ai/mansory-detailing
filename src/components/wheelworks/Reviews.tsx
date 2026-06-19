import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";
import reviewMasrurjon from "@/assets/review-masrurjon.png";
import reviewTimur from "@/assets/review-timur.png";
import reviewSveta from "@/assets/review-sveta.png";
import reviewBaimyrza from "@/assets/review-baimyrza.png";
import reviewAndriy from "@/assets/review-andriy.png";

const reviewItems: Gallery4Item[] = [
  {
    id: "masrurjon-makhmudov",
    title: "Masrurjon Makhmudov",
    subtitle: "Google Review · Local Guide",
    description:
      "I had an amazing experience here! The staff was incredibly friendly and professional from the moment I called for a quote until the job was done. The installation is flawless — no bubbles or peeling edges — and the car looks incredibly sleek now. Highly recommend this shop if you want quality work at a fair price!",
    image: reviewMasrurjon,
  },
  {
    id: "timur-ramizov",
    title: "Timur Ramizov",
    subtitle: "Google Review · Local Guide",
    description:
      "Very professional and extremely clean work. My Lexus looks absolutely brand new — inside and out.",
    image: reviewTimur,
  },
  {
    id: "sveta-basinskaya",
    title: "Sveta Basinskaya",
    subtitle: "Google Review",
    description:
      "Wow! We are beyond impressed! The leather in our car looks stunning — like it just came out of the showroom. The color is rich and flawless, so natural, and the whole interior feels completely refreshed.",
    image: reviewSveta,
  },
  {
    id: "baimyrza-azhimatov",
    title: "Baimyrza Azhimatov",
    subtitle: "Google Review",
    description:
      "I recently got my car windows tinted at this detailing center, and I'm really impressed with the results. The team was professional, friendly, and paid great attention to detail. The tint looks perfect — clean installation with no bubbles or imperfections.",
    image: reviewBaimyrza,
  },
  {
    id: "andriy-uniyat",
    title: "Andriy Uniyat",
    subtitle: "Google Review · Local Guide",
    description:
      "The shop took care of my last minute request, answered all my questions, and delivered perfect results. Full ceramic tint all around looks perfect. Great customer service, fair pricing, and a very professional team. Highly recommend it!",
    image: reviewAndriy,
  },
];

export function Reviews() {
  return (
    <Gallery4
      eyebrow="5.0 stars · 93 reviews"
      title="A reputation built one car at a time."
      description="Real reviews from customers who trust Mansory Detailing for premium car care in Huntingdon Valley."
      items={reviewItems}
    />
  );
}
