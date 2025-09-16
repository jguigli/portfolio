
export default function Footer()
{
  return (
    <footer className="h-16 flex items-center justify-center">
        <p className="text-sm text-white">© {new Date().getFullYear()} Guidely. All rights reserved.</p>
    </footer>
  );
};