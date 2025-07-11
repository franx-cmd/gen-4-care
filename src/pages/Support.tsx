import { Phone, Heart, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Support = () => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Age</label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Select your age range</option>
                <option>60-65</option>
                <option>66-70</option>
                <option>71-75</option>
                <option>76-80</option>
                <option>81-85</option>
                <option>86+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+63 XXX XXX XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Address</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your address (for matching with nearby volunteers)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Health Conditions</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please describe any chronic conditions or health concerns (optional)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Type of Support Needed</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-foreground">Regular check-in calls</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-foreground">Medication reminders</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-foreground">Appointment assistance</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-foreground">Technology help</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-foreground">Emergency contact</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Emergency Contact</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Name and phone number of emergency contact"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Additional Information</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Anything else you'd like us to know about your needs or preferences?"
              />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Submit Support Request
            </Button>

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