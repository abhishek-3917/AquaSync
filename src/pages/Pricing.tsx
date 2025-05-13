
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  
  const plans = [
    {
      name: "Basic",
      description: "Essential features for small teams and startups",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "Core productivity features",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced features for growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "All productivity features",
        "Integration with 50+ apps",
        "Priority support"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Unlimited team members",
        "Custom analytics",
        "All features included",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 premium support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <Layout>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the perfect plan for your team's needs. No hidden fees.
              </p>
            </div>
            
            <div className="w-full max-w-sm">
              <Tabs defaultValue="monthly" className="w-full" onValueChange={setBillingCycle}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly (20% off)</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="grid gap-6 pt-12 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground py-1 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}</span>
                    <span className="text-gray-500 ml-1">/{billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-primary">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="w-full">
                    <Button className={`w-full ${plan.popular ? '' : 'bg-gray-800 hover:bg-gray-700'}`}>
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">Can I change my plan later?</h3>
                  <p className="text-gray-500">Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-500">We accept all major credit cards, PayPal, and for annual plans, bank transfers.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">Is there a free trial?</h3>
                  <p className="text-gray-500">Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">What happens if I exceed my plan limits?</h3>
                  <p className="text-gray-500">We'll notify you when you're approaching your limits so you can upgrade if needed. We don't automatically charge for overages.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-950">
                <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
                <p className="text-gray-500 mb-6">
                  Our enterprise plans can be tailored to your organization's specific requirements. Contact our sales team to discuss your needs.
                </p>
                <Link to="/contact">
                  <Button className="w-full">Contact Sales</Button>
                </Link>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Or call us at <span className="font-medium">1-800-123-4567</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
