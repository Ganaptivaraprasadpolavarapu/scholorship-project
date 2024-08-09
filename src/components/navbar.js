import { Link } from "react-router-dom"


export function Navbar() {
    return (
        <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                <GraduationCapIcon className="w-6 h-6" />
                <span className="text-xl font-bold">Scholarship Connect</span>
            </Link>
            <nav className="flex items-center gap-4">
                <Link to="/scholarships" className="hover:underline">
                    Scholarships
                </Link>
                <Link to="/donors" className="hover:underline">
                    Donors
                </Link>
                <Link to="/about" className="hover:underline">
                    About
                </Link>
                <Link
                    to="/login"
                    className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                >
                    Login
                </Link>
            </nav>
        </header>
    )
}

function GraduationCapIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
            <path d="M22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
    )
}