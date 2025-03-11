
import { Mail, Phone, User } from 'lucide-react';

const Interface = () => {
  return (
    <div className="fixed top-0 right-0 p-4 bg-black/50 text-white rounded-bl-lg">
      <nav className="space-y-4">
        <button className="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <User size={20} />
          <span>About</span>
        </button>
        <div className="h-px bg-white/20" />
        <div className="space-y-2">
          <a href="mailto:your@email.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={20} />
            <span>Call</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Interface;
