<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create an admin user without using factories (to avoid fakerphp in production)
        $user = User::updateOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Admin User',
                'password' => \Illuminate\Support\Facades\Hash::make('password'),
                'email_verified_at' => now(),
                'is_admin' => true,
            ]
        );

        // Create a personal team for the user
        $team = \App\Models\Team::firstOrCreate(
            ['user_id' => $user->id],
            [
                'name' => $user->name . "'s Team",
                'personal_team' => true,
            ]
        );

        // Attach the user to the team as an owner if not already attached
        if (!$team->members->contains($user->id)) {
            $team->members()->attach($user, [
                'role' => \App\Enums\TeamRole::Owner->value,
            ]);
        }

        // Switch to the created team
        $user->switchTeam($team);
    }
}
