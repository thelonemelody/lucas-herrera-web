import { SectionTitle } from '../components/common/SectionTitle';
import { Timeline } from '../components/work-history/Timeline';
import { workHistory } from '../data/workHistory';

export function WorkHistory() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="My professional journey and experience">
          Work History
        </SectionTitle>
        <Timeline jobs={workHistory} />
      </div>
    </div>
  );
}
