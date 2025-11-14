const LeadershipShowcase = ({
  title = 'People at the helm',
  leaders = [
    {
      name: 'Kavya Mehra',
      role: 'Co-founder & Ayurvedic Practitioner',
      bio: 'Designs immersive healing programs blending Panchakarma traditions with contemporary nutrition.',
      image:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Arjun Mehra',
      role: 'Co-founder & Conservationist',
      bio: 'Leads the regenerative design roadmap, from rainwater harvesting to forest restoration.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Ananya Sharma',
      role: 'Guest Experience Director',
      bio: 'Curates cultural immersions featuring Bundeli folk music, slow treks, and artisan residencies.',
      image:
        'https://images.unsplash.com/photo-1521579971123-1192931a1452?auto=format&fit=crop&w=400&q=80',
    },
  ],
}) => (
  <section className="mx-auto max-w-6xl px-6 py-16">
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-500">
        Leadership
      </p>
      <h2 className="mt-4 font-serif text-3xl text-emerald-950">{title}</h2>
    </div>
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {leaders.map((leader) => (
        <article
          key={leader.name}
          className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm shadow-emerald-100"
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="h-48 w-full rounded-2xl object-cover"
          />
          <h3 className="mt-6 font-serif text-2xl text-emerald-900">{leader.name}</h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-500">
            {leader.role}
          </p>
          <p className="mt-4 text-sm text-slate-600">{leader.bio}</p>
        </article>
      ))}
    </div>
  </section>
);

export default LeadershipShowcase;

