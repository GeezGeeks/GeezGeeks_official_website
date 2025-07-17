export default function Backdrop({ toggleSidebar }) {
  // Function to handle the backdrop click and toggle the sidebar visibility
  return (
    <div
      onClick={() => toggleSidebar(false)}
      className="fixed top-0 left-0 w-full h-screen z-[99] bg-slate-900/60 dark:bg-black/70 transition-colors duration-300 cursor-pointer"
    />
  );
}
