
import { Question, QuestionType, Badge, Buff } from '../types';

export const QUESTIONS: Question[] = [
  // Part 1: Standard Quiz (Questions 1-10)
  {
    id: 1,
    type: QuestionType.MultipleChoice,
    text: "What is the primary way HIV is transmitted?",
    options: [
      { id: 'a', text: "Through air", isCorrect: false },
      { id: 'b', text: "Through blood, semen, or vaginal fluids", isCorrect: true },
      { id: 'c', text: "Through food", isCorrect: false },
      { id: 'd', text: "Through casual contact (e.g., hugging)", isCorrect: false },
    ],
  },
  {
    id: 2,
    type: QuestionType.MultipleChoice,
    text: "Can HCV be transmitted through sharing needles?",
    options: [
      { id: 'a', text: "Yes", isCorrect: true },
      { id: 'b', text: "No", isCorrect: false },
      { id: 'c', text: "Only through sexual contact", isCorrect: false },
      { id: 'd', text: "Only through blood transfusion", isCorrect: false },
    ],
  },
  {
    id: 3,
    type: QuestionType.MultipleChoice,
    text: "What is a safe way to inject drugs?",
    options: [
      { id: 'a', text: "Reusing needles", isCorrect: false },
      { id: 'b', text: "Using clean, sterile needles", isCorrect: true },
      { id: 'c', text: "Sharing needles with friends", isCorrect: false },
      { id: 'd', text: "Using the same needle for multiple injections", isCorrect: false },
    ],
  },
  {
    id: 4,
    type: QuestionType.MultipleChoice,
    text: "How can using a new syringe prevent HIV and HCV transmission?",
    options: [
        { id: 'a', text: "It eliminates the need for testing", isCorrect: false },
        { id: 'b', text: "It reduces the risk of sharing contaminated blood", isCorrect: true },
        { id: 'c', text: "It has no effect on HIV/HCV transmission", isCorrect: false },
        { id: 'd', text: "It helps you inject more efficiently", isCorrect: false }
    ],
  },
  {
    id: 5,
    type: QuestionType.MultipleChoice,
    text: "What are the symptoms of HIV?",
    options: [
        { id: 'a', text: "Skin rashes only", isCorrect: false },
        { id: 'b', text: "Fever, fatigue, swollen lymph nodes, weight loss", isCorrect: true },
        { id: 'c', text: "Sore throat and cough", isCorrect: false },
        { id: 'd', text: "None of the above", isCorrect: false }
    ],
  },
  {
    id: 6,
    type: QuestionType.MultipleChoice,
    text: "Can HIV be prevented with medication?",
    options: [
      { id: 'a', text: "Yes, through Pre-exposure Prophylaxis (PrEP)", isCorrect: true },
      { id: 'b', text: "No, there is no prevention for HIV", isCorrect: false },
      { id: 'c', text: "Yes, by taking antibiotics", isCorrect: false },
      { id: 'd', text: "Yes, but only after testing positive for HIV", isCorrect: false },
    ],
  },
  {
    id: 7,
    type: QuestionType.MultipleChoice,
    text: "Why is regular HIV testing important for people who inject drugs?",
    options: [
        { id: 'a', text: "To prevent overdoses", isCorrect: false },
        { id: 'b', text: "To track drug usage", isCorrect: false },
        { id: 'c', text: "To detect HIV early for treatment", isCorrect: true },
        { id: 'd', text: "To reduce drug addiction", isCorrect: false }
    ],
  },
  {
    id: 8,
    type: QuestionType.MultipleChoice,
    text: "What is the difference between HIV and HCV?",
    options: [
        { id: 'a', text: "HIV is a virus, and HCV is a bacterial infection", isCorrect: false },
        { id: 'b', text: "HIV affects the immune system, while HCV affects the liver", isCorrect: true },
        { id: 'c', text: "HIV only affects adults, and HCV only affects children", isCorrect: false },
        { id: 'd', text: "There is no difference; they are the same", isCorrect: false }
    ],
  },
  {
    id: 9,
    type: QuestionType.MultipleChoice,
    text: "Can HIV be transmitted through casual contact (e.g., hugging or shaking hands)?",
    options: [
        { id: 'a', text: "Yes, it can spread through physical touch", isCorrect: false },
        { id: 'b', text: "No, HIV is not transmitted through casual contact", isCorrect: true },
        { id: 'c', text: "Yes, but only if there is skin-to-skin contact", isCorrect: false },
        { id: 'd', text: "No, but it can spread through sharing food", isCorrect: false }
    ],
  },
  {
    id: 10,
    type: QuestionType.MultipleChoice,
    text: "How does harm reduction help prevent the spread of HIV and HCV?",
    options: [
      { id: 'a', text: "By teaching how to inject drugs more efficiently", isCorrect: false },
      { id: 'b', text: "By providing clean needles, safer injecting practices, and access to health services", isCorrect: true },
      { id: 'c', text: "By encouraging the use of drugs in moderation", isCorrect: false },
      { id: 'd', text: "By helping people stop using drugs entirely", isCorrect: false },
    ],
  },
  // Part 2: Urban Survival Mission (Questions 11-20)
  {
    id: 11,
    type: QuestionType.MultipleChoice,
    text: "What are some safer practices when injecting drugs?",
    scenario: "Knowing the right steps can significantly reduce risks.",
    options: [
      { id: 'a', text: "Using shared needles with friends", isCorrect: false },
      { id: 'b', text: "Using new, sterile needles and cleaning the injection site", isCorrect: true },
      { id: 'c', text: "Injecting in public spaces", isCorrect: false },
      { id: 'd', text: "Reusing needles after cleaning them", isCorrect: false },
    ],
    reward: { safetyChange: 5 }
  },
  {
    id: 12,
    type: QuestionType.MultipleChoice,
    text: "Why should you never share your syringes with others?",
    scenario: "A friend asks to use your syringe. What's the critical reason to say no?",
    options: [
      { id: 'a', text: "It can cause the needle to break", isCorrect: false },
      { id: 'b', text: "It increases the risk of HIV and HCV transmission", isCorrect: true },
      { id: 'c', text: "It makes injecting harder", isCorrect: false },
      { id: 'd', text: "It does not affect transmission", isCorrect: false },
    ],
    reward: { safetyChange: 10, badge: Badge.PeerAlly }
  },
    {
    id: 13,
    type: QuestionType.MultipleChoice,
    text: "What is needle exchange, and why is it important?",
    scenario: "Understanding community resources is a vital survival skill.",
    options: [
      { id: 'a', text: "A program where people exchange their used needles for clean ones to prevent the spread of infections", isCorrect: true },
      { id: 'b', text: "A program where people sell used needles", isCorrect: false },
      { id: 'c', text: "A program to help people inject drugs more effectively", isCorrect: false },
      { id: 'd', text: "A service to clean used needles", isCorrect: false },
    ],
    reward: { safetyChange: 5 }
  },
  {
    id: 14,
    type: QuestionType.MultipleChoice,
    text: "How can cleaning syringes reduce the risk of HIV and HCV?",
    scenario: "You don't have a new syringe. What's the next best step to reduce harm?",
    options: [
        { id: 'a', text: "It makes the needle reusable for multiple injections", isCorrect: false },
        { id: 'b', text: "It eliminates all risks of infection", isCorrect: false },
        { id: 'c', text: "It reduces the amount of contaminated blood on the needle", isCorrect: true },
        { id: 'd', text: "It has no effect on infection risk", isCorrect: false }
    ],
    reward: { safetyChange: 10 }
  },
  {
    id: 15,
    type: QuestionType.MultipleChoice,
    text: "Why is it important to dispose of used needles properly?",
    scenario: "You've used a syringe. What's the most critical reason to dispose of it safely?",
    options: [
        { id: 'a', text: "To prevent accidents and reduce the risk of HIV and HCV transmission", isCorrect: true },
        { id: 'b', text: "To make the area look cleaner", isCorrect: false },
        { id: 'c', text: "To save space in trash cans", isCorrect: false },
        { id: 'd', text: "It is not important if needles are disposed of properly", isCorrect: false }
    ],
    reward: { safetyChange: 10, badge: Badge.CleanStreets }
  },
  {
    id: 16,
    type: QuestionType.MultipleChoice,
    text: "What should you do if you feel unsafe while injecting?",
    scenario: "Your surroundings suddenly feel risky. What's the best immediate action?",
    options: [
        { id: 'a', text: "Continue injecting in a different location", isCorrect: false },
        { id: 'b', text: "Stop and seek support from a peer or health professional", isCorrect: true },
        { id: 'c', text: "Wait until you feel safer", isCorrect: false },
        { id: 'd', text: "Call a friend and ask them to come over", isCorrect: false },
    ],
    reward: { safetyChange: 10 }
  },
  {
    id: 17,
    type: QuestionType.MultipleChoice,
    text: "What can you do to reduce the risk of overdose when injecting?",
    scenario: "Taking precautions is key to staying safe. What's a critical step?",
    options: [
        { id: 'a', text: "Inject alone without anyone nearby", isCorrect: false },
        { id: 'b', text: "Use smaller amounts and know your limits", isCorrect: true },
        { id: 'c', text: "Mix drugs with alcohol for a stronger effect", isCorrect: false },
        { id: 'd', text: "Inject faster to get a quicker high", isCorrect: false },
    ],
    reward: { safetyChange: 10 }
  },
  {
    id: 18,
    type: QuestionType.MultipleChoice,
    text: "Where can you get tested for HIV and HCV in your area?",
    scenario: "Knowledge is power. Where can you find out your status?",
    options: [
        { id: 'a', text: "At any public hospital or testing center", isCorrect: true },
        { id: 'b', text: "Only at specialized HIV clinics", isCorrect: false },
        { id: 'c', text: "At drug dealers’ houses", isCorrect: false },
        { id: 'd', text: "You cannot get tested for these infections", isCorrect: false }
    ],
    reward: { safetyChange: 5 }
  },
  {
    id: 19,
    type: QuestionType.MultipleChoice,
    text: "How can HIV treatment help reduce the risk of transmission?",
    scenario: "Understanding treatment is key to prevention and care.",
    options: [
      { id: 'a', text: "By curing the infection completely", isCorrect: false },
      { id: 'b', text: "By lowering the viral load to undetectable levels, reducing the chance of transmission", isCorrect: true },
      { id: 'c', text: "By increasing the amount of HIV in the body", isCorrect: false },
      { id: 'd', text: "By making the person immune to the virus", isCorrect: false }
    ],
    reward: { safetyChange: 10 }
  },
  {
    id: 20,
    type: QuestionType.MultipleChoice,
    text: "What are the benefits of getting an HIV or HCV test regularly?",
    scenario: "You're considering getting tested. What's the main advantage of doing it regularly?",
    options: [
      { id: 'a', text: "To track your progress with drug use", isCorrect: false },
      { id: 'b', text: "To detect infections early and start treatment", isCorrect: true },
      { id: 'c', text: "To avoid testing negative for the virus", isCorrect: false },
      { id: 'd', text: "To prevent legal issues with drug use", isCorrect: false }
    ],
    reward: { safetyChange: 10 }
  },
];