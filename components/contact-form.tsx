'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [agreed, setAgreed] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'A név megadása kötelező.'
    if (!form.email.trim()) {
      newErrors.email = 'Az e-mail megadása kötelező.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Érvénytelen e-mail cím.'
    }
    if (!form.subject.trim()) newErrors.subject = 'A tárgy megadása kötelező.'
    if (!form.message.trim()) newErrors.message = 'Az üzenet megadása kötelező.'
    if (!agreed) newErrors.agreed = 'Az adatvédelmi irányelvek elfogadása kötelező.'
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => { const n = { ...prev }; delete n[e.target.name]; return n })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setStatus('loading')
    await new Promise((res) => setTimeout(res, 1200))
    setStatus('success')
    setShowPopup(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setAgreed(false)
  }

  const closePopup = () => {
    setShowPopup(false)
    setStatus('idle')
  }

  const inputBase =
    'w-full bg-background border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-colors'

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Teljes név
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Kovács János"
            className={cn(inputBase, errors.name ? 'border-primary' : 'border-border')}
          />
          {errors.name && <p className="text-primary text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            E-mail cím
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="pelda@email.hu"
            className={cn(inputBase, errors.email ? 'border-primary' : 'border-border')}
          />
          {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Tárgy
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={cn(inputBase, errors.subject ? 'border-primary' : 'border-border')}
          >
            <option value="">Válassz témát...</option>
            <option value="Általános kérdés">Általános kérdés</option>
            <option value="Darts technika">Darts technika</option>
            <option value="Felszerelés tanács">Felszerelés tanács</option>
            <option value="Verseny információ">Verseny információ</option>
            <option value="Tartalmi javaslat">Tartalmi javaslat</option>
            <option value="Egyéb">Egyéb</option>
          </select>
          {errors.subject && <p className="text-primary text-xs mt-1">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase mb-2">
            Üzenet
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Írd meg üzenetedet..."
            className={cn(inputBase, 'resize-none', errors.message ? 'border-primary' : 'border-border')}
          />
          {errors.message && <p className="text-primary text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Privacy checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => {
                  setAgreed(e.target.checked)
                  if (errors.agreed) setErrors((prev) => { const n = { ...prev }; delete n.agreed; return n })
                }}
                className="sr-only"
              />
              <div
                className={cn(
                  'w-5 h-5 border flex items-center justify-center transition-all',
                  agreed ? 'bg-primary border-primary' : errors.agreed ? 'border-primary bg-primary/5' : 'border-border bg-background group-hover:border-primary/50'
                )}
              >
                {agreed && (
                  <svg viewBox="0 0 12 10" fill="none" className="w-3 h-2.5" stroke="white" strokeWidth="2">
                    <path d="M1 5l3 4 7-8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs text-muted-foreground leading-relaxed">
              Elolvastam és elfogadom az{' '}
              <Link href="/adatvedelem" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors" target="_blank">
                adatvédelmi irányelveket
              </Link>
              {' '}és hozzájárulok adataim kezeléséhez.
            </span>
          </label>
          {errors.agreed && <p className="text-primary text-xs mt-1.5 ml-8">{errors.agreed}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-primary-foreground py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
              </svg>
              Küldés...
            </>
          ) : (
            'Üzenet küldése'
          )}
        </button>
      </form>

      {/* Success Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
          onClick={closePopup}
        >
          <div
            className="bg-card border border-border max-w-md w-full p-8 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Bezárás"
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2">
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              </svg>
            </button>

            <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Üzenet elküldve
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Köszönjük megkeresésed! Üzenetedet megkaptuk és hamarosan válaszolunk rá. Általában
              2 munkanapon belül reagálunk minden megkeresésre.
            </p>
            <button
              onClick={closePopup}
              className="w-full bg-primary text-primary-foreground py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </>
  )
}
