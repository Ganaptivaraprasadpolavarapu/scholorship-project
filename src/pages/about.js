export default function About(){
 return(
    <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="grid max-w-[800px] mx-auto gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empowering the Next Generation
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Our scholarship program aims to provide financial assistance to deserving students, helping them achieve
            their educational goals and unlock their full potential.
          </p>
        </div>
        <div className="grid max-w-[800px] mx-auto gap-6 md:grid-cols-2">
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Scholarship Details</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Eligibility:</strong> High school seniors or current college students with a minimum GPA of
                3.5.
              </li>
              <li>
                <strong>Application Process:</strong> Submit an online application, including a personal statement,
                academic transcripts, and letters of recommendation.
              </li>
              <li>
                <strong>Deadlines:</strong> Applications are accepted annually from January 1st to March 31st.
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Donor Testimonials</h2>
            <blockquote className="bg-muted rounded-lg p-4 text-muted-foreground">
              <p className="text-lg font-medium">
                "Investing in the education of our youth is one of the\n most impactful ways we can shape a brighter
                future. I'm\n proud to support this scholarship program and witness the\n transformative power of
                education."
              </p>
              <cite className="mt-4 block text-sm not-italic">- John Doe, Scholarship Donor</cite>
            </blockquote>
          </div>
        </div>
        <div className="grid max-w-[800px] mx-auto gap-6 md:grid-cols-2">
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Student Profiles</h2>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Student Profile"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div>
                  <h3 className="text-lg font-medium">Emily Johnson</h3>
                  <p className="text-muted-foreground">
                    "The scholarship has been a game-changer, allowing me\n to focus on my studies and pursue my
                    dream of\n becoming a software engineer."
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  width="80"
                  height="80"
                  alt="Student Profile"
                  className="rounded-full"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div>
                  <h3 className="text-lg font-medium">Michael Lee</h3>
                  <p className="text-muted-foreground">
                    "This scholarship has opened doors for me and\n empowered me to make a positive impact in my\n
                    community. I'm grateful for the opportunity."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-2xl font-bold">Apply Now</h2>
            <p className="text-muted-foreground">
              Don't miss your chance to be a part of our scholarship program. Apply today and take the first step
              towards achieving your educational goals.
            </p>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
 )
}