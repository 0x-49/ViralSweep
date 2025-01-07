export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-indigo-600 dark:border-indigo-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
