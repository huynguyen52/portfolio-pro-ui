import { SkillsGroup } from '../components/skill-groups';

const skills = {
  programingLanguages: {
    title: 'Programming Languages',
    skills: [
      {
        name: 'HTML',
        src: '/logos/html.svg',
      },
      {
        name: 'CSS',
        src: '/logos/css.svg',
      },
      {
        name: 'JavaScript',
        src: '/logos/javascript.svg',
      },
      {
        name: 'TypeScript',
        src: '/logos/typescript.svg',
      },
      {
        name: 'Java',
        src: '/logos/java.svg',
      },
    ],
  },
  frameworksLibraries: {
    title: 'Frameworks/Libraries',
    skills: [
      {
        name: 'Angular',
        src: '/logos/angular.svg',
      },
      {
        name: 'React',
        src: '/logos/react.svg',
      },
      {
        name: 'Next.js',
        src: '/logos/nextjs.svg',
      },
      {
        name: 'NestJS',
        src: '/logos/nestjs.svg',
      },
      {
        name: 'Spring',
        src: '/logos/spring.svg',
      },
      {
        name: 'Redux',
        src: '/logos/redux.svg',
      },
      {
        name: 'Tailwind CSS',
        src: '/logos/tailwindcss.svg',
      },
      {
        name: 'Material UI',
        src: '/logos/material-ui.svg',
      },
      {
        name: 'GraphQL',
        src: '/logos/graphql.svg',
      },
    ],
  },
  databases: {
    title: 'Databases',
    skills: [
      {
        name: 'MySQL',
        src: '/logos/mysql.svg',
      },
      {
        name: 'PostgreSQL',
        src: '/logos/postgresql.svg',
      },
    ],
  },
  cloud: {
    title: 'Cloud',
    skills: [
      {
        name: 'AWS',
        src: '/logos/aws.svg',
      },
    ],
  },
  tools: {
    title: 'Tools',
    skills: [
      {
        name: 'Docker',
        src: '/logos/docker.svg',
      },
      {
        name: 'Git',
        src: '/logos/git.svg',
      },
      {
        name: 'GitHub',
        src: '/logos/github.svg',
      },
      {
        name: 'GitLab',
        src: '/logos/gitlab.svg',
      },
      {
        name: 'NPM',
        src: '/logos/npm.svg',
      },
      {
        name: 'Jira',
        src: '/logos/jira.svg',
      },
      {
        name: 'Trello',
        src: '/logos/slack.svg',
      },
      {
        name: 'Postman',
        src: '/logos/postman.svg',
      },
      {
        name: 'Ubuntu',
        src: '/logos/ubuntu.svg',
      },
    ],
  },
};

export default function Skills() {
  return (
    <section className="h-screen">
      <div className="container">
        <h2 className="text-center font-bold text-5xl">Skillset</h2>
        <div>
          {Object.entries(skills).map(([key, value]) => (
            <SkillsGroup key={key} title={value.title} skills={value.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
