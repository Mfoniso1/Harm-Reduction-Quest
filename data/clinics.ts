import { Clinic } from '../types';

export const CLINICS: Record<string, Clinic[]> = {
  Abuja: [
    { name: "National Hospital Abuja", address: "Plot 132, Central Business District", contact: "info@nationalhospital.gov.ng" },
    { name: "Garki Hospital Abuja", address: "Tafawa Balewa Way, Garki", contact: "contact@garkihospital.com" },
    { name: "Asokoro District Hospital", address: "Asokoro, Abuja", contact: "info@asokorodistricthospital.ng" },
  ],
  Lagos: [
    { name: "Lagos University Teaching Hospital (LUTH)", address: "Idi-Araba, Surulere", contact: "info@luth.gov.ng" },
    { name: "St. Nicholas Hospital", address: "57 Campbell St, Lagos Island", contact: "appointments@saintnicholashospital.com" },
    { name: "Reddington Hospital", address: "12 Idowu Martins St, Victoria Island", contact: "info@reddingtonhospital.com" },
  ],
  'Port Harcourt': [
    { name: "University of Port Harcourt Teaching Hospital", address: "East-West Road, Choba", contact: "info@upth.org" },
    { name: "Braithwaite Memorial Specialist Hospital", address: "Forces Avenue, Old GRA", contact: "contact@bmsh.org" },
    { name: "Kelsey Harrison Hospital", address: "Emenike Street, Diobu", contact: "info@khh.org" },
  ],
};
