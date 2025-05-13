import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { FlaskConical, Lightbulb } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "AquaSync Steel",
      description: "Premium stainless steel bottle with UV purification technology",
      price: 79.99,
      features: [
        "Premium 18/8 stainless steel construction",
        "24-hour temperature retention (hot/cold)",
        "Built-in UV-C LED purification system",
        "Advanced water filtration technology",
        "Smart cap with LED indicators",
        "1-year comprehensive warranty"
      ],
      cta: "Add to Cart",
      popular: false,
      image: "/stainless-steel-bottle.jpg",
      icon: <FlaskConical className="h-8 w-8 text-primary" />
    },
    {
      name: "AquaSync Ultra",
      description: "High-performance Tritan™ plastic bottle with UV purification",
      price: 59.99,
      features: [
        "BPA-free Tritan™ plastic construction",
        "12-hour temperature retention",
        "Built-in UV-C LED purification system",
        "Standard water filtration",
        "Transparent design with purification indicator",
        "6-month warranty"
      ],
      cta: "Add to Cart",
      popular: true,
      image: "/plastic-bottle.jpg",
      icon: <FlaskConical className="h-8 w-8 text-primary" />
    },
    {
      name: "AquaSync Copper",
      description: "Premium copper bottle with integrated UV purification",
      price: 99.99,
      features: [
        "Pure copper construction with protective coating",
        "Natural antimicrobial properties",
        "24-hour temperature retention",
        "Advanced UV-C LED purification system",
        "Premium filtration technology",
        "2-year comprehensive warranty"
      ],
      cta: "Add to Cart",
      popular: false,
      image: "/copper-bottle.jpg",
      icon: <FlaskConical className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <Layout>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">AquaSync Smart Bottles</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Advanced hydration with built-in UV purification technology
              </p>
            </div>
          </div>
          
          <div className="grid gap-6 pt-12 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.name} className={`flex flex-col ${product.popular ? 'border-primary shadow-lg' : ''}`}>
                {product.popular && (
                  <div className="bg-primary text-primary-foreground py-1 text-center text-sm font-medium">
                    Best Seller
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {product.icon}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-3xl font-bold">${product.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <div className="relative">
                        <FlaskConical className="h-20 w-20 text-primary" />
                        <div className="absolute -top-1 right-3 animate-pulse">
                          <Lightbulb className="h-6 w-6 text-purple-500" />
                          <Lightbulb className="h-4 w-4 text-yellow-400 absolute -top-2 -right-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
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
                  <Button className={`w-full ${product.popular ? '' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    {product.cta}
                  </Button>
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
              <h2 className="text-3xl font-bold mb-4">Why Choose AquaSync?</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">How does the UV purification work?</h3>
                  <p className="text-gray-500">Our patented UV-C LED technology eliminates up to 99.9999% of bacteria, viruses, and protozoa from your water. Simply press the button on the cap to activate the purification cycle.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">How long does the battery last?</h3>
                  <p className="text-gray-500">The integrated lithium-ion battery provides up to 7 days of regular use and can be recharged via the USB-C port located on the bottle cap.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">Are replacement filters available?</h3>
                  <p className="text-gray-500">Yes, we offer replacement filter packs that can be purchased separately. Each filter lasts approximately 2 months with regular use.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-medium mb-2">Do you offer international shipping?</h3>
                  <p className="text-gray-500">We currently ship to over 30 countries worldwide. Check our shipping policy for specific details about your region.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-950">
                <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
                <p className="text-gray-500 mb-6">
                  Looking for corporate gifts or custom branding? Our enterprise team can create the perfect solution for your organization.
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

export default Products;
