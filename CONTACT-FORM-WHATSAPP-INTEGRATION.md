# Contact Form with WhatsApp Integration

## Working Contact Form Implementation

The contact form in `contact.html` uses a JavaScript-powered WhatsApp redirect system:

### How It Works:

1. **User fills form** with:
   - Full Name (required)
   - Phone Number (required, 10-digit validation)
   - Service Type (dropdown selection)
   - Location in Ahmedabad (optional)
   - Message (optional)

2. **Form validation** runs on submit:
   - Checks all required fields are filled
   - Validates phone number format (10 digits)
   - Shows error messages if validation fails

3. **WhatsApp redirect**:
   - Constructs pre-filled message with all form data
   - Opens WhatsApp Web/App with message ready to send
   - Tracks conversion event in Google Analytics

### Implementation Code

```html
<!-- Contact Form HTML -->
<form id="contactForm" onsubmit="handleFormSubmit(event)" class="space-y-4">
    <div>
        <label class="block font-bold mb-2">Full Name *</label>
        <input type="text" id="name" name="name" required 
               class="w-full border rounded px-4 py-2" 
               placeholder="Enter your full name">
    </div>
    
    <div>
        <label class="block font-bold mb-2">Phone Number *</label>
        <input type="tel" id="phone" name="phone" required 
               pattern="[0-9]{10}" 
               class="w-full border rounded px-4 py-2" 
               placeholder="10-digit mobile number">
        <p class="text-xs text-gray-500 mt-1">Enter 10-digit number without +91</p>
    </div>
    
    <div>
        <label class="block font-bold mb-2">Service Required *</label>
        <select id="service" name="service" required 
                class="w-full border rounded px-4 py-2">
            <option value="">-- Select Service --</option>
            <option value="Glass Windows">Glass Windows Installation</option>
            <option value="Aluminium Sliding Doors">Aluminium Sliding Doors</option>
            <option value="Tempered Glass">Tempered Glass Supply</option>
            <option value="Glass Partitions">Office Glass Partitions</option>
            <option value="Mirrors">Mirrors & Glass Sheets</option>
            <option value="Other">Other Glass Work</option>
        </select>
    </div>
    
    <div>
        <label class="block font-bold mb-2">Your Location</label>
        <input type="text" id="location" name="location" 
               class="w-full border rounded px-4 py-2" 
               placeholder="e.g., Chandkheda, Motera, Sabarmati">
    </div>
    
    <div>
        <label class="block font-bold mb-2">Additional Details</label>
        <textarea id="message" name="message" rows="4" 
                  class="w-full border rounded px-4 py-2" 
                  placeholder="Any specific requirements..."></textarea>
    </div>
    
    <button type="submit" 
            class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded">
        💬 Send Enquiry via WhatsApp
    </button>
</form>

<!-- JavaScript -->
<script>
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const location = document.getElementById('location').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate phone number (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit mobile number');
        return false;
    }
    
    // Validate required fields
    if (!name || !phone || !service) {
        alert('Please fill all required fields (marked with *)');
        return false;
    }
    
    // Construct WhatsApp message
    let whatsappMessage = `*New Enquiry - Ganesh Glass Centre*%0A%0A`;
    whatsappMessage += `📝 *Name:* ${encodeURIComponent(name)}%0A`;
    whatsappMessage += `📞 *Phone:* ${phone}%0A`;
    whatsappMessage += `🪟 *Service:* ${encodeURIComponent(service)}%0A`;
    
    if (location) {
        whatsappMessage += `📍 *Location:* ${encodeURIComponent(location)}%0A`;
    }
    
    if (message) {
        whatsappMessage += `%0A💬 *Message:*%0A${encodeURIComponent(message)}`;
    }
    
    whatsappMessage += `%0A%0A_Sent from ganeshglasscentre.com_`;
    
    // YOUR BUSINESS WHATSAPP NUMBER (replace with real number)
    // Format: Country code + number (no spaces, no +)
    // Example: 919876543210 for +91-98765-43210
    const businessWhatsApp = '919876543210'; // TODO: Replace with real WhatsApp number
    
    // Track conversion event
    if (typeof trackEvent === 'function') {
        trackEvent('contact_form_submit', {
            category: 'form',
            label: 'whatsapp_redirect',
            service: service
        });
    }
    
    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${businessWhatsApp}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert('Redirecting to WhatsApp... Please send the message to complete your enquiry.');
    
    // Reset form (optional)
    // document.getElementById('contactForm').reset();
    
    return false;
}
</script>
```

## Setup Instructions

1. **Replace WhatsApp Number:**
   - Line: `const businessWhatsApp = '919876543210';`
   - Format: Country code (91) + 10-digit number
   - Example: If your number is +91-98765-43210, use: `919876543210`

2. **Customize Services:**
   - Edit `<option>` values in service dropdown to match your offerings
   - Add/remove services as needed

3. **Form Validation:**
   - Phone: 10 digits only (no +91, no spaces)
   - Name, Phone, Service are required
   - Location and Message are optional

4. **Tracking:**
   - Form submit triggers GA4 event `contact_form_submit`
   - Tracks which service was selected
   - Enables conversion measurement in Google Analytics

## Testing Checklist

✅ Fill form with test data
✅ Submit and verify WhatsApp opens
✅ Check pre-filled message format
✅ Verify all form fields appear in message
✅ Test phone validation (should reject 9 digits, alphabets, etc.)
✅ Test required field validation
✅ Check mobile responsiveness
✅ Verify GA4 event tracking (check browser console)

## Production Setup

Before going live:
1. ✅ Add to `contact.html` page
2. ⏳ Replace `919876543210` with real business WhatsApp
3. ⏳ Test form submission with real number
4. ✅ Ensure GA4 tracking is configured
5. ⏳ Add reCAPTCHA if spam becomes issue (optional)
