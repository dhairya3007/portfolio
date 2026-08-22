import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} Dhairya Patel. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
              <span className="sr-only">GitHub</span>
              <GithubIcon size={20} className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon size={20} className="w-5 h-5" />
            </a>
            <a href="mailto:dhairyapatel3007@gmail.com" className="text-slate-400 hover:text-blue-500 transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
            <a href="tel:+919898794846" className="text-slate-400 hover:text-blue-500 transition-colors">
              <span className="sr-only">Phone</span>
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
