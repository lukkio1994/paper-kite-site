# PageReference – Content & Marketing Pages

## Content & Marketing Pages

---
### 4 Blog
A blog listing page with search, categories, and post grid.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Input, Badge, Button } from '@/app/components/ui';

export default function BlogPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Blog</h1>
        <Input placeholder="Search posts..." className="mb-4 bg-background text-foreground border border-border" />
        <div className="flex gap-2 mb-6">
          <Badge className="bg-accent text-white">All</Badge>
          <Badge className="bg-surface text-foreground">Tech</Badge>
          <Badge className="bg-surface text-foreground">News</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border">
              <div className="w-full h-32 bg-background border border-border mb-4" />
              <h2 className="font-semibold text-xl mb-2 text-foreground">Post Title {i}</h2>
              <p className="text-muted mb-2">Summary of the post...</p>
              <Button className="bg-primary text-white">Read More</Button>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="bg-primary text-white">Previous</Button>
          <Button className="bg-primary text-white ml-2">Next</Button>
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 5 Blog Post ([slug])
A blog post page with hero, content, TOC, related posts, and comments.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Avatar, Accordion, Textarea, Button } from '@/app/components/ui';

export default function BlogPostPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Blog Post Title</h1>
        <div className="flex items-center gap-4 mb-6">
          <Avatar name="Jane Doe" />
          <span className="text-muted">July 5, 2025</span>
        </div>
        <Accordion items={[
          { title: 'Table of Contents', content: <ul><li>Section 1</li><li>Section 2</li></ul> }
        ]} />
        <div className="prose prose-invert max-w-none my-8">
          <p>Rich text content goes here...</p>
        </div>
        <h2 className="text-xl font-bold mb-4 text-foreground">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[1,2].map(i => (
            <Card key={i} className="p-4 bg-surface border border-border">Related Post {i}</Card>
          ))}
        </div>
        <h2 className="text-xl font-bold mb-4 text-foreground">Comments</h2>
        <Textarea className="mb-2" placeholder="Add a comment..." />
        <Button className="bg-primary text-white">Submit</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 6 Pricing
A pricing page with plans, comparison, FAQ, and CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge, Button, Tabs, Accordion } from '@/app/components/ui';

export default function PricingPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Choose your plan</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border text-center">
              <h2 className="font-semibold text-xl mb-2 text-foreground">Plan {i}</h2>
              <Badge className="mb-2 bg-accent text-white">Popular</Badge>
              <Button className="bg-primary text-white mt-2">Select</Button>
            </Card>
          ))}
        </div>
        <Tabs tabs={[
          { label: 'Features', content: <div>Feature comparison table...</div> },
          { label: 'FAQ', content: <Accordion items={[
            { title: 'What is included?', content: 'Everything you need.' },
            { title: 'Can I cancel?', content: 'Yes, anytime.' }
          ]} /> }
        ]} />
        <div className="text-center mt-8">
          <Button className="bg-primary text-white">Sign Up Now</Button>
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 20 Features
A features page with a grid of features.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge } from '@/app/components/ui';

export default function FeaturesPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border text-center">
              <h2 className="font-semibold text-xl mb-2 text-foreground">Feature {i}</h2>
              <Badge className="bg-accent text-white">New</Badge>
            </Card>
          ))}
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 21 Testimonials / Reviews
A testimonials page with a grid of reviews.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Avatar } from '@/app/components/ui';

export default function TestimonialsPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2].map(i => (
            <Card key={i} className="flex items-center gap-4 p-6 bg-surface border border-border">
              <Avatar name={`User ${i}`} />
              <div>
                <div className="font-semibold text-foreground">User {i}</div>
                <div className="text-muted">“Great product!”</div>
              </div>
            </Card>
          ))}}
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 22 Case Studies ([slug])
A case study detail page with title, summary, body, and CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function CaseStudyPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-foreground">Case Study Title</h1>
        <p className="text-muted mb-6">Case study summary goes here.</p>
        <div className="mb-8 text-foreground">Body content...</div>
        <Button className="bg-primary text-white">Contact Us</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 23 Portfolio / Work
