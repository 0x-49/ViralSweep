import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const features = [
  {
    title: "Sweepstakes App",
    description: "Grow your email list, increase engagement, and generate sales by giving away prizes."
  },
  {
    title: "Giveaway App",
    description: "Boost your email and SMS list, enhance engagement, and drive sales with giveaways."
  },
  {
    title: "Contest Software",
    description: "Collect, curate, and display user generated content like photos and videos."
  },
  {
    title: "Instant Win App",
    description: "Increase engagement and award fans instantly with prizes."
  },
  {
    title: "Waitlist App",
    description: "Refer friends or complete actions to move up spots on the waitlist."
  },
  {
    title: "Milestones App",
    description: "Have your customers refer their friends to unlock tiers of prizes."
  }
];

const testimonials = [
  {
    quote: "Viralsweep has been a key tool in growing our social following and our email lists. We've seen ROI's of over 1000% from revenue generated directly from our Viralsweep managed giveaways.",
    author: "Derin Oyekan",
    role: "Co-Founder, JewelScent"
  },
  {
    quote: "Viralsweep is easy-to-use and the fastest, most cost-effective way to set up a full-service, compliant promotion.",
    author: "Courtney Harwood",
    role: "SVP Marketing, Keep"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>ViralSweep - The Ultimate Viral Marketing Platform</title>
        <meta name="description" content="Grow your email list, increase engagement, and generate sales with ViralSweep's suite of marketing tools." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="secondary" className="mb-4">Trusted by thousands of brands</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                The Ultimate Platform for Viral Marketing
              </h1>
              <p className="text-xl text-muted-foreground">
                Grow your email & SMS list, increase engagement, and generate sales with our comprehensive suite of marketing tools.
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <Link href="https://viralsweep.com/?via=maxime-emmanuel" target="_blank">
                  <Button size="lg" className="text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="https://viralsweep.com/pricing" target="_blank">
                  <Button size="lg" variant="outline" className="text-lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20 px-4 bg-muted/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Powerful Marketing Tools</h2>
                <p className="text-muted-foreground">Everything you need to run successful marketing campaigns</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-card">
                    <CardHeader>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
                <p className="text-muted-foreground">Join thousands of satisfied customers using ViralSweep</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="pt-6">
                      <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
                      <footer>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                      </footer>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-muted/50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of brands using ViralSweep to grow their email lists and generate more sales.
              </p>
              <Link href="https://viralsweep.com/?via=maxime-emmanuel" target="_blank">
                <Button size="lg" className="text-lg">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}