export default function Backdrop({ toggleSidebar }) {
  // Function to handle the backdrop click and toggle the sidebar visibility
  return <div onClick={() => toggleSidebar(false)} className="darkBg fixed top-0 left-0 w-full h-screen z-[99] opacity-80" />;
}
