import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import image1 from '../../../public/images/project1.png';
import image2 from '../../../public/images/project2.png';

export const metadata: Metadata = {
  title: 'Proyek Saya',
  description: 'Halaman Proyek saya.',
  openGraph: {
    title: 'Proyek Saya',
    description: 'Halaman Proyek saya.',
  } 
};

type ProjectItemProps = {
  name: string;
  url: string;
  urlDisplay: string;
  imageSrc: StaticImageData;
};

function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image className="w-full rounded-lg" src={imageSrc} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700">
            {urlDisplay}
          </span>
        </div>
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
        <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>
      </header>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Aplikasi</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 gap-y-16 mt-6">
          <ProjectItem name="Aplikasi 1" url="https://example.com" urlDisplay="App Store" imageSrc={image1}/>
          <ProjectItem name="Aplikasi 2" url="https://example.com" urlDisplay="Google Play" imageSrc={image2} />
        </ul> 
      </div>
    </div>
  );
}
