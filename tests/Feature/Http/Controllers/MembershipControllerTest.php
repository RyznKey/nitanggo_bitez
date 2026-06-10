<?php

test('member registration stores the submitted data', function () {
    $response = $this->post('/membership/register', [
        'full_name' => 'Anisa Rahma',
        'whatsapp' => '081234567890',
        'birth_date' => '2001-05-10',
        'email' => 'anisa@example.com',
        'terms' => true,
    ]);

    $response->assertRedirect('/membership/register');

    $this->assertDatabaseHas('memberships', [
        'full_name' => 'Anisa Rahma',
        'email' => 'anisa@example.com',
        'whatsapp' => '081234567890',
        'stamp_count' => 0,
    ]);
});
