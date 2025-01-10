import Image from 'next/image';

type SkillsGroupProps = {
  title: string;
  skills: {
    name: string;
    src: string;
    className?: string;
  }[];
};

export function SkillsGroup({ skills }: SkillsGroupProps) {
  return skills.map(({ name, src }) => (
    <Image
      key={name}
      width={48}
      height={48}
      className="w-16 h-auto p-3 rounded bg-opacity-50"
      src={src}
      alt="Rounded avatar"
    />
  ));
}
