# Form Components Guide

This guide covers form components for building accessible and user-friendly forms.

## Components Overview

### Input
Versatile text input with validation and styling options.

**Usage:**
```tsx
import { Input } from '@/app/components/forms';

<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
  helpText="We'll never share your email"
  startIcon={<MailIcon />}
  required
/>
```

**Props:**
- `label`: string - Input label text
- `error`: string - Error message to display
- `helpText`: string - Helper text below input
- `startIcon`/`endIcon`: React.ReactNode - Icons inside input
- `variant`: 'default' | 'filled' | 'flushed'
- `inputSize`: 'sm' | 'md' | 'lg'
- All standard HTML input props

**Best Practices:**
- Always provide labels for accessibility
- Use appropriate input types (email, tel, url, etc.)
- Show validation errors clearly
- Provide helpful placeholder text
- Use icons to clarify input purpose

### Textarea
Multi-line text input for longer content.

**Usage:**
```tsx
import { Textarea } from '@/app/components/forms';

<Textarea
  label="Message"
  placeholder="Enter your message..."
  rows={4}
  error={errors.message}
  resize="vertical"
  required
/>
```

**Props:**
- `label`: string - Textarea label
- `error`: string - Error message
- `helpText`: string - Helper text
- `variant`: 'default' | 'filled' | 'flushed'
- `textareaSize`: 'sm' | 'md' | 'lg'
- `resize`: 'none' | 'vertical' | 'horizontal' | 'both'
- All standard HTML textarea props

**Best Practices:**
- Set appropriate default height with rows
- Allow vertical resizing for user flexibility
- Provide character limits when needed
- Use for content longer than single lines

### Select
Dropdown selection component with custom styling.

**Usage:**
```tsx
import { Select } from '@/app/components/forms';

const options = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" }
];

<Select
  label="Country"
  options={options}
  placeholder="Select a country"
  error={errors.country}
  required
/>
```

**Props:**
- `label`: string - Select label
- `options`: SelectOption[] - Array of options
- `placeholder`: string - Placeholder text
- `error`: string - Error message
- `variant`: 'default' | 'filled' | 'flushed'
- `selectSize`: 'sm' | 'md' | 'lg'
- All standard HTML select props

**SelectOption:**
- `value`: string - Option value
- `label`: string - Display text
- `disabled`: boolean - Disable option

**Best Practices:**
- Provide clear option labels
- Use placeholder for instructions
- Group related options when many exist
- Consider search for long option lists

### Checkbox
Checkbox input with label and description support.

**Usage:**
```tsx
import { Checkbox } from '@/app/components/forms';

<Checkbox
  label="Subscribe to newsletter"
  description="Get weekly updates about new features and products"
  checked={isSubscribed}
  onChange={(e) => setIsSubscribed(e.target.checked)}
  error={errors.subscribe}
/>
```

**Props:**
- `label`: string - Checkbox label
- `description`: string - Additional description
- `error`: string - Error message
- `size`: 'sm' | 'md' | 'lg'
- `indeterminate`: boolean - Indeterminate state
- All standard HTML input props

**Best Practices:**
- Use for binary choices and opt-ins
- Provide clear, concise labels
- Use descriptions for complex choices
- Group related checkboxes logically

### Toggle
Switch component for binary on/off settings.

**Usage:**
```tsx
import { Toggle } from '@/app/components/forms';

<Toggle
  label="Enable notifications"
  description="Receive email updates about your account"
  checked={notificationsEnabled}
  onChange={setNotificationsEnabled}
  size="md"
/>
```

**Props:**
- `checked`: boolean - Toggle state
- `onChange`: (checked: boolean) => void - Change handler
- `label`: string - Toggle label
- `description`: string - Additional description
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean - Disable toggle
- All standard HTML button props

**Best Practices:**
- Use for settings and preferences
- Provide immediate visual feedback
- Include descriptive labels
- Consider using in settings panels

### Radio
Single selection component for choosing one option from multiple choices.

