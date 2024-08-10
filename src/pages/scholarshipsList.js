import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { SearchIcon } from "lucide-react";
import { ScholarshipCard } from "../components/scholarshipCard";

let deomData = [
    {
        "id": 1,
        "title": "STEM Excellence Scholarship",
        "description": "Aimed at students excelling in Science, Technology, Engineering, and Mathematics disciplines.",
        "buttonText": "Apply"
    },
    {
        "id": 2,
        "title": "Future Leaders Scholarship",
        "description": "For students demonstrating exceptional leadership skills in their academic and community endeavors.",
        "buttonText": "Apply"
    },
    {
        "id": 3,
        "title": "Arts & Humanities Scholarship",
        "description": "Supporting students with outstanding achievements in Arts, Literature, and Humanities.",
        "buttonText": "Apply"
    },
    {
        "id": 4,
        "title": "Global Citizens Scholarship",
        "description": "Awarded to students with a passion for international relations and global studies.",
        "buttonText": "Apply"
    },
    {
        "id": 5,
        "title": "Women in Tech Scholarship",
        "description": "Encourages and supports women pursuing careers in technology and engineering.",
        "buttonText": "Apply"
    },
    {
        "id": 6,
        "title": "Community Service Scholarship",
        "description": "Recognizes students with outstanding contributions to their communities through volunteer work.",
        "buttonText": "Apply"
    }
]


export  function ScholarshipsList() {
    return (
        <main className="flex-1">
            <section className="bg-muted py-12 px-6 md:py-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Search for Scholarships</h2>
                        <p className="text-muted-foreground">Find the perfect scholarship opportunity for you.</p>
                    </div>
                    <div className="bg-background rounded-md p-6 md:p-8">
                        <form className="flex items-center gap-4">
                            <div className="relative flex-1">
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input type="search" placeholder="Search for scholarships..." className="pl-10 w-full" />
                            </div>
                            <Button>Search</Button>
                        </form>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                       {deomData.map( data => <Link key={data.id} to={`/scholarship/${data.id}`}><ScholarshipCard props={data}/></Link> )}
                    </div>
                </div>
            </section>
        </main>
    )
}

