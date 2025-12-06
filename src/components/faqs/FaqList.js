import { useState } from 'react';

const FaqList = ({
  faqs = [
    {
      question: 'When is the best time to visit Tapovan Resort?',
      answer:
        'October to March offers crisp skies ideal for temple visits and heritage walks. Monsoon (July-August) is lush and perfect for Mandakini ghat rituals and spa immersions. We operate year-round with curated itineraries per season.',
    },
    {
      question: 'What is included in the wellness programs?',
      answer:
        'Each program includes Ayurvedic consultation, personalized meals, daily yoga/meditation at the ghats, and guided experiences such as temple tours, forest bathing, and sound therapy.',
    },
    {
      question: 'Do you accommodate dietary preferences?',
      answer:
        'Yes. Our culinary lab can tailor menus for vegan, gluten-free, Jain, sattvic, and low FODMAP requirements with prior notice.',
    },
    {
      question: 'How do I reach the resort?',
      answer:
        'The closest airport is Prayagraj (120 km). Chitrakoot is well-connected by road and rail. We arrange electric transfers or scenic rail-and-drive combinations from major cities in Madhya Pradesh and Uttar Pradesh.',
    },
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="space-y-4">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <article
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-emerald-100 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-4 text-left"
              onClick={() => setActiveIndex(isActive ? -1 : index)}
            >
              <span className="font-semibold text-emerald-900">{faq.question}</span>
              <span className="text-2xl text-emerald-500">{isActive ? '−' : '+'}</span>
            </button>
            {isActive && (
              <div className="border-t border-emerald-50 px-6 py-4 text-sm text-slate-600">
                {faq.answer}
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};

export default FaqList;


