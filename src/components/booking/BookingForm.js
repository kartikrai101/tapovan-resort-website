const formFields = [
  { label: 'Full Name', type: 'text', name: 'name' },
  { label: 'Email Address', type: 'email', name: 'email' },
  { label: 'Phone Number', type: 'tel', name: 'phone' },
  { label: 'Check-in Date', type: 'date', name: 'checkIn' },
  { label: 'Check-out Date', type: 'date', name: 'checkOut' },
  { label: 'Guests', type: 'number', name: 'guests', min: 1, max: 12 },
];

const BookingForm = () => (
  <form className="space-y-4">
    {formFields.map((field) => (
      <div key={field.name} className="space-y-2">
        <label className="text-sm font-semibold text-emerald-900">{field.label}</label>
        <input
          type={field.type}
          name={field.name}
          min={field.min}
          max={field.max}
          className="w-full rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        />
      </div>
    ))}
    <div className="space-y-2">
      <label className="text-sm font-semibold text-emerald-900">Intentions & Experiences</label>
      <textarea
        rows="4"
        className="w-full rounded-xl border border-emerald-100 bg-emerald-50/40 px-4 py-3 text-sm focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-100"
        placeholder="Share dietary notes, celebration plans, wellness goals..."
      />
    </div>
    <button
      type="submit"
      className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
    >
      Submit reservation request
    </button>
  </form>
);

export default BookingForm;


