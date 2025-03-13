import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-md font-semibold">What The Hack</h3>
            <p className="text-md text-muted-foreground">
              Presented by Sci-Fi Innovation Club at Chandigarh University
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-md text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#claim-badge-section" className="text-md text-muted-foreground hover:text-primary">
                  Claim Badge
                </Link>
              </li>
              <li>
                <Link href="#Theme" className="text-md text-muted-foreground hover:text-primary">
                  Theme
                </Link>
              </li>
              <li>
                <Link href="#faqs-section" className="text-md text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-md text-muted-foreground">Email: whatthehack.hackathon@gmail.com</li>
              <li className="text-md text-muted-foreground">Chandigarh University, Mohali, Punjab 140413</li>
            </ul>
            {/* Google Maps Embed */}
            <div className="w-full h-30 rounded-lg overflow-hidden">
              <iframe
                title="Chandigarh University Location"
                className="w-full h-full border-none rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5038150279245!2d76.57402637529865!3d30.771958874608308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb497ea204a1%3A0x44ad6079dc9254dd!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.instagram.com/scifiinnovationclub?igsh=MXJva2VjNHIxbHJxNQ%3D%3D&utm_source=qr" 
                  target="_blank" 
                  className="text-md text-muted-foreground hover:text-primary"
                >
                  Instagram: @scifiinnovationclub
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.linkedin.com/company/sci-fi-innovation-club/posts/?feedView=all" 
                  target="_blank" 
                  className="text-md text-muted-foreground hover:text-primary"
                >
                  LinkedIn: scifiinnovationclub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p>© Created by Sci-Fi Innovation Team 2025</p>
        </div>
      </div>
    </footer>
  );
}
