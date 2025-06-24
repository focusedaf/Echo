import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex items-center justify-center h-screen">
        <h3 className="text-center items-center">hello</h3>
      </div>
    </div>
  );
}
