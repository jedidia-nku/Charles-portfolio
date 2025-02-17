import Link from 'next/link';

export default function ElevatorPitch() {
    return (
        <div className="min-h-screen bg-gray-900 ">
          <nav className="w-full flex justify-around items-center px-10 py-6">
          <ul className="flex space-x-6 text-white">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/elevator-pitch" className="hover:text-gray-400">Elevator Pitch</Link></li>
        </ul>
      </nav>
      
      <main className="flex flex-col items-center justify-center bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold text-green-400">Elevator Pitch</h1>
        <p className="mt-4 text-gray-300 text-lg">
          This page is a placeholder for my elevator pitch. A video or additional content will be added soon.
        </p>
      </main>
      <div className="flex items-center w-full justify-center">
          <a
            href="/Our elevator pitch.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Download Project Slide Deck 📄
          </a>
          </div>
      </div>
    );
  }
  