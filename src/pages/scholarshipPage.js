import { Button } from "../components/ui/button";

export function ScholarshipPage(){
    return(
        <>
        <section className="bg-background py-12 px-6 md:py-20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">About Scholarship A</h2>
              <p className="text-muted-foreground">
                Learn more about the details and requirements of this scholarship.
              </p>
            </div>
            <div className="bg-background rounded-md p-6 md:p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Overview</h3>
                <p className="text-muted-foreground">
                  Scholarship A is a prestigious award offered to outstanding students who demonstrate academic
                  excellence, leadership, and a commitment to their community. This scholarship is designed to provide
                  financial support to help students pursue their educational goals and reach their full potential.
                </p>
                <h3 className="text-2xl font-bold">Eligibility</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimum GPA of 3.5</li>
                  <li>Demonstrated financial need</li>
                  <li>Active involvement in extracurricular activities or community service</li>
                  <li>Strong leadership skills and potential</li>
                </ul>
                <h3 className="text-2xl font-bold">Benefits</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full tuition coverage for up to 4 years of undergraduate study</li>
                  <li>Mentorship and career development opportunities</li>
                  <li>Networking events and access to a community of scholars</li>
                </ul>
                <h3 className="text-2xl font-bold">Application Process</h3>
                <p className="text-muted-foreground">
                  To apply for Scholarship A, students must submit a comprehensive application package, including
                  transcripts, letters of recommendation, a personal statement, and a detailed resume. The application
                  deadline is typically in early spring, and recipients are notified by the end of the academic year.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" size="sm">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}