export default function Footer() {
    return (
      <footer className="bg-red-500 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Car Spotter. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:underline">Facebook</a>
            <a href="https://tiktok.com" className="hover:underline">TikTok</a>
            <a href="https://youtube.com" className="hover:underline">YouTube</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  }
  