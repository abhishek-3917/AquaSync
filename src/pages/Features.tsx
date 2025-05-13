
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <Layout>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Features for Every Need
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the capabilities that set our product apart from the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="productivity" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="productivity">Productivity</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="productivity" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    width={500}
                    height={300}
                    alt="Productivity features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl font-bold">Boost Your Team's Productivity</h2>
                  <p className="text-gray-500">
                    Our productivity features streamline workflows, automate repetitive tasks, and provide powerful collaboration tools that help your team focus on what matters most.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Smart task automation
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Real-time collaboration
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Customizable workflows
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Priority management
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="integration" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                    width={500}
                    height={300}
                    alt="Integration features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <h2 className="text-2xl font-bold">Seamless Integration</h2>
                  <p className="text-gray-500">
                    Connect with your favorite tools and platforms without friction. Our robust API and pre-built connectors ensure smooth data flow across your entire tech stack.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      200+ app integrations
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Open API access
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Custom webhook support
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Data synchronization
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl font-bold">Enterprise-grade Security</h2>
                  <p className="text-gray-500">
                    Your data security is our top priority. Our platform features robust security measures to protect sensitive information and ensure compliance with industry standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      End-to-end encryption
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Role-based access control
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Compliance certifications
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Regular security audits
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                    width={500}
                    height={300}
                    alt="Security features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex items-center justify-center order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                    width={500}
                    height={300}
                    alt="Analytics features"
                    className="rounded-lg object-cover w-full aspect-video"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                  <h2 className="text-2xl font-bold">Advanced Analytics</h2>
                  <p className="text-gray-500">
                    Gain valuable insights with our comprehensive analytics tools. Track performance, identify trends, and make data-driven decisions with customizable dashboards and reports.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Real-time dashboards
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Custom report generation
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Predictive analysis
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Data visualization tools
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of satisfied customers who transformed their workflows with our product.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/pricing">
                <Button size="lg">View Pricing Plans</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
