export type BlogViewMode = 'list' | 'calendar';

interface BlogViewToggleProps {
  view: BlogViewMode;
  onChange: (view: BlogViewMode) => void;
}

export function BlogViewToggle({ view, onChange }: BlogViewToggleProps) {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onChange('calendar')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          view === 'calendar'
            ? 'bg-amber-glow text-space-black glow-amber'
            : 'bg-space-dark border border-space-blue text-text-secondary hover:border-amber-glow hover:text-amber-glow'
        }`}
      >
        Calendar
      </button>
      <button
        onClick={() => onChange('list')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          view === 'list'
            ? 'bg-amber-glow text-space-black glow-amber'
            : 'bg-space-dark border border-space-blue text-text-secondary hover:border-amber-glow hover:text-amber-glow'
        }`}
      >
        List
      </button>
    </div>
  );
}
