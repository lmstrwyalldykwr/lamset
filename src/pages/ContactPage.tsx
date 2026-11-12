import React, { useState } from 'react';
import {
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Upload,
} from 'lucide-react';
import { COMPANY_INFO, Language } from '../data/company';
import { SERVICES_DATA } from '../data/services';
import { TRANSLATIONS } from '../translations';
import {
  QuoteFormInput,
  QuoteValidationErrors,
  buildWhatsAppUrl,
  formatQuoteWhatsAppMessage,
  getVisibleWorkingDays,
  validateQuoteForm,
} from '../utils/logic';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contactPage;
  const visibleDays = getVisibleWorkingDays();

  const [formState, setFormState] = useState<QuoteFormInput>({
    fullName: '',
    phone: '',
    clientType: 'individual',
    projectType: '',
    city: lang === 'ar' ? 'المدينة المنورة' : 'Madinah',
    budget: '',
    referenceImageName: '',
    details: '',
  });

  const [errors, setErrors] = useState<QuoteValidationErrors>({});
  const [preparedWhatsApp, setPreparedWhatsApp] = useState<{
    url: string;
    message: string;
  } | null>(null);
  const [copiedMsg, setCopiedMsg] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormState((prev) => ({
      ...prev,
      referenceImageName: file ? file.name : '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm(formState, lang);
    setErrors(validation.errors);

    if (!validation.isValid) {
      setPreparedWhatsApp(null);
      return;
    }

    const formattedMsg = formatQuoteWhatsAppMessage(formState, lang);
    const whatsappUrl = buildWhatsAppUrl(formattedMsg, COMPANY_INFO.whatsappNumber);

    setPreparedWhatsApp({
      url: whatsappUrl,
      message: formattedMsg,
    });
  };

  const handleCopyMessage = async () => {
    if (!preparedWhatsApp) return;
    try {
      await navigator.clipboard.writeText(preparedWhatsApp.message);
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 3000);
    } catch {
      setCopiedMsg(true);
      setTimeout(() => setCopiedMsg(false), 3000);
    }
  };

  return (
    <div className="pt-20 bg-[#F5F1E8] min-h-screen">
      {/* Page Banner */}
      <section className="bg-[#071A35] text-[#F5F1E8] py-16 sm:py-20 border-b border-[#C9A45C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs sm:text-sm font-semibold text-[#DCC18A] tracking-wide">
            {t.kicker}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#FFFFFF] max-w-4xl leading-tight text-balance">
            {t.title}
          </h1>
          <p className="text-base text-[#F5F1E8]/80 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content: Quote Form + Contact Info & Working Hours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Quote Request Form (7 Columns) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-2xl p-7 sm:p-10 border border-[#B8A98C]/35 space-y-6">
            <div className="space-y-2 border-b border-[#B8A98C]/25 pb-5">
              <h2 className="text-2xl font-bold text-[#071A35]">{t.formTitle}</h2>
              <p className="text-xs sm:text-sm text-[#292B30]/75 leading-relaxed">
                {t.formNotice}
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Row 1: Full Name & Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="quote-fullName"
                    className="block text-xs font-bold text-[#071A35]"
                  >
                    {t.fields.fullName}
                  </label>
                  <input
                    id="quote-fullName"
                    type="text"
                    value={formState.fullName}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, fullName: e.target.value }))
                    }
                    placeholder={t.fields.fullNamePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F1E8]/60 border border-[#B8A98C]/50 text-sm text-[#292B30] focus:outline-none focus:border-[#071A35]"
                  />
                  {errors.fullName && (
                    <p role="alert" className="text-xs font-medium text-red-700">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="quote-phone"
                    className="block text-xs font-bold text-[#071A35]"
                  >
                    {t.fields.phone}
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    dir="ltr"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder={t.fields.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F1E8]/60 border border-[#B8A98C]/50 text-sm text-[#292B30] focus:outline-none focus:border-[#071A35]"
                  />
                  {errors.phone && (
                    <p role="alert" className="text-xs font-medium text-red-700">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Client Type (Individual / Company) */}
              <div className="space-y-1.5">
                <span className="block text-xs font-bold text-[#071A35]">
                  {t.fields.clientType}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setFormState((p) => ({ ...p, clientType: 'individual' }))
                    }
                    className={`px-4 py-3 rounded-lg border text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-start ${
                      formState.clientType === 'individual'
                        ? 'bg-[#071A35] text-[#DCC18A] border-[#071A35]'
                        : 'bg-[#F5F1E8]/60 text-[#292B30] border-[#B8A98C]/50 hover:border-[#071A35]'
                    }`}
                  >
                    {t.fields.clientIndividual}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormState((p) => ({ ...p, clientType: 'company' }))
                    }
                    className={`px-4 py-3 rounded-lg border text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-start ${
                      formState.clientType === 'company'
                        ? 'bg-[#071A35] text-[#DCC18A] border-[#071A35]'
                        : 'bg-[#F5F1E8]/60 text-[#292B30] border-[#B8A98C]/50 hover:border-[#071A35]'
                    }`}
                  >
                    {t.fields.clientCompany}
                  </button>
                </div>
              </div>

              {/* Row 3: Project Type & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="quote-projectType"
                    className="block text-xs font-bold text-[#071A35]"
                  >
                    {t.fields.projectType}
                  </label>
                  <select
                    id="quote-projectType"
                    value={formState.projectType}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, projectType: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F1E8]/60 border border-[#B8A98C]/50 text-sm text-[#292B30] focus:outline-none focus:border-[#071A35]"
                  >
                    <option value="">{t.fields.projectTypePlaceholder}</option>
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={service.title[lang]}>
                        {service.title[lang]}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p role="alert" className="text-xs font-medium text-red-700">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="quote-city"
                    className="block text-xs font-bold text-[#071A35]"
                  >
                    {t.fields.city}
                  </label>
                  <input
                    id="quote-city"
                    type="text"
                    value={formState.city}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, city: e.target.value }))
                    }
                    placeholder={t.fields.cityPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F1E8]/60 border border-[#B8A98C]/50 text-sm text-[#292B30] focus:outline-none focus:border-[#071A35]"
                  />
                  {errors.city && (
                    <p role="alert" className="text-xs font-medium text-red-700">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Optional Budget & Optional Reference Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="quote-budget"
                    className="block text-xs font-bold text-[#071A35]"
                  >
                    {t.fields.budget}
                  </label>
                  <input
                    id="quote-budget"
                    type="text"
                    value={formState.budget}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, budget: e.target.value }))
                    }
                    placeholder={t.fields.budgetPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F1E8]/60 border border-[#B8A98C]/50 text-sm text-[#292B30] focus:outline-none focus:border-[#071A35]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="quote-refImage"
                    className="block text-xs font-bold text-[#071A35]"
                  >
                    {t.fields.referenceImage}
                  </label>
                  <label
                    htmlFor="quote-refImage"
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#F5F1E8]/60 border border-dashed border-[#B8A98C] text-xs text-[#292B30] hover:border-[#071A35] cursor-pointer"
                  >
                    <Upload className="w-4 h-4 text-[#C9A45C] shrink-0" />
                    <span className="truncate">
                      {formState.referenceImageName || t.fields.referenceImage}
                    </span>
                    <input
                      id="quote-refImage"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                  <p className="text-[11px] text-[#292B30]/65">
                    {t.fields.referenceImageHint}
                  </p>
                </div>
              </div>

              {/* Row 5: Project Details */}
              <div className="space-y-1.5">
                <label
                  htmlFor="quote-details"
                  className="block text-xs font-bold text-[#071A35]"
                >
                  {t.fields.details}
                </label>
                <textarea
                  id="quote-details"
                  rows={4}
                  value={formState.details}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, details: e.target.value }))
                  }
                  placeholder={t.fields.detailsPlaceholder}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F1E8]/60 border border-[#B8A98C]/50 text-sm text-[#292B30] focus:outline-none focus:border-[#071A35]"
                />
                {errors.details && (
                  <p role="alert" className="text-xs font-medium text-red-700">
                    {errors.details}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#C9A45C] text-[#071A35] text-sm sm:text-base font-bold hover:bg-[#DCC18A] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#071A35]" />
                <span>{t.fields.submitBtn}</span>
              </button>
            </form>

            {/* Prepared WhatsApp Confirmation Panel */}
            {preparedWhatsApp && (
              <div
                role="region"
                aria-label={t.readyModal.title}
                className="mt-6 p-6 rounded-xl bg-[#071A35] text-[#F5F1E8] border border-[#C9A45C] space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#DCC18A]">
                    {t.readyModal.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F1E8]/85">
                    {t.readyModal.subtitle}
                  </p>
                </div>

                <pre className="p-4 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/25 text-xs text-[#F5F1E8]/90 whitespace-pre-wrap font-sans leading-relaxed">
                  {preparedWhatsApp.message}
                </pre>

                {formState.referenceImageName && (
                  <p className="text-xs text-[#DCC18A]">
                    {t.readyModal.referencePhotoReminder}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={preparedWhatsApp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A45C] text-[#071A35] text-xs sm:text-sm font-bold hover:bg-[#DCC18A] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.readyModal.openWhatsappNow}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/40 text-xs sm:text-sm font-semibold text-[#F5F1E8] hover:border-[#C9A45C] transition-colors cursor-pointer"
                  >
                    {copiedMsg ? (
                      <>
                        <Check className="w-4 h-4 text-[#C9A45C]" />
                        <span>{t.readyModal.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#C9A45C]" />
                        <span>{t.readyModal.copyMessage}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Direct Contact Info, Working Hours & Socials (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-[#071A35] text-[#F5F1E8] rounded-2xl p-7 sm:p-8 border border-[#C9A45C]/35 space-y-6">
              <h2 className="text-xl font-bold text-[#DCC18A]">
                {t.directContactTitle}
              </h2>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-[#B8A98C]">
                      {t.phoneLabel}
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      dir="ltr"
                      className="text-base font-bold text-[#FFFFFF] hover:text-[#DCC18A] tabular-nums transition-colors"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-[#B8A98C]">
                      {t.emailLabel}
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-semibold text-[#FFFFFF] hover:text-[#DCC18A] break-all transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-[#B8A98C]">
                      {t.addressLabel}
                    </span>
                    <p className="text-sm font-medium text-[#FFFFFF]">
                      {COMPANY_INFO.fullAddress[lang]}
                    </p>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#C9A45C]/20 space-y-3">
                <h3 className="text-xs font-semibold text-[#DCC18A] uppercase tracking-wider">
                  {t.socialTitle}
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={COMPANY_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/30 text-xs font-semibold text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors"
                  >
                    Instagram (@s33j.s)
                  </a>
                  <a
                    href={COMPANY_INFO.social.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/30 text-xs font-semibold text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors"
                  >
                    Snapchat
                  </a>
                  <a
                    href={COMPANY_INFO.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#0B1D38] border border-[#C9A45C]/30 text-xs font-semibold text-[#F5F1E8] hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors"
                  >
                    TikTok (@s33j.s)
                  </a>
                </div>
              </div>
            </div>

            {/* Official Working Hours Card */}
            <div className="bg-[#FFFFFF] rounded-2xl p-7 sm:p-8 border border-[#B8A98C]/35 space-y-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#C9A45C]" />
                <h2 className="text-lg font-bold text-[#071A35]">
                  {t.workingHoursTitle}
                </h2>
              </div>

              <div className="divide-y divide-[#B8A98C]/25 text-sm">
                {visibleDays.map((day) => (
                  <div
                    key={day.id}
                    className="py-2.5 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-[#071A35]">
                      {day.day[lang]}
                    </span>
                    <span
                      className={
                        day.isClosed
                          ? 'text-red-700 font-semibold'
                          : 'text-[#292B30] tabular-nums'
                      }
                    >
                      {day.hours[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Google Map Section */}
        <div className="mt-12 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#B8A98C]/35 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-[#071A35]">{t.mapTitle}</h2>
              <p className="text-xs sm:text-sm text-[#292B30]/75">
                {COMPANY_INFO.fullAddress[lang]}
              </p>
            </div>

            <a
              href={COMPANY_INFO.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#071A35] text-[#F5F1E8] text-xs sm:text-sm font-semibold hover:bg-[#C9A45C] hover:text-[#071A35] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <MapPin className="w-4 h-4 text-[#C9A45C]" />
              <span>{t.openInGoogleMaps}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-[#B8A98C]/40 bg-[#F5F1E8]">
            <iframe
              title={t.mapTitle}
              src="https://www.google.com/maps?q=Al+Difaa+Madinah+Saudi+Arabia&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
