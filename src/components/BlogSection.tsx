import { User, Calendar } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Going all-in with millennial healthcare",
    author: "Admin",
    date: "August 12, 2026",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Exploring new ways of personal care",
    author: "Admin",
    date: "August 18, 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Personalized care approaches that take time to craft",
    author: "Admin",
    date: "August 20, 2026",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=600&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Blogs</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-sm">
        Find a bright ideal to suit your taste with our great selection
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {blogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3]">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-3">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{blog.date}</span>
              </div>
            </div>
            <h4 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
              {blog.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
