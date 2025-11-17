import { Facebook, Github, Instagram, Twitter } from "lucide-react";

export function Footer(){
    return(
 <footer className="bg-white py-6 text-center mt-10">
      <div>
        <h2 className="text-xl font-bold">
          <span className="text-violet-600 text-3xl">E</span>-Market
        </h2>
        <p className="text-sm text-violet-700 mt-1">© 2025 All rights reserved.</p>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-5 mt-4">
        <a href="/" className="text-black hover:text-violet-600 transition">
          <Facebook size={22} />
        </a>
        <a href="/" className="text-black hover:text-violet-600 transition">
          <Instagram size={22} />
        </a>
        <a href="/" className="text-black hover:text-violet-600 transition">
          <Twitter size={22} />
        </a>
        <a href="https://github.com/meryemlitim/E-Market-front-end.git" className="text-black hover:text-violet-600 transition">
          <Github size={22} />
        </a>
      </div>

     
    </footer>

    );
}