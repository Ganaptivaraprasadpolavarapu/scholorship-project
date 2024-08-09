import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export function ScholarshipCard({props}){
    const {title, description} = props;
    return(
        <Card>
        <CardHeader>
            <div className="flex items-center gap-2">
                <GraduationCapIcon className="h-8 w-8 text-primary" />
                <h3 className="font-bold">{title}</h3>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
            <div className="mt-4 flex items-center justify-between">
                <a href="#" className="text-primary hover:underline" >
                    Learn More
                </a>
                <Button variant="outline" size="sm">
                    Apply
                </Button>
            </div>
        </CardContent>
    </Card>
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