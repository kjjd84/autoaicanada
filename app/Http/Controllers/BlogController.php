<?php

namespace App\Http\Controllers;

use App\Services\BlogService;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
  public function __construct(public BlogService $blog) {}

  public function index(): Response
  {
    return Inertia::render('blog/index', [
      'posts' => $this->blog->all(),
    ]);
  }

  public function show(string $slug): Response
  {
    $post = $this->blog->find($slug);

    abort_unless($post, 404);

    return Inertia::render('blog/show', [
      'post' => $post,
    ]);
  }
}
