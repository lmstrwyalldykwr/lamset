import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppUrl,
  validateQuoteForm,
  formatQuoteWhatsAppMessage,
  filterProjectsByCategory,
  filterServicesByCategory,
  getVisibleWorkingDays,
} from './logic';
import { PROJECTS_DATA } from '../data/projects';
import { SERVICES_DATA } from '../data/services';

test('buildWhatsAppUrl strips plus sign and encodes message properly for +966531826166', () => {
  const url = buildWhatsAppUrl('مرحبا لمسة رؤيا', '+966 53 182 6166');
  assert.equal(url.startsWith('https://wa.me/966531826166?text='), true);
  assert.equal(url.includes('+'), false);
});

test('validateQuoteForm catches empty required fields and accepts valid input', () => {
  const invalidResult = validateQuoteForm(
    {
      fullName: '',
      phone: '123',
      clientType: 'individual',
      projectType: '',
      city: '',
      details: '',
    },
    'ar'
  );
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.projectType);
  assert.ok(invalidResult.errors.city);
  assert.ok(invalidResult.errors.details);

  const validResult = validateQuoteForm(
    {
      fullName: 'محمد الحربي',
      phone: '0531826166',
      clientType: 'individual',
      projectType: 'ديكورات المنازل',
      city: 'المدينة المنورة - حي الدفاع',
      budget: '40,000 ريال',
      referenceImageName: 'majlis-ref.jpg',
      details: 'تصميم وتنفيذ مجلس رجال وصالة طعام',
    },
    'ar'
  );
  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});
});

test('formatQuoteWhatsAppMessage includes all submitted fields in Arabic and English', () => {
  const sample = {
    fullName: 'أحمد العتيبي',
    phone: '0551234567',
    clientType: 'company' as const,
    projectType: 'ديكورات المحلات التجارية',
    city: 'المدينة المنورة',
    budget: '85,000 SAR',
    referenceImageName: 'store-concept.png',
    details: 'تجهيز معرض عطور بمساحة 90 متر مربع',
  };

  const arMsg = formatQuoteWhatsAppMessage(sample, 'ar');
  assert.equal(arMsg.includes('أحمد العتيبي'), true);
  assert.equal(arMsg.includes('شركة / مؤسسة'), true);
  assert.equal(arMsg.includes('store-concept.png'), true);

  const enMsg = formatQuoteWhatsAppMessage(sample, 'en');
  assert.equal(enMsg.includes('Company / Establishment'), true);
  assert.equal(enMsg.includes('85,000 SAR'), true);
});

test('filterProjectsByCategory and filterServicesByCategory return expected subsets', () => {
  const allProjects = filterProjectsByCategory(PROJECTS_DATA, 'all');
  assert.equal(allProjects.length, PROJECTS_DATA.length);

  const wardrobes = filterProjectsByCategory(PROJECTS_DATA, 'wardrobes');
  assert.equal(wardrobes.length > 0, true);
  assert.equal(wardrobes.every((p) => p.category === 'wardrobes'), true);

  const homeDecor = filterProjectsByCategory(PROJECTS_DATA, 'home-decor');
  assert.equal(homeDecor.length, 1);
  assert.deepEqual(homeDecor[0].gallery, [
    '/images/home_decor_1.webp',
    '/images/home_decor_2.webp',
    '/images/home_decor_3.webp',
  ]);

  const majlis = filterProjectsByCategory(PROJECTS_DATA, 'majlis');
  assert.equal(majlis.length, 1);
  assert.deepEqual(majlis[0].gallery, [
    '/images/majlis_1.webp',
    '/images/majlis_2.webp',
  ]);

  const commercial = filterProjectsByCategory(PROJECTS_DATA, 'commercial-stores');
  assert.equal(commercial.length, 1);
  assert.deepEqual(commercial[0].gallery, [
    '/images/commercial_1.webp',
    '/images/commercial_2.webp',
  ]);

  const kitchens = filterProjectsByCategory(PROJECTS_DATA, 'kitchens');
  assert.equal(kitchens.length, 1);
  assert.deepEqual(kitchens[0].gallery, [
    '/images/kitchens_1.webp',
    '/images/kitchens_2.webp',
    '/images/kitchens_3.webp',
  ]);

  const allServices = filterServicesByCategory(SERVICES_DATA, 'all');
  assert.equal(allServices.length, 10);

  const cabinetryServices = filterServicesByCategory(SERVICES_DATA, 'cabinetry');
  assert.equal(cabinetryServices.length, 3);
});

test('getVisibleWorkingDays omits Monday until confirmed and keeps 6 visible days', () => {
  const visibleDays = getVisibleWorkingDays();
  assert.equal(visibleDays.some((d) => d.id === 'monday'), false);
  assert.equal(visibleDays.length, 6);
  const friday = visibleDays.find((d) => d.id === 'friday');
  assert.equal(friday?.isClosed, true);
});
