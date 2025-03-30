import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow z-50 flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold tracking-tight">
          AI<span className="text-blue-600">Testimonial</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#usecases" className="hover:text-blue-600">Use Cases</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#how" className="hover:text-blue-600">How It Works</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <Button className="bg-blue-600 text-white">Request a Demo</Button>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hyper-realistic AI testimonials tailored to your brand – within 24 hours.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Professional, affordable and fully customized video testimonials – no actors or studios needed.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 text-white">Get Started</Button>
          <Button variant="outline">Watch Demo</Button>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">1. Tell us your message</h3>
              <p className="text-gray-700">You submit your product or service and your core message.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">2. We script & generate</h3>
              <p className="text-gray-700">We write the perfect script and generate your testimonial with AI.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">3. You receive your video</h3>
              <p className="text-gray-700">Delivered in 24–48 hours, ready to publish anywhere.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Coaches & Consultants</h3>
              <p className="text-gray-700">Build instant trust with high-quality testimonials that speak directly to your audience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Agencies</h3>
              <p className="text-gray-700">Resell white-label testimonials and elevate your client results without production costs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Real Estate & Local Services</h3>
              <p className="text-gray-700">Showcase authentic client success stories and increase trust in your local market.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <p className="text-2xl font-bold mb-2">$49/video</p>
              <p className="text-gray-700">Perfect for one-off testimonials.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$199 / 5 videos</p>
              <p className="text-gray-700">Bundle offer for growing brands.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Agency</h3>
              <p className="text-2xl font-bold mb-2">Custom pricing</p>
              <p className="text-gray-700">White-label, bulk orders, premium features.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-6">Have questions? Want a custom demo? Let’s talk.</p>
        <Button className="bg-blue-600 text-white">Request a Demo</Button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Testimonial. All rights reserved.
      </footer>
    </main>
  );
}
