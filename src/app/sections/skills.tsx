import Image from 'next/image';

export default function Skills() {
  return (
    <div>
      <h3>Skillset</h3>
      <ul>
        <li>
          <Image
            className="w-10 h-10 rounded-full"
            src="/docs/images/people/profile-picture-5.jpg"
            alt="Rounded avatar"
          />
        </li>
      </ul>
    </div>
  );
}
