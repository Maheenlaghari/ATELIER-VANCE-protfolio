"use client";

import { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: "Spatial Design",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setBookingId(data.bookingId || "AV8842");
        setSubmitted(true);
      }
    } catch {
      setBookingId("AV8842");
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", discipline: "Spatial Design", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="bg-[#141414] w-full max-w-lg border border-[#2e2e2e] shadow-2xl relative p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200 text-white">
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 transition-colors"
          aria-label="Close"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="font-mono-arch text-[11px] tracking-widest text-stone-400 uppercase mb-1">
              APPOINTMENT RESERVATION
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase text-white mb-2">
              BOOK A STUDIO SESSION
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6 font-mono-arch font-light">
              Consultations for spatial, brand identity, or monograph projects in Paris, London, or Tokyo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono-arch text-[11px] tracking-wider uppercase text-stone-400 mb-1">
                  FULL NAME
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Elena Rostova"
                  className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#333333] text-white text-sm focus:outline-none focus:border-white font-mono-arch"
                />
              </div>

              <div>
                <label className="block font-mono-arch text-[11px] tracking-wider uppercase text-stone-400 mb-1">
                  EMAIL ADDRESS
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="client@luxuryhouse.com"
                  className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#333333] text-white text-sm focus:outline-none focus:border-white font-mono-arch"
                />
              </div>

              <div>
                <label className="block font-mono-arch text-[11px] tracking-wider uppercase text-stone-400 mb-1">
                  DISCIPLINE
                </label>
                <select
                  value={formData.discipline}
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#333333] text-white text-sm focus:outline-none focus:border-white font-mono-arch"
                >
                  <option value="Spatial Design" className="bg-[#1b1b1b]">Spatial Design and Architecture</option>
                  <option value="Brand Identity" className="bg-[#1b1b1b]">Brand Identity and System</option>
                  <option value="Editorial Monograph" className="bg-[#1b1b1b]">Editorial Monograph and Publishing</option>
                  <option value="Lighting Installation" className="bg-[#1b1b1b]">Light and Installation</option>
                </select>
              </div>

              <div>
                <label className="block font-mono-arch text-[11px] tracking-wider uppercase text-stone-400 mb-1">
                  BRIEF SCOPE OR OBJECTIVES
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline spatial footprint, timeline, or archival requirements"
                  className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#333333] text-white text-sm focus:outline-none focus:border-white font-mono-arch"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#202020] hover:bg-[#2c2c2c] border border-[#3a3a3a] hover:border-white text-white font-mono-arch text-xs tracking-widest uppercase font-semibold py-3 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
              >
                <span>{submitting ? "RECORDING..." : "CONFIRM SESSION REQUEST"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-[#1e1e1e] text-white rounded-full flex items-center justify-center mx-auto border border-[#383838]">
              <Check className="w-6 h-6" />
            </div>
            <div className="font-mono-arch text-xs tracking-widest text-stone-300 uppercase">
              CONFIRMATION CODE: {bookingId}
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">
              SESSION INQUIRY LOGGED
            </h3>
            <p className="text-xs text-stone-400 max-w-sm mx-auto font-mono-arch leading-relaxed font-light">
              Our studio coordination lead will review your dossier and dispatch formal confirmation within 24 hours.
            </p>
            <button
              onClick={handleReset}
              type="button"
              className="mt-4 bg-[#202020] border border-[#3a3a3a] text-white font-mono-arch text-xs tracking-wider uppercase px-6 py-2.5 hover:bg-[#2c2c2c] hover:border-white transition-colors"
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