A portfolio page with a grid of projects.

```tsx
import { Container } from '@/app/components/layout';
import { Card } from '@/app/components/ui';

export default function PortfolioPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border text-center">
              <h2 className="font-semibold text-xl mb-2 text-foreground">Project {i}</h2>
              <div className="text-muted">Project description...</div>
            </Card>
          ))}
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 24 Project Detail ([slug])
A project detail page with hero image, details, and gallery.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Modal } from '@/app/components/ui';

export default function ProjectDetailPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <Modal trigger={<div className="w-full h-64 bg-background border border-border cursor-pointer mb-6" />}>Gallery Image</Modal>
        <h1 className="text-3xl font-bold mb-2 text-foreground">Project Title</h1>
        <div className="mb-6 text-muted">Project details and description...</div>
        <Card className="p-4 bg-surface border border-border">Gallery or additional images...</Card>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 25 Landing Page (/landing/feature-x)
A landing page with hero, features, testimonials, pricing, and CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge, Button, Avatar } from '@/app/components/ui';

export default function LandingPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 text-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Feature X</h1>
        <p className="text-lg mb-6 text-muted">Landing page for feature X.</p>
        <Button size="lg" className="mb-4 bg-primary text-white">Get Started</Button>
      </Container>
      <Container className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 bg-surface border border-border">
        {[1,2,3].map(i => (
          <Card key={i} className="p-6 text-center bg-surface border border-border">
            <h2 className="font-semibold text-xl mb-2 text-foreground">Feature {i}</h2>
            <Badge className="bg-accent text-white">New</Badge>
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
                <div className="font-semibold text-foreground">User {i}</div>
                <div className="text-muted">Testimonial text.</div>
                <Badge className="mt-2 bg-accent text-white">Pro User</Badge>
              </div>
            </Card>
          ))}}
        </div>
      </Container>
      <Container className="py-8 flex flex-col md:flex-row items-center justify-between bg-primary-light rounded-lg mt-8">
        <div className="text-lg font-medium mb-4 md:mb-0 text-foreground">Ready to get started?</div>
        <Button size="lg" className="bg-primary text-white">Sign Up Now</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 26 Changelog
A changelog page with a list of updates.

```tsx
import { Container } from '@/app/components/layout';
import { Accordion, Badge } from '@/app/components/ui';

export default function ChangelogPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Changelog</h1>
        <Accordion items={[
          { title: 'v1.2.0', content: <div><Badge className="bg-success text-white mr-2">New</Badge> Added feature X.</div> },
          { title: 'v1.1.0', content: <div><Badge className="bg-warning text-white mr-2">Update</Badge> Improved performance.</div> }
        ]} />
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 27 Roadmap
A roadmap page with near/mid/long-term tabs and cards.

```tsx
import { Container } from '@/app/components/layout';
import { Tabs, Card } from '@/app/components/ui';

export default function RoadmapPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Roadmap</h1>
        <Tabs tabs={[
          { label: 'Near-term', content: <Card className="p-4 bg-surface border border-border">Near-term goals...</Card> },
          { label: 'Mid-term', content: <Card className="p-4 bg-surface border border-border">Mid-term goals...</Card> },
          { label: 'Long-term', content: <Card className="p-4 bg-surface border border-border">Long-term goals...</Card> }
        ]} />
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 35 FAQ
A FAQ page with a list of questions.

```tsx
import { Container } from '@/app/components/layout';
import { Accordion } from '@/app/components/ui';

export default function FAQPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h1>
        <Accordion items={[
          { title: 'How does it work?', content: 'It just works.' },
          { title: 'Can I get support?', content: 'Yes, contact us anytime.' }
        ]} />
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 36 Support
A support page with a form for help requests.

