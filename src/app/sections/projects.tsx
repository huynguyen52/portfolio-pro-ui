import { Project } from '../components/project';

const projects = [
  {
    title: 'Banking management system',
    description: 'Software Engineer',
    responsibilities: [
      'Migrated existing Angular application to micro frontend architecture and implemented responsive designs.',
      'Developed and documented features using Storybook, and conducted code reviews.',
      'Published Docker images to Gitlab for deployment.',
    ],
    latest: true,
  },
  {
    title: 'Trainer and course management system',
    description: 'Software Engineer',
    responsibilities: [
      'Migrated existing React application to micro frontend architecture and developed reusable components with Storybook.',
      'Developed and maintained Angular components, ensuring responsive design and API integration.',
      'Handled form management and wrote unit tests to ensure code quality.',
      'Conducted code reviews',
    ],
  },
  {
    title: 'ENGINE system',
    description: 'Software Engineer',
    responsibilities: [
      'Developed and maintained React components, integrating and transforming API data into Plotly charts and tables',
      'Developed GraphQL endpoints with NestJS and implemented data migrations using TypeORM and d',
      'Created reusable utility functions for data conversion across various chart and table types.',
      'Customized PlotlyJs charts for specific requirements.',
      'Conducted code reviews',
    ],
  },
  {
    title: 'T-DESIGN',
    description: 'Software Engineer',
    responsibilities: [
      'Created static components in Vanilla JS strictly following design specifications.',
      "Updated the project's Node.js version and migrated Firebase to the newest version.",
      'Implemented a blog management system using ExpressJS.',
    ],
  },
  {
    title: 'EDUCATION MANAGEMENT SYSTEM',
    description: 'Software Engineer',
    responsibilities: [
      'Set up and maintained the front-end repository in ReactJS, implementing components, functions, and form handling.',
      'Wrote and maintained unit tests, and implemented internationalization with i18next.',
      'Developed a voice recording function and conducted code reviews.',
    ],
  },
  {
    title: 'HEALTHCARE MANAGEMENT SYSTEM',
    description: 'Software Engineer',
    responsibilities: [
      'Created and maintained components and features.',
      'Integrated APIs and ensured seamless data flow.',
      'Wrote unit tests using Jest and Enzyme.',
    ],
  },
];

export function Projects() {
  return (
    <section className="container">
      <h3 className="text-center text-5xl mt-[10%] mb-[4%] text-white select-none">
        Projects
      </h3>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {projects.map((project, index) => (
          <li key={index} className="mb-10 ms-4">
            <div className="ml-[20%]">
              <Project {...project} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
