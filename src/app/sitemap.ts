import { MetadataRoute } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://dashmediasolutions.com";

  // Fetch all blog URLs from your database
  const blogs = await prisma.blog.findMany({
    select: { blogUrl: true, updatedAt: true }
  });

  const blogEntries = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.blogUrl}`,
    lastModified: blog.updatedAt,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...blogEntries,
  ];
}