import type { LearningItem } from '../../types';

interface CurrentlyLearningProps {
  items: LearningItem[];
}

export function CurrentlyLearning({ items }: CurrentlyLearningProps) {
  return (
    <div className="bg-space-dark border border-amber-glow/30 rounded-xl p-6 pulse-glow">
      <h3 className="text-xl font-bold text-amber-glow mb-4 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-amber-glow rounded-full animate-pulse" />
        Currently Learning
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="flex flex-col">
            <span className="text-text-primary font-medium">{item.name}</span>
            {item.description && (
              <span className="text-text-secondary text-sm">
                {item.description}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
