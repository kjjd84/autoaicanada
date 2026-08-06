<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class DealerOnboardingService
{
    private const CACHE_PREFIX = 'dealer_onboarding:';

    private const TOKEN_TTL_MINUTES = 60 * 24 * 30;

    /**
     * @param  array<string, mixed>  $submission
     */
    public function store(string $token, array $submission): void
    {
        Cache::put(self::CACHE_PREFIX.$token, $submission, now()->addMinutes(self::TOKEN_TTL_MINUTES));
    }

    /**
     * @return array<string, mixed>|null
     */
    public function retrieve(string $token): ?array
    {
        /** @var array<string, mixed>|null $submission */
        $submission = Cache::get(self::CACHE_PREFIX.$token);

        return $submission;
    }

    public function forget(string $token): void
    {
        Cache::forget(self::CACHE_PREFIX.$token);
    }

    public function generateToken(): string
    {
        return Str::random(64);
    }

    public function signatureUrl(string $token): string
    {
        return route('signature', ['token' => $token]);
    }
}
