import dynamic from 'next/dynamic';

// dynamic import
const LocationDetector = dynamic(() => import('@/components/Location/LocationDetector'), { ssr: false });


export default function Home() {
  return (
    <LocationDetector />
  );
}
