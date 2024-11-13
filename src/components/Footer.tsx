export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 