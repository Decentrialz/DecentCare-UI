import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-2">Post not found</h1>
          <p className="text-gray-icon mb-6">
            The blog post you’re looking for doesn’t exist or has been removed.
          </p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