**Usage:**
```tsx
import { Radio } from '@/app/components/forms';

const options = [
  { value: "small", label: "Small", description: "Perfect for 1-2 people" },
  { value: "medium", label: "Medium", description: "Great for 3-4 people" },
  { value: "large", label: "Large", description: "Ideal for 5+ people" }
];

<Radio
  label="Select size"
  options={options}
  value={selectedSize}
  onValueChange={setSelectedSize}
  orientation="vertical"
  error={errors.size}
/>
```

**Props:**
- `options`: RadioOption[] - Array of radio options
- `value`: string - Currently selected value
- `onValueChange`: (value: string) => void - Change handler
- `label`: string - Radio group label
- `orientation`: 'horizontal' | 'vertical' - Layout direction
- `size`: 'sm' | 'md' | 'lg' - Radio button size
- `error`: string - Error message
- `disabled`: boolean - Disable all options
- All standard HTML input props

**RadioOption:**
- `value`: string - Option value
- `label`: string - Option label
- `description`: string - Optional description
- `disabled`: boolean - Disable specific option

**Best Practices:**
- Use for mutually exclusive choices
- Provide clear option labels
- Use descriptions for complex options
- Consider horizontal layout for 2-3 options, vertical for more
- Always have a default selection or "None" option

### FormField
Wrapper component that provides consistent label, error, and hint styling.

**Usage:**
```tsx
import { FormField, Input } from '@/app/components/forms';

<FormField
  label="Email Address"
  error={errors.email}
  hint="We'll never share your email with anyone"
  required
>
  <Input
    type="email"
    placeholder="your@email.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</FormField>
```

**Props:**
- `label`: string - Field label
- `error`: string - Error message
- `hint`: string - Helper text
- `required`: boolean - Required indicator
- `disabled`: boolean - Disabled state
- `className`: string - Additional styling

**Benefits:**
- Consistent field styling
- Automatic accessibility attributes
- Centralized error handling
- Reduced boilerplate code

### FormError
Dedicated error display component with support for multiple errors.

**Usage:**
```tsx
import { FormError } from '@/app/components/forms';

// Single error
<FormError error="Email is required" />

// Multiple errors
<FormError error={[
  "Password must be at least 8 characters",
  "Password must contain at least one number",
  "Password must contain at least one special character"
]} />
```

**Props:**
- `error`: string | string[] | null - Error messages
- `className`: string - Additional styling
- `id`: string - Element ID for accessibility

**Best Practices:**
- Use for validation error display
- Support both single and multiple errors
- Integrate with FormField for consistency
- Provide specific, actionable error messages

## Form Patterns

### Basic Form
```tsx
import { Input, Textarea, Select, Checkbox, Button } from '@/components';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });
  
  const [errors, setErrors] = useState({});

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        error={errors.name}
        required
      />
      
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        error={errors.email}
        required
      />
      
      <Select
        label="Subject"
        options={subjectOptions}
        value={formData.subject}
        onChange={(e) => setFormData({...formData, subject: e.target.value})}
        error={errors.subject}
        required
      />
      
      <Textarea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        error={errors.message}
        rows={4}
        required
      />
      
      <Checkbox
        label="Subscribe to newsletter"
        checked={formData.newsletter}
        onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
      />
      
      <Button type="submit" fullWidth>
        Send Message
      </Button>
    </form>
  );
}
```

### Form Validation
```tsx
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

function validateForm(data) {
  try {
    schema.parse(data);
    return { isValid: true, errors: {} };
  } catch (error) {
    const errors = {};
    error.errors.forEach(err => {
      errors[err.path[0]] = err.message;
    });
    return { isValid: false, errors };
  }
}
```

### Multi-Step Form
```tsx
function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  
  const steps = [
    { title: "Personal Info", component: PersonalInfoStep },
    { title: "Contact Details", component: ContactStep },
    { title: "Review", component: ReviewStep }
  ];
  
  return (
    <div>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center',
                index < currentStep - 1 && 'text-green-600',
                index === currentStep - 1 && 'text-blue-600',
                index > currentStep - 1 && 'text-gray-400'
              )}
            >
              <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
                {index < currentStep - 1 ? '✓' : index + 1}
              </div>
              <span className="ml-2">{step.title}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Current Step */}
      <div className="mb-8">
        {React.createElement(steps[currentStep - 1].component, {
          data: formData,
          onChange: setFormData,
          errors: {}
        })}
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        
        <Button
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={currentStep === steps.length}
        >
          {currentStep === steps.length ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
```

