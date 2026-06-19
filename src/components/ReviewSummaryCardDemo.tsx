import { ReviewSummaryCard } from '@/components/ui/card-2';

/**
 * A demo component to showcase the ReviewSummaryCard.
 */
const ReviewSummaryCardDemo = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-background p-4">
      <ReviewSummaryCard
        rating={4.9}
        reviewCount={1092}
        summaryText="Outstanding: Rated 4.9 across verified client reviews."
      />
    </div>
  );
};

export default ReviewSummaryCardDemo;