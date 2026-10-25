export function TitleReveal({
  text,
  accent,
  leadAccent,
  level = 2,
  id,
  className,
}: {
  text: string;
  accent?: string;
  leadAccent?: string;
  level?: 1 | 2 | 3;
  id?: string;
  className?: string;
}) {
  const accentIndex = accent ? text.lastIndexOf(accent) : -1;
  const prefix = accentIndex >= 0 ? text.slice(0, accentIndex) : text;
  const leadIndex = leadAccent ? prefix.indexOf(leadAccent) : -1;
  const introduction =
    leadAccent && leadIndex >= 0 ? (
      <>
        {prefix.slice(0, leadIndex)}
        <span className="section-title-lead-accent">{leadAccent}</span>
        {prefix.slice(leadIndex + leadAccent.length)}
      </>
    ) : (
      prefix
    );
  const Heading = level === 1 ? 'h1' : level === 3 ? 'h3' : 'h2';
  return (
    <Heading id={id} className={className} data-title-anim="">
      {accent && accentIndex >= 0 ? (
        <>
          {introduction}
          <span className="section-title-accent">{accent}</span>
          {text.slice(accentIndex + accent.length)}
        </>
      ) : (
        introduction
      )}
    </Heading>
  );
}
