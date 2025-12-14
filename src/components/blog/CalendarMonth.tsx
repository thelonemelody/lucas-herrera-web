import type { BlogPostMeta } from '../../types';
import { getDateFromSlug } from '../../utils/blogPosts';
import { CalendarDay } from './CalendarDay';

interface CalendarMonthProps {
  monthKey: string; // Format: "YYYY-MM"
  posts: BlogPostMeta[];
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export function CalendarMonth({ monthKey, posts }: CalendarMonthProps) {
  const [yearStr, monthStr] = monthKey.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10);

  // Create a map of day -> post for quick lookup
  const postsByDay = new Map<number, BlogPostMeta>();
  for (const post of posts) {
    const dateInfo = getDateFromSlug(post.slug);
    if (dateInfo) {
      postsByDay.set(dateInfo.day, post);
    }
  }

  // Calculate calendar grid
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday

  // Calculate days from previous month to show
  const daysFromPrevMonth = startingDayOfWeek;
  const prevMonthLastDay = new Date(year, month - 1, 0).getDate();

  // Calculate days from next month to show (fill to complete 6 rows max, or at least complete the last row)
  const totalCells = Math.ceil((daysInMonth + startingDayOfWeek) / 7) * 7;
  const daysFromNextMonth = totalCells - daysInMonth - daysFromPrevMonth;

  // Build calendar grid
  const calendarDays: Array<{ day: number; isCurrentMonth: boolean; post?: BlogPostMeta }> = [];

  // Previous month days
  for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
    calendarDays.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      post: postsByDay.get(day),
    });
  }

  // Next month days
  for (let day = 1; day <= daysFromNextMonth; day++) {
    calendarDays.push({ day, isCurrentMonth: false });
  }

  return (
    <div className="mb-8">
      {/* Month header */}
      <h3 className="text-2xl font-bold text-text-primary mb-4 text-glow">
        {MONTH_NAMES[month - 1]} {year}
      </h3>

      {/* Day of week headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day}
            className="text-center text-text-secondary text-xs md:text-sm font-medium py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((dayInfo, index) => (
          <CalendarDay
            key={index}
            day={dayInfo.day}
            post={dayInfo.post}
            isCurrentMonth={dayInfo.isCurrentMonth}
          />
        ))}
      </div>
    </div>
  );
}
