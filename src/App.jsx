export default function App() {
  return (
    <main style={{ fontFamily: 'sans-serif', lineHeight: 1.6, paddingBottom: '4rem' }}>
      {/* Header */}
      <header style={{ position: 'fixed', top: 0, width: '100%', background: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 999 }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
          AI<span style={{ color: '#2563eb' }}>Testimonial</span>
        </div>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="#usecases">Use Cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#how">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#demo" style={{ background: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}>Request a Demo</a>
      </header>

      {/* Hero Section */}
      <section style={{ paddingTop: '7rem', paddingBottom: '4rem', textAlign: 'center', background: 'linear-gradient(to bottom, #fff, #f3f4f6)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Hyper-realistic AI testimonials tailored to your brand – within 24 hours.</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto', color: '#4b5563' }}>
          Professional, affordable and fully customized video testimonials – no actors or studios needed.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
          <a href="#get-started" style={{ background: '#2563eb', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none' }}>Get Started</a>
          <a href="#demo" style={{ border: '1px solid #2563eb', color: '#2563eb', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none' }}>Watch Demo</a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>How It Works</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {[
            { title: "1. Tell us your message", text: "You submit your product or service and your core message." },
            { title: "2. We script & generate", text: "We write the perfect script and generate your testimonial with AI." },
            { title: "3. You receive your video", text: "Delivered in 24–48 hours, ready to publish anywhere." }
          ].map((item, idx) => (
            <div key={idx} style={{ maxWidth: '300px', background: '#f9fafb', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 0 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{item.title}</h3>
              <p style={{ color: '#4b5563' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section id="usecases" style={{ background: '#f3f4f6', padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Use Cases</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {[
            { title: "Coaches & Consultants", text: "Build instant trust with high-quality testimonials that speak directly to your audience." },
            { title: "Agencies", text: "Resell white-label testimonials and elevate your client results without production costs." },
            { title: "Real Estate & Local Services", text: "Showcase authentic client success stories and increase trust in your local market." }
          ].map((item, idx) => (
            <div key={idx} style={{ maxWidth: '300px', background: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 0 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{item.title}</h3>
              <p style={{ color: '#4b5563' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Pricing</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {[
            { title: "Starter", price: "$49/video", text: "Perfect for one-off testimonials." },
            { title: "Pro", price: "$199 / 5 videos", text: "Bundle offer for growing brands." },
            { title: "Agency", price: "Custom pricing", text: "White-label, bulk orders, premium features." }
          ].map((item, idx) => (
            <div key={idx} style={{ maxWidth: '300px', background: '#f9fafb', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 0 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>{item.title}</h3>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.price}</p>
              <p style={{ color: '#4b5563' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" style={{ background: '#f3f4f6', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Get in Touch</h2>
        <p style={{ color: '#4b5563', marginBottom: '1rem' }}>Have questions? Want a custom demo? Let’s talk.</p>
        <a href="#demo" style={{ background: '#2563eb', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none' }}>Request a Demo</a>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1rem', textAlign: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
        © {new Date().getFullYear()} AI Testimonial. All rights reserved.
      </footer>
    </main>
  );
}