```tsx
import { Container } from '@/app/components/layout';
import { Input, Textarea, Button } from '@/app/components/ui';

export default function SupportPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Support</h1>
        <form className="space-y-4">
          <Input placeholder="Your email" />
          <Textarea placeholder="How can we help?" />
          <Button className="bg-primary text-white w-full">Submit</Button>
        </form>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 37 Forum / Discussions
A forum page with a list of topics and CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge, Button } from '@/app/components/ui';

export default function ForumPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Forum</h1>
        <div className="space-y-4 mb-8">
          {[1,2].map(i => (
            <Card key={i} className="flex items-center gap-4 p-4 bg-surface border border-border">
              <Badge className="bg-accent text-white">New</Badge>
              <div className="text-foreground">Topic {i}</div>
            </Card>
          ))}}
        </div>
        <Button className="bg-primary text-white">Start New Topic</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 38 Events
An events page with a list of upcoming events.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge } from '@/app/components/ui';

export default function EventsPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2].map(i => (
            <Card key={i} className="flex items-center gap-4 p-6 bg-surface border border-border">
              <Badge className="bg-accent text-white">Upcoming</Badge>
              <div className="text-foreground">Event {i}</div>
            </Card>
          ))}}
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 39 Event Detail ([slug])
An event detail page with image, date, location, and CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function EventDetailPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <div className="w-full h-64 bg-background border border-border mb-6" />
        <h1 className="text-3xl font-bold mb-2 text-foreground">Event Title</h1>
        <div className="mb-2 text-muted">July 5, 2025 • New York, NY</div>
        <div className="mb-6 text-foreground">Event description goes here.</div>
        <Button className="bg-primary text-white">Register</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 40 Gallery / Showcase
A gallery page with a grid of images and modal fullscreen.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Modal } from '@/app/components/ui';

export default function GalleryPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Modal key={i} trigger={<Card className="p-6 bg-surface border border-border cursor-pointer">Image {i}</Card>}>
              <div className="w-full h-96 bg-background border border-border">Fullscreen Image {i}</div>
            </Modal>
          ))}}
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 42 Docs / Knowledge Base
A docs/knowledge base page with a list of articles.

```tsx
import { Container } from '@/app/components/layout';
import { Card } from '@/app/components/ui';

export default function DocsPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Docs</h1>
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <Card key={i} className="p-4 bg-surface border border-border">Article {i}</Card>
          ))}}
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 50 Press Kit / Media
A press kit page with downloadable assets and logos.

```tsx
import { Container } from '@/app/components/layout';
import { Button, Link } from '@/app/components/ui';

export default function PressKitPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Press Kit</h1>
        <div className="mb-6">
          <Button className="bg-primary text-white mr-2">Download All Assets</Button>
          <Link href="#" className="text-primary">Logos</Link>
          <Link href="#" className="text-primary ml-2">Screenshots</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-32 bg-background border border-border">Logo</div>
          <div className="w-full h-32 bg-background border border-border">Screenshot</div>
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 51 Careers / Work With Us
A careers page with open roles, culture, and application CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Button } from '@/app/components/ui';

export default function CareersPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Careers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[1,2].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border">
              <h2 className="font-semibold text-xl mb-2 text-foreground">Role {i}</h2>
              <Button className="bg-primary text-white mt-2">Apply</Button>
            </Card>
          ))}}
        </div>
        <div className="mb-8 text-foreground">Company culture description...</div>
        <Button className="bg-primary text-white">Apply Now</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 52 Showcase Detail ([slug])
A showcase detail page with image/gallery and description.

```tsx
import { Container } from '@/app/components/layout';
import { Modal } from '@/app/components/ui';

export default function ShowcaseDetailPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <Modal trigger={<div className="w-full h-64 bg-background border border-border cursor-pointer mb-6" />}>Gallery Image</Modal>
        <h1 className="text-3xl font-bold mb-2 text-foreground">Showcase Title</h1>
        <div className="mb-6 text-muted">Showcase description...</div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 53 Community Page
A community page with Discord/social links and guidelines.

```tsx
import { Container } from '@/app/components/layout';
import { IconButton, Link } from '@/app/components/ui';

export default function CommunityPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Community</h1>
        <div className="flex gap-4 mb-8">
          <IconButton icon="discord" aria-label="Discord" />
          <IconButton icon="twitter" aria-label="Twitter" />
          <Link href="mailto:support@example.com" className="text-primary">Email Us</Link>
        </div>
        <div className="mb-8 text-foreground">Community guidelines and info...</div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```
