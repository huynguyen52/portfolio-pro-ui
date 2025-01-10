import { Project } from '../components/project';

const projects = [
  {
    title: 'Amnia',
    description: 'Software Engineer',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    title: 'LMS',
    description: 'Software Engineer',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    title: 'ENGINE42',
    description: 'Software Engineer',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    title: 'T-DESIGN',
    description: 'Software Engineer',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    title: 'TRICOST EDUCATION',
    description: 'Software Engineer',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
  {
    title: 'VIBRENT HEALTH',
    description: 'Software Engineer',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
    ],
  },
];

export function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {projects.map((project, index) => (
          <li key={index} className="mb-10 ms-4">
            <Project {...project} />
          </li>
        ))}
      </ol>
    </section>
  );
}
