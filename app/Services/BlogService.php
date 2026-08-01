<?php

namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Symfony\Component\Yaml\Yaml;

class BlogService
{
  /** @return Collection<int, array{slug: string, title: string, date: string, excerpt: string, image: ?string}> */
  public function all(): Collection
  {
    $path = base_path('content/blog');

    if (! File::isDirectory($path)) {
      return collect();
    }

    return collect(File::files($path))
      ->map(fn ($file) => $this->parsePost($file->getPathname(), $file->getFilenameWithoutExtension()))
      ->filter()
      ->sortByDesc('date')
      ->values();
  }

  /** @return array{slug: string, title: string, date: string, excerpt: string, image: ?string, content: string}|null */
  public function find(string $slug): ?array
  {
    $path = base_path("content/blog/{$slug}.md");

    if (! File::exists($path)) {
      return null;
    }

    return $this->parsePost($path, $slug, includeContent: true);
  }

  /**
   * @return array{slug: string, title: string, date: string, excerpt: string, image: ?string, content?: string}|null
   */
  private function parsePost(string $path, string $slug, bool $includeContent = false): ?array
  {
    $raw = File::get($path);

    if (! preg_match('/^---\s*\n(.*?)\n---\s*\n(.*)$/s', $raw, $matches)) {
      return null;
    }

    /** @var array<string, mixed> $meta */
    $meta = Yaml::parse($matches[1]) ?? [];
    $body = trim($matches[2]);

    $post = [
      'slug' => $slug,
      'title' => (string) ($meta['title'] ?? $slug),
      'date' => (string) ($meta['date'] ?? ''),
      'excerpt' => (string) ($meta['excerpt'] ?? ''),
      'image' => isset($meta['image']) ? (string) $meta['image'] : null,
    ];

    if ($includeContent) {
      $post['content'] = Str::markdown($body);
    }

    return $post;
  }
}
