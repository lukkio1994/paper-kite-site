# PageReference – Utility Pages

## Utility Pages

---
### 10 Login
A login page with email, password, and actions.

```tsx
import { Container } from '@/app/components/layout';
import { Input, Button } from '@/app/components/ui';

export default function LoginPage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] bg-background text-foreground">
        <form className="w-full max-w-sm space-y-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="bg-primary text-white w-full">Login</Button>
          <Button variant="ghost" className="w-full">Forgot Password?</Button>
        </form>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 11 Register
A registration page with name, email, password.

```tsx
import { Container } from '@/app/components/layout';
import { Input, Button } from '@/app/components/ui';

export default function RegisterPage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] bg-background text-foreground">
        <form className="w-full max-w-sm space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button className="bg-primary text-white w-full">Register</Button>
        </form>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 12 Forgot Password
A forgot password page with email input and reset button.

```tsx
import { Container } from '@/app/components/layout';
import { Input, Button } from '@/app/components/ui';

export default function ForgotPasswordPage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] bg-background text-foreground">
        <form className="w-full max-w-sm space-y-4">
          <Input placeholder="Email" type="email" />
          <Button className="bg-primary text-white w-full">Send Reset Link</Button>
        </form>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 41 Search
A search page with input and results.

```tsx
import { Container } from '@/app/components/layout';
import { Input, Card } from '@/app/components/ui';

export default function SearchPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Search</h1>
        <Input placeholder="Search..." className="mb-6" />
        <div className="space-y-4">
          {[1,2].map(i => (
            <Card key={i} className="p-4 bg-surface border border-border">Result {i}</Card>
          ))}
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 43 Sitemap XML
Automatic Next.js route, no UI page.

---
### 44 RSS Feed
Automatic Next.js route, no UI page.

---
### 45 Maintenance
A maintenance page with message and contact links.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function MaintenancePage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Maintenance</h1>
        <p className="text-lg mb-6 text-muted">We’re currently performing scheduled maintenance. Please check back soon.</p>
        <Button className="bg-primary text-white" href="mailto:support@example.com">Contact Support</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 46 Verify Email
A verify email page with success message and login button.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function VerifyEmailPage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-4">Email Verified!</h1>
        <p className="text-lg mb-6 text-muted">Your email has been successfully verified.</p>
        <Button className="bg-primary text-white" href="/login">Login</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 47 Confirm Subscription
A confirm subscription page with confirmation and CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function ConfirmSubscriptionPage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-4">Subscription Confirmed</h1>
        <p className="text-lg mb-6 text-muted">Your subscription is now active.</p>
        <Button className="bg-primary text-white">Go to Dashboard</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 48 Unsubscribe
An unsubscribe page with confirmation and re-subscribe button.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function UnsubscribePage() {
  return (
    <>
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background text-foreground">
        <h1 className="text-3xl font-bold mb-4">You’ve Unsubscribed</h1>
        <p className="text-lg mb-6 text-muted">You will no longer receive updates.</p>
        <Button className="bg-primary text-white">Resubscribe</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 49 Cookie Preferences
A cookie preferences page with settings form.

```tsx
import { Container } from '@/app/components/layout';
import { Toggle, Button } from '@/app/components/ui';

export default function CookiePreferencesPage() {
  return (
    <>
      <Container className="py-16 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Cookie Preferences</h1>
        <form className="space-y-4">
          <div className="flex items-center gap-2">
            <Toggle />
            <span className="text-muted">Enable analytics cookies</span>
          </div>
          <Button className="bg-primary text-white">Save Preferences</Button>
        </form>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```
