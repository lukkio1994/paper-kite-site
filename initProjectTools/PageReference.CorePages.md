# PageReference – Core Pages

## Core Pages

---
### 1 Home
A modern landing page with hero, features, testimonials, call-to-action, and newsletter signup.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Button, Avatar, Badge, Input } from '@/app/components/ui';
import { ThemeToggle } from '@/app/components/utils';
import { SEO } from '@/app/components/utils';

export default function HomePage() {
  return (
    <>
      <SEO title="Home" description="Welcome to our Next.js baseline." />
      {/* Header would be included in layout */}
      <Container className="py-16 text-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg mb-6 text-muted">Build modern apps, fast.</p>
        <Button size="lg" className="mb-4 bg-primary text-white">Get Started</Button>
        <div className="flex justify-center mt-4"><ThemeToggle /></div>
      </Container>
      <Container className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface border border-border">
        {[1,2,3].map(i => (
          <Card key={i} className="p-6 text-center bg-surface border border-border">
            <h2 className="font-semibold text-xl mb-2 text-foreground">Feature {i}</h2>
            <p className="text-muted">Feature description goes here.</p>
          </Card>
        ))}
      </Container>
      <Container className="py-12 bg-background">
        <h2 className="text-2xl font-bold mb-6 text-center text-foreground">What our users say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2].map(i => (
            <Card key={i} className="flex items-center gap-4 p-6 bg-surface border border-border">
              <Avatar name={`User ${i}`} />
              <div>
                <div className="font-semibold text-foreground">{`User ${i}`}</div>
                <div className="text-muted">Testimonial text.</div>
                <Badge className="mt-2 bg-accent text-white">Pro User</Badge>
              </div>
            </Card>
          ))}
        </div>
      </Container>
      <Container className="py-8 flex flex-col md:flex-row items-center justify-between bg-primary-light rounded-lg mt-8">
        <div className="text-lg font-medium mb-4 md:mb-0 text-foreground">Ready to get started?</div>
        <Button size="lg" className="bg-primary text-white">Sign Up Now</Button>
      </Container>
      <Container className="py-8 flex flex-col md:flex-row items-center justify-center gap-4 bg-surface border border-border">
        <Input placeholder="Your email" className="max-w-xs bg-background text-foreground border border-border" />
        <Button className="bg-primary text-white">Subscribe</Button>
      </Container>
      {/* Footer would be included in layout */}
    </>
  );
}
```

---
### 2 About
A company about page with mission, team, timeline, and call-to-action.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Avatar, Button, Accordion } from '@/app/components/ui';

export default function AboutPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 text-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6 text-muted">Our mission and values.</p>
      </Container>
      <Container className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface border border-border">
        {[1,2,3].map(i => (
          <Card key={i} className="p-6 text-center bg-surface border border-border">
            <Avatar name={`Team Member ${i}`} />
            <h2 className="font-semibold text-xl mb-2 text-foreground">{`Team Member ${i}`}</h2>
            <p className="text-muted">Role or bio.</p>
          </Card>
        ))}
      </Container>
      <Container className="py-8">
        <Accordion items={[
          { title: '2020', content: 'Founded the company.' },
          { title: '2022', content: 'Reached 10,000 users.' }
        ]} />
      </Container>
      <Container className="py-8 text-center">
        <Button className="bg-primary text-white">Join Us</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 3 Contact
A contact page with a form, map placeholder, and social links.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Input, Button, FormField, Textarea, IconButton, Link } from '@/app/components/ui';

export default function ContactPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 flex flex-col items-center bg-background text-foreground">
        <Card className="w-full max-w-lg p-8">
          <form className="space-y-4">
            <FormField label="Name" required>
              <Input placeholder="Your name" />
            </FormField>
            <FormField label="Email" required>
              <Input type="email" placeholder="you@example.com" />
            </FormField>
            <FormField label="Message" required>
              <Textarea placeholder="How can we help?" />
            </FormField>
            <Button type="submit" className="bg-primary text-white w-full">Send Message</Button>
          </form>
        </Card>
        <div className="w-full max-w-lg mt-8">
          <div className="h-40 bg-surface border border-border rounded flex items-center justify-center text-muted">Map Placeholder</div>
        </div>
        <div className="flex gap-4 mt-8">
          <IconButton icon="discord" aria-label="Discord" />
          <IconButton icon="twitter" aria-label="Twitter" />
          <Link href="mailto:support@example.com" className="text-primary">Email Us</Link>
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 7 Legal (Privacy, Terms)
A legal page for privacy policy or terms of service.

```tsx
import { Container } from '@/app/components/layout';

export default function LegalPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          {/* Rich text terms go here */}
          <p>This is where your privacy policy or terms of service content will appear.</p>
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 8 404 Not Found
A custom 404 error page.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function NotFoundPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background text-foreground">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6 text-muted">Sorry, the page you’re looking for doesn’t exist.</p>
        <Button className="bg-primary text-white" href="/">Return Home</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 9 500 Error Page
A custom 500 error page.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function ErrorPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background text-foreground">
        <h1 className="text-7xl font-bold mb-4">500</h1>
        <p className="text-lg mb-6 text-muted">Something went wrong. Please try again later.</p>
        <Button className="bg-primary text-white" onClick={() => window.location.reload()}>Retry</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```
