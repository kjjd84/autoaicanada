<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
  public function home(): Response
  {
    return Inertia::render('home');
  }

  public function about(): Response
  {
    return Inertia::render('about');
  }

  public function contact(): Response
  {
    return Inertia::render('contact');
  }

  public function landing(): Response
  {
    return Inertia::render('landing');
  }

  public function thanks(): Response
  {
    return Inertia::render('thanks');
  }

  public function onboarding(): Response
  {
    return Inertia::render('onboarding');
  }

  public function signature(): Response
  {
    return Inertia::render('signature');
  }
}
