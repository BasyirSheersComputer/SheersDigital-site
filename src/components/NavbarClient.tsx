"use client";

import { useEffect, useState } from "react";

export function NavbarClient() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Script to add scrolled class and toggle menu */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            (function(){
              var nav = document.getElementById('navbar');
              window.addEventListener('scroll', function(){
                if(window.scrollY > 40) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
              }, {passive:true});
              if(window.scrollY > 40) nav.classList.add('scrolled');
              
              document.getElementById('nav-toggle')?.addEventListener('click', function(){
                var menu = document.getElementById('mobile-menu');
                menu.classList.toggle('open');
              });
            })();
          `,
                }}
            />
        </>
    );
}
