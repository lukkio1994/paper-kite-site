# PageReference – SaaS & Dashboard Pages

## SaaS & Dashboard Pages

---
### 13 Dashboard
A dashboard page with sidebar navigation and widgets.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge } from '@/app/components/ui';
import { NavItem } from '@/app/components/navigation';

export default function DashboardPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="flex">
        <aside className="w-64 bg-surface border-r border-border p-4">
          <nav>
            <NavItem href="/dashboard" active>Dashboard</NavItem>
            <NavItem href="/dashboard/settings">Settings</NavItem>
            <NavItem href="/dashboard/billing">Billing</NavItem>
          </nav>
        </aside>
        <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border">
              <h2 className="font-semibold text-xl mb-2 text-foreground">Widget {i}</h2>
              <Badge className="bg-accent text-white">Active</Badge>
            </Card>
          ))}
        </main>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 14 Settings
A user settings page for profile and password changes.

```tsx
import { Container } from '@/app/components/layout';
import { Input, Toggle, Button } from '@/app/components/ui';

export default function SettingsPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="max-w-xl mx-auto py-16">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Profile Settings</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-muted">Name</label>
            <Input placeholder="Your name" />
          </div>
          <div>
            <label className="block mb-2 text-muted">Email</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="flex items-center gap-2">
            <Toggle />
            <span className="text-muted">Enable notifications</span>
          </div>
          <Button className="bg-primary text-white">Save Changes</Button>
        </form>
        <h2 className="text-xl font-bold mt-12 mb-4 text-foreground">Change Password</h2>
        <form className="space-y-4">
          <Input type="password" placeholder="Current password" />
          <Input type="password" placeholder="New password" />
          <Button className="bg-primary text-white">Update Password</Button>
        </form>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 15 Billing
A billing page with subscription, payment, and invoices.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Button, Input, Accordion, Link } from '@/app/components/ui';

export default function BillingPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="max-w-2xl mx-auto py-16">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Billing</h1>
        <Card className="mb-8 p-6 bg-surface border border-border">
          <h2 className="font-semibold text-lg mb-2 text-foreground">Subscription Plan</h2>
          <Button className="bg-primary text-white">Upgrade Plan</Button>
        </Card>
        <Card className="mb-8 p-6 bg-surface border border-border">
          <h2 className="font-semibold text-lg mb-2 text-foreground">Payment Method</h2>
          <Input placeholder="Card number" />
          <Button className="bg-primary text-white mt-2">Update Payment</Button>
        </Card>
        <Accordion items={[
          { title: 'Invoice #123', content: <Link href="#">Download PDF</Link> },
          { title: 'Invoice #122', content: <Link href="#">Download PDF</Link> }
        ]} />
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 16 Team Management
A team management page with member list and invite form.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Avatar, Button, Input } from '@/app/components/ui';

export default function TeamManagementPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="max-w-3xl mx-auto py-16">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Team Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[1,2].map(i => (
            <Card key={i} className="flex items-center gap-4 p-6 bg-surface border border-border">
              <Avatar name={`Member ${i}`} />
              <div>
                <div className="font-semibold text-foreground">Member {i}</div>
                <Button size="sm" className="ml-4 bg-primary text-white">Remove</Button>
              </div>
            </Card>
          ))}
        </div>
        <form className="flex gap-2">
          <Input placeholder="Invite by email" />
          <Button className="bg-primary text-white">Send Invite</Button>
        </form>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 17 Notifications
A notifications page with a list of notifications.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge } from '@/app/components/ui';

export default function NotificationsPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="max-w-2xl mx-auto py-16">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Notifications</h1>
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <Card key={i} className="flex items-center gap-4 p-4 bg-surface border border-border">
              <Badge className="bg-accent text-white">New</Badge>
              <div className="text-foreground">Notification message {i}</div>
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
### 18 User Profile ([username])
A user profile page with avatar, info, and bio.

```tsx
import { Container } from '@/app/components/layout';
import { Avatar, Textarea, Button } from '@/app/components/ui';

export default function UserProfilePage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="max-w-xl mx-auto py-16 text-center">
        <Avatar name="Jane Doe" size="xl" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-foreground">Jane Doe</h1>
        <p className="text-muted mb-6">@janedoe</p>
        <Textarea className="mb-4" placeholder="User bio..." />
        <Button className="bg-primary text-white">Update Bio</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 19 Admin Panel
An admin panel with dashboard summary and user management.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Button } from '@/app/components/ui';

export default function AdminPanelPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="max-w-5xl mx-auto py-16">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Admin Panel</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border">
              <h2 className="font-semibold text-xl mb-2 text-foreground">Summary {i}</h2>
              <p className="text-muted">Summary details...</p>
            </Card>
          ))}
        </div>
        <div className="bg-surface border border-border rounded p-6">
          <h2 className="font-semibold text-lg mb-4 text-foreground">User Management</h2>
          <table className="w-full mb-4">
            <thead>
              <tr>
                <th className="text-left text-muted">User</th>
                <th className="text-left text-muted">Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[1,2].map(i => (
                <tr key={i} className="border-b border-border">
                  <td className="py-2 text-foreground">User {i}</td>
                  <td className="py-2 text-muted">Member</td>
                  <td className="py-2">
                    <Button size="sm" className="bg-primary text-white">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```
