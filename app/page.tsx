import Image from "next/image";
import ContentList from "./components/contentList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="max-w-2xl space-y-10 mt-10">
          <ContentList></ContentList>
      </main>
    </div>
  );
}
