
import { Bird, Twitter, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-ocean-blue text-white py-12 border-t border-white/10">
            <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Bird size={24} className="text-glacier-blue" />
                        <span className="text-xl font-heading font-bold">P-Track</span>
                    </div>
                    <p className="text-white/60 font-body text-sm">
                        Dedicated to the conservation and study of penguin populations in the Southern Hemisphere.
                    </p>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-4">Platform</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><a href="#" className="hover:text-glacier-blue transition-colors">Live Map</a></li>
                        <li><a href="#" className="hover:text-glacier-blue transition-colors">Data API</a></li>
                        <li><a href="#" className="hover:text-glacier-blue transition-colors">Research Portal</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-4">Organization</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li><a href="#" className="hover:text-glacier-blue transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-glacier-blue transition-colors">Our Team</a></li>
                        <li><a href="#" className="hover:text-glacier-blue transition-colors">Conservation Partners</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold mb-4">Connect</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-glacier-blue hover:text-ocean-blue transition-colors">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-glacier-blue hover:text-ocean-blue transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-glacier-blue hover:text-ocean-blue transition-colors">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container px-6 mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
                © 2024 P-Track Initiative. All rights reserved.
            </div>
        </footer>
    );
};