### Dynamic Form Fields
```tsx
function DynamicForm() {
  const [fields, setFields] = useState([
    { id: 1, name: '', email: '' }
  ]);
  
  const addField = () => {
    setFields([...fields, {
      id: Date.now(),
      name: '',
      email: ''
    }]);
  };
  
  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };
  
  const updateField = (id, updates) => {
    setFields(fields.map(field =>
      field.id === id ? { ...field, ...updates } : field
    ));
  };
  
  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3>Person {index + 1}</h3>
            {fields.length > 1 && (
              <IconButton
                icon={<TrashIcon />}
                onClick={() => removeField(field.id)}
                aria-label="Remove person"
              />
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Name"
              value={field.name}
              onChange={(e) => updateField(field.id, { name: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              value={field.email}
              onChange={(e) => updateField(field.id, { email: e.target.value })}
            />
          </div>
        </div>
      ))}
      
      <Button variant="secondary" onClick={addField}>
        Add Person
      </Button>
    </div>
  );
}
```

## Accessibility Guidelines

### Labels and Instructions
- Every form control must have a label
- Use fieldsets for grouped controls
- Provide clear instructions upfront
- Associate help text with controls

### Error Handling
- Announce errors to screen readers
- Show errors near relevant fields
- Use color plus text/icons for errors
- Provide specific, actionable error messages

### Keyboard Navigation
- Logical tab order through form
- All controls keyboard accessible
- Skip links for long forms
- Clear focus indicators

### Form Validation
- Client-side validation for immediate feedback
- Server-side validation for security
- Progressive enhancement approach
- Clear success/error states

## Form State Management

### Local State
```tsx
// Simple forms with useState
const [formData, setFormData] = useState(initialData);
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
```

### Form Libraries
```tsx
// React Hook Form example
import { useForm } from 'react-hook-form';

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email', { required: 'Email is required' })}
        error={errors.email?.message}
      />
    </form>
  );
}
```

### Global State
```tsx
// Redux/Zustand for complex forms
const formSlice = createSlice({
  name: 'form',
  initialState: { data: {}, errors: {}, loading: false },
  reducers: {
    updateField: (state, action) => {
      state.data[action.payload.field] = action.payload.value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    }
  }
});
```

## Testing Strategy

### Unit Tests
- Component rendering with props
- User input handling
- Validation logic
- Error state display

### Integration Tests
- Form submission flow
- Validation integration
- Multi-step navigation
- Dynamic field operations

### Accessibility Tests
- Screen reader compatibility
- Keyboard navigation
- ARIA attributes
- Color contrast

### User Experience Tests
- Form completion rates
- Error recovery patterns
- Mobile usability
- Performance on slow devices

## Performance Considerations

### Optimization Techniques
- Debounce validation for better UX
- Lazy validation (on blur, not on change)
- Memoize expensive validation logic
- Minimize re-renders with proper state structure

### Bundle Size
- Tree-shake unused form components
- Code split complex validation schemas
- Lazy load heavy form libraries

### Runtime Performance
- Avoid inline object creation in render
- Use callback refs for form libraries
- Optimize validation for large forms
- Consider virtualization for long forms

## Advanced Form Patterns

