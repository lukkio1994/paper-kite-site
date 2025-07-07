# PageReference – Ecommerce Pages

## Ecommerce Pages

---
### 28 Shop
A shop page with a grid of products.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Badge, Button } from '@/app/components/ui';

export default function ShopPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <Card key={i} className="p-6 bg-surface border border-border flex flex-col items-center">
              <div className="w-32 h-32 bg-background border border-border mb-4" />
              <h2 className="font-semibold text-xl mb-2 text-foreground">Product {i}</h2>
              <Badge className="mb-2 bg-accent text-white">New</Badge>
              <Button className="bg-primary text-white mt-2">Add to Cart</Button>
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
### 29 Product Detail ([slug])
A product detail page with images, info, and add to cart.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Button, Modal } from '@/app/components/ui';

export default function ProductDetailPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Modal trigger={<div className="w-full h-64 bg-background border border-border cursor-pointer" />}>Zoomed Image</Modal>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 text-foreground">Product Title</h1>
            <p className="text-lg mb-4 text-muted">$99.00</p>
            <p className="mb-6 text-foreground">Product description goes here.</p>
            <Button className="bg-primary text-white">Add to Cart</Button>
          </div>
        </div>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 30 Cart
A cart page with list of items and checkout CTA.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Button } from '@/app/components/ui';

export default function CartPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Your Cart</h1>
        <div className="space-y-4 mb-8">
          {[1,2].map(i => (
            <Card key={i} className="flex items-center justify-between p-4 bg-surface border border-border">
              <div>
                <div className="font-semibold text-foreground">Product {i}</div>
                <div className="text-muted">$99.00</div>
              </div>
              <Button size="sm" className="bg-destructive text-white">Remove</Button>
            </Card>
          ))}
        </div>
        <Button className="bg-primary text-white w-full">Checkout</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 31 Checkout
A checkout page with billing form and order summary.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Input, Select, Button } from '@/app/components/ui';

export default function CheckoutPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <h2 className="text-xl font-bold mb-2 text-foreground">Billing Info</h2>
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input placeholder="Address" />
          <Select options={[{ label: 'Visa', value: 'visa' }, { label: 'Mastercard', value: 'mc' }]} />
          <Button className="bg-primary text-white">Pay Now</Button>
        </form>
        <Card className="p-6 bg-surface border border-border">
          <h2 className="font-semibold text-lg mb-4 text-foreground">Order Summary</h2>
          <div className="mb-2 text-foreground">Product 1 x1</div>
          <div className="mb-2 text-foreground">Product 2 x2</div>
          <div className="font-bold text-foreground mt-4">Total: $297.00</div>
        </Card>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 32 Order Confirmation
An order confirmation page with thank you and details.

```tsx
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export default function OrderConfirmationPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-lg mb-6 text-muted">Your order #12345 has been placed.</p>
        <Button className="bg-primary text-white" href="/shop">Continue Shopping</Button>
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```

---
### 33 Wishlist
A wishlist page with saved items.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Button } from '@/app/components/ui';

export default function WishlistPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Wishlist</h1>
        <div className="space-y-4">
          {[1,2].map(i => (
            <Card key={i} className="flex items-center justify-between p-4 bg-surface border border-border">
              <div className="font-semibold text-foreground">Product {i}</div>
              <Button size="sm" className="bg-destructive text-white">Remove</Button>
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
### 34 Order History
An order history page with past orders and details.

```tsx
import { Container } from '@/app/components/layout';
import { Card, Accordion } from '@/app/components/ui';

export default function OrderHistoryPage() {
  return (
    <>
      {/* Header in layout */}
      <Container className="py-16 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-foreground">Order History</h1>
        <Accordion items={[
          { title: 'Order #12345', content: <Card className="p-4 bg-surface border border-border">Order details...</Card> },
          { title: 'Order #12344', content: <Card className="p-4 bg-surface border border-border">Order details...</Card> }
        ]} />
      </Container>
      {/* Footer in layout */}
    </>
  );
}
```
