import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Favicon Test - Paper Kite Games',
  description: 'Testing favicon and icon integration',
};

export default function FaviconTest() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Paper Kite Games - Favicon Integration Test
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Integration Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-600">✅ Files Present</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• /public/favicon.ico</li>
                <li>• /public/icons/favicon-16x16.png</li>
                <li>• /public/icons/favicon-32x32.png</li>
                <li>• /public/icons/apple-touch-icon.png</li>
                <li>• /public/icons/icon-192x192.png</li>
                <li>• /public/icons/paper_kite_favicon_512x512.png</li>
                <li>• /public/site.webmanifest</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-600">✅ Metadata Configured</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Standard favicon links</li>
                <li>• Apple touch icons</li>
                <li>• Progressive Web App manifest</li>
                <li>• Theme color set to #6BAF92</li>
                <li>• Multiple icon sizes for various devices</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Testing Instructions</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-medium">Desktop Browser Tab</h3>
              <p className="text-sm">Check that the Paper Kite Games favicon appears in the browser tab</p>
            </div>
            <div>
              <h3 className="font-medium">Mobile Safari (iOS)</h3>
              <p className="text-sm">Add to Home Screen and verify the touch icon appears properly</p>
            </div>
            <div>
              <h3 className="font-medium">Android Chrome</h3>
              <p className="text-sm">Add to Home Screen and check PWA icon and theme color</p>
            </div>
            <div>
              <h3 className="font-medium">Bookmark Test</h3>
              <p className="text-sm">Bookmark this page and verify the favicon appears in bookmarks</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Available Icon Previews</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Image src="/icons/favicon-16x16.png" alt="16x16 Favicon" width={16} height={16} className="mx-auto border" />
              <p className="text-xs mt-1">16x16</p>
            </div>
            <div className="text-center">
              <Image src="/icons/favicon-32x32.png" alt="32x32 Favicon" width={32} height={32} className="mx-auto border" />
              <p className="text-xs mt-1">32x32</p>
            </div>
            <div className="text-center">
              <Image src="/icons/apple-touch-icon.png" alt="Apple Touch Icon" width={64} height={64} className="mx-auto border" />
              <p className="text-xs mt-1">Apple Touch</p>
            </div>
            <div className="text-center">
              <Image src="/icons/icon-192x192.png" alt="192x192 Icon" width={64} height={64} className="mx-auto border" />
              <p className="text-xs mt-1">192x192</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
