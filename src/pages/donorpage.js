import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { CurrencyIcon, HeartIcon, TrophyIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export default function DonorPage() {
    return (
        <>
            <main className="flex-1">
                <section className="bg-primary py-20 px-6 text-primary-foreground">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-4xl font-bold">Become a Scholarship Donor</h1>
                        <p className="text-xl">
                            Make a lasting impact on students' lives by contributing to our scholarship program.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-primary font-medium hover:bg-primary-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
                            
                        >
                            Register as Donor
                        </a>
                    </div>
                </section>
                <section className="py-12 px-6 md:py-20">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold">Why Become a Donor?</h2>
                            <p className="text-muted-foreground">Discover the benefits of supporting our scholarship program.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <HeartIcon className="h-10 w-10 text-primary" />
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-xl font-bold">Make a Difference</h3>
                                    <p className="text-muted-foreground">
                                        Your donation can change the lives of deserving students, opening doors to educational
                                        opportunities.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <TrophyIcon className="h-10 w-10 text-primary" />
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-xl font-bold">Recognize Achievement</h3>
                                    <p className="text-muted-foreground">
                                        Celebrate the hard work and accomplishments of our scholarship recipients.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CurrencyIcon className="h-10 w-10 text-primary" />
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-xl font-bold">Tax Benefits</h3>
                                    <p className="text-muted-foreground">
                                        Your donation may be eligible for tax deductions, making your contribution even more impactful.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="bg-muted py-12 px-6 md:py-20">
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <h2 className="text-3xl font-bold">Donor Testimonials</h2>
                        <p className="text-muted-foreground">Hear from our donors about their experience with Scholarship Hub.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="text-lg font-medium">
                                        "Partnering with Scholarship Hub has been an incredibly\n rewarding experience. Seeing the impact we
                                        can make on\n students' lives is truly inspiring."
                                    </blockquote>
                                    <p className="text-muted-foreground mt-4">- Sarah Anderson, Donor</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                        <AvatarFallback>SA</AvatarFallback>
                                    </Avatar>
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="text-lg font-medium">
                                        "Donating to Scholarship Hub has been one of the most\n fulfilling experiences. Knowing that my
                                        contribution is\n making a real difference in students' lives is incredibly\n rewarding."
                                    </blockquote>
                                    <p className="text-muted-foreground mt-4">- John Doe, Donor</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                        <AvatarFallback>EM</AvatarFallback>
                                    </Avatar>
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="text-lg font-medium">
                                        "I'm proud to be a donor with Scholarship Hub. Knowing that\n my contribution is making a real
                                        difference in the lives of\n students is incredibly rewarding."
                                    </blockquote>
                                    <p className="text-muted-foreground mt-4">- Emily Martinez, Donor</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="py-12 px-6 md:py-20">
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <h2 className="text-3xl font-bold">Donor Registration</h2>
                        <p className="text-muted-foreground">
                            Fill out the form below to become a donor and start making a difference.
                        </p>
                        <div className="bg-muted rounded-md p-8 text-left">
                            <form className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" placeholder="Enter your name" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="organization">Organization</Label>
                                    <Input id="organization" type="text" placeholder="Enter your organization" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="amount">Donation Amount</Label>
                                    <Input id="amount" type="number" placeholder="Enter your donation amount" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="message">Message (optional)</Label>
                                    <Textarea id="message" placeholder="Enter a message about your donation" />
                                </div>
                                <Button type="submit" className="justify-self-end">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}