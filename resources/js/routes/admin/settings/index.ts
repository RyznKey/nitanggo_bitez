import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
export const promo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: promo.url(options),
    method: 'get',
})

promo.definition = {
    methods: ["get","head"],
    url: '/admin/settings/promo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
promo.url = (options?: RouteQueryOptions) => {
    return promo.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
promo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: promo.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
promo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: promo.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
    const promoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: promo.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
        promoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: promo.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SettingController::promo
 * @see app/Http/Controllers/Admin/SettingController.php:12
 * @route '/admin/settings/promo'
 */
        promoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: promo.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    promo.form = promoForm
/**
* @see \App\Http\Controllers\Admin\SettingController::homepage
 * @see app/Http/Controllers/Admin/SettingController.php:42
 * @route '/admin/settings/homepage'
 */
export const homepage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: homepage.url(options),
    method: 'get',
})

homepage.definition = {
    methods: ["get","head"],
    url: '/admin/settings/homepage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SettingController::homepage
 * @see app/Http/Controllers/Admin/SettingController.php:42
 * @route '/admin/settings/homepage'
 */
homepage.url = (options?: RouteQueryOptions) => {
    return homepage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SettingController::homepage
 * @see app/Http/Controllers/Admin/SettingController.php:42
 * @route '/admin/settings/homepage'
 */
homepage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: homepage.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SettingController::homepage
 * @see app/Http/Controllers/Admin/SettingController.php:42
 * @route '/admin/settings/homepage'
 */
homepage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: homepage.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SettingController::homepage
 * @see app/Http/Controllers/Admin/SettingController.php:42
 * @route '/admin/settings/homepage'
 */
    const homepageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: homepage.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SettingController::homepage
 * @see app/Http/Controllers/Admin/SettingController.php:42
 * @route '/admin/settings/homepage'
 */
        homepageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: homepage.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SettingController::homepage
 * @see app/Http/Controllers/Admin/SettingController.php:42
 * @route '/admin/settings/homepage'
 */
        homepageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: homepage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    homepage.form = homepageForm
/**
* @see \App\Http\Controllers\Admin\SettingController::general
 * @see app/Http/Controllers/Admin/SettingController.php:80
 * @route '/admin/settings/general'
 */
export const general = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})

general.definition = {
    methods: ["get","head"],
    url: '/admin/settings/general',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\SettingController::general
 * @see app/Http/Controllers/Admin/SettingController.php:80
 * @route '/admin/settings/general'
 */
general.url = (options?: RouteQueryOptions) => {
    return general.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\SettingController::general
 * @see app/Http/Controllers/Admin/SettingController.php:80
 * @route '/admin/settings/general'
 */
general.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: general.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\SettingController::general
 * @see app/Http/Controllers/Admin/SettingController.php:80
 * @route '/admin/settings/general'
 */
general.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: general.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\SettingController::general
 * @see app/Http/Controllers/Admin/SettingController.php:80
 * @route '/admin/settings/general'
 */
    const generalForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: general.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\SettingController::general
 * @see app/Http/Controllers/Admin/SettingController.php:80
 * @route '/admin/settings/general'
 */
        generalForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: general.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\SettingController::general
 * @see app/Http/Controllers/Admin/SettingController.php:80
 * @route '/admin/settings/general'
 */
        generalForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: general.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    general.form = generalForm
const settings = {
    promo: Object.assign(promo, promo),
homepage: Object.assign(homepage, homepage),
general: Object.assign(general, general),
}

export default settings