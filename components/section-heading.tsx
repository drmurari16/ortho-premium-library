type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="tag">{eyebrow}</span>
      <h2 className="mt-4 title">{title}</h2>
      {description && <p className="mt-4 subtitle">{description}</p>}
    </div>
  );
}
