import Reveal from './Reveal';

export default function Section({ id, title, className = '', children }) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`mx-auto w-full max-w-5xl px-5 py-8 md:px-12 md:py-14 ${className}`}
    >
      <Reveal className="mb-6 flex items-center gap-5 md:mb-10">
        <h2 id={titleId} className="whitespace-nowrap text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        <span aria-hidden="true" className="h-px w-full max-w-xs bg-line" />
      </Reveal>
      {children}
    </section>
  );
}