### Form with FormField Wrapper
```tsx
import { FormField, Input, Textarea, Select, Toggle, FormError } from '@/app/components/forms';

function AdvancedForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    country: '',
    notifications: false
  });
  
  const [errors, setErrors] = useState({});

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Full Name"
        error={errors.name}
        hint="Enter your first and last name"
        required
      >
        <Input
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="John Doe"
        />
      </FormField>
      
      <FormField
        label="Email Address"
        error={errors.email}
        required
      >
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="john@example.com"
        />
      </FormField>
      
      <FormField
        label="Bio"
        error={errors.bio}
        hint="Tell us about yourself (optional)"
      >
        <Textarea
          value={formData.bio}
          onChange={(e) => setFormData({...formData, bio: e.target.value})}
          rows={4}
          placeholder="I am a developer who loves..."
        />
      </FormField>
      
      <FormField
        label="Country"
        error={errors.country}
        required
      >
        <Select
          options={countryOptions}
          value={formData.country}
          onChange={(e) => setFormData({...formData, country: e.target.value})}
          placeholder="Select your country"
        />
      </FormField>
      
      <Toggle
        label="Email Notifications"
        description="Receive updates about new features and announcements"
        checked={formData.notifications}
        onChange={(checked) => setFormData({...formData, notifications: checked})}
      />
      
      {/* Global form errors */}
      {errors.form && <FormError error={errors.form} />}
      
      <Button type="submit" fullWidth>
        Create Account
      </Button>
    </form>
  );
}
```

### Settings Panel with Toggles
```tsx
function SettingsPanel() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
    publicProfile: true,
    twoFactorAuth: false
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Notification Preferences</h2>
      
      <div className="space-y-4">
        <Toggle
          label="Email Notifications"
          description="Receive notifications via email"
          checked={settings.emailNotifications}
          onChange={(checked) => updateSetting('emailNotifications', checked)}
        />
        
        <Toggle
          label="Push Notifications"
          description="Receive push notifications in your browser"
          checked={settings.pushNotifications}
          onChange={(checked) => updateSetting('pushNotifications', checked)}
        />
        
        <Toggle
          label="Marketing Emails"
          description="Receive promotional emails and updates"
          checked={settings.marketingEmails}
          onChange={(checked) => updateSetting('marketingEmails', checked)}
        />
      </div>
      
      <hr className="my-6" />
      
      <h2 className="text-xl font-semibold">Privacy Settings</h2>
      
      <div className="space-y-4">
        <Toggle
          label="Public Profile"
          description="Make your profile visible to other users"
          checked={settings.publicProfile}
          onChange={(checked) => updateSetting('publicProfile', checked)}
        />
        
        <Toggle
          label="Two-Factor Authentication"
          description="Add an extra layer of security to your account"
          checked={settings.twoFactorAuth}
          onChange={(checked) => updateSetting('twoFactorAuth', checked)}
          size="lg"
        />
      </div>
    </div>
  );
}
```

### Error Handling Patterns
```tsx
function FormWithComplexValidation() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[^A-Za-z0-9]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    return errors;
  };

  const handlePasswordChange = (value) => {
    setFormData(prev => ({ ...prev, password: value }));
    
    const passwordErrors = validatePassword(value);
    setErrors(prev => ({
      ...prev,
      password: passwordErrors.length > 0 ? passwordErrors : null
    }));
  };

  return (
    <form className="space-y-6">
      <FormField
        label="Password"
        error={errors.password}
        required
      >
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          placeholder="Enter a strong password"
        />
      </FormField>
      
      <FormField
        label="Confirm Password"
        error={errors.confirmPassword}
        required
      >
        <Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData(prev => ({ 
            ...prev, 
            confirmPassword: e.target.value 
          }))}
          placeholder="Confirm your password"
        />
      </FormField>
    </form>
  );
}
```

## Component Composition

### Custom Form Controls
```tsx
// Create reusable form field combinations
function EmailField({ label = "Email Address", ...props }) {
  return (
    <FormField label={label} {...props}>
      <Input
        type="email"
        placeholder="your@email.com"
        {...props}
      />
    </FormField>
  );
}

function PasswordField({ label = "Password", showStrength = false, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <FormField label={label} {...props}>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          {...props}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {showStrength && <PasswordStrength password={props.value} />}
    </FormField>
  );
}
```

### Form Sections
```tsx
function FormSection({ title, children, className }) {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

// Usage
<form className="space-y-8">
  <FormSection title="Personal Information">
    <EmailField error={errors.email} />
    <PasswordField error={errors.password} showStrength />
  </FormSection>
  
  <FormSection title="Preferences">
    <Toggle label="Email notifications" />
    <Toggle label="SMS notifications" />
  </FormSection>
</form>
```
