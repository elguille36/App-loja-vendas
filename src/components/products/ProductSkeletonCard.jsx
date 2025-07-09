
const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div>
          <div className="skeleton-title"></div>
          <div className="skeleton-price"></div>
        </div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;