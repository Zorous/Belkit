import Image from "next/image";
import { Button } from "@ui/components/button";
import { SmartImage } from "@ui/components/media/SmartImage";
import { SmartSkeleton } from "@ui/components/loaders/SmartSkeleton";

export default function Home() {
  return (
    <SmartSkeleton loading={true}>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <p>heheh</p>
        <image
          src="https://avatars.githubusercontent.com/u/30228787?v=4"
          alt="Logo"
          width={100}
          height={100}
        />
        <SmartImage
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="User Profile"
          fallback="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          isDownloadable={true}
          expandOnClick={true}
        />
      </main>
    </SmartSkeleton>
  );
}
