import { Users, Heart, Clock, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    school: '',
    availability: [] as string[],
    communication: '',
    experience: '',
    agreeTraining: false,
    agreeCommitment: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (name === 'agreeTraining' || name === 'agreeCommitment') {
        setFormData(prev => ({
          ...prev,
          [name]: checkbox.checked
        }));
      } else {
        if (checkbox.checked) {
          setFormData(prev => ({
            ...prev,
            availability: [...prev.availability, value]
          }));
        } else {
          setFormData(prev => ({
            ...prev,
            availability: prev.availability.filter(item => item !== value)
          }));
        }
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
        'service_gfc_volunteer',
        'template_volunteer_form',
        {
          to_email: 'generationsforcare@gmail.com',
          first_name: formData.firstName,
          last_name: formData.lastName,
          age: formData.age,
          email: formData.email,
          phone: formData.phone,
          school: formData.school,
          availability: formData.availability.join(', '),
          communication: formData.communication,
          experience: formData.experience,
        },
        'your_public_key'
      );

      toast({
        title: "Volunteer application submitted!",
        description: "We'll contact you within 1-2 weeks to discuss next steps and training.",
      });

      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        phone: '',
        school: '',
        availability: [],
        communication: '',
        experience: '',
        agreeTraining: false,
        agreeCommitment: false
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to submit application",
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Become a Volunteer</h1>
          <p className="text-xl text-muted-foreground">
            Make a meaningful impact in your community by supporting elderly individuals with chronic illnesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-center">Make a Difference</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Provide companionship and support to elderly individuals who need regular check-ins and assistance with daily health tasks.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-center">Develop Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Build empathy, responsibility, and communication skills while gaining valuable experience in healthcare and social work.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What You'll Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Regular Check-ins</h4>
                  <p className="text-muted-foreground text-sm">Schedule weekly phone calls or visits with your assigned elderly partner.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-5 w-5 text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Health Support</h4>
                  <p className="text-muted-foreground text-sm">Help with medication reminders and appointment scheduling.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Companionship</h4>
                  <p className="text-muted-foreground text-sm">Provide emotional support and social interaction to combat loneliness.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-info mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Tech Assistance</h4>
                  <p className="text-muted-foreground text-sm">Help with basic technology needs and digital literacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Volunteer Registration</CardTitle>
            <CardDescription>
              Sign up to become a volunteer and get matched with someone who needs your support.
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
                  <option value="">Select your age</option>
                  <option value="13-15">13-15</option>
                  <option value="16-18">16-18</option>
                  <option value="19-21">19-21</option>
                  <option value="22-25">22-25</option>
                  <option value="26+">26+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
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
                <label className="block text-sm font-medium text-foreground mb-2">School/Organization (if applicable)</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your school or organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Availability</label>
                <div className="space-y-2">
                  {[
                    'Weekdays (after school)',
                    'Weekends',
                    'Evenings'
                  ].map((availabilityOption) => (
                    <label key={availabilityOption} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        value={availabilityOption}
                        checked={formData.availability.includes(availabilityOption)}
                        onChange={handleChange}
                        className="rounded border-border" 
                      />
                      <span className="text-foreground">{availabilityOption}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Communication</label>
                <select 
                  name="communication"
                  value={formData.communication}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select communication preference</option>
                  <option value="Phone calls">Phone calls</option>
                  <option value="In-person visits">In-person visits</option>
                  <option value="Both phone and visits">Both phone and visits</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Experience & Motivation</label>
                <textarea
                  rows={4}
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about any relevant experience and why you want to volunteer with Generations for Care"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    name="agreeTraining"
                    checked={formData.agreeTraining}
                    onChange={handleChange}
                    required
                    className="rounded border-border mt-1" 
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to complete the required training before being matched with an elderly partner.
                  </span>
                </label>
                <label className="flex items-start space-x-2">
                  <input 
                    type="checkbox" 
                    name="agreeCommitment"
                    checked={formData.agreeCommitment}
                    onChange={handleChange}
                    required
                    className="rounded border-border mt-1" 
                  />
                  <span className="text-sm text-muted-foreground">
                    I commit to providing consistent support for at least 3 months.
                  </span>
                </label>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 inline mr-1" />
              We'll contact you within 1-2 weeks to discuss next steps and training.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Volunteer;