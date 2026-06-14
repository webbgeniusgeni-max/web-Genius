import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, User, Phone, Mail, Globe, Sparkles, CheckCircle2, 
  HelpCircle, Calendar, ArrowRight, CornerDownRight, RotateCcw, Send, FileCheck 
} from 'lucide-react';
import { InquiryFormState } from '../types';

export default function OrderView() {
  const initialFormState: InquiryFormState = {
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    businessType: 'Contracting / Trade Service',
    currentWebsite: '',
    websiteStyle: 'Dark Cyber-Luxury',
    pagesNeeded: '3-5 Pages (Standard)',
    featuresRequested: ['Contact Form / Quote Lead Capturer', 'Google Maps Local SEO integration'],
    budgetRange: '$1,500 - $2,500',
    timeline: '3 - 5 Weeks (Standard)',
    additionalNotes: ''
  };

  const [form, setForm] = useState<InquiryFormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof InquiryFormState, string>>>({});

  const businessTypes = [
    'Contracting / Trade Service (Plumbing, Electrical, HVAC, etc.)',
    'Medical / Dental / Wellness Clinic',
    'Professional Service (Consultancy, Lawyer, Accountant)',
    'E-Commerce & Digital retail shop',
    'Restaurant / Local Food Venue',
    'Real Estate / Property Agency',
    'Creative / Entertainment Storefront',
    'Other Local Enterprise'
  ];

  const websiteStyles = [
    'Dark Cyber-Luxury (Teal Glows, Sleek Metals, Glassmorphism)',
    'Minimalist Slate & Charcoal (Executive Modern, Spacious, Neat)',
    'Bold & Artistic High-Contrast (Editorial, Distinctive, Vivid Colors)',
    'Bright & Organic Warmth (Cottage / Wellness Feels, Inviting, Soft Earthtones)'
  ];

  const pageEstimates = [
    '1 Page - High-converting Landing Hub',
    '3-5 Pages - Comprehensive Standard Showcase',
    '6-10 Pages - Business Authority/Expansion Bundle',
    '10+ Pages - Custom Enterprise portal'
  ];

  const availableFeatures = [
    'Contact Form / Quote Lead Capturer',
    'Google Maps Local SEO integration',
    'Online Appointments / Booking Slot reservation',
    'Customer Testimonials / Reviews slide carousel',
    'Dynamic Photo Gallery / Work Showcase Portfolio',
    'Bespoke Interactive Pricing Calculator',
    'Custom Secure Client Login / Dashboard Access',
    'Integrated E-Commerce Shopping Cart checkout',
    'Bespoke Local Copywriting & SEO setup'
  ];

  const budgetRanges = [
    'Under $1,000 (Basic Landing)',
    '$1,000 - $1,500 (Simple Site)',
    '$1,500 - $2,500 (Value Business Package)',
    '$2,500 - $5,000 (Premium Custom Scope)',
    '$5,000+ (Highly Tailored Enterprise Suite)'
  ];

  const timelines = [
    'Immediate (Within 2 Weeks - Expedited)',
    '3 - 5 Weeks (Standard)',
    'Flexible (6+ Weeks - Budget Guided)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof InquiryFormState]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setForm(prev => {
      const exists = prev.featuresRequested.includes(feature);
      const updated = exists 
        ? prev.featuresRequested.filter(f => f !== feature) 
        : [...prev.featuresRequested, feature];
      return { ...prev, featuresRequested: updated };
    });
  };

  const validateForm = () => {
    const errors: Partial<Record<keyof InquiryFormState, string>> = {};
    if (!form.businessName.trim()) errors.businessName = 'Business name is required';
    if (!form.contactPerson.trim()) errors.contactPerson = 'Contact representative is required';
    if (!form.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Invalid email format';
    }
    if (!form.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (form.phone.replace(/\D/g, '').length < 7) {
      errors.phone = 'Please provide a valid phone number';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setForm(initialFormState);
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <div className="relative w-full bg-[#050707] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10" id="order-view-root">
      
      {/* Visual ambient glows */}
      <div className="absolute inset-0 bg-dot-cyber pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page title */}
        <div className="text-center max-w-2xl mx-auto space-y-4" id="order-page-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span className="text-[10px] font-mono tracking-widest text-teal-300 uppercase">NO PRESSURE • BESPOKE ANALYSIS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-[1.2]">
            Build Your Perfect <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-bold">Web Project Specification</span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base">
            Tell us about your business, select your desired website features, and receive a granular, transparent proposal with layout wireframes—completely free of obligation.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-start"
              id="order-form-grid"
            >
              
              {/* LEFT COLUMN: THE PREMIUM FORM CONTAINER */}
              <form 
                onSubmit={handleSubmit}
                className="lg:col-span-7 rounded-2xl p-6 sm:p-8 space-y-8 glass-panel shadow-2xl relative"
                id="webgenius-quote-form"
              >
                
                {/* SECTION 1: BUSINESS LOGISTICS */}
                <div className="space-y-6" id="form-section-business">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                    <Building2 className="w-5 h-5 text-teal-400 shrink-0" />
                    <h2 className="text-lg font-display font-semibold text-white">Owner & Business Profile</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Business Name */}
                    <div className="space-y-2">
                      <label htmlFor="businessName" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Business Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={form.businessName}
                          onChange={handleInputChange}
                          className={`w-full bg-white/5 backdrop-blur-sm text-white text-sm rounded-lg pl-10 pr-4 py-3 placeholder-neutral-500 border focus:outline-none focus:border-teal-500 transition-colors ${
                            formErrors.businessName ? 'border-red-500/50' : 'border-white/10'
                          }`}
                          placeholder="e.g. Apex Plumbers Inc."
                        />
                      </div>
                      {formErrors.businessName && (
                        <p className="text-red-400 text-xs font-mono">{formErrors.businessName}</p>
                      )}
                    </div>

                    {/* Contact Person */}
                    <div className="space-y-2">
                      <label htmlFor="contactPerson" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Contact Partner *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          value={form.contactPerson}
                          onChange={handleInputChange}
                          className={`w-full bg-white/5 backdrop-blur-sm text-white text-sm rounded-lg pl-10 pr-4 py-3 placeholder-neutral-500 border focus:outline-none focus:border-teal-500 transition-colors ${
                            formErrors.contactPerson ? 'border-red-500/50' : 'border-white/10'
                          }`}
                          placeholder="e.g. Robert Chen"
                        />
                      </div>
                      {formErrors.contactPerson && (
                        <p className="text-red-400 text-xs font-mono">{formErrors.contactPerson}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-white/5 backdrop-blur-sm text-white text-sm rounded-lg pl-10 pr-4 py-3 placeholder-neutral-500 border focus:outline-none focus:border-teal-500 transition-colors ${
                            formErrors.phone ? 'border-red-500/50' : 'border-white/10'
                          }`}
                          placeholder="e.g. (555) 019-2834"
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="text-red-400 text-xs font-mono">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Email address */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          className={`w-full bg-white/5 backdrop-blur-sm text-white text-sm rounded-lg pl-10 pr-4 py-3 placeholder-neutral-500 border focus:outline-none focus:border-teal-500 transition-colors ${
                            formErrors.email ? 'border-red-500/50' : 'border-white/10'
                          }`}
                          placeholder="e.g. robert@apexplumb.com"
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-red-400 text-xs font-mono">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Business Industry */}
                    <div className="space-y-2">
                      <label htmlFor="businessType" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={form.businessType}
                        onChange={handleInputChange}
                        className="w-full bg-[#050707]/90 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                      >
                        {businessTypes.map((type, idx) => (
                          <option key={idx} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Current Website Optional */}
                    <div className="space-y-2">
                      <label htmlFor="currentWebsite" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Current Website <span className="text-neutral-500 font-sans tracking-normal normal-case">(optional)</span>
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                        <input
                          type="url"
                          id="currentWebsite"
                          name="currentWebsite"
                          value={form.currentWebsite}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm rounded-lg pl-10 pr-4 py-3 placeholder-neutral-500 focus:outline-none focus:border-teal-500 transition-colors"
                          placeholder="e.g. www.apexplumbers.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: THE WEBSITE BLUEPRINT REQUIREMENTS */}
                <div className="space-y-6" id="form-section-blueprint">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                    <Sparkles className="w-5 h-5 text-teal-400 shrink-0" />
                    <h2 className="text-lg font-display font-semibold text-white">Project Scope Specifications</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Desired Style */}
                    <div className="space-y-2">
                      <label htmlFor="websiteStyle" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Desired Website Style
                      </label>
                      <select
                        id="websiteStyle"
                        name="websiteStyle"
                        value={form.websiteStyle}
                        onChange={handleInputChange}
                        className="w-full bg-[#050707]/90 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                      >
                        {websiteStyles.map((style, idx) => (
                          <option key={idx} value={style}>{style}</option>
                        ))}
                      </select>
                    </div>

                    {/* Pages Needed */}
                    <div className="space-y-2">
                      <label htmlFor="pagesNeeded" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Structural Size
                      </label>
                      <select
                        id="pagesNeeded"
                        name="pagesNeeded"
                        value={form.pagesNeeded}
                        onChange={handleInputChange}
                        className="w-full bg-[#050707]/90 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                      >
                        {pageEstimates.map((estimate, idx) => (
                          <option key={idx} value={estimate}>{estimate}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Features checkboxes */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                      Select Custom Features Requested
                    </label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5" id="features-checkboxes-grid">
                      {availableFeatures.map((feat, idx) => {
                        const isChecked = form.featuresRequested.includes(feat);
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => handleFeatureToggle(feat)}
                            className={`flex items-start text-left gap-3 px-4 py-3 rounded-xl border text-xs sm:text-sm font-sans transition-all duration-150 ${
                              isChecked 
                                ? 'bg-teal-500/10 border-teal-500/40 text-white shadow-inner shadow-teal-500/5' 
                                : 'bg-slate-950/50 border-white/5 text-neutral-400 hover:border-white/10 hover:text-white'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 transition-all ${
                              isChecked ? 'bg-teal-500 border-teal-400' : 'border-neutral-700 bg-neutral-900'
                            }`}>
                              {isChecked && (
                                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-black stroke-black stroke-[3]" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              )}
                            </span>
                            <span className="leading-tight">{feat}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* SECTION 3: LOGISTICS & LOGISTICS DETAILS */}
                <div className="space-y-6" id="form-section-logistics">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                    <Calendar className="w-5 h-5 text-teal-400 shrink-0" />
                    <h2 className="text-lg font-display font-semibold text-white">Investment & Timelines</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Budget Range */}
                    <div className="space-y-2">
                      <label htmlFor="budgetRange" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Budget Range Parameter
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={form.budgetRange}
                        onChange={handleInputChange}
                        className="w-full bg-[#050707]/90 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                      >
                        {budgetRanges.map((range, idx) => (
                          <option key={idx} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        Required Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleInputChange}
                        className="w-full bg-[#050707]/90 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors"
                      >
                        {timelines.map((time, idx) => (
                          <option key={idx} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Required Large Notes Description */}
                  <div className="space-y-2">
                    <label htmlFor="additionalNotes" className="block text-xs font-mono text-neutral-300 uppercase tracking-wider">
                      Please explain exactly what you want for your website *
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={6}
                      value={form.additionalNotes}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm rounded-lg px-4 py-3.5 placeholder-neutral-500 focus:outline-none focus:border-teal-500 transition-colors resize-y leading-relaxed font-sans"
                      placeholder="Discuss any specific design details, must-have integrations, regional competitors, brand colors, pages needed, or business challenges we can solve through premium web development..."
                    />
                  </div>
                </div>

                {/* SUBMIT HERO */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between" id="form-submit-footer">
                  <span className="text-[11px] font-mono text-neutral-500">
                    * INPUT FIELDS ARE STRICTLY VERIFIED SECURELY
                  </span>
                  
                  <div className="flex gap-3 w-full sm:w-auto ml-auto">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-3 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white rounded-xl transition-all duration-150 border border-neutral-800 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset Spec
                    </button>
                    <button
                      type="submit"
                      id="submit-spec-form-btn"
                      className="grow sm:grow-0 px-6 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-black font-semibold rounded-xl text-xs sm:text-sm focus:outline-none shadow-[0_4px_25px_rgba(13,148,136,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Send Specification
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </form>

              {/* RIGHT COLUMN: REAL-TIME SCOPE SUMMARY CARD */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6" id="order-sidebar-summary">
                
                <div className="rounded-2xl p-6 glass-panel shadow-xl text-left space-y-6 relative overflow-hidden">
                  
                  {/* Subtle teal light ray */}
                  <div className="absolute -top-12 -left-12 w-28 h-28 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-teal-400 tracking-widest uppercase">SPECS PREVIEW</span>
                      <h3 className="text-base font-display font-semibold text-white">Dynamic Scope Blueprint</h3>
                    </div>
                    <div className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-xs text-teal-400 rounded-md font-mono">
                      v1.4
                    </div>
                  </div>

                  {/* Summary lists */}
                  <div className="space-y-4">
                    
                    {/* Live Business Detail block */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Client Target</div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between gap-1">
                        <span className="text-xs sm:text-sm font-semibold truncate text-white block">
                          {form.businessName.trim() || 'Unspecified Local Business'}
                        </span>
                        <span className="shrink-0 text-[10px] font-mono text-neutral-400 tracking-tight text-right uppercase">
                          {form.businessType.split('(')[0].trim().substring(0, 16)}...
                        </span>
                      </div>
                    </div>

                    {/* Live Visual Spec layout */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Aesthetic Style</div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between text-xs text-neutral-300">
                        <span className="truncate pr-1 block">{form.websiteStyle.split('(')[0]}</span>
                        <span className="shrink-0 font-mono text-teal-400 font-medium">Verified</span>
                      </div>
                    </div>

                    {/* Live Size & Scope */}
                    <div className="grid grid-cols-2 gap-3" id="live-size-scope-metrics">
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 space-y-1">
                        <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Sizing</div>
                        <div className="text-xs font-semibold text-white truncate">{form.pagesNeeded.split('-')[0]}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 space-y-1">
                        <div className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Delivery Target</div>
                        <div className="text-xs font-semibold text-neutral-200 truncate">{form.timeline.split('(')[0]}</div>
                      </div>
                    </div>

                    {/* Live Features Tracker */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                        Custom Features ({form.featuresRequested.length})
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10 max-h-[140px] overflow-y-auto space-y-2">
                        {form.featuresRequested.length === 0 ? (
                          <div className="text-xs text-neutral-500 italic py-1">No additional features highlighted.</div>
                        ) : (
                          form.featuresRequested.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                              <CornerDownRight className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Budget representation */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Investment Guideline</div>
                      <div className="bg-gradient-to-r from-teal-950/30 to-emerald-950/30 p-3 rounded-lg border border-teal-500/20 flex items-center justify-between text-xs text-teal-100">
                        <span className="font-semibold text-white">Target Bracket:</span>
                        <span className="font-mono font-bold text-teal-400">{form.budgetRange.split('(')[0]}</span>
                      </div>
                    </div>

                  </div>

                  {/* Guaranteed inclusions */}
                  <div className="pt-4 border-t border-white/5 space-y-2.5" id="agency-inclusions-list">
                    <span className="text-[10px] font-mono text-neutral-500 tracking-wider block">INCLUDED WITH ALL BUNDLES:</span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Responsive high-speed desktop & mobile design</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Domain mapping & zero-downtime CDN hosting</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Comprehensive Hand-coded static assets (No bulk plugins)</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Call assurance */}
                <div className="bg-slate-900/30 p-5 rounded-xl border border-white/5 text-xs text-neutral-400 space-y-2">
                  <p className="font-semibold text-neutral-300">
                    What happens next?
                  </p>
                  <p className="leading-relaxed">
                    Once received, our senior design team reviews your business specifications, inspects your regional search competitors, and drafts a wireframed PDF blueprint proposal outlining step-by-step layouts.
                  </p>
                </div>

              </div>
              
            </motion.div>
          ) : (
            
            // CONFIRMATION SUCCESS VIEW
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="max-w-xl mx-auto rounded-3xl p-8 sm:p-12 text-center shadow-2xl glass-panel relative overflow-hidden space-y-8 text-left"
              id="order-success-dashboard"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-bounce">
                  <FileCheck className="w-8 h-8 text-emerald-400" />
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
                    Specification Generated!
                  </h2>
                  <p className="text-teal-400 font-mono text-xs tracking-wider">
                    BLUEPRINT INQUIRY ID: WG-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed max-w-sm">
                  Thank you, <strong className="text-white">{form.contactPerson}</strong>! We have registered the specifications for <strong className="text-white">{form.businessName}</strong>. 
                </p>
              </div>

              {/* Submitted Details Review block */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 divide-y divide-white/5 space-y-3.5 text-xs">
                
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-500">Contact Email:</span>
                  <span className="text-neutral-200 font-mono font-medium">{form.email}</span>
                </div>

                <div className="flex justify-between items-center pt-2 py-1">
                  <span className="text-neutral-500">Proposed Budget:</span>
                  <span className="text-teal-400 font-semibold">{form.budgetRange.split('(')[0]}</span>
                </div>

                <div className="flex justify-between items-center pt-2 py-1">
                  <span className="text-neutral-500">Timeline Target:</span>
                  <span className="text-neutral-300">{form.timeline.split('(')[0]}</span>
                </div>

                <div className="flex justify-between items-center pt-2 py-1">
                  <span className="text-neutral-500">Requested Features:</span>
                  <span className="text-neutral-300 text-right">{form.featuresRequested.length} items selected</span>
                </div>

                <div className="pt-3">
                  <span className="text-neutral-500 block mb-1">Your Requirements:</span>
                  <p className="text-neutral-400 italic leading-relaxed line-clamp-3">
                    "{form.additionalNotes}"
                  </p>
                </div>

              </div>

              <div className="space-y-4 text-center">
                <p className="text-neutral-400 text-xs">
                  A regional specialist will contact you at <span className="text-white font-semibold font-mono">{form.phone}</span> within 24 business hours with custom layouts and competitor metrics.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    id="submit-another-spec-btn"
                    className="px-6 py-3 bg-neutral-950 hover:bg-neutral-850 text-neutral-300 hover:text-white rounded-xl text-xs font-semibold tracking-wider transition-all border border-neutral-800 hover:border-teal-500/20 cursor-pointer"
                  >
                    Adjust / Submit Another Specification
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
