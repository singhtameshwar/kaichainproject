import { Github, Facebook, Twitter } from 'lucide-react'
import Link from "next/link"

export const FOOTER = () => {
  return (
    <footer className="bg-black  pb-12 md:px-24">
      <div className="container mx-auto">
        <div   className="flex flex-col md:flex-row p-10 md:items-center md:justify-between bg-gradient-to-b from-transparent to-[#0D0D0D]"
        >
          <div className="space-y-4">
            <h3 className="text-[#F7931A] text-xl font-semibold tracking-wide">
              GET CONNECTED
            </h3>
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              Connect to Kai Chain Community
            </h2>
            <p className="text-gray-400 text-lg">
              Join the discussions and stay up to date with the latest news and announcements.
            </p>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <Link 
              href="#"
              className="bg-[#F7931A] p-3 rounded-full hover:opacity-90 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-black" />
            </Link>
            <Link 
              href="#"
              className="bg-[#F7931A] p-3 rounded-full hover:opacity-90 transition-opacity"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-black" />
            </Link>
            <Link 
              href="#"
              className="bg-[#F7931A] p-3 rounded-full hover:opacity-90 transition-opacity"
              aria-label="Telegram"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 text-black"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.756-.244-1.359-.374-1.307-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.12.098.153.228.166.336.032.272-.012 2.027-.012 2.027z"/>
              </svg>
            </Link>
            <Link 
              href="#"
              className="bg-[#F7931A] p-3 rounded-full hover:opacity-90 transition-opacity"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-black" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default FOOTER;