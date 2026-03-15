'use client'

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function StickyContact() {
  const whatsappNumber = "+919876543210"; // Placeholder, but functional format
  const phoneNumber = "+919876543210";

  const contactItems = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      href: `https://wa.me/${whatsappNumber.replace('+', '')}`,
      label: "WhatsApp",
      color: "bg-[#25D366]",
      textColor: "text-white"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      href: `tel:${phoneNumber}`,
      label: "Call Us",
      color: "bg-white",
      textColor: "text-black"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {contactItems.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all border border-black/5",
            item.color,
            item.textColor
          )}
          aria-label={item.label}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
