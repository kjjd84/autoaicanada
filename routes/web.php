<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactFormController;
use App\Http\Controllers\LandingFormController;
use App\Http\Controllers\OnboardingFormController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SignatureFormController;
use Illuminate\Support\Facades\Route;
use Spatie\Honeypot\ProtectAgainstSpam;

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::get('/landing', [PageController::class, 'landing'])->name('landing');
Route::get('/thanks', [PageController::class, 'thanks'])->name('thanks');

Route::get('/onboarding', [PageController::class, 'onboarding'])->name('onboarding');
Route::get('/signature', [PageController::class, 'signature'])->name('signature');

Route::middleware(ProtectAgainstSpam::class)->group(function () {
    Route::post('/contact', [ContactFormController::class, 'store'])->name('contact.store');
    Route::post('/landing', [LandingFormController::class, 'store'])->name('landing.store');
    Route::post('/onboarding', [OnboardingFormController::class, 'store'])->name('onboarding.store');
    Route::post('/signature', [SignatureFormController::class, 'store'])->name('signature.store');
});
