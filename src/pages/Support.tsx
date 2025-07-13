import { Phone, Heart, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";

const Support = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    address: '',
    healthConditions: '',
    supportTypes: [] as string[],
    emergencyContact: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (checkbox.checked) {
        setFormData(prev => ({
          ...prev,
          supportTypes: [...prev.supportTypes, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          supportTypes: prev.supportTypes.filter(type => type !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_gfc_support',
        'template_support_form',
        {
          to_email: 'generationsforcare@gmail.com',
          first_name: formData.firstName,
          last_name: formData.lastName,
          age: formData.age,
          phone: formData.phone,
          address: formData.address,
          health_conditions: formData.healthConditions,
          support_types: formData.supportTypes.join(', '),
          emergency_contact: formData.emergencyContact,
          additional_info: formData.additionalInfo,
        },
        'your_public_key'
      );

      toast({
        title: "Support request submitted!",
        description: "We'll contact you within 2-3 business days to discuss your support needs.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        phone: '',
        address: '',
        healthConditions: '',
        supportTypes: [],
        emergencyContact: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to submit request",
        description: "Please try again or contact us directly at generationsforcare@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/a3239f61-7f05-4eef-9077-f9373203ca23.png" 
                alt="Generations for Care" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-foreground">Generations for Care</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/support">Request Support</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Request Support</h1>
          <p className="text-xl text-muted-foreground">
            Get connected with caring youth volunteers who can provide regular check-ins and assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Regular Check-ins</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Scheduled phone calls or visits to provide companionship and check on your wellbeing.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <CardTitle>Health Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Assistance with medication reminders, appointment scheduling, and basic health monitoring.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-info/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-info" />
              </div>
              <CardTitle>Support Kit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive a starter kit with pill organizers, health guides, and communication tools.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Support Request Form</CardTitle>
            <CardDescription>
              Tell us about yourself and what kind of support you're looking for.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Age</label>
                <select 
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your age range</option>
                  <option value="60-65">60-65</option>
                  <option value="66-70">66-70</option>
                  <option value="71-75">71-75</option>
                  <option value="76-80">76-80</option>
                  <option value="81-85">81-85</option>
                  <option value="86+">86+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+63 XXX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <textarea
                  rows={3}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your address (for matching with nearby volunteers)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Health Conditions</label>
                <textarea
                  rows={3}
                  name="healthConditions"
                  value={formData.healthConditions}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Please describe any chronic conditions or health concerns (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type of Support Needed</label>
                <div className="space-y-2">
                  {[
                    'Regular check-in calls',
                    'Medication reminders',
                    'Appointment assistance',
                    'Technology help',
                    'Emergency contact'
                  ].map((supportType) => (
                    <label key={supportType} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        value={supportType}
                        checked={formData.supportTypes.includes(supportType)}
                        onChange={handleChange}
                        className="rounded border-border" 
                      />
                      <span className="text-foreground">{supportType}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Emergency Contact</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Name and phone number of emergency contact"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Additional Information</label>
                <textarea
                  rows={4}
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Anything else you'd like us to know about your needs or preferences?"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 inline mr-1" />
              We'll contact you within 2-3 business days to discuss your support needs.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;