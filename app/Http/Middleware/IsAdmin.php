<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (! auth()->check() || ! auth()->user()->is_admin) {
            if (! auth()->check()) {
                return redirect('/admin/login');
            }
            dd('IsAdmin failed. User:', auth()->user()->toArray());
        }

        return $next($request);
    }
}
