import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Features = () => {
  return (
    <Layout>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Advanced Smart Bottle Technology
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the innovative features that make AquaSync bottles the smartest way to hydrate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="tracking" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="flex-wrap">
                <TabsTrigger value="tracking">Hydration Tracking</TabsTrigger>
                <TabsTrigger value="temperature">Temperature Control</TabsTrigger>
                <TabsTrigger value="uv">UV Purification</TabsTrigger>
                <TabsTrigger value="filtration">Smart Filtration</TabsTrigger>
                <TabsTrigger value="app">Mobile App</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="tracking" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1626688445658-c948f6405af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                    width={500}
                    height={300}
                    alt="Hydration tracking features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl font-bold">Smart Hydration Monitoring</h2>
                  <p className="text-gray-500">
                    Our advanced sensor technology tracks your water intake in real-time, providing accurate data to help you meet your daily hydration goals.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Precision volume tracking
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Customizable daily goals
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Smart reminders
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Weekly and monthly hydration analytics
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="temperature" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                    width={500}
                    height={300}
                    alt="Temperature control features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <h2 className="text-2xl font-bold">Precision Temperature Control</h2>
                  <p className="text-gray-500">
                    Maintain your beverage at the perfect temperature for hours with our advanced thermal technology and interactive temperature indicators.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Vacuum insulated double-wall construction
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      LED temperature display
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Adjustable temperature settings
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      12+ hours of temperature maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="uv" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl font-bold">UV Purification Technology</h2>
                  <p className="text-gray-500">
                    Our built-in UV-C light technology neutralizes up to 99.9% of harmful bacteria and viruses in your water, ensuring you're always drinking the cleanest water possible.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Automatic UV-C sterilization cycle
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Eliminates 99.9% of bacteria and viruses
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Self-cleaning bottle interior
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Battery-efficient LED technology
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1550963295-019d8a8a61c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                    width={500}
                    height={300}
                    alt="UV purification technology"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="filtration" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1548507110-b0243a3b05b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                    width={500}
                    height={300}
                    alt="Smart filtration system"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <h2 className="text-2xl font-bold">Advanced Filtration System</h2>
                  <p className="text-gray-500">
                    Our multi-stage smart filtration system removes contaminants, improves taste, and monitors filter life to ensure optimal performance at all times.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Multi-stage activated carbon filtration
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Removes chlorine, lead, and other contaminants
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Smart filter life monitoring
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Easy, twist-and-replace filter system
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="app" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl font-bold">Seamless Mobile Integration</h2>
                  <p className="text-gray-500">
                    Connect your AquaSync bottle to our intuitive mobile app for comprehensive hydration tracking, personalized insights, and health analytics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Bluetooth 5.0 connectivity
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Health dashboard integration
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Personalized hydration recommendations
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Social sharing and challenges
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                    width={500}
                    height={300}
                    alt="Mobile app features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                    width={500}
                    height={300}
                    alt="Bottle design features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <h2 className="text-2xl font-bold">Premium Design & Durability</h2>
                  <p className="text-gray-500">
                    AquaSync bottles combine sleek aesthetics with rugged construction, ensuring they look great while withstanding the demands of your active lifestyle.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Impact-resistant materials
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Ergonomic grip design
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Multiple color options
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Leak-proof guaranteed
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Upgrade Your Hydration?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of satisfied customers who've transformed their hydration habits with AquaSync bottles.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/pricing">
                <Button size="lg" onClick={() => toast({
                  title: "AquaSync Premium",
                  description: "Check out our latest smart bottle collection!",
                })}>
                  Shop Bottles
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
