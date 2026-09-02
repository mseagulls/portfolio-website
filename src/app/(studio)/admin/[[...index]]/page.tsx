export default function AdminPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-10 text-center text-white">
      <div className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-2xl font-semibold">Admin area</h1>
        <p className="mt-3 text-white/70">
          This deployment build has the CMS, database, and payment services removed.
        </p>
      </div>
    </main>
  );
}
