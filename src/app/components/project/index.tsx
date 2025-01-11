type ProjectProps = {
  title: string;
  description: string;
  responsibilities: string[];
  latest?: boolean;
};

export function Project({
  title,
  description,
  responsibilities,
  latest,
}: ProjectProps) {
  return (
    <article>
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full -start-3 ring-8 ring-gray-900">
        <svg
          className="w-2.5 h-2.5 text-primary-100"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
        {latest && (
          <span className="bg-primary-600 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 select-none">
            Latest
          </span>
        )}
      </h3>
      <span className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {description}
      </span>
      <ul className="max-w-md space-y-1 text-gray-400 list-disc list-inside">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
}
