"use client";

import Header from "../components/Header";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Professional Welding",
      excerpt: "Learn why hiring a professional welder is crucial for your projects.",
      date: "September 15, 2023",
    },
    {
      id: 2,
      title: "Top 5 Welding Techniques Explained",
      excerpt: "Discover the most popular welding techniques and their applications.",
      date: "September 10, 2023",
    },
    {
      id: 3,
      title: "How to Choose the Right Welder for Your Needs",
      excerpt: "A guide to selecting the best welder for your specific requirements.",
      date: "September 5, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Component */}
      <Header
        title="Our Blog"
        description="Explore articles and tips about welding and related topics."
      />

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl text-gray-600 font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl text-gray-600 font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
              <button className="mt-4 text-blue-500 hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}