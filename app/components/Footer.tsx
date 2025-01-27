import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-white bg-opacity-50 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800">RehbarPost</h3>
            <p className="text-sm text-gray-600">Streamlining logistics for businesses worldwide.</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800">Services</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#features" className="text-sm text-gray-600 hover:text-blue-600">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-gray-600 hover:text-blue-600">
                  Dispatching
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-gray-600 hover:text-blue-600">
                  Tracking
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-sm text-gray-600 hover:text-blue-600">
                  NDR Management
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-800">Connect</h3>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">Â© 2025 RehbarPost. All rights reserved.</div>
      </div>
    </footer>
  )
}