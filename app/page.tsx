import ContentList from "./components/contentList";

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white flex min-h-screen items-center justify-center bg-zinc-50 font-sans p-4">
      <main className="max-w-2xl space-y-10 mt-10">
          <ContentList></ContentList>
      </main>
    </div>
  );
}
