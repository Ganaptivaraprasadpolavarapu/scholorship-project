

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 px-6 md:px-12 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center">Connect with Scholarship Opportunities</h1>
          <p className="text-lg mb-8 text-center">
            Find and apply for scholarships, or contribute to the next generation of students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            
            >
              Search Scholarships
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            
            >
              Become a Donor
            </a>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">For Students</h2>
              <p className="text-muted-foreground mb-6">
                Browse and apply for a wide range of scholarship opportunities tailored to your needs and
                qualifications.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              
              >
                Find Scholarships
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">For Donors</h2>
              <p className="text-muted-foreground mb-6">
                Create and manage your scholarship offerings, connect with deserving students, and make a lasting
                impact.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              
              >
                Become a Donor
              </a>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About Scholarship Connect</h2>
            <p className="text-muted-foreground mb-6">
              Scholarship Connect is a platform that bridges the gap between students seeking financial aid and donors
              who want to support their educational goals. Our mission is to make higher education more accessible by
              connecting deserving students with life-changing scholarship opportunities.
            </p>
            <p className="text-muted-foreground mb-6">
              Through our user-friendly platform, students can easily browse and apply for scholarships that match their
              qualifications and interests. Donors can create and manage their scholarship offerings, connect with
              students, and make a lasting impact on their lives.
            </p>
            <p className="text-muted-foreground mb-6">
              Join us in our mission to empower the next generation of leaders, innovators, and change-makers. Together,
              we can transform lives and create a more equitable future.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            
            >
              Learn More
            </a>
          </div>
        </section>
      </main>
    </div>
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