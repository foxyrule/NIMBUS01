type PageHeadingProps = {
  title: string;
};

export function PageHeading({ title }: PageHeadingProps) {
  return (
    <div className="border-b border-emerald-950/10 pb-6">
      <h1 className="text-3xl font-semibold tracking-normal text-emerald-950 sm:text-4xl">
        {title}
      </h1>
    </div>
  );
}