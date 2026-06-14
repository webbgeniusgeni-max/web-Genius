import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, CheckCircle2, ShieldCheck, Filter, ChevronRight, UserPlus, Search } from 'lucide-react';
import { Review } from '../types';

export default function ReviewsView() {
  
  // Custom design pre-populated reviews clearly flagged as placeholder candidates for future replacement
  const initialReviews: Review[] = [
    {
      id: 'rev-1',
      name: 'Robert Hastings',
      businessName: 'Hastings HVAC & Plumbing',
      rating: 5,
      comment: 'Before WebGenius built our new custom dashboard and site, we relied entirely on paper lead sheets. Now, our customer quote capture rate has literally tripled. The site loads faster than anything in our region, and the integrated SEO code got us on the local map pack in weeks. Hands down, the best decision for our shop.',
      date: 'May 18, 2026',
      industry: 'HVAC & Plumbing',
      projectType: 'Bespoke Showroom Bundle',
      isPlaceholder: true,
    },
    {
      id: 'rev-2',
      name: 'Dr. Evelyn Martinez',
      businessName: 'Martinez Pediatric Dental Group',
      rating: 5,
      comment: 'As a medical practice, trust is our primary asset. WebGenius designed a spectacular, calming minimalist dark-charcoal portal. Patients constantly compliment the speed and ease of our new online appointment request form. Highly professional, responsive, and totally autonomous in their workflow.',
      date: 'April 02, 2026',
      industry: 'Healthcare / Dental',
      projectType: 'Patient Portal Showcase',
      isPlaceholder: true,
    },
    {
      id: 'rev-3',
      name: 'Alastair Vance',
      businessName: 'Vance & Partners Legal Consulting',
      rating: 5,
      comment: 'A true masterclass in corporate brand positioning. Our layout is clean, stark, executive, and incredibly responsive. From custom schema markup schemas to lightweight loading sheets, every detail was carefully executed. No bloated WordPress plugins—just clean, high-performance static code.',
      date: 'March 14, 2026',
      industry: 'Professional Services',
      projectType: 'Executive Authority Showcase',
      isPlaceholder: true,
    },
    {
      id: 'rev-4',
      name: 'Chloe Sorenson',
      businessName: 'Sorenson Fine Boutique',
      rating: 5,
      comment: 'The checkout checkout is seamless! We wanted a fast-loading, lightweight webstore that did not require monthly service fees or clunky plugins. Our customers repeatedly praise the secure checkout flow. Highly recommended if you want to skip bulky builders.',
      date: 'February 28, 2026',
      industry: 'Retail & E-Commerce',
      projectType: 'Lightweight WebStore',
      isPlaceholder: true,
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // Form State
  const [newReview, setNewReview] = useState({
    name: '',
    businessName: '',
    rating: 5,
    industry: 'Other Local Enterprise',
    projectType: 'Showcase Web Page',
    comment: ''
  });

  const industries = ['All', 'HVAC & Plumbing', 'Healthcare / Dental', 'Professional Services', 'Retail & E-Commerce', 'Other Local Enterprise'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.businessName.trim() || !newReview.comment.trim()) {
      setAlertMessage('Please fulfill all required fields before drafting.');
      setTimeout(() => setAlertMessage(null), 4000);
      return;
    }

    const reviewToAppend: Review = {
      id: `rev-custom-${Date.now()}`,
      name: newReview.name,
      businessName: newReview.businessName,
      rating: newReview.rating,
      comment: newReview.comment,
      date: 'Today',
      industry: newReview.industry,
      projectType: newReview.projectType,
      isPlaceholder: false
    };

    setReviews([reviewToAppend, ...reviews]);
    setIsFormOpen(false);
    
    // Clear draft form
    setNewReview({
      name: '',
      businessName: '',
      rating: 5,
      industry: 'Other Local Enterprise',
      projectType: 'Showcase Web Page',
      comment: ''
    });

    setAlertMessage('Your testimonial draft has been appended below in local memory!');
    setTimeout(() => setAlertMessage(null), 5000);
  };

  const filteredReviews = selectedIndustry === 'All' 
    ? reviews 
    : reviews.filter(r => r.industry === selectedIndustry);

  return (
    <div className="relative w-full bg-[#050707] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10" id="reviews-view-root">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page Titles */}
        <div className="text-center max-w-2xl mx-auto space-y-4" id="reviews-page-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span className="text-[10px] font-mono tracking-widest text-teal-300 uppercase">AUTHENTIC VERIFIED DEPLOYMENTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            Client Testimonials & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-bold">Partner Deployments</span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            See how local business owners leverage high-speed static websites to increase patient bookings, multiply service inquiries, and outrank regional franchise directories.
          </p>
        </div>

        {/* Global Notifications Panel */}
        <AnimatePresence>
          {alertMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-teal-950/80 border border-teal-500/30 rounded-xl max-w-lg mx-auto text-center font-sans text-xs sm:text-sm text-teal-300 shadow-xl"
              id="reviews-notification-box"
            >
              {alertMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Filters Grid & Testimonial drafting button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel" id="reviews-utility-bar">
          
          {/* Filters on left */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto" id="industry-filters-list">
            <span className="text-xs font-mono text-neutral-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter Industry:
            </span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all cursor-pointer ${
                  selectedIndustry === ind 
                    ? 'bg-teal-500 text-black shadow-md shadow-teal-500/10' 
                    : 'bg-slate-950 hover:bg-neutral-850 text-neutral-400 hover:text-white'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Form opener button on right */}
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            id="draft-testimonial-toggle-btn"
            className="w-full sm:w-auto px-4 py-2 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white rounded-lg border border-neutral-800 hover:border-teal-500/20 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-teal-400" />
            {isFormOpen ? 'Collapse Draft Panel' : 'Draft test testimonial'}
          </button>
        </div>

        {/* TESTIMONIAL DRAFT PANEL (FORM) */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              id="draft-testimonial-form-outer"
            >
              <form 
                onSubmit={handleFormSubmit}
                className="glass-panel rounded-2xl p-6 space-y-6 max-w-2xl mx-auto text-left"
                id="draft-testimonial-form"
              >
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <div className="space-y-1">
                    <h3 className="text-sm font-display font-medium text-white uppercase tracking-wider">Testimonial Sandbox</h3>
                    <p className="text-[11px] text-neutral-400">Append your custom review dynamically below to test site responsiveness.</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Client Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={newReview.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. Liam Fitzpatrick"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Your Company *</label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={newReview.businessName}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="e.g. Fitzpatrick Law Group"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Rating Selector */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Rating Selection</label>
                    <div className="flex gap-1.5 py-1.5 h-9 items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => handleRatingChange(star)}
                          className="focus:outline-none cursor-pointer group"
                        >
                          <Star 
                            className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                              star <= newReview.rating 
                                ? 'fill-yellow-500 text-yellow-500' 
                                : 'text-neutral-600'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Industry Select */}
                  <div className="space-y-2">
                    <label htmlFor="industry" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Industry Sector</label>
                    <select
                      id="industry"
                      name="industry"
                      value={newReview.industry}
                      onChange={handleInputChange}
                      className="w-full bg-[#050707]/90 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      {industries.filter(i => i !== 'All').map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Package */}
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Package Deployed</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={newReview.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-[#050707]/90 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      <option value="Bespoke Showroom Bundle">Bespoke Showroom Bundle</option>
                      <option value="Patient Portal Showcase">Patient Portal Showcase</option>
                      <option value="Executive Authority Showcase">Executive Authority Showcase</option>
                      <option value="Lightweight WebStore">Lightweight WebStore</option>
                      <option value="Custom Enterprise portal">Custom Enterprise portal</option>
                    </select>
                  </div>
                </div>

                {/* Testimonial message */}
                <div className="space-y-2">
                  <label htmlFor="comment" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Draft Testimonial *</label>
                  <textarea
                    id="comment"
                    name="comment"
                    required
                    rows={3}
                    value={newReview.comment}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-500 transition-colors placeholder-neutral-500 resize-y leading-relaxed"
                    placeholder="Draft what you would love regional partners to read..."
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-black text-xs font-semibold rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Append Draft Testimonial</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* REVIEWS GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-8" id="testimonials-grid">
          {filteredReviews.map((rev) => (
            <div 
              key={rev.id}
              id={rev.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 relative text-left group"
            >
              
              {/* Optional Placeholder Flag Banner inside the card clearly marked as placeholder */}
              {rev.isPlaceholder ? (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-0.5 bg-neutral-900/90 border border-neutral-800 text-[9px] font-mono text-neutral-400 uppercase rounded tracking-wider select-none" id={`p-holder-tag-${rev.id}`}>
                  <span className="w-1 h-1 rounded-full bg-yellow-500 animate-pulse" />
                  Starter Candidate Review
                </div>
              ) : (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-0.5 bg-teal-500/10 border border-teal-500/20 text-[9px] font-mono text-teal-400 uppercase tracking-widest rounded select-none" id={`p-holder-tag-${rev.id}`}>
                  <span className="w-1 h-1 rounded-full bg-teal-400" />
                  Draft Sandbox Entry
                </div>
              )}

              <div className="space-y-4">
                {/* Visual Star rating row */}
                <div className="flex gap-1.5" id={`rev-stars-${rev.id}`}>
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star 
                      key={sIdx} 
                      className={`w-4 h-4 ${
                        sIdx < rev.rating ? 'fill-yellow-500 text-yellow-500' : 'text-neutral-800'
                      }`} 
                    />
                  ))}
                </div>

                {/* Review Text comment */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans block pt-1 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer metrics */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-4.5" id={`rev-footer-${rev.id}`}>
                
                {/* Elegant client thumbnail symbol with first letter */}
                <div className="w-10 h-10 rounded-full bg-teal-950/80 border border-teal-500/25 flex items-center justify-center shrink-0 text-teal-400 font-display font-bold uppercase text-sm select-none">
                  {rev.name.substring(0, 2)}
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-semibold text-white font-display">
                    {rev.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400">
                    Owner, {rev.businessName}
                  </div>
                  
                  {/* Industry metadata and deployment style details */}
                  <div className="flex gap-2.5 mt-1 text-[9px] font-mono text-teal-400 select-none">
                    <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase tracking-wide">
                      {rev.industry}
                    </span>
                    <span className="text-neutral-500 py-0.5 font-sans">•</span>
                    <span className="bg-teal-500/5 text-teal-300/80 px-2 py-0.5 rounded border border-teal-500/5">
                      {rev.projectType}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Clear placeholder disclaimer layout component at the bottom of the page */}
        <div className="max-w-2xl mx-auto p-5 bg-white/5 rounded-xl border border-white/10 text-center" id="placeholder-reviews-disclaimer">
          <p className="text-[11px] font-mono text-neutral-500 leading-relaxed uppercase tracking-wider">
            🚨 DESIGN NOTE FOR REGIONAL PARTNERS: Testimonials with gold markers represent custom wireframe demo placeholders carefully constructed as candidates for upcoming replacement post-launch. Test cases built via the draft panel above persist dynamically in local memory sandbox cycles.
          </p>
        </div>

      </div>
    </div>
  );
}
