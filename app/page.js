import dynamic from 'next/dynamic';

const LocationDetector = dynamic(() => import('@/components/Location/LocationDetector'), { ssr: false });


export default function Home() {
  return (
    <LocationDetector />
  );
}
