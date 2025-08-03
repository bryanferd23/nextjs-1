import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, Project, ContentMetadata } from '../types/content';

const contentDirectory = path.join(process.cwd(), 'content');

// Generic function to get all content from a directory
export function getAllContent(contentType: 'blog' | 'projects'): string[] {
  const fullPath = path.join(contentDirectory, contentType);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    return [];
  }
  
  const filenames = fs.readdirSync(fullPath);
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => filename.replace(/\.mdx$/, ''));
}

// Generic function to get content by slug
export function getContentBySlug(
  contentType: 'blog' | 'projects',
  slug: string
): { metadata: ContentMetadata; content: string } | null {
  try {
    const fullPath = path.join(contentDirectory, contentType, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      metadata: data as ContentMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading content for ${contentType}/${slug}:`, error);
    return null;
  }
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllContent('blog');
  const posts = slugs
    .map(slug => {
      const post = getContentBySlug('blog', slug);
      if (!post) return null;
      
      return {
        slug,
        title: post.metadata.title,
        date: post.metadata.date,
        excerpt: post.metadata.excerpt || '',
        content: post.content,
        tags: post.metadata.tags,
        author: post.metadata.author,
        featured: post.metadata.featured,
      } as BlogPost;
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

// Get all projects
export function getAllProjects(): Project[] {
  const slugs = getAllContent('projects');
  const projects = slugs
    .map(slug => {
      const project = getContentBySlug('projects', slug);
      if (!project) return null;
      
      return {
        slug,
        title: project.metadata.title,
        description: project.metadata.description || '',
        techStack: project.metadata.techStack || [],
        images: project.metadata.images || [],
        liveUrl: project.metadata.liveUrl,
        repoUrl: project.metadata.repoUrl,
        featured: project.metadata.featured,
        category: project.metadata.category,
        completedDate: project.metadata.completedDate,
      } as Project;
    })
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      // Sort by completion date if available, otherwise by title
      if (a.completedDate && b.completedDate) {
        return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
      }
      return a.title.localeCompare(b.title);
    });
  
  return projects;
}

// Get featured content
export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter(post => post.featured)
    .slice(0, limit);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects()
    .filter(project => project.featured)
    .slice(0, limit);
}
