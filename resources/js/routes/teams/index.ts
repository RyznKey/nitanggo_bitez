import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
import members from './members'
import invitations from './invitations'
/**
* @see \App\Http\Controllers\Teams\TeamController::index
 * @see app/Http/Controllers/Teams/TeamController.php:25
 * @route '/settings/teams'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/teams',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Teams\TeamController::index
 * @see app/Http/Controllers/Teams/TeamController.php:25
 * @route '/settings/teams'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teams\TeamController::index
 * @see app/Http/Controllers/Teams/TeamController.php:25
 * @route '/settings/teams'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Teams\TeamController::index
 * @see app/Http/Controllers/Teams/TeamController.php:25
 * @route '/settings/teams'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Teams\TeamController::store
 * @see app/Http/Controllers/Teams/TeamController.php:37
 * @route '/settings/teams'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/teams',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Teams\TeamController::store
 * @see app/Http/Controllers/Teams/TeamController.php:37
 * @route '/settings/teams'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teams\TeamController::store
 * @see app/Http/Controllers/Teams/TeamController.php:37
 * @route '/settings/teams'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Teams\TeamController::edit
 * @see app/Http/Controllers/Teams/TeamController.php:49
 * @route '/settings/teams/{team}'
 */
export const edit = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/teams/{team}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Teams\TeamController::edit
 * @see app/Http/Controllers/Teams/TeamController.php:49
 * @route '/settings/teams/{team}'
 */
edit.url = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { team: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { team: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    team: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        team: typeof args.team === 'object'
                ? args.team.slug
                : args.team,
                }

    return edit.definition.url
            .replace('{team}', parsedArgs.team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teams\TeamController::edit
 * @see app/Http/Controllers/Teams/TeamController.php:49
 * @route '/settings/teams/{team}'
 */
edit.get = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Teams\TeamController::edit
 * @see app/Http/Controllers/Teams/TeamController.php:49
 * @route '/settings/teams/{team}'
 */
edit.head = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Teams\TeamController::update
 * @see app/Http/Controllers/Teams/TeamController.php:91
 * @route '/settings/teams/{team}'
 */
export const update = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/settings/teams/{team}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Teams\TeamController::update
 * @see app/Http/Controllers/Teams/TeamController.php:91
 * @route '/settings/teams/{team}'
 */
update.url = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { team: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { team: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    team: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        team: typeof args.team === 'object'
                ? args.team.slug
                : args.team,
                }

    return update.definition.url
            .replace('{team}', parsedArgs.team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teams\TeamController::update
 * @see app/Http/Controllers/Teams/TeamController.php:91
 * @route '/settings/teams/{team}'
 */
update.patch = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Teams\TeamController::destroy
 * @see app/Http/Controllers/Teams/TeamController.php:123
 * @route '/settings/teams/{team}'
 */
export const destroy = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/teams/{team}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Teams\TeamController::destroy
 * @see app/Http/Controllers/Teams/TeamController.php:123
 * @route '/settings/teams/{team}'
 */
destroy.url = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { team: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { team: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    team: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        team: typeof args.team === 'object'
                ? args.team.slug
                : args.team,
                }

    return destroy.definition.url
            .replace('{team}', parsedArgs.team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teams\TeamController::destroy
 * @see app/Http/Controllers/Teams/TeamController.php:123
 * @route '/settings/teams/{team}'
 */
destroy.delete = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Teams\TeamController::switchMethod
 * @see app/Http/Controllers/Teams/TeamController.php:111
 * @route '/settings/teams/{team}/switch'
 */
export const switchMethod = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchMethod.url(args, options),
    method: 'post',
})

switchMethod.definition = {
    methods: ["post"],
    url: '/settings/teams/{team}/switch',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Teams\TeamController::switchMethod
 * @see app/Http/Controllers/Teams/TeamController.php:111
 * @route '/settings/teams/{team}/switch'
 */
switchMethod.url = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { team: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { team: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    team: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        team: typeof args.team === 'object'
                ? args.team.slug
                : args.team,
                }

    return switchMethod.definition.url
            .replace('{team}', parsedArgs.team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Teams\TeamController::switchMethod
 * @see app/Http/Controllers/Teams/TeamController.php:111
 * @route '/settings/teams/{team}/switch'
 */
switchMethod.post = (args: { team: string | { slug: string } } | [team: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchMethod.url(args, options),
    method: 'post',
})
const teams = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
switch: Object.assign(switchMethod, switchMethod),
members: Object.assign(members, members),
invitations: Object.assign(invitations, invitations),
}

export default teams