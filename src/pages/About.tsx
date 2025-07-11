import { Heart, Users, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/about" className="text-primary font-medium">About</Link>
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

        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6">About Generations for Care</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A hybrid initiative bridging the gap between eager youth volunteers and elderly individuals 
              with chronic illnesses through meaningful connections and structured support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border">
              <Heart className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To enhance the quality of life and healthcare adherence of elderly individuals through 
                consistent human connection and accessible support, while promoting intergenerational 
                understanding and empowering youth with social responsibility.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border">
              <Users className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A sustainable, replicable model for youth-elderly engagement that creates lasting 
                support networks, improves emotional well-being, and builds stronger communities 
                across generations.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Problem We're Solving</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">For Elderly Individuals:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Loneliness and social isolation</li>
                  <li>• Difficulty managing medications</li>
                  <li>• Limited access to digital resources</li>
                  <li>• Lack of regular health monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">For Youth:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Limited community engagement opportunities</li>
                  <li>• Lack of structured volunteer programs</li>
                  <li>• Missing intergenerational connections</li>
                  <li>• Need for meaningful responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Approach</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Digital Platform</h4>
                  <p className="text-muted-foreground">
                    A simple website and social media presence where volunteers can sign up, 
                    get matched with elderly partners, and access training resources and schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Physical Support Kits</h4>
                  <p className="text-muted-foreground">
                    Starter kits distributed to elderly participants including pill organizers, 
                    printed health guides, and simple communication devices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Community Partnerships</h4>
                  <p className="text-muted-foreground">
                    Collaboration with schools, barangays, and health centers to reach both 
                    youth volunteers and elderly participants in local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-card p-8 rounded-2xl border">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mb-6">
              Join our mission to connect generations and build stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/volunteer">Become a Volunteer</Link>
              </Button>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Link to="/support">Request Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;