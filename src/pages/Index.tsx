
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Smart Hydration Technology
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  AquaSync bottles combine cutting-edge technology with sleek design to revolutionize the way you hydrate. Stay connected, stay hydrated.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/features">
                  <Button size="lg">Explore Features</Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg">Shop Now</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80"
                width={550}
                height={310}
                alt="Smart water bottle"
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
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Why Choose AquaSync</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Smart Bottle Benefits</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our tech-enhanced bottles provide exceptional functionality with innovative features
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {[
              {
                title: "Hydration Tracking",
                description: "Real-time monitoring of your daily water intake with personalized goals",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
                    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                    <path d="M9.7 7.7a2.5 2.5 0 1 0-1.8 4.3h17.5"></path>
                    <path d="M14.7 13.5a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                    <path d="M9.7 13.5a2.5 2.5 0 1 0-1.8 4.3h17.5"></path>
                  </svg>
                )
              },
              {
                title: "Smart Temperature",
                description: "Maintains optimal beverage temperature for hours with LED indicators",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
                    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
                    <path d="M17.64 15 22 10.64"></path>
                    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a3.56 3.56 0 0 0-3.83-.76 3.57 3.57 0 0 0-2.18 2.18c-.19.55-.18 1.28.01 2.33.19 1.05.51 2.24.92 3.49s.83 2.4 1.25 3.43c.42 1.03.85 1.93 1.29 2.69.44.76.89 1.36 1.35 1.78"></path>
                  </svg>
                )
              },
              {
                title: "App Integration",
                description: "Connects seamlessly with our mobile app for comprehensive health insights",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                    <path d="M12 18h.01"></path>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. See what our customers have to say about AquaSync bottles.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            {[
              {
                quote: "My AquaSync bottle has transformed my hydration habits. The reminders and tracking have helped me increase my water intake by 40%.",
                author: "Sarah Johnson",
                position: "Fitness Enthusiast"
              },
              {
                quote: "As someone who's always on the go, the temperature control feature is a game-changer. My coffee stays hot for my entire morning commute.",
                author: "Michael Chen",
                position: "Tech Professional"
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
            <Link to="/products">
              <Button>Get Your AquaSync Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
