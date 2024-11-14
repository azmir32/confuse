import { Phone, Mail, MapPin } from 'lucide-react'

type ContactCardProps = {
  icon: React.ReactNode
  title: string
  content: string
}

const ContactCard = ({ icon, title, content }: ContactCardProps) => (
  <div className="p-4 bg-purple-50 rounded-lg flex items-start gap-4">
    <div className="text-purple-500 mt-1">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  </div>
)

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Phone />,
      title: "Call us",
      content: "(443) 123 - 2543"
    },
    {
      icon: <Mail />,
      title: "Email",
      content: "contact@web.com"
    },
    {
      icon: <MapPin />,
      title: "Location",
      content: "4894 Alcott Drive, Maryland, IN 47374"
    }
  ]

  return (
    <div className="grid gap-4">
      {contactDetails.map((detail, index) => (
        <ContactCard key={index} {...detail} />
      ))}
    </div>
  )
}

export function MapLocation() {
  return (
    <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
      <img 
        src="/placeholder.svg?height=400&width=600" 
        alt="Map location"
        className="w-full h-full object-cover"
      />
    </div>
  )
}