export function Footer(){
    return(
        <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-12 flex items-center justify-between">
        <div className="text-sm">&copy; 2024 Scholarship Connect. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
      </footer>
    )
}