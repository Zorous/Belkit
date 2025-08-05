import Image from "next/image";
import { Button } from "@ui/components/button";
import { SmartImage } from "@ui/components/media/SmartImage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <SmartImage
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="User Profile"
          fallback="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          isDownloadable={true}
          expandOnClick={true}
        />
    </main>
  );
}
