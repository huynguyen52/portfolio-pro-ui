'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const enum SkillType {
  Programming = 'programming',
  Framework = 'framework',
  Database = 'database',
  Cloud = 'cloud',
  Tools = 'tools',
}

const skills = [
  {
    name: 'HTML',
    src: '/logos/html.svg',
    type: SkillType.Programming,
  },
  {
    name: 'CSS',
    src: '/logos/css.svg',
    type: SkillType.Programming,
  },
  {
    name: 'JavaScript',
    src: '/logos/javascript.svg',
    type: SkillType.Programming,
  },
  {
    name: 'TypeScript',
    src: '/logos/typescript.svg',
    type: SkillType.Programming,
  },
  {
    name: 'Java',
    src: '/logos/java.svg',
    type: SkillType.Programming,
  },
  {
    name: 'Angular',
    src: '/logos/angular.svg',
    type: SkillType.Framework,
  },
  {
    name: 'React',
    src: '/logos/react.svg',
    type: SkillType.Framework,
  },
  {
    name: 'Next.js',
    src: '/logos/nextjs.svg',
    type: SkillType.Framework,
  },
  {
    name: 'NestJS',
    src: '/logos/nestjs.svg',
    type: SkillType.Framework,
  },
  {
    name: 'Spring',
    src: '/logos/spring.svg',
    type: SkillType.Framework,
  },
  {
    name: 'Redux',
    src: '/logos/redux.svg',
    type: SkillType.Framework,
  },
  {
    name: 'Tailwind CSS',
    src: '/logos/tailwindcss.svg',
    type: SkillType.Framework,
  },
  {
    name: 'Material UI',
    src: '/logos/material-ui.svg',
    type: SkillType.Framework,
  },
  {
    name: 'GraphQL',
    src: '/logos/graphql.svg',
    type: SkillType.Framework,
  },
  {
    name: 'MySQL',
    src: '/logos/mysql.svg',
    type: SkillType.Database,
  },
  {
    name: 'PostgreSQL',
    src: '/logos/postgresql.svg',
    type: SkillType.Database,
  },
  {
    name: 'AWS',
    src: '/logos/aws.svg',
    type: SkillType.Cloud,
  },
  {
    name: 'Docker',
    src: '/logos/docker.svg',
    type: SkillType.Tools,
  },
  {
    name: 'Git',
    src: '/logos/git.svg',
    type: SkillType.Tools,
  },
  {
    name: 'GitHub',
    src: '/logos/github.svg',
    type: SkillType.Tools,
  },
  {
    name: 'GitLab',
    src: '/logos/gitlab.svg',
    type: SkillType.Tools,
  },
  {
    name: 'NPM',
    src: '/logos/npm.svg',
    type: SkillType.Tools,
  },
  {
    name: 'Jira',
    src: '/logos/jira.svg',
    type: SkillType.Tools,
  },
  {
    name: 'Trello',
    src: '/logos/slack.svg',
    type: SkillType.Tools,
  },
  {
    name: 'Postman',
    src: '/logos/postman.svg',
    type: SkillType.Tools,
  },
  {
    name: 'Ubuntu',
    src: '/logos/ubuntu.svg',
    type: SkillType.Tools,
  },
];

function Skills() {
  const [radius, setRadius] = useState(100);
  const [iconSize, setIconSize] = useState(8);
  const centerSkill = skills.find(skill => skill.name === 'React');
  const otherSkills = skills.filter(skill => skill.name !== 'React');
  const layers = 3; // Number of concentric circles
  const skillsPerLayer = Math.ceil(otherSkills.length / layers);

  useEffect(() => {
    const updateRatio = () => {
      if (window.innerWidth >= 1024) {
        setRadius(100);
        setIconSize(8);
      } else if (window.innerWidth >= 768) {
        setRadius(70);
        setIconSize(6);
      } else {
        setRadius(50);
        setIconSize(4);
      }
    };

    updateRatio();
    window.addEventListener('resize', updateRatio);
    return () => window.removeEventListener('resize', updateRatio);
  }, []);

  return (
    <section>
      <h3 className="text-center text-5xl text-white select-none">Skillset</h3>
      <div className="h-[80vh] flex justify-center items-center">
        <div className="relative w-full h-auto">
          {/* Place React at the center */}
          {centerSkill && (
            <Image
              key={centerSkill.name}
              width={6 * iconSize}
              height={6 * iconSize}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: '50%', top: '50%' }}
              src={centerSkill.src}
              alt={centerSkill.name}
            />
          )}
          {/* Arrange other skills in concentric circles */}
          {Array.from({ length: layers }).map((_, layer) => (
            <div
              key={layer}
              className={`absolute w-full h-full transform origin-center animate-spinLayer`}
              style={{ animationDuration: `${10 + layer * 5}s` }}
            >
              {otherSkills
                .slice(layer * skillsPerLayer, (layer + 1) * skillsPerLayer)
                .map(({ src, name }, index, arr) => {
                  const angle = (index / arr.length) * 2 * Math.PI;
                  const layerRadius = radius + layer * radius; // Adjust radius based on layer
                  const x = layerRadius * Math.cos(angle);
                  const y = layerRadius * Math.sin(angle);
                  const size = 24 + layer * iconSize; // Adjust size based on layer
                  return (
                    <Image
                      key={name}
                      width={size}
                      height={size}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                      src={src}
                      alt={name}
                    />
                  );
                })}
            </div>
          ))}
        </div>
      </div>
      <div id="projects" className="mt-auto opacity-0 invisible"></div>
    </section>
  );
}

export default Skills;
