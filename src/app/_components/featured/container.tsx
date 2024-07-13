import FeaturedItem from "./item";

function FeaturedContainer() {
  return (
    <div className="flex flex-col gap-3">
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
    </div>
  );
}

export default FeaturedContainer;
