<?php
// api/index.php

// Buat folder temporary untuk compiled views supaya tidak memicu error 500
if (!is_dir('/tmp/views')) {
    mkdir('/tmp/views', 0777, true);
}

// Lanjutkan booting Laravel
require __DIR__ . '/../public/index.php';