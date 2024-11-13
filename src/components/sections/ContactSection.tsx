
import { Button } from "@/components/ui/button";
console.log('Button import:', Button)
export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border rounded-md px-4 py-2"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
} 