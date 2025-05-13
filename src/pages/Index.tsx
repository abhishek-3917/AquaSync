
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Workflow
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  QuantumTech delivers cutting-edge solutions that transform how you work. 
                  Experience unmatched efficiency with our flagship product.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/features">
                  <Button size="lg">Discover Features</Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="outline" size="lg">View Pricing</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                width={550}
                height={310}
                alt="Product hero"
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Product Benefits</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our product delivers exceptional value with its unique capabilities and innovative approach
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {[
              {
                title: "Enhanced Efficiency",
                description: "Save time and resources with our streamlined workflows",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
                    <path d="m12 14 4-4"></path>
                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                  </svg>
                )
              },
              {
                title: "Smart Integration",
                description: "Seamlessly connects with your existing tools and platforms",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
                    <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                )
              },
              {
                title: "Data Security",
                description: "Enterprise-grade security to protect your valuable information",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4 text-center animate-fade-in">
                <div className="p-2">{item.icon}</div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. See what our customers have to say.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            {[
              {
                quote: "This product has completely transformed how our team collaborates. We've seen a 40% increase in productivity.",
                author: "Sarah Johnson",
                position: "CTO, TechCorp"
              },
              {
                quote: "The integration capabilities are unmatched. We were able to connect all our existing systems with minimal effort.",
                author: "Michael Chen",
                position: "Operations Director, Innovate Inc."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-950">
                <p className="text-gray-500 dark:text-gray-400">"{item.quote}"</p>
                <p className="font-medium">{item.author}</p>
                <p className="text-sm text-gray-500">{item.position}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button>Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
