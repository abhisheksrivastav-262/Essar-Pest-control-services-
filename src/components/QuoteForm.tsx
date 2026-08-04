'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Send, AlertCircle, Phone, ShieldCheck, MessageSquare } from 'lucide-react';

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  pestType: string;
  propertyType: string;
  message?: string;
}

interface QuoteFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

const PEST_OPTIONS = [
  'Subterranean Termites (Deemak)',
  'German Cockroach Gel Treatment',
  'American Cockroach Eradication',
  'Bed Bug Thermal & Steam Eradication',
  'Mosquito Larvicidal Mist',
  'Rodent & Cable Gnawing Exclusion',
  'Red Fire Ants & Black Carpenter Ants',
  'House Fly & Fruit Fly Hygiene Control',
  'Wasp & Honey Bee Comb Removal',
  'Silverfish Protection',
  'Spiders & Cobweb Removal',
  'Ticks & Pet Parasites',
  'Fleas',
  'Wood-Boring Beetles',
  'Other / General Inspection',
];

export const QuoteForm: React.FC<QuoteFormProps> = ({
  title = 'Request a Free Quote',
  subtitle = 'Same-day service available across Gurgaon & NCR',
  compact = false,
  onSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    defaultValues: {
      pestType: 'Subterranean Termites (Deemak)',
      propertyType: 'Residential Apartment',
    },
  });

  const sendToWhatsApp = (data: QuoteFormData) => {
    const name = data.name || 'Valued Customer';
    const phone = data.phone || 'Not provided';
    const email = data.email || 'N/A';
    const service = data.pestType || 'Pest Control';
    const property = data.propertyType || 'Residential';
    const location = data.message || 'Gurgaon NCR';

    const formattedMessage = `🛡️ New Website Lead - Nexora Pest Management\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nProperty: ${property}\nLocation / Notes:\n${location}\n\nSource:\nWebsite Form Submission`;

    const whatsappUrl = `https://wa.me/918368334476?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log('Nexora Quote Lead Received:', data);
    sendToWhatsApp(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    if (onSuccess) {
      setTimeout(onSuccess, 3000);
    }
  };

  const handleDirectWhatsAppClick = () => {
    const data = getValues();
    if (data.name && data.phone) {
      sendToWhatsApp(data);
    } else {
      const defaultMessage = `🛡️ New Website Lead - Nexora Pest Management\n\nRequesting immediate callback & quote for pest control in Gurgaon.\nCall Helpline: 8368334476\n\nSource: Website Quick Chat`;
      window.open(`https://wa.me/918368334476?text=${encodeURIComponent(defaultMessage)}`, '_blank');
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden transition-all ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
      {/* Header */}
      <div className="mb-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-green-500 uppercase tracking-wider bg-brand-green-50 px-3 py-1 rounded-full mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          100% Free Inspection Estimate
        </div>
        <h3 className="text-2xl font-extrabold text-brand-slate tracking-tight">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      </div>

      {isSubmitted ? (
        <div className="bg-brand-green-50 border border-brand-green-200 rounded-xl p-6 text-center space-y-3 animate-fadeIn">
          <CheckCircle2 className="w-12 h-12 text-brand-green-500 mx-auto" />
          <h4 className="text-lg font-bold text-brand-slate">Quote Request Delivered!</h4>
          <p className="text-sm text-slate-600">
            Thank you! Your quote request has been sent to our Gurgaon dispatch team via WhatsApp. We will call you back within <span className="font-semibold text-brand-green-500">15 minutes</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="tel:8368334476"
              className="inline-flex items-center justify-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-sm"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 8368334476</span>
            </a>
            <button
              onClick={handleDirectWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-4 rounded-xl transition-all shadow-md text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Re-open WhatsApp Chat</span>
            </button>
          </div>

          <button
            onClick={() => setIsSubmitted(false)}
            className="block text-xs text-slate-500 hover:underline mx-auto mt-3"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pest Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Pest <span className="text-red-500">*</span>
              </label>
              <select
                {...register('pestType', { required: 'Please select a pest type' })}
                className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
              >
                {PEST_OPTIONS.map((pest) => (
                  <option key={pest} value={pest}>
                    {pest}
                  </option>
                ))}
              </select>
              {errors.pestType && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.pestType.message}
                </p>
              )}
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Property Type <span className="text-red-500">*</span>
              </label>
              <select
                {...register('propertyType', { required: 'Select property type' })}
                className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
              >
                <option value="Residential Apartment">Residential Apartment / Flat</option>
                <option value="Independent Villa / House">Independent Villa / House</option>
                <option value="Commercial Office">Commercial Office Park</option>
                <option value="Restaurant / Cloud Kitchen">Restaurant / Cafe / Food Service</option>
                <option value="Industrial Warehouse / Plant">Industrial Warehouse / Plant</option>
              </select>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              {...register('name', { required: 'Full name is required' })}
              className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
            />
            {errors.name && (
              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" /> {errors.name.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mobile Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number (Gurgaon/NCR) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm font-semibold text-slate-400">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="83683 34476"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter 10-digit mobile number',
                    },
                  })}
                  className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl pl-12 pr-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                {...register('email', {
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email address',
                  },
                })}
                className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all"
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Service Address / Specific Details
            </label>
            <textarea
              rows={compact ? 2 : 3}
              placeholder="Mention your sector/area in Gurgaon (e.g. DLF Phase 5, Sector 56)..."
              {...register('message')}
              className="w-full text-sm bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:bg-white transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Actions */}
          <div className="space-y-2.5 pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-amber-500 hover:bg-brand-amber-600 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Get Instant Callback & Send WhatsApp Lead</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send via WhatsApp Directly (8368334476)</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center mt-2">
            🔒 100% privacy protected. Instant WhatsApp lead notification.
          </p>
        </form>
      )}
    </div>
  );
};
