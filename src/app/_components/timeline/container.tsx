import TimelineItem from "./item";

function TimelineContainer() {
  return (
    <div
      id="timeline-container"
      className="grid grid-cols-2 auto-rows-[25vh] gap-5 min-h-3/4 mt-10 pr-1"
    >
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </div>
  );
}

export default TimelineContainer;
