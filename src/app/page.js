import ThemeSelector from "@/components/ThemeSelector";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-title mb-4 text-[var(--color-primary)]">
          Mood Tracker
        </h1>
        <p className="text-lg font-body text-[var(--color-secondary)]">
          Choisissez votre ambiance préférée ✨
        </p>
      </div>
    </main>
  );
}
