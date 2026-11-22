export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 21s-7.5-4.6-10-9.3C.3 8.4 2.1 4 6.2 4c2.4 0 4 1.4 5.8 3.6C13.8 5.4 15.4 4 17.8 4 21.9 4 23.7 8.4 22 11.7 19.5 16.4 12 21 12 21z" />
    </svg>
  );
}
