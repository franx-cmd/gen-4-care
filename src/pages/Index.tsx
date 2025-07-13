import { Heart, Users, Phone, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
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
              <span className="text-xl font-bold text-foreground">Generations For Care</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Connecting <span className="text-primary">Generations</span>,
            <br />Building <span className="text-accent">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Generations for Care bridges the gap between eager youth volunteers and elderly individuals with chronic illnesses, 
            creating meaningful relationships that improve health outcomes and combat loneliness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Link to="/volunteer">
                <Users className="mr-2 h-5 w-5" />
                Become a Volunteer
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 px-8 py-3">
              <Link to="/about">
                <Heart className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Generations For Care Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Addressing loneliness and health challenges while empowering youth to make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-destructive/20 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Combat Loneliness</h3>
                    <p className="text-muted-foreground">Many elderly individuals with chronic conditions suffer from isolation. Regular check-ins provide emotional support and human connection.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Health Support</h3>
                    <p className="text-muted-foreground">Assistance with medication management, appointment reminders, and basic health monitoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Youth Empowerment</h3>
                    <p className="text-muted-foreground">Structured opportunities for young people to develop empathy, responsibility, and community engagement skills.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To create a sustainable, replicable model for intergenerational support that improves emotional well-being, 
                medication adherence, and digital literacy among elderly individuals while fostering social responsibility in youth.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/volunteer">
                  Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Generations For Care Works
            </h2>
            <p className="text-xl text-muted-foreground">Simple steps to create meaningful connections</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">1. Sign Up & Match</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Youth volunteers register online and get matched with elderly participants based on location, interests, and availability.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-foreground">2. Regular Check-ins</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Scheduled phone calls or visits provide consistent support, companionship, and assistance with daily health tasks.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-foreground">3. Support & Kits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center">
                  Elderly participants receive physical support kits with pill organizers, health guides, and communication tools.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of youth volunteers already making an impact in their communities
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 py-3">
                <Link to="/volunteer">
                  <Users className="mr-2 h-5 w-5" />
                  Volunteer Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background bg-background text-foreground hover:bg-background/90 px-8 py-3">
                <Link to="/support">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Support
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your Generations For Care journey? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-foreground">+63 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-accent" />
                  <span className="text-foreground">generationsforcare@gmail.com</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Partnership Opportunities</h4>
                <p className="text-muted-foreground">
                  We're actively seeking partnerships with schools and nursing homes. 
                  Contact us to learn how we can collaborate to expand Generations For Care in your community.
                </p>
              </div>
            </div>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/a3239f61-7f05-4eef-9077-f9373203ca23.png" 
                alt="Generations For Care"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold">Generations For Care</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-background/70">
                Building bridges between generations, one connection at a time.
              </p>
              <p className="text-sm text-background/50 mt-2">
                © 2024 Generations For Care. Made with ❤️ for community impact.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
